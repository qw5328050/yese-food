const global = require('../global/global.js')
Page({
  data: {
    // 这里是一些组件内部数据
    menuList: [],
    dialogShow: false,
    buttons: [{ text: '取消', code: 'close' }, { text: '确定', code: 'confirm' }],
    bindNavName: '',
    bindNavCode: '',
    isShow: false,
    details: {},
    rules: [
      {
        name: 'navName',
        rules: { required: true, message: '菜单名称必填' },
      },
      {
        name: 'navCode',
        rules: { required: true, message: '菜单代码必填' },
      }
    ]
  },
  onLoad() {
    this.getDataList()
  },
  getDataList() {
    wx.cloud.callFunction({
      name: 'getMenuList',
    }).then(v => {
      console.log(v)
      this.setData({
        menuList: v.result.data,
      })
    }).catch(err => {
      console.log(err)
    })
  },
  onAddselect() {
    this.setData({
      dialogShow: true
    })
  },
  tapDialogButton() {
    this.setData({
      dialogShow: false
    })
  },
  addNavList() {
  },
  // 弹出层
  addMenuList() {
    let parms = {
      title: this.data.bindNavName,
      code: this.data.bindNavCode,
    }
    wx.cloud.callFunction({
      name: 'addNavList',
      data: parms
    }).then(res => {
      this.getDataList()
      this.setData({
        dialogShow: false
      })
    }).catch(err => {
      console.log(err)
      this.setData({
        dialogShow: false
      })
    })
  },
  dialogButton(e) {
    // confirm
    if (e.detail.index == 1) {
      this.addMenuList()
    } else {
      this.setData({
        dialogShow: false,
        showOneButtonDialog: false
      })
    }
  },
  navNameChange(e) {
    this.setData({
      bindNavName: e.detail.value
    })
  },
  navCodeChange(e) {
    this.setData({
      bindNavCode: e.detail.value
    })
  },
  // 菜单列表详情
  showDetails(event) {
    wx.navigateTo({
      url: global.url.detailsItem,
      success: function (res) {
        res.eventChannel.emit('getDataList', event.target.dataset.details)
      }
    })
  }
})