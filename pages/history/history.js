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
  onPullDownRefresh: function(){
    this.getHistoryList();
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
        wx.stopPullDownRefresh();
        if(res.data.code === 0) {
          that.setData({
            histroyList:res.data.data,
            isScroll: 'scroll',
          });
          that.hiddenLayer();
        } else if (res.data.code === -2) {
          wx.login({
           success: function(res1) {
             if (res1.code) {
               //发起网络请求
               wx.request({
                 url: apiUrl.get_session,
                 data: {
                   "code": res1.code
                 },
                 success: function(result) {
                   wx.setStorageSync('sessionid', result.data.data.sessionid);
                 }
               })
             } else {
               that.hiddenLayer();
               that.showToast(`获取用户登录态失败！${res1.errMsg}`);
             }
           }
         });
       } else {
         that.hiddenLayer();
         that.showToast(`请求错误：${res.data.message}`);
       }
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
