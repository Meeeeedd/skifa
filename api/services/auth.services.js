const User = require('../models/user.model')
const jwt = require('jsonwebtoken');

const registerUser = async (_user) => {
  const { username, email, password } = _user;
  const _old = await User.findOne({ email });
  if (_old) {
    throw new Error('User already exist')
  } else {
    const user = new User({ username, email, password });
    const _new = await user.save();
    return _new;
  }
}

const loginUser = async (_user) => {
  const { email, password } = _user;
  const user = await User.findOne({ email });



  if (user && user.passwordCompare(password)) {
    const token = jwt.sign(
      { user_id: user._id, email: user.email, role: user.role }, process.env.SECRET_KEY || 'BLABLA', { expiresIn: "1d" }
    )
    return ({ user:await user.toJson(), token: token })
  } else
    throw Error("Invalid Credentials")


}

module.exports = { registerUser, loginUser };