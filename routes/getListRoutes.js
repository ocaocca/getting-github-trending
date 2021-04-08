const router = require('express').Router()
const getListController = require('../controller/getListController')

router.get('/get/list', getListController.getList)

module.exports = router
