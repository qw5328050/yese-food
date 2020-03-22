// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  try {
    if (event.hasOwnProperty('id')) {
      return await db.collection('menuList').doc(event.id).get()
    }
    return await db.collection('menuList').get()
  } catch (err) {
    return err
  }
}