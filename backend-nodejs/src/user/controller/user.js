const {addUser,getByEmail, addContact, getUsers, getAllContacts} = require('../service')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";

async function register(req, res) {
    try {
      console.log(req.body);

      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      console.log(hashPassword)

      const addUserResult = await addUser(req.body, hashPassword);
      console.log('addUserResult =>', addUserResult);

      return res.status(200).send({ user: addUserResult._id });
    } catch (error) {
      res.status(500).send(error);
    }
  }
async function login(req, res) {
    try {
      const user = await getByEmail(req.body.email);
      if (!user) return res.status(400).send('invalid credentials');
  
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if (!validPassword) return res.status(400).send('invalid credentials');
  
      const token = jwt.sign(
        {_id: user._id, name: user.name, email: user.email},
        TOKEN_SECRET
      );
      return res.header('auth-token', token).send(token);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
async function get(req, res) {
    try {

        // const id = req.query.id;
        const result = await getUsers();
        console.log('result of specific user =>', result);
        return res.send(result);
    } catch (error) {
      console.log(error);
    }
  }

  async function createContact(req, res) {
    try {
      console.log(req.body);

      const addContactResult = await addContact(req.body);
      console.log('addContactResult =>', addContactResult);

      return res.send({ user: addContactResult._id });
    } catch (error) {
      console.log(error);
    }
  }
  
async function getContacts(req, res) {
  try {
    
    const result = await getAllContacts();
    return res.send(result);

  } catch (error) {
    console.log(error);
    return res.status('500').send('something went worng')
  }
}

module.exports = {
    register,
    login,
    get,
    createContact,
    getContacts
  }; 