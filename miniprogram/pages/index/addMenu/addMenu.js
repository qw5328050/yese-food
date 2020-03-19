Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
  },
  data: {
    // 这里是一些组件内部数据
    menuList: [],
    dialogShow: false,
    buttons: ['取消','添加']
  },
  attached() {
    this.getDataList()
  },
  methods: {
    // 这里是一个自定义方法
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
    addNavList () {
    }
  }
})