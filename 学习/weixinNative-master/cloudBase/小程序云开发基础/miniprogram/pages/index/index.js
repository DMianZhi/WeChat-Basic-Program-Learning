const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObj:""
  },
  //查询记录
  getData(){      
    db.collection("demolist").where({
      author:"承曦"
    }).get()
    .then(res=>{
      console.log(res)
    })
  },
  //添加数据
  addData(){
    wx.showLoading({
      title: '数据加载中...',
      mask:true
    })
    db.collection("demolist").add({
      data:{
        title:"测试标题2",
        author:"李四",
        content:"测试的内容部分测试的内容部分测试的内容部分测试的内容部分"
      }      
    }).then(res=>{
      console.log(res)
      wx.hideLoading()
    })
  },

  //提交表单添加进数据库
  btnSub(res){
    
    // var title=res.detail.value.title;
    // var author=res.detail.value.author;
    // var content=res.detail.value.content;

    
    // var {title,author,content}=res.detail.value;

    var resVlu=res.detail.value    
    
    db.collection("demolist").add({
      data:resVlu
    }).then(res=>{
      console.log(res)
    })



  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})