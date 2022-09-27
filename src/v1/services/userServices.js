const userIndex = require('../database/models/userIndex')

const getTheUserInfo = () => {
  const theUserInfo = userIndex.getUserInfoByIdDB();
  return theUserInfo;
};

const updateTheUserInfo = () => {
  const updatedTheUserInfo = userIndex.updateUserInformationDB();
  return updatedTheUserInfo;
};

const createTheNewUser = () => {
  const createdTheUser = userIndex.createNewUserDB();
  return createdTheUser;
};

const deleteTheUser = () => {
  const deletedTheUser = userIndex.deleteUserDB();
  return deletedTheUser;
};

module.exports = {
  getTheUserInfo,
  updateTheUserInfo,
  createTheNewUser,
  deleteTheUser,
}