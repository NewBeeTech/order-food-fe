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
      url: `../restaurant/restaurant?_id=${e.currentTarget.dataset.resid}`
    })
  },
  onPullDownRefresh: function(){
    this.getHistoryList();
  },
  // 请求历史订单列表
  getHistoryList(){
    var that = this;
    that.setData({
      histroyList:[],
    });
    wx.showLoading({
      mask: true,
    });
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
          });
          wx.hideLoading();
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
               wx.hideLoading();
               wx.showToast({
                 title: '加载失败',
                 image: '../../assets/images/fail.png',
               })
             }
           }
         });
       } else {
         wx.hideLoading();
         wx.showToast({
           title: '加载失败',
           image: '../../assets/images/fail.png',
         })
       }
      },
      fail: function(res){
        wx.hideLoading();
        wx.showToast({
          title: '加载失败',
          image: '../../assets/images/fail.png',
        })
      },
    })
  },
  onLoad: function () {
    var that = this;
    that.getHistoryList();
  }
})
