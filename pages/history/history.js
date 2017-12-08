//history.js
import apiUrl from '../../common/api-url';

//获取应用实例
var app = getApp()
Page({
  data: {
    histroyList: [],
  },
  //事件处理函数
  bindViewTap: function(e) {
    wx.navigateTo({
      url: `../order/order?order_id=${e.currentTarget.dataset.orderid}`
    })
  },
  bindToRes: function(e) {
    wx.navigateTo({
      url: `../restaurant/restaurant?id=${e.currentTarget.dataset.resid}`
    })
  },
  getHistoryList(){
    var that = this;
    // 请求历史订单列表
    wx.request({
      url: apiUrl.history_list,
      header:{
        "Content-Type":"application/json",
        "sessionid": wx.getStorageSync('sessionid'),
      },
      data: {},
      success: function(res){
        console.log(res);
        that.setData({
          histroyList:res.data.data
        });
      },
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this;
    this.getHistoryList();
  }
})
