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
    },
    rules: []
  },
  onLoad() {
    this.getDataList()
    Object.assign(this.data.formData, this.data.formDefault)
    this.setData({
      formData: this.data.formData
    })
  },
  // 调用更新接口
  getDataList () {
    let params = {
      code: 'szsg'
    }
    wx.cloud.callFunction({
      name: 'getMenuList',
      data: params
    }).then(res => {
      console.log(res)
      this.setData({
        dataList: res.result.data[0]
      })
    })
  },
  // 调用更新接口
  updataDetails () {

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
  dialogButton(e) {
    // confirm
    if (e.detail.index == 1) {
      console.log('确定')
      this.updataDetails()
    } else {
      this.setData({
        isCurr: false
      })
    }
  },
  onModify(e) {
    console.log(e.detail)
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