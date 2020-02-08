//index.js
const app = getApp()

Page({
  data: {
    navCurrent: 'menu'
  },
  navEmit (code) {
    this.setData({
      navCurrent: code.detail
    })
  }
})
