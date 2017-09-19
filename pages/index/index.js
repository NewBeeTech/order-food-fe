//index.js
//引入上拉加载
import { LoadMore } from '../../components/load-more/load-more';

//获取应用实例
var app = getApp()
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  LoadMore,

  data: {
    toView: 'red',
    scrollTop: 100,
    motto: 'Hello World',
    userInfo: {},
    total: 100, // 总数
    current: 2, // 当前页
    pageSize: 10, // 每页数据条数
    list: [],
    url: '' // url网络请求地址 如：`http://v.juhe.cn/weixin/query?key=f16af393a63364b729fd81ed9fdd4b7d&pno=${Number(this.data.current) + 1}&ps=${Number(this.data.pageSize)}`
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  showImage: function() {
    wx.navigateTo({
      url: "../imgList/imgList"
    })
  },
  onLoad: function() {
    console.log('onLoad');
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      });
    });
    // 页面加载时显示上拉状态：没有更多数据/需要上拉加载更多
    that.LoadMore().show(that.data);
  },
  // 上拉加载更多
  onReachBottom: function() {
    var that = this;
    that.LoadMore().loading(that.data);
  }
})
