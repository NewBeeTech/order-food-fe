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
    scrollTop: 100,
    total: 10, // 总数
    current: 1, // 当前页
    pageSize: 10, // 每页数据条数
    list: [],
    restaurantList: [],
    currentCity: '伦敦',
    currentCityEg: 'London',
    currentCountry: 'England',
    currentCurrency: '£',
    cityList: [],
    noScollClass: '',
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
  showImage: function() {
    wx.navigateTo({
      url: "../imgList/imgList"
    })
  },
  getCityList(){
    var that = this;
    wx.showLoading();
    // 请求城市列表
    wx.request({
      url: apiUrl.city_list,
      header:{
        "Content-Type":"application/json"
      },
      data: {},
      success: function(res){
        that.setData({ cityList:res.data.data });
        wx.hideLoading();
      },
    })
  },
  getRestaurantList(){
    var that = this;
    wx.showLoading();
    // 请求餐厅列表
    wx.request({
      url: apiUrl.restaurant_list,
      header:{
        "Content-Type":"application/json"
      },
      data: {
        "city.name": this.data.currentCityEg,
        "city.country": this.data.currentCountry,
        "pageNo": this.data.current,
        "pageSize": 10,
      },
      success: function(res){
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
          total:list,
        });
        wx.hideLoading();
      },
    })
  },
  onLoad: function() {
    var that = this;
    this.getCityList();
    this.getRestaurantList();
    // 页面加载时显示上拉状态：没有更多数据/需要上拉加载更多
    that.LoadMore().show(that.data);
    // 城市选择
    that.City();
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
