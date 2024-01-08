const User = require("../models/user.model");

const getOthers = async (userId) => {
    console.log(userId)
  const others = await User.find({ _id: { $ne: userId } })
                            .select({
                                _id: 1,
                                username: 1,
                                email: 1,
                                avatar: 1,
                            });
  if (!others) {
    throw Error("There is no one else except you");
  }
  return others;
};

const getUserById = (req, res, next) => {};

const me = (req, res, next) => {};

const updateProfile = (req, res, next) => {};

const deleteUser = (req, res, next) => {};

module.exports = {
  getOthers,
  getUserById,
  me,
  updateProfile,
  deleteUser,
};
