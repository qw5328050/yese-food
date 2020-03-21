Page({
  data: {
    currData: {},
    defauleData: {},
    isCurr: false,
    buttons: [{ text: '取消', code: 'close' }, { text: '确定', code: 'confirm' }],
  },
  attached() {
  },
  meunTitleChange(e) {
    console.log(e.detail.value)
  },
  emitOnBack() {
    this.setData({
      isShow: false
    })
  },
  addDetails() {
    this.setData({
      isCurr: true
    })
  },
  dialogButton(e) {
    // confirm
    if (e.detail.index == 1) {
      console.log('确定')
    } else {
      this.setData({
        isCurr: false
      })
    }
  }
})