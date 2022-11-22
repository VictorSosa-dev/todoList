const jwt = require('jsonwebtoken')
const secretkey = require('../config/secret.js')
const users = require('../models/users.js');

const logIn =  async (req, res) => {
    const { body } = req
    const user = await users.findOne({ where: {
      email: body.email
    }})
  
    if (!user) {
      return res.status(401).json({ message: 'User not found' })
    }
  
    if (!user.validPassword(body.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  
    // Generate a token
    const token = jwt.sign({ userId: user.id }, secretkey, {
      expiresIn: 3600 // 1 hour, 
    });
  
    return res.json({
      message: 'Authenticated sucessfully',
      token,
    })
}

async function signUp(req, res) {
  const body = req.body;
  let user = await users.findOne({ where: { email: body.email } });
  if (user) {
    return res.status(400).json({ message: 'User already exists' });
  }
  user = await users.create({
    username: body.username,
    name: body.name,
    lastname: body.lastname,
    email: body.email,
    password: body.password,
    type: body.type ? body.type : 'client',
  });

  //Save user
  await user.save();
  return res.json({ message: 'User created successfully' });
}

module.exports = {
    signUp,
    logIn
}
