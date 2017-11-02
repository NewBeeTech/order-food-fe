//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    histroyList: [{
      _id: '1',
      city: {
        chineseName: '纽约',
        name: 'New York',
      },
      country: {
        chineseName: '美国',
        name: 'US',
      },
      created_time: '1990.09.09',
      restaurant_name: 'Byran',
    }, {
      _id: '2',
      city: {
        chineseName: '纽约',
        name: 'New York',
      },
      country: {
        chineseName: '美国',
        name: 'US',
      },
      created_time: '1990.09.09',
      restaurant_name: 'Byran',
    }]
  },
  //事件处理函数
  bindViewTap: function(e) {
    console.log(e);
    wx.navigateTo({
      url: '../order/order?id=1'
    })
  },
  bindToRes: function(e) {
    console.log(e);
    wx.navigateTo({
      url: '../restaurant/restaurant?id='
    })
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
  }
})
