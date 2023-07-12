const db=wx.cloud.database();
var myVlu="";
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  updateData(){
    // db.collection("demolist").doc("982133855eba024b00881d5e3e7f262f").update({
    //   data:{
    //     author:"李四",
    //     posttime:"2020-10-10"
    //   }
    // }).then(res=>{
    //   console.log(res)
    // })


    db.collection("demolist").doc("982133855eba024b00881d5e3e7f262f").set({
      data:{
        title:"新视觉新闻标题"
      }
    }).then(res=>{
      console.log(res)
    })
    
  },

  // 获取输入的内容
  myIpt(res){
    var vlu=res.detail.value;
    myVlu=vlu
   
  },

  //删除记录
  delData(){
    db.collection("demolist")
    .doc(myVlu)
    .remove()
    .then(res=>{
      console.log(res)
    })
  },

  //获取记录格式
  btnNum(){
    // db.collection("demolist").get().then(res=>{
    //   console.log(res)
    // })
    db.collection("demolist").count()
    .then(res=>{
      console.log(res)
    })


  },

  getData(){
    db.collection("demolist")
    .get()
    .then(res=>{
      this.setData({
        dataArr:res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();

    db.collection("demolist").watch({
      onChange:res=>{
        console.log(res)
        this.setData({
          dataArr:res.docs
        })
      },
      onError:err=>{
        console.log(err)
      }
    })
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