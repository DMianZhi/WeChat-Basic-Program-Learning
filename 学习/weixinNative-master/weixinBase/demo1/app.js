App({

  onLaunch: function () {
    console.log("onLaunch初始化了项目");
    this.globalData.name='咸虾米'
  },
   
  onShow: function (options) {
    console.log("onShow触发了");
  },

  onHide: function () {
    console.log("onHide触发了");
  },

  onError: function (msg) {
    
  },
  globalData:{
    name:"weixin"
  }
})
