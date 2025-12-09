const express = require('express')
const redirectController = require('../controllers/redirect.controller');

const router = express.Router()

router.route('/:key')
    .get(redirectController.redirect)

module.exports = router;