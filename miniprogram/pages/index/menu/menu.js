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
    itemList: [
      {
        name: '水煮三国',
        code: 'szsg',
        isSelect: true
      },
      {
        name: '快手小炒',
        code: 'ksxc',
        isSelect: false
      },
      {
        name: '麻辣江湖',
        code: 'mljh',
        isSelect: false
      },
      {
        name: '粮草先行',
        code: 'lcxs',
        isSelect: false
      },
      {
        name: '主食',
        code: 'zs',
        isSelect: false
      },
      {
        name: '酒水饮料',
        code: 'jsyl',
        isSelect: false
      },
    ],
    menuList: [
      {
        title: '水煮三国',
        list: [
          {
            name: '水煮三国',
            imageUrl: '',
            details: '食材：食材；牛肉、鸭胗、午餐肉、毛肚、鸡爪、鸭肠、肥肠、田鸡、虾、龙利鱼、花蛤、淡菜、老蛏、鱿鱼',
            price: '68',
            part: '3人份',
            isSelect: true,
            explain: '',
            specs: [
              {
                name: '任选3样',
                code: 1,
                price: 68
              },
              {
                name: '任选6样',
                code: 2,
                price: 68
              },
              {
                name: '任选三样',
                code: 3,
                price: 68
              },
            ]
          }
        ]
      }
    ]
  },

  onLoad: function () {
    var that = this;

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