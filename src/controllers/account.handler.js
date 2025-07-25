const Account = require('../models/account.schema');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.createAccount = async (req, res) => {
  const { username, password } = req.body;

  try {
    const exists = await Account.findOne({ username });
    if (exists) {
      return res.status(409).json({ message: 'username already in use' });
    }

    const encrypted = await bcrypt.hash(password, 10);
    const account = new Account({ username, password: encrypted });
    await account.save();

    return res.status(201).json({ message: 'account created successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'something went wrong' });
  }
};


exports.authenticate = async (req, res) => {
  const { username, password } = req.body;

  try {
    const account = await Account.findOne({ username });
    if (!account) {
      return res.status(401).json({ message: 'invalid login info' });
    }

    const valid = await bcrypt.compare(password, account.password);
    if (!valid) {
      return res.status(401).json({ message: 'invalid login info' });
    }

    const token = jwt.sign(
      { uid: account._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'authentication failed' });
  }
};
