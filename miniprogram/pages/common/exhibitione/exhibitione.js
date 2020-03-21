Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    content: Object
  },
  data: {
    number: 0
  },

  onLoad: function () {
    var that = this;

  },

  methods: {
    // 这里是一个自定义方法
    onModify () {
      this.triggerEvent('onModify', this.data.content)
    }
  }
})