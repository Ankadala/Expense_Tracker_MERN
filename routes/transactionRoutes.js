const express = require("express");
const {
  getAllTransaction,
  addTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

//router object
const router = express.Router();

//routers
//add transaction POST METHOD
router.post("/add-transaction", addTransaction);

//Edit transection POST MEthod
router.post("/edit-transaction", editTransaction);
//Delete transection POST MEthod
router.post("/delete-transaction", deleteTransaction);

//get transactions
router.post("/get-transaction", getAllTransaction);

module.exports = router;
