const express = require("express");
const router = express.Router();
const bookApi = require("../../../controllers/bookApi");

router.post("/add", bookApi.add);
router.get("/all", bookApi.all);
router.get("/:id/book", bookApi.specfic);
router.patch("/:id/update", bookApi.update);
router.delete("/:id/delete", bookApi.delete);

module.exports = router;
