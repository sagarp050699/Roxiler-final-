const ProductModel = require("../model/productsModel");

// @desc    Get  all transactions
// @route   GET /api/transactions
// @access  Public
const listTransactions = async (req, res) => {
  try {
    const transactions = await ProductModel.find({});
    res.json(transactions);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching transactions" });
  }
};
module.exports = {
  listTransactions,
};
