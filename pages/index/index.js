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
    motto: 'Hello World',
    userInfo: {},
    total: 10, // 总数
    current: 1, // 当前页
    pageSize: 5, // 每页数据条数
    list: [],
    restaurantList: [{
      _id: '1',
      name: '名字长到英文单词强制换行hhhhhh',
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
      cuisines: ['标签长的时候怎么展示', '素食', '嗯嗯 可以可以'],
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
    }, {
      _id: '4',
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
      _id: '5',
      name: 'Byran',
      cuisines: ['美国菜', '素食', 'hahahahahaha'],
      rating: 3,
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
    currentCity: '纽约',
    currentCityEg: 'New York',
    currentCountry: 'US',
    currentCurrency: '£',
    cityList: [{
      city: [
        {
          chineseName: '伦敦',
          name: 'London',
        },{
          chineseName: '牛津',
          name: 'Oxford',
        }, {
          chineseName: '埃文河畔斯特拉特福',
          name: 'Stratford-upon-Avon',
        }, {
          chineseName: '爱丁堡',
          name: 'Edinburgh',
        }
      ],
      country: {
        chineseName: '英国',
        currencyType: '£',
        name: 'UK',
      }
    }, {
      city: [
        {
          chineseName: '巴黎',
          name: 'Paris',
        },{
          chineseName: '里昂',
          name: 'Lyon',
        }
      ],
      country: {
        chineseName: '法国',
        currencyType: '€',
        name: 'France',
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
    // 请求城市列表
    wx.request({
      url: apiUrl.city_list,
      header:{
        "Content-Type":"application/json"
      },
      data: {},
      success: function(res){
        console.log(res);
        that.setData({ cityList:res.data.data });
      },
    })
  },
  getRestaurantList(){
    var that = this;
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
        that.setData({ restaurantList:res.data.data.rows });
      },
    })
  },
  onLoad: function() {
    console.log('onLoad', this);
    var that = this;
    // this.getCityList();
    // this.getRestaurantList();
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
    console.log(event.currentTarget.dataset.item);
    wx.navigateTo({
      url: `../restaurant/restaurant?id=${event.currentTarget.dataset.item._id}`
    })
  },
})
