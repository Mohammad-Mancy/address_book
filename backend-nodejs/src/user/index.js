const { Router } = require('express');
const {register,login,get, createContact, getContacts} = require('./controller/user');
const router = Router();
const auth = require('../../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/', auth, (req, res) => get(req, res));
router.post('/createContact', auth, (req, res) => createContact(req, res));
router.get('/getContact', auth, (req,res) => getContacts(req, res));

module.exports = router;