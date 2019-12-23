const express = require('express')
const router = express.Router()
const service = require('./service')

/**
 * 登录注册
 * {
 *  userName:'',
 * password:'',
 * type:0/1    //0或者不传为登录 1为注册
 * }
 */
router.get('/userLoginservice', service.userLoginservice)

router.get('/weixinAppLogin', service.weixinAppLogin)

module.exports = router
