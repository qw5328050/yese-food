Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    dialogShow: false,
    itemList: [],
    menuList: [],
    navCur: ''
  },
  attached () {
    this.getDataList()
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { },
    onClickItem(wxen) {
      let itemList = this.data.itemList.map(v => {
        v.isSelect = v.code === wxen.target.dataset.code ? true : false
        return v
      })
      this.setData({
        itemList: itemList
      })
    },
    getDataList() {
      wx.cloud.callFunction({
        name: 'getMenuList',
      }).then(v => {
        console.log(v)
        this.setData({
          menuList: v.result.data,
          itemList: v.result.data,
          navCur: v.result.data[0].code
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
    tapDialogButton () {
      this.setData({
        dialogShow: false
      })
    }
  }
})