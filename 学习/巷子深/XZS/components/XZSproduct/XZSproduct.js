import {getProduct} from "../../apis/apis"

// components/XZSproduct/XZSproduct.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type:Object,
      value:{
        title:"默认标题"
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickProduct(e){
      console.log(e);
      let id = e.currentTarget.dataset.id;
      console.log(id);
      wx.navigateTo({
        url: '/pages/productDetail/productDetail?id='+id,
      })

    }
  }
})
