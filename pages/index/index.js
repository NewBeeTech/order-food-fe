//index.js
//引入上拉加载
import { LoadMore } from '../../components/load-more/load-more';
import { City } from '../../components/city/city';
import apiUrl from '../../common/api-url';

//获取应用实例
var app = getApp()
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  LoadMore,
  City,

  data: {
    toView: 'red',
    // scrollTop: 100,
    total: 0, // 总数
    current: 1, // 当前页
    pageSize: 10, // 每页数据条数
    list: [],
    restaurantList: [],
    currentCity: '伦敦',
    currentCityEg: 'London',
    currentCountry: 'UK',
    currentCurrency: '£',
    cityList: [],
    noScollClass: '',
    url: apiUrl.restaurant_list, // url网络请求地址 如：`http://v.juhe.cn/weixin/query?key=f16af393a63364b729fd81ed9fdd4b7d&pno=${Number(this.data.current) + 1}&ps=${Number(this.data.pageSize)}`
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
  showImage: function() {
    wx.navigateTo({
      url: "../imgList/imgList"
    })
  },
  onPullDownRefresh: function(){
    this.getCityList();
    this.getRestaurantList();
  },
  getCityList(){
    var that = this;
    wx.showLoading({
      mask: true,
    })
    that.setData({ cityList:[]});
    // 请求城市列表
    wx.request({
      url: apiUrl.city_list,
      header:{
        "Content-Type":"application/json"
      },
      data: {},
      success: function(res){
        wx.stopPullDownRefresh();
        if(res.data.code === 0){
          that.setData({ cityList:res.data.data });
          wx.hideLoading();
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
  getRestaurantList(){
    var that = this;
    wx.showLoading({
      mask: true,
    })
    that.setData({ restaurantList:[], total: 0 });
    // 请求餐厅列表
    wx.request({
      url: apiUrl.restaurant_list,
      header:{
        "Content-Type":"application/json"
      },
      data: {
        "city.name": this.data.currentCityEg,
        "country.name": this.data.currentCountry,
        "pageNo": 1,
        "pageSize": 10,
      },
      success: function(res){
        wx.stopPullDownRefresh();
        if(res.data.code === 0){
          const list = res.data.data.rows;
          list.map((item, index) => {
            let rating1 = item.rating;
            let rating2 = 0;
            const rating = item.rating;
            const ratingInt = parseInt(rating);
            if ( rating > ratingInt) {
              rating1 = ratingInt;
              rating2 = 1;
            }
            item['rating1'] = rating1;
            item['rating2'] = rating2;
          })
          that.setData({
            restaurantList:res.data.data.rows,
            total: res.data.data.total,
            current: 1,
          });
          app.globalData.currencyType = that.data.currentCurrency;
          wx.hideLoading();
        } else {
          wx.hideLoading();
          wx.showToast({
            title: '加载失败',
            image: '../../assets/images/fail.png',
          })
        }
        that.LoadMore().show(that.data);
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
  onLoad: function() {
    var that = this;
    // 城市选择
    that.City();
    that.getCityList();
    that.getRestaurantList();
  },
  // 上拉加载更多
  onReachBottom: function() {
    var that = this;
    that.loading(that.data);
  },
  // 点击跳转餐厅详情
  bindItemTap: function(event) {
    wx.navigateTo({
      url: `../restaurant/restaurant?_id=${event.currentTarget.dataset.item._id}`
    })
  },
})
