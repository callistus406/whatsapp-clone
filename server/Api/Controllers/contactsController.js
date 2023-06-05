const UserModel = require('../../Model/UserModel');

const getContactsController = async (req, res) => {
  const { userId } = req.body;
  try {
    const loggedUser = await UserModel.findOne({ _id: userId });
   
    const ids = [];
    console.log(loggedUser.contacts);

    loggedUser?.contacts.forEach((element) => {
      ids.push(element);
    });
 for (let index = 0; index < ids.length; index++) {
    const users = await UserModel.findOne({});
    
 }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getContactsController;















