Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    type: String,
    name: String,
    dataList: {
      type: Array,
      value: []
    },
    isShow: {
      type: String,
      value: 'false'
    }
  },
  data: {
    isSelectList: [
      { code: 'true', name: '是', checked: false },
      { code: 'false', name: '否', checked: true }
    ],
    chooseData: {
      name: '',
      price: ''
    },
  },
  attached () {
    var that = this;
    let isSelectList = this.data.isSelectList.map(v => {
      if (this.data.isShow === '') { return v; }
      v.checked = v.code === this.data.isShow ? true : false;
      return v
    })
    this.setData({
      isSelectList: isSelectList
    })
  },
  methods: {
    // 这里是一个自定义方法
    selectChange (e) {
      this.setData({
        isShow: e.detail.value
      })
    },
    closeSpecs (e) {
      let that = this
      wx.showModal({
        title: `是否删除当前${that.data.name}`,
        success () {
          that.data.dataList = that.data.dataList.filter(v => {
            return v.code !== e.target.dataset.item.code
          })
          that.setData({
            dataList: that.data.dataList
          })
          that.triggerEvent('chooseChange', that.data.dataList)
        }
      })
    },
    nameChange (e) {
      this.data.chooseData.name = e.detail.value
      this.setData({
        chooseData: this.data.chooseData
      })
    },
    codeChange (e) {
      this.data.chooseData.price = e.detail.value
      this.setData({
        chooseData: this.data.chooseData
      })
    },
    specsAdd(e) {
      let data = {
        code: new Date().getTime()
      }
      Object.assign(data, this.data.chooseData)
      this.data.dataList.push(data)
      this.setData({
        dataList: this.data.dataList
      })
      this.triggerEvent('chooseChange', this.data.dataList)
    }
  }
})