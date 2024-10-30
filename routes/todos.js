const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todos')

router.get('/', todoController.getTodo)
router.post('/createTask', todoController.createTask)
router.delete('/deleteTask', todoController.deleteTask)
router.put('/markComplete', todoController.markComplete)
router.put('/markIncomplete', todoController.markIncomplete)

module.exports = router

