//restaurant.js
import apiUrl from '../../common/api-url';

//获取应用实例
var app = getApp()
Page({
  data: {
    latitude: -0.123298,
    longitude: 51.511281,
    address: '',
    scale: 17,
    markers: [{
      iconPath: "../../assets/images/map.png",
      id: 0,
      latitude: -0.123298,
      longitude: 51.511281,
      width: 35,
      height: 35,
    }],
  },
  onLoad: function () {
    this.setData({
      latitude: parseFloat(this.options.latitude),
      longitude: parseFloat(this.options.longitude),
      address: this.options.address,
      markers: [{
        latitude: parseFloat(this.options.latitude),
        longitude: parseFloat(this.options.longitude),
        id: 0,
        width: 30,
        height: 30,
        iconPath: '../../assets/images/map.png',
      }],
    });
  },
})
