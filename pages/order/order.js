//order.js
import apiUrl from '../../common/api-url';

//获取应用实例
var app = getApp()
Page({
  data: {
    totalFee: '',
    notes: '',
    currencyType: '',
    addAlaCarte: [],
    addSetMenu: [],
  },
  newAlaCarte: function (arr) {
    const newArr = [];
    for (var i = 0; i <= arr.length - 1; i++) {
      // 遍历单选、复选checked为true的值。
      if(arr[i].options.checkbox) {
        const checkbox = arr[i].options.checkbox.content;
        const filterCheckbox = checkbox.filter(item => item.checked);
        arr[i].options.checkbox.content = filterCheckbox;
      } else if(arr[i].options.radio) {
        const radio = arr[i].options.radio.content;
        const filterRadio = radio.filter(item => item.checked);
        arr[i].options.radio.content = filterRadio;
      } else {
        arr[i].options = {};
      }
      const ids = newArr.map(item => item._id);
      if(newArr.length) {
        if(ids.indexOf(arr[i]._id) > -1) {
          newArr[ids.indexOf(arr[i]._id)]['list'].push(arr[i]['options']);
          if(JSON.stringify(arr[i]['options']) == "{}") {
            newArr[ids.indexOf(arr[i]._id)]['hiddenOption'] = true;
          }
        } else {
          if(JSON.stringify(arr[i]['options']) == "{}") {
            arr[i]['hiddenOption'] = true;
          }
          arr[i]['list'] = [arr[i]['options']];
          newArr.push(arr[i]);
        }
      } else {
        if(JSON.stringify(arr[i]['options']) == "{}") {
          arr[i]['hiddenOption'] = true;
        }
        arr[i]['list'] = [arr[i]['options']];
        newArr.push(arr[i]);
      }
    };
    return newArr;
  },
  newSetMenu: function (arr) {
    const newArr = [];
    for (var i = 0; i <= arr.length - 1; i++) {
      const ids = newArr.map(item => item._id);
      if(newArr.length) {
        if(ids.indexOf(arr[i]._id) > -1) {
          newArr[ids.indexOf(arr[i]._id)]['list'].push(arr[i]['setMenuDetail']);
          if(JSON.stringify(arr[i]['setMenuDetail']) == "{}") {
          }
        } else {
          if(JSON.stringify(arr[i]['setMenuDetail']) == "{}") {
          }
          arr[i]['list'] = [arr[i]['setMenuDetail']];
          newArr.push(arr[i]);
        }
      } else {
        if(JSON.stringify(arr[i]['setMenuDetail']) == "{}") {
        }
        arr[i]['list'] = [arr[i]['setMenuDetail']];
        newArr.push(arr[i]);
      }
    };
    return newArr;
  },
  createOrder(){
    var that = this;
    // that.showLayer();
    const orderDetail = JSON.stringify({
      totalFee: this.data.totalFee,
      notes: this.data.notes,
      currencyType: this.data.currencyType,
      addAlaCarte: this.data.addAlaCarte,
      addSetMenu: this.data.addSetMenu,
      resName: this.data.resName,
    });
    // 保存订单信息
    wx.request({
      url: apiUrl.create_order,
      header:{
        "Content-Type":"application/json",
        "sessionid": wx.getStorageSync('sessionid'),
      },
      data: {
        orderDetail,
        restaurantId: this.data.restaurantId,
      },
      method: 'POST',
      success: function(res){
        console.log(res.data);
        wx.navigateTo({
          url: `../order/order?order_id=${res.data.data._id}`
        });
        that.hiddenLayer();
      },
      fail: function() {
        that.hiddenLayer();
        that.showToast("请求失败")
      }
    })
  },
  getOrderInfo(order_id){
    var that = this;
    that.showLayer();
    // 获取订单详情
    wx.request({
      url: apiUrl.get_order,
      header:{
        "Content-Type":"application/json",
        "sessionid": wx.getStorageSync('sessionid'),
      },
      data: {
        _id: order_id,
      },
      success: function(res) {
        console.log(res.data);
        that.setData({
          addAlaCarte: res.data.data.orderDetail.addAlaCarte,
          addSetMenu: res.data.data.orderDetail.addSetMenu,
          currencyType: res.data.data.orderDetail.currencyType,
          totalFee: res.data.data.orderDetail.totalFee,
          resName: res.data.data.orderDetail.resName,
          notes: res.data.data.orderDetail.notes,
          restaurantId: res.data.data.orderDetail.restaurantId,
          urlId: order_id,
        });
        wx.setNavigationBarTitle({
          title: res.data.data.orderDetail.resName
        });
        that.hiddenLayer();
      },
      fail: function() {
        that.hiddenLayer();
        that.showToast("请求失败")
      }
    });
  },
  onLoad: function (options) {
    var that = this;
    new app.ToastCustom();
    new app.Layer();
    //调用应用实例的方法获取全局数据
    if(options.order_id) {
      this.getOrderInfo(options.order_id);
    } else {
      const addAlaCarte = app.globalData.addAlaCarte || this.data.addAlaCarte;
      const addSetMenu = app.globalData.addSetMenu || this.data.addSetMenu;
      const newAlaCarte = this.newAlaCarte(addAlaCarte);
      const newSetMenu = this.newSetMenu(addSetMenu);
      const resName = app.globalData.resName || this.data.resName;
      const notes = app.globalData.notes || this.data.notes;
      const restaurantId = app.globalData.restaurantId || this.data.restaurantId;
      that.setData({
        addAlaCarte: newAlaCarte,
        addSetMenu: newSetMenu,
        currencyType: app.globalData.currencyType,
        totalFee: app.globalData.totalFee,
        urlId: options.order_id,
        resName,
        notes,
        restaurantId,
      }),
      wx.setNavigationBarTitle({
        title: resName
      })
    }
  },
  returnToUpdate: function() {
    wx.navigateBack({
      delta: 1
    })
  },
  confirm: function() {
    this.showLayer();
    this.createOrder();
  }
})
