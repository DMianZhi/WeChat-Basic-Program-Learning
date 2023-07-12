// pages/api/api.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr:['A', 'B', 'C']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    setTimeout(()=>{
      wx.navigateBack()
    },2000)



    wx.setNavigationBarTitle({
      title: 'onload中修改的标题',
    })

    wx.setNavigationBarColor({
      frontColor:"#000000",
      backgroundColor:"#eeeeee"
    })
    wx.showNavigationBarLoading()

    setTimeout(()=>{
      wx.hideNavigationBarLoading()
    },2000)

    wx.hideHomeButton();


    /*
    wx.showLoading({
      title:"加载中...",
      mask:true
    })

    setTimeout(()=>{
      wx.hideLoading()
    },2000)

    */
  },

  clickBtn(){

    wx.showActionSheet({
      itemList: this.data.listArr,
      success: res=> {
        console.log(this.data.listArr[res.tapIndex])
      },
      fail: res=> {
        console.log(res.errMsg)
      }
    })


    /*
    wx.showModal({
      title:"请输入验证码",
      // content:"删除之后不可恢复，请谨慎删除",
      editable:true,
      placeholderText:"请输入...",
      success:res=>{
        console.log(res);
      }
    })
    */

 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})