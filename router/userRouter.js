const express = require('express')
const router = express.Router()
const {
  userRegister, userLogin, userGet
} = require('../userController/userController')
const { protect } = require('../auth/authMiddleware')

router.post('/', userRegister)
router.post('/login', userLogin)
router.get('/me', protect, userGet)

module.exports = router