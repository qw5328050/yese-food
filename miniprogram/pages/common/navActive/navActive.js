const global = require('../../global/global.js')
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    isBack: {
      type: Boolean,
      val: false
    },
    current: {
      type: String,
      value: 'index'
    }
  },
  data: {
    // 这里是一些组件内部数据
    navList: [
      {
        name: '菜单',
        code: 'index',
        isAdmin: 'all'
      },
      {
        name: '添加菜单',
        code: 'addMenu',
        isAdmin: true
      },
      {
        name: '地址',
        code: 'address',
        isAdmin: false
      },
    ]
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { },
    onClickCur(event) {

      let current = event.target.dataset.code
      wx.navigateTo({
        url: global.url[current]
      })
    },
    onBack() {
      wx.navigateBack({ delta: 1 })
    }
  }
})