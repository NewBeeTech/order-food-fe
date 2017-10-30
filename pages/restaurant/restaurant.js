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
    position: '40.002607,116.487847',
    priceLevel: 5,
    rating: 4,
    setMenu: [],
    selectedStyle: 'aLaCarte',
    hidden: true,
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap')
  },
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
  },
  makePhone: function(e) {
    wx.makePhoneCall({
      phoneNumber: this.data.phoneNumber,
      fail: (res) => {
        console.log(res);
      },
    })
  },
  makeMap: function(e) {
    const latitude = this.data.position.split(",")[0];
    const longitude = this.data.position.split(",")[1];
    wx.navigateTo({
      url: `../map/map?latitude=${latitude}&longitude=${longitude}&address=${this.data.address}`
    })
  },
  chooseALaCarte: function(e) {
    if(this.data.selectedStyle === 'package') {
      this.setData({
        selectedStyle: 'aLaCarte',
      });
    }
  },
  choosePackage: function(e) {
    if(this.data.selectedStyle === 'aLaCarte') {
      this.setData({
        selectedStyle: 'package',
      });
    }
  },
  cancel: function(){
    this.setData({
       hidden: true
    });
  },
  confirm: function(){
    this.setData({
       nocancel: !this.data.nocancel
    });
    console.log("clicked confirm");
  },
  showDetails: function(e) {
    this.setData({
       hidden: false,
    });
    console.log(e);
  }
})
