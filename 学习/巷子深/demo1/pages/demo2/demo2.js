// pages/demo2/demo2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1,
    color: '#31c274'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(this.color);
  },
  clickBox() {
    let random = parseInt(Math.random() * 100)
    let r1 = parseInt(Math.random() * 255)
    let r2 = parseInt(Math.random() * 255)
    let r3 = parseInt(Math.random() * 255)
    let size = parseInt(Math.random() * 600)
    size = size < 200 ? 200 : size

    let color = `rgb(${r1},${r2},${r3})`
    this.setData({
      num: random,
      color
      ,size
    })
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