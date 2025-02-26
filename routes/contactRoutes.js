const express = require("express");
const router = express.Router();
const {
  getContacts,
  creatContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

router.route("/").get(getContacts).post(creatContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
