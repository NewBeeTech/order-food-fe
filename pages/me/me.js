//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onPullDownRefresh: function(){
    wx.stopPullDownRefresh();
  },
  routeToOrder: function() {
    wx.navigateTo({
      url: '../history/history'
    })
  },
  reward: function(e) {
    wx.previewImage({
      urls: ['http://caieatong.oss-eu-central-1.aliyuncs.com/static/zan.jpeg'],
      fail: res => {
        console.log(res)
      },
    })
  }
})
