const db = require('./db')
const https = require('https')
// 返回方法封装
/**
 * resBack()
 * type:0/1 0表示请求失败 1表示 成功
 * res:res
 * message:返回的信息 不传则使用默认的信息
 * backData:返回携带的数据 可选
 */
let resBack = (type, res, message, backData) => {
  let backObj = {}
  if (type) {
    backObj = {
      errCode: 0,
      message: message || '请求成功'
    }
    // 如果有返回数据就返回
    if (backData) {
      backObj.backData = backData
    }
  } else {
    backObj = {
      errCode: 1,
      message: message || '网络异常'
    }
  }
  res.end(JSON.stringify(backObj))
}
// 判断对象是否为空
let isObj = obj => {
  let str = JSON.stringify(obj)
  if (str === '{}') {
    return false
  } else {
    return true
  }
}
exports.userLoginservice = (req, res) => {
  if (!isObj(req.query)) {
    resBack(0, res, '参数错误')
  } else {
    let type = parseFloat(req.query.type)
    let selSql = `select * from user_info where user_name = ${req.query.userName}`
    db.base(selSql, {}, selCallback => {
      if (selCallback && selCallback.length === 0) {
        //  未查询到信息
        // 如果是注册 未查询到信息就注册
        if (type) {
          let insertSql = `insert into user_info set?`
          let obj = {
            user_name: req.query.userName,
            password: req.query.passWord
          }
          db.base(insertSql, obj, insertBack => {
            if (insertBack.affectedRows === 1) {
              resBack(1, res, '注册成功')
            } else {
              resBack(0, res)
            }
          })
        } else {
          // 如果是登录未查询到信息就报错
          resBack(0, res, '当前账号未注册')
        }
      } else {
        if (type) {
          // 查询到信息 并且是注册
          resBack(0, res, '当前账号已注册！')
        } else {
          // 如果是登录查询到信息就提示登录成功
          resBack(1, res, '登录成功')
        }
      }
    })
  }
}

exports.weixinAppLogin = (req, res) => {
  if (req.query.code) {
    https.get(`https://api.weixin.qq.com/sns/jscode2session?appid=wx5ad3b9cd2989abc1&secret=6206ae7180f929f8355212f8c0d0ef1c&js_code=${req.query.code}&grant_type=authorization_code`, data => {
      let backData = ''
      data.on('data', (data) => {
        backData += data
      })
      data.on('end', () => {
        resBack(1, res, '数据获取成功', backData)
      })
    })
  } else {
    resBack(0, res, '请重试！')
  }
}
