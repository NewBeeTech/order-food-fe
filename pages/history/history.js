//history.js
import apiUrl from '../../common/api-url';

//获取应用实例
var app = getApp()
Page({
  data: {
    histroyList: [],
    isScroll: 'scroll',
  },
  //事件处理函数
  bindViewTap: function(e) {
    wx.navigateTo({
      url: `../order/order?order_id=${e.currentTarget.dataset.orderid}`
    })
  },
  bindToRes: function(e) {
    wx.navigateTo({
      url: `../restaurant/restaurant?_id=${e.currentTarget.dataset.resid}`
    })
  },
  getHistoryList(){
    var that = this;
    that.setData({isScroll: 'hidden'});
    that.showLayer();
    // 请求历史订单列表
    wx.request({
      url: apiUrl.history_list,
      header:{
        "Content-Type":"application/json",
        "sessionid": wx.getStorageSync('sessionid'),
      },
      data: {},
      success: function(res){
        that.setData({
          histroyList:res.data.data,
          isScroll: 'scroll',
        });
        that.hiddenLayer();
      },
      fail: function(res){
        that.hiddenLayer();
        that.showToast("请求失败")
      },
    })
  },
  onLoad: function () {
    new app.Layer();
    var that = this;
    this.getHistoryList();
  }
})
