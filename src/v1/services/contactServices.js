const contactIndex = require('../database/models/contactIndex')

const getTheOneContact = () => {
  const theOneContact = contactIndex.getOneOfContactDB();
  return theOneContact;
};

const getAllTheContacts = () => {
  const allTheContacts = contactIndex.getAllContactsDB();
  return allTheContacts;
};

const updateTheNewContact = () => {
  const updatedNewContact = contactIndex.updateOneContactDB();
  return updatedNewContact;
};

const createTheNewContact = () => {
  const createdNewContact = contactIndex.createOfContactDB();
  return createdNewContact;
};

const deleteTheContact = () => {
  const deletedContact = contactIndex.deleteOneOfContactDB();
  return deletedContact;
};

module.exports = {
  getTheOneContact,
  getAllTheContacts,
  updateTheNewContact,
  createTheNewContact,
  deleteTheContact,
};