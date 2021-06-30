const express = require('express');

const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');

const router = express.Router();

router.post('/login', 
  userController.verify,
  cookieController.setSSIDCookie,
  sessionController.sessionStart,
  (req, res) => {
    res.status(200).send() // TODO: REdirect when finished testing
  }
);

router.post('/signup',
  userController.createUser,
  cookieController.setSSIDCookie,
  sessionController.sessionStart,
  (req, res) => {
    res.status(200).send() // TODO: Redirect whe finished testing
  })

  module.exports = router;