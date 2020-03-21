// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  try {
    console.log(event.hasOwnProperty('code'))
    if (event.hasOwnProperty('code')) {
      return await db.collection('menuList').where({
        code: event.code
      }).get()
    }
    return await db.collection('menuList').get()
  } catch (err) {
    return err
  }
}