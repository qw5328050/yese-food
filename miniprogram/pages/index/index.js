//index.js
const app = getApp()
const global = require("../global/global.js");

Page({
  data: {
    navCurrent: 'index',
    address: ''
  },
  onLoad () {
    this.getAddress()
  },
  navEmit (code) {
    this.setData({
      navCurrent: code.detail
    })
  },
  getAddress () {
    let that = this
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        let postData = {
          location: res.latitude + ',' + res.longitude,
          key: global.key
        }
        that.sendRequest(postData)
      }
    })
  },
  sendRequest(postData) {
    let that = this;
    // 调用请求
    wx.request({
      url: global.mapUrl,
      data: postData,
      method: 'GET',
      success: (res) => {
        console.log(res)
        if (res.statusCode == 200 && res.data.status == 0) {
          // 从返回值中提取需要的业务地理信息数据
          console.log(res)
        }
      }
    })
  }
})
