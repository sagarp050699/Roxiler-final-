const ProductModel = require("../model/productsModel");

// @desc    Get  all transactions
// @route   GET /api/transactions
// @access  Public
const listTransactions = async (req, res) => {
  try {
    const page = req.query.p || 0;
    const transactionsPerPage = 10;
    const totalTransactions = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalTransactions / transactionsPerPage);

    const transactions = await ProductModel.find({})
      .skip(page * transactionsPerPage)
      .limit(transactionsPerPage);
    res.json({ transactions, page, totalPages });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching transactions" });
  }
};
module.exports = {
  listTransactions,
};
