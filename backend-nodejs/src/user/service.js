const User = require('../../model/User');
const Contact = require('../../model/Contact');
const mongoose = require('mongoose');
async function addUser(body, hashPassword) {
    const {
      name,
      email,
    } = body;

    const user = new User({
      name,
      email,
      password: hashPassword
    });

    return await user.save();
  }
async function getByEmail(email) {
    return await User.findOne({
      email
    });
  }
async function getUsers() {
    return await User.find().populate('contacts');
  }

async function addContact(body) {
    const {
      name,
      email,
      phone_number,
      relationship_status,
      User,
      location
    } = body;

    const contact = new Contact({
      name,
      email,
      phone_number,
      relationship_status,
      User,
      location
    });
    console.log(User.contact);
    return await contact.save();
  }

async function getAllContacts(id) {
    return await Contact.find();
  }

module.exports = {
    addUser,
    getByEmail,
    getUsers,
    addContact,
    getAllContacts
  } 