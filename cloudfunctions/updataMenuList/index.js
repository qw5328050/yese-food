// 云函数入口文件
const cloud = require('wx-server-sdk')
const db = cloud.database()
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let data = {};
  Object.keys(event).forEach(v => {
    if (event[v] !== '') {
      data[v] = event[v]
    }
  })
  try {
    return await db.collection('menuList').where({
      _id: event.id
    }).update({
      data: data
    })
  } catch (err) {
    console.error(err)
  }
  
}