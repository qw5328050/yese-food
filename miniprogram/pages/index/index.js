//index.js
const app = getApp()

Page({
  data: {
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
    ]
  },

  onLoad: function() {
    var that = this;
    
  },
  onClickItem (wxen) {
    let itemList = this.data.itemList.map(v => {
      v.isSelect = v.code === wxen.target.dataset.code ? true : false
      return v
    })
    this.setData({
      itemList: itemList
    })
  },
  onAddselect () {
    
  }
})
