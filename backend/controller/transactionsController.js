const ProductModel = require("../model/productsModel");

// @desc    Get  all transactions
// @route   GET /api/transactions
// @access  Public
const listTransactions = async (req, res) => {
  try {
    const page = req.query.p || 0;
    const transactionsPerPage = 10;

    let query = {};

    if (req.query.q) {
      //  parse the query parameter as a number
      const priceQuery = parseFloat(req.query.q);

      if (!isNaN(priceQuery)) {
        // if valid number
        query.price = priceQuery;
      } else {
        // If it's not a valid number, only perform text-based searches on other fields
        query = {
          // Evaluates one or more expressions and returns true if any of the expressions are true else returns false.
          $or: [
            { title: { $regex: req.query.q, $options: "i" } },
            { description: { $regex: req.query.q, $options: "i" } },
          ],
        };
      }
    }

    console.log(query);

    const totalTransactions = await ProductModel.countDocuments(query);
    const totalPages = Math.ceil(totalTransactions / transactionsPerPage);

    const transactions = await ProductModel.find(query)
      .skip(page * transactionsPerPage)
      .limit(transactionsPerPage);

    res.json({ transactions, page, totalPages });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching transactions" });
  }
};
module.exports = {
  listTransactions,
};
