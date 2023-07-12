const db=wx.cloud.database();
const _ =db.command;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getData(){
    // db.collection("demolist")
    // .where({
    //   // hits:_.and(_.gte(0),_.lte(100))
    //   // hits:_.or(_.eq(30),_.eq(16))
    //   // hits:_.in([16,30])
    //   // hits:_.or(_.lte(10),_.gte(100))     
      
    // })
    // .get()
    // .then(res=>{      
    //   this.setData({
    //     dataList:res.data
    //   })
    // })
    

    // db.collection("demolist")
    // .where(_.or([
    //   {
    //     hits:_.lt(300)
    //   },
    //   {
    //     author:_.eq("李四")
    //   }
    // ]))
    // .get()
    // .then(res=>{
    //   this.setData({
    //     dataList:res.data
    //   })
    // })


    db.collection("demolist")
    .where({
      // time:_.exists(true)
      // tabs:_.size(2)
      tabs:_.all(['科技','数码'])
    }).get()
    .then(res=>{
      this.setData({
        dataList:res.data
      })
    })

  },

  upDate(){
    db.collection("demolist").doc("e2297d935eb9fc730076da3c78ff5efa")
    .update({
      data:{
        // hits:_.inc(1)
        // time:""
        // time:_.remove()
        // style:{
        //   back:"pink"
        // }
        // style:_.set({
        //   back:"yellow"
        // })
        // tabs:_.push(["财经"])
        // tabs:_.pop()
        // tabs:_.unshift(['智能','新闻'])
        // tabs:_.shift()
        // tabs:_.pull("数码")
        tabs:_.push({
          each:['新视觉','实训'],
          position:3
        })

     
       
        
        
      }
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