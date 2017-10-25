//index.js
//引入上拉加载
import { LoadMore } from '../../components/load-more/load-more';
import { City } from '../../components/city/city';

//获取应用实例
var app = getApp()
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  LoadMore,
  City,

  data: {
    toView: 'red',
    scrollTop: 100,
    motto: 'Hello World',
    userInfo: {},
    total: 100, // 总数
    current: 2, // 当前页
    pageSize: 10, // 每页数据条数
    list: [],
    restaurantList: [{
      _id: '1',
      name: 'Byran',
      cuisines: ['美国菜', '素食', 'hahahahahaha'],
      rating: 4.5,
      priceLevel: 3,
      city: {
        chineseName: '纽约',
        name: 'New York',
      },
      country: {
        chineseName: '美国',
        name: 'US',
      },
      mainImage: 'https://pro.modao.cc/uploads3/images/1289/12896118/raw_1505974928.jpeg',
    }, {
      _id: '2',
      name: 'Byran',
      cuisines: ['美国菜', '素食', 'hahahahahaha'],
      rating: 4.5,
      priceLevel: 3,
      city: {
        chineseName: '纽约',
        name: 'New York',
      },
      country: {
        chineseName: '美国',
        name: 'US',
      },
      mainImage: 'https://pro.modao.cc/uploads3/images/1289/12896118/raw_1505974928.jpeg',
    }, {
      _id: '3',
      name: 'Byran',
      cuisines: ['美国菜sfsfsdfdsfsdf', '素食', 'hahahahahaha'],
      rating: 4,
      rating2: 1,
      priceLevel: 3,
      city: {
        chineseName: '纽约',
        name: 'New York',
      },
      country: {
        chineseName: '美国',
        name: 'US',
      },
      mainImage: 'https://pro.modao.cc/uploads3/images/1289/12896118/raw_1505974928.jpeg',
    }],
    cityList: [{
      city: [
        {
          chineseName: '纽约',
          name: 'New York',
        },{
          chineseName: '华盛顿',
          name: 'Washington',
        }
      ],
      country: {
        chineseName: '美国',
        currencyType: '$',
        name: 'US',
      }
    }, {
      city: [
        {
          chineseName: '纽约',
          name: 'New York',
        },{
          chineseName: '华盛顿',
          name: 'Washington',
        }
      ],
      country: {
        chineseName: '美国',
        currencyType: '$',
        name: 'US',
      }
    }, {
      city: [
        {
          chineseName: '纽约',
          name: 'New York',
        },{
          chineseName: '华盛顿',
          name: 'Washington',
        }
      ],
      country: {
        chineseName: '美国',
        currencyType: '$',
        name: 'US',
      }
    }],
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
    //获取远程数据
    // wx.request({
    //   url: 'https://raw.githubusercontent.com/jiangzy27/how_to_react/master/score.json',
    //   header:{
    //     "Content-Type":"application/json"
    //   },
    //   data: {},
    //   success: function(res){
    //     that.setData({restaurantList:res.data.data});
    //   },
    // })

    // 页面加载时显示上拉状态：没有更多数据/需要上拉加载更多
    that.LoadMore().show(that.data);
    that.City();
  },
  // 上拉加载更多
  onReachBottom: function() {
    var that = this;
    that.LoadMore().loading(that.data);
  },
  bindItemTap: function(event) {
    console.log(event.currentTarget.dataset.item);
    wx.navigateTo({
      url: "../restaurant/restaurant"
    })
  },
  // cityOnShow = that.City().show;
})
