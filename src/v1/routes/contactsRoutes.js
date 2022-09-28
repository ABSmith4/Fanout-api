const express = require("express");
const router = express.Router();
const contactController = require("./../controllers/contactController")

router.get("/:userId/contacts/:contactId", contactController.getOneContact);

router.get("/:userId/contacts", contactController.getAllContacts);

router.put("/:userId/contacts/:contactId", contactController.updateOneContact);

router.post("/:userId/contacts", contactController.createNewContact);

router.delete("/:userId", contactController.deleteOneContact);

module.exports = router;