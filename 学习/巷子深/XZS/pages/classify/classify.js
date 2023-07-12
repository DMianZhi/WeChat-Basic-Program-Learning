import { listNav } from "../../apis/apis"
import { getProduct } from "../../apis/apis"
let navid;
// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsNav: [],
    productArr: [],
    loading: false,
    isData: false,
    active: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    
    let { idx } = options;
    await this.getNav()
    if (idx) {
      console.log(idx);
      this.onChange(idx)
    }
    else{
      console.log(11);
      navid = this.data.newsNav[0]._id
      this.getProductList()
    }


  },
  // 改变导航栏事件
  onChange(e) {
    let index = e?.detail?.index ?? e;
    navid = this.data.newsNav[index]._id
    this.setData({
      productArr: [],
      isData: false,
      loading:false,
      active: Number(index)
    })
    this.getProductList()
  },
  // 获取导航列表
  async getNav() {
    await listNav().then(({ data: res }) => {
      console.log(res);
      this.setData({
        newsNav: res
      })
      this.selectComponent('#tabs').resize();
    })
  },
  // 获取产品列表
  getProductList(size = 0) {
    this.setData({
      loading: true,
    })
    getProduct({
      navid: navid,
      size
    }
    ).then((res) => {
      console.log(res);
      let oldArr = this.data.productArr;
      let newArr = oldArr.concat(res.data);
      this.setData({
        productArr: newArr,
        loading: false
      })
      if (res.total == this.data.productArr.length) {
        this.setData({
          isData: true
        })
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
    if (this.data.isData == true) return
    this.getProductList(this.data.productArr.length)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})