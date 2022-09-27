const userServices = require('../services/userServices')

const getUserInfo = (req, res) => {
    const userInfo = userServices.getTheUserInfo();
    res.send({ status: "Ok", data: userInfo });
};

const updateUserInfo = (req, res) => {
    const updatedInfo = userServices.updateTheUserInfo();
    res.send({ status: "Ok", data: updatedInfo });
};

const createNewUser = (req, res) => {
    const createdUser = userServices.createTheNewUser();
    res.send({ status: "Ok", data: createdUser });
};

const deleteUser = (req, res) => {
    const deletedUser = userServices.deleteTheUser();
    res.send({ status: "Ok", data: deletedUser });
};

module.exports = {
    getUserInfo,
    updateUserInfo,
    createNewUser,
    deleteUser,
};