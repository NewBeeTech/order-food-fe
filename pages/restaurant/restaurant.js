//restaurant.js
import apiUrl from '../../common/api-url';

//获取应用实例
var app = getApp()
Page({
  data: {
    _id: '1',
    aLaCarte: [],
    address: '33-35 WELLINGTON STREET, LONDON',
    city: {
      chineseName: '伦敦',
      name: 'London',
    },
    country: {
      chineseName: '英国',
      name: 'UK',
    },
    cuisines: ['美国菜', 'hadkshdshdfkdshfksdfh', '超好吃哟 啦啦啦啦啦啦啦'],
    currencyType: '£',
    desc: '我们的汉堡超级好吃哟哟哦yuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu，测试英文单词换行问题~',
    detailImage: [
      'https://pro.modao.cc/uploads3/images/1265/12658374/raw_1505289890.jpeg',
      'https://pro.modao.cc/uploads3/images/1265/12658374/raw_1505289890.jpeg',
      'https://pro.modao.cc/uploads3/images/1265/12658374/raw_1505289890.jpeg',
      'https://pro.modao.cc/uploads3/images/1265/12658374/raw_1505289890.jpeg'
    ],
    mainImage: 'https://pro.modao.cc/uploads3/images/1289/12896118/raw_1505974928.jpeg',
    name: 'ssfsdfsfosfs & psfsdfsfsfsfsdffsfdsfsdfsdff',
    notes: '本店另加12.5%服务费',
    phoneNumber: '18612761252',
    operator: 'UT-TESTER',
    position: '34,56',
    priceLevel: 5,
    rating: 4,
    setMenu: [],
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function () {
    console.log('onLoad', this)
    var that = this;
    // 请求饭店详情
    // wx.request({
    //   url: apiUrl.restaurant_details,
    //   header:{
    //     "Content-Type":"application/json"
    //   },
    //   data: {},
    //   success: function(res){
    //     console.log(res);
    //     that.setData({ cityList:res.data });
    //   },
    // })
  },
  clickImage: function(e) {
    var current = e.target.dataset.src;
    wx.previewImage({
        current: current,
        urls: this.data.movies,
    })
  }
})
