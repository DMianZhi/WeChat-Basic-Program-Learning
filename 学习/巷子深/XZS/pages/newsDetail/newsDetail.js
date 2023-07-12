import { formatNum, formatTime } from "../../utils/count"
import { newsDetail } from "../../apis/apis"
let id;
// pages/newsDetail/newsDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsDetail: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    id = options.id
    console.log(id);
    this.getNewsDetail()

  },
  getNewsDetail() {
    newsDetail(
      {
        id
      }
    ).then(({ data: res }) => {
      res.publish_date = formatTime(res.publish_date, 6)
      res.view_count = formatNum(res.view_count)
      res.content = res.content.replace(/<p/gi, "<p class='pstyle'")
      res.content = res.content.replace(/<img/gi, "<img class='imgstyle'")
      this.setData({
        newsDetail: res
      })
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
    return {
      title: this.data.newsDetail.title,
      path: "/pages/newsDetail/newsDetail?id=" + this.data.newsDetail._id
    }
  },
  //分享到朋友圈
  onShareTimeline(){
    return {
      title: this.data.newsDetail.title,
      path: "/pages/newsDetail/newsDetail?id=" + this.data.newsDetail._id
    }
  }
})