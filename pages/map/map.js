//restaurant.js
import apiUrl from '../../common/api-url';

//获取应用实例
var app = getApp()
Page({
  data: {
    latitude: '',
    longitude: '',
    address: '',
    markers: [{
      iconPath: "../../assets/images/find03.png",
      id: 0,
      latitude: '',
      longitude: '',
      width: 35,
      height: 45,
    }],
  },
  onLoad: function () {
    // console.log('onLoad', this)
    var that = this;
    that.setData({
      latitude: this.options.latitude,
      longitude: this.options.longitude,
      address: this.options.address,
      'markers.latitude': this.options.latitude,
      'markers.longitude': this.options.longitude,
      'markers.iconPath': "../../assets/images/map.png",
      'markers.id': 0,
      'markers.width': 35,
      'markers.height': 45,
    });
    console.log(that.data);
  },
  onReady: function () {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap');
    console.log(this.mapCtx);
    // this.getCenterLocation();
    // this.moveToLocation();
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function(res){
        // var longitude = res.longitude
        // var latitude = res.latitude
        // wx.openLocation({
        //   longitude: longitude,
        //   latitude: latitude,
        //   scale: 14,
        // })
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
})
