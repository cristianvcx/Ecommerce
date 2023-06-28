const express = require("express");
const {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
} = require("../controller/productCtrl");
const router = express.Router();

router.post("/", createProduct);
router.get("/:id", getaProduct);
router.put("/:id", updateProduct);
router.get("/", getAllProduct);

module.exports = router;
