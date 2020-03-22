// 云函数入口文件
const cloud = require('wx-server-sdk')
const db = cloud.database()
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection('menuList').where({
    code: event
  }).add({
    data: {
      list: event
    }
  })
}