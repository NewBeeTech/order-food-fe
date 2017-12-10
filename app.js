//app.js
import { ToastCustom } from './components/toast-custom/toast-custom';
import { Layer } from './components/layer/layer';
import apiUrl from './common/api-url';

App({
  ToastCustom,
  Layer,

  onLaunch: function() {
    var that = this;
    that.getSession();
    wx.onNetworkStatusChange(res => {
      this.globalData.isConnected = res.isConnected
    })
    // wx.getNetworkType({
    //   success: function(res) {
    //     // 返回网络类型, 有效值：
    //     // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
    //     var networkType = res.networkType
    //     console.log(networkType);
    //     if(networkType !== 'none') {
    //       that.getSession();
    //     } else {
    //       wx.showToast({
    //         title: '网络异常',
    //         icon: 'fail',
    //         duration: 2000
    //       })
    //     }
    //   }
    // })

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
    userInfo: null,
    isConnected: false,
  }
})
