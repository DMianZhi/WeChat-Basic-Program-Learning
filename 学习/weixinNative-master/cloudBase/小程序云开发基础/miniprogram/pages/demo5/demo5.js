// pages/demo5/demo5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[]
  },

  getData(num=5,page=0){
    wx.cloud.callFunction({
      name:"demoGetList",
      data:{
        num:num,
        page:page
      }
    }).then(res=>{  
      var oldData=this.data.dataList 
      var newData=oldData.concat(res.result.data);
      this.setData({
        dataList:newData
      })
    })
  },

  // 点击将阅读数增加7
  clickRow(res){
    //1.获取点击的id和索引值
    //2.云函数进行更新操作
    // 3.前端连后端，将数据传输给后端，后端再返回数据
    // 4.重新渲染列表数据
    wx.showLoading({
      title: '数据加载中...',
      mask:true
    })
    
    var {id,idx}=res.currentTarget.dataset
    wx.cloud.callFunction({
      name:"demoUpList",
      data:{
        id:id
      }
    }).then(res=>{
      var newData=this.data.dataList
      newData[idx].hits+=7;
      this.setData({
        dataList:newData
      })
      wx.hideLoading()
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var page=this.data.dataList.length
    this.getData(3,page)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})