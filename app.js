//app.js
import { ToastCustom } from './components/toast-custom/toast-custom';
import apiUrl from './common/api-url';

App({
  ToastCustom,

  onLaunch: function() {
    var that = this;
    that.getSession();
    wx.onNetworkStatusChange(res => {
      this.globalData.isConnected = res.isConnected
    })

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
       if (res.code) {
         //发起网络请求
         wx.request({
           url: apiUrl.get_session,
           data: {
             "code": res.code
           },
           success: function(result) {
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
    userInfo: null,
  }
})
