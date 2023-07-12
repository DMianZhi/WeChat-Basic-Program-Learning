// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"咸虾米",
    age:18,
    num:0,
    color:"pink",
    size:400,
    title:"",
    state:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  //输入框输入的事件
  onInput(e){
    console.log(e);
    let value = e.detail.value
    this.setData({
      title:value
    })
  },

  onFocus(e){
    console.log(e);
  },

  onBlur(e){
    console.log(e);
  },

  checkChange(e){

    console.log(e);
  },



  //点击了颜色快
  clickBox(){
    let rdm = parseInt( Math.random()*100 );
    let r1= parseInt( Math.random()*255 );
    let r2= parseInt( Math.random()*255 );
    let r3= parseInt( Math.random()*255 );

    let color = `rgb(${r1},${r2},${r3})`   
    let size = parseInt( Math.random()*600 )
    size = size<200 ? 200 : size
    
    this.setData({
      num:rdm,
      color,
      size
    })

    
  },


  onClick(event){
    let {age,myname}=event.currentTarget.dataset
    
    this.setData({
      name:myname,
      age
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