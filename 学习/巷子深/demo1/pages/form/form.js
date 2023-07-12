// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    comment: [
      {
        id: 1,
        content: '告诉老莫，我想吃鱼了!!!'
      },
      {
        id: 2,
        content: '咖啡不用冲，迟早会成功。'
      },
      {
        id: 3,
        content: '妻管严啊，很幸福的。'
      },
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  submit() {
    let value = this.data.inputValue
    let arr = this.data.comment
    arr.push({
      id: Date.now(),
      content: value
    })
    wx.showToast({
      title: '发布成功',
      icon:'none'
    })
    this.setData({
      comment: arr
      , inputValue: ''
    })
  },
  clickClose(e) {
    wx.showModal({
      title:"是否删除",
      success:res=>{
        if(res.confirm){
          let { index } = e.currentTarget.dataset
          let arr = this.data.comment
          arr.splice(index, 1)
          this.setData({
            comment: arr
          })
          wx.showToast({
            title: '删除成功',
            icon:"none"
          })
        }

      }
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