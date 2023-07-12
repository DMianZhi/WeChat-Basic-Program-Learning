// pages/search/search.js

import {
  formatNum,
  formatTime
} from '../../utils/count.js'

import {
  listBanner,
  listNav,
  queryNews,
  listProduct
} from '../../apis/apis.js'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    productlist: [],
    result: false,
    isShow: false,
    history: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let list = wx.getStorageSync('history')
    this.setData({
      history: list
    })
  },
  // 点击回车键 进行搜索
  onSearch(e) {
    if (e.detail == '') {
      wx.showToast({
        title: '搜索内容不能为空!',
        icon: 'none'
      })
      return
    }
    this.setData({
      value: e.detail
    })
    this.getProduct()
  },
  // 点击右侧搜索文字
  clickSearch() {
    if (this.data.value == '') {
      wx.showToast({
        title: '搜索内容不能为空!',
        icon: 'none'
      })
      return
    }
    this.getProduct()
  },
  // 获取产品信息列表
  getProduct() {
    let list = wx.getStorageSync('history') || []
    let index = list.findIndex((item) => {
      return this.data.value == item.title
    })
    let obj = {
      title: this.data.value
    }
    if (index >= 0) {
      list.splice(index, 1)
    }
    list.unshift(obj)
    this.setData({
      history: list,
      isShow: true
    })
    wx.setStorageSync('history', this.data.history)
    console.log(this.data.history);
    listProduct({
      limit: 100,
      keyword: this.data.value
    }).then(res => {
      // console.log(res);
      this.setData({
        productlist: res.data
      })
      if (this.data.productlist.length == 0) {
        this.setData({
          result: true
        })
      }
    })
  },
  // 删除搜索历史
  deleteHistory() {
    console.log(111)
    wx.removeStorageSync('history')
    this.setData({
      history: [],
      isShow: true
    })
  },
  // 点击搜索记录信息，进行搜索
  clickBox(e) {
    let { title } = e.currentTarget.dataset
    this.setData({
      value: title
    })
    this.getProduct()
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

