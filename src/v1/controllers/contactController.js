const contactServices = require('../services/contactServices')

const getOneContact = (req, res) => {
    const oneContact = contactServices.getTheOneContact();
    res.send({ status: "Ok", data: oneContact });
};

const getAllContacts = (req, res) => {
    const allContacts = contactServices.getAllTheContacts();
    res.send({ status: "Ok", data: allContacts });
};

const updateOneContact = (req, res) => {
    const updatedoneContact = contactServices.updateTheNewContact();
    res.send({ status: "Ok", data: updatedoneContact });
};

const createNewContact = (req, res) => {
    const newContact = contactServices.createTheNewContact();
    res.send({ status: "Ok", data: newContact });
};

const deleteOneContact = (req, res) => {
    const removeOneContact = contactServices.deleteTheContact();
    res.send({ status: "Ok", data: removeOneContact });
};

module.exports = {
    getOneContact,
    getAllContacts,
    updateOneContact,
    createNewContact,
    deleteOneContact,
};