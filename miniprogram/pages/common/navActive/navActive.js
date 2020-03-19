Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
  },
  data: {
    // 这里是一些组件内部数据
    current : 'index',
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
      this.setData({
        current: current
      })
      this.triggerEvent('navEmit', current)
    }
  }
})