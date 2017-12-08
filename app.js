//app.js
import { ToastCustom } from './components/toast-custom/toast-custom';
import apiUrl from './common/api-url';

App({
  ToastCustom,

  onLaunch: function() {
    //调用API从本地缓存中获取数据
    // var sessionid = wx.getStorageSync('sessionid');
    // console.log(sessionid);
    // logs.unshift(Date.now())
    // if (!sessionid) {
      this.getSession();
    // }
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  getSession: function() {
    wx.login({
     success: function(res) {
       console.log(res);
       if (res.code) {
         //发起网络请求
         wx.request({
           url: apiUrl.get_session,
           data: {
             "code": res.code
           },
           success: function(result) {
             console.log(result);
             wx.setStorageSync('sessionid', result.data.data.sessionid);
           }
         })
       } else {
         console.log('获取用户登录态失败！' + res.errMsg)
       }
     }
   });
  },

  globalData: {
    userInfo: null
  }
})
