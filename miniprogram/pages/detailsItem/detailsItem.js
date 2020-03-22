Page({
  data: {
    currData: {},
    defauleData: {},
    isCurr: false,
    buttons: [{ text: '取消', code: 'close' }, { text: '确定', code: 'confirm' }],
    dataList: [],
    formData: {},
    formDefault: {
      name: '',
      details: '',
      explain: '',
      imageUrl: '',
      number: '',
      part: '',
      price: '',
      isSelect: '',
      isTaste: '',
      specs: [],
      taste: [],
      id: ''
    },
    rules: []
  },
  onLoad() {
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('channelId', data => {
      this.getDataList(data)
    })
  },
  // 调用更新接口
  getDataList (id) {
    let params = {
      id: id
    }
    wx.cloud.callFunction({
      name: 'getMenuList',
      data: params
    }).then(res => {
      this.setData({
        dataList: res.result.data
      })
    })
  },
  // 调用更新接口
  updataDetails () {
    
  },
  addMenuList () {
    this.data.dataList.list.push(this.data.formData)
    let params = {
      id: this.data.dataList._id,
      list: this.data.dataList.list
    }
    
    wx.cloud.callFunction({
      name: 'addMenuData',
      data: params
    }).then(v => {
      console.log('add', v)
    })
  },
  meunTitleChange(e) {
    console.log(e.detail.value)
  },
  addDetails() {
    this.setData({
      isCurr: true,
      formData: this.data.formDefault
    })
  },
  // 添加修改弹出层
  formDataChange (e) {
    this.data.formData[e.target.dataset.name] = e.detail.value
    this.setData({
      formData: this.data.formData
    })
  },
  dialogButton(e) {
    // confirm
    if (e.detail.index == 1) {
      console.log('确定')
      console.log(this.data.formData)
      this.addMenuList()
      // this.updataDetails()
    } else {
      this.setData({
        isCurr: false
      })
    }
  },
  onModify(e) {
    this.setData({
      isCurr: true,
      formData: e.detail
    })
  },
  specsChange(e) {
    this.data.formData.specs = e.detail
    this.setData({
      formData: this.data.formData
    })
  },
  tasteChange (e) {
    this.data.formData.taste = e.detail
    this.setData({
      formData: this.data.formData
    })
  },
})