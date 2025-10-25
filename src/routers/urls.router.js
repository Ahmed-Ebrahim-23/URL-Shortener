const express = require('express')
const UrlsController = require('../controllers/urls.controller');

const router = express.Router()

router.route('/')
    .get(UrlsController.getAllUrls)
    .post(UrlsController.createUrl);

router.route(':urlId')
    .get(UrlsController.getUrl)
    .delete(UrlsController.deleteUrl);

module.exports = router;