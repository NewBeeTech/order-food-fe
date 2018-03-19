//restaurant.js
import apiUrl from '../../common/api-url';

//获取应用实例
var app = getApp();
Page({

  data: {
    menuId: '',
    aLaCarteLeftSelected: '',
    aLaCarte: {},
    address: '',
    city: {
      chineseName: '伦敦',
      name: 'London',
    },
    country: {
      chineseName: '英国',
      name: 'UK',
      currencyType: 'UK',
    },
    cuisines: [],
    currencyType: '£',
    desc: '',
    detailImage: [],
    mainImage: '',
    name: '',
    notes: '',
    phoneNumber: '',
    operator: '',
    position: '',
    priceLevel: '',
    rating: '',
    setMenu: {},
    setMenuLeftSelected: '',
    selectedStyle: 'aLaCarte',
    showModal: false,
    alaCarteModal: false,
    removeAlaCarteModal: false,
    setMenuModal: false,
    removeSetMenuModal: false,
    removeAlaCarte: [], // 删除弹框里的单品
    radioALaCarteRemoveIndex: 0,
    addAlaCarte: [], // 已经添加的单品
    addSetMenu: [], // 已经添加的套餐
    removeSetMenu: [], // 删除弹框里的套餐
    radioSetMenuRemoveIndex: 0,
    addItem: {}, // 添加的食物临时站位
    totalFee: 0,
    detailInfo: {},
    hidden: true,
    hiddenToast: true,
    infoHidden: true,
    aLaCarteRight: true,
    setMenuRight: true,
    isScroll: 'hidden',
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: `${this.data.city.chineseName} - ${this.data.name}`,
      path: `/pages/restaurant/restaurant?_id=${this.options._id}`,
      imageUrl: `${this.data.mainImage}`,
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap')
  },
  onPullDownRefresh: function(){
    this.getRestaurantInfo();
  },
  getRestaurantInfo(){
    var that = this;
    that.setData({
      _id: '',
      aLaCarte: {},
      address: '',
      city: {},
      country: {},
      cuisines: [],
      desc: '',
      detailImage: [],
      isVisible: '',
      mainImage: '',
      name: '',
      notes: '',
      operator: '',
      phoneNumber: '',
      position: [],
      priceLevel: '',
      rating1: '',
      rating2: '',
      setMenu: {},
      aLaCarteNum: {},
    });
    wx.showLoading({
      mask: true,
    });
    // 请求餐厅列表
    wx.request({
      url: apiUrl.restaurant_details,
      header:{
        "Content-Type":"application/json"
      },
      data: {
        "_id": that.options._id,
      },
      success: function(res){
        wx.stopPullDownRefresh();
        if(res.data.code === 0) {
          let rating1 = res.data.data.rating;
          let rating2 = 0;
          const rating = res.data.data.rating;
          const ratingInt = parseInt(rating);
          if ( rating > ratingInt) {
            rating1 = ratingInt;
            rating2 = 1;
          }
          const aLaCarte = res.data.data.aLaCarte;
          const setMenu = res.data.data.setMenus;
          if(Object.keys(aLaCarte).length) {
            that.setData({
              aLaCarteLeftSelected: Object.keys(aLaCarte)[0],
            })
          } else {
            that.setData({
              aLaCarteRight: false,
            })
          }
          if(Object.keys(setMenu).length) {
            that.setData({
              setMenuLeftSelected: Object.keys(setMenu)[0],
            })
          } else {
            that.setData({
              setMenuRight: false,
            })
          }
          that.setData({
            _id: res.data.data._id,
            aLaCarte: res.data.data.aLaCarte,
            address: res.data.data.address,
            city: res.data.data.city,
            country: res.data.data.country,
            cuisines: res.data.data.cuisines,
            desc: res.data.data.desc,
            detailImage: res.data.data.detailImage,
            isVisible: res.data.data.isVisible,
            mainImage: res.data.data.mainImage,
            name: res.data.data.name,
            notes: res.data.data.notes,
            operator: res.data.data.operator,
            phoneNumber: res.data.data.phoneNumber,
            position: res.data.data.position,
            priceLevel: res.data.data.priceLevel,
            rating1: rating1,
            rating2: rating2,
            setMenu: res.data.data.setMenus,
          });
          wx.hideLoading();
        } else {
          that.hiddenLayer();
          that.showToast("请求失败")
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
  onLoad: function () {
    var that = this;
    new app.ToastCustom();
    this.getRestaurantInfo();
    // this.setData({ currencyType: app.globalData.currencyType });
  },
  clickImage: function(e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.movies,
    })
  },
  showInfo: function(e) {
    this.setData({
      infoHidden: false,
    });
  },
  infoConfirm: function(e) {
    this.setData({
      infoHidden: true,
    });
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
    const latitude = this.data.position.coordinates[0];
    const longitude = this.data.position.coordinates[1];
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
  /**
   * 选择单点左侧
   */
  checkAlaCateLeft: function(e) {
    this.setData({
      aLaCarteLeftSelected: e.target.dataset.index,
    });
  },
  checkSetMenuLeft: function(e) {
    this.setData({
      setMenuLeftSelected: e.target.dataset.index,
    });
  },
  /**
   * 添加单点
   */
  addAlaCarte: function(addItem) {
    const aLaCarte = this.data.aLaCarte;
    let aLaCarteNum = this.data.aLaCarteNum;
    let totalFee = Number(this.data.totalFee);
    for (var p in aLaCarte) {
      aLaCarte[p].map(item => {
        if(item._id === addItem._id) {
          totalFee += item.price;
          if(addItem.options.checkbox !== undefined) {
            addItem.options.checkbox.content.map((i, key) => {
              if(i.checked) {
                totalFee += i.price;
              }
            });
          }
          if(addItem.options.radio !== undefined) {
            addItem.options.radio.content.map((i, key) => {
              if(i.checked) {
                if(i.price !== 0)
                {
                  totalFee = totalFee + i.price - item.price
                }
              }
            });
          }
          const number = item.num || 0;
          item.num = number + 1;
          addItem.num = number + 1;
          aLaCarteNum[p] = isNaN(aLaCarteNum[p]) ? 1 : aLaCarteNum[p] + 1;
        }
      });
    }
    const addAlaCarte = this.data.addAlaCarte;
    addAlaCarte.push(addItem);
    this.setData({
      aLaCarte,
      addAlaCarte,
      addItem: {},
      totalFee: totalFee.toFixed(2),
      aLaCarteNum,
    });
  },
  /**
   * 删除单点
   */
  removeAlaCarte: function(addItem) {
    let aLaCarteNum = this.data.aLaCarteNum;
    const aLaCarte = this.data.aLaCarte;
    const removeAlaCarte = this.data.removeAlaCarte;
    const addAlaCarte = this.data.addAlaCarte;
    let totalFee = Number(this.data.totalFee);
    let removeIndex = this.data.radioALaCarteRemoveIndex
    for (var i in addAlaCarte) {
      if(JSON.stringify(addAlaCarte[i]) === JSON.stringify((removeAlaCarte[removeIndex]))) {
        addAlaCarte.splice(i, 1);
        break;
      }
    }
    const removeItem = removeAlaCarte[removeIndex];
    removeAlaCarte.splice(removeIndex, 1);
    // let defaultPrice = 0;
    for (var p in aLaCarte) {
      aLaCarte[p].map(item => {
        if(item._id === addItem._id) {
          totalFee -= item.price;
          if(removeItem.options.checkbox !== undefined) {
            removeItem.options.checkbox.content.map((i, key) => {
              if(i.checked) {
                totalFee -= i.price;
              }
            });
          }
          if(removeItem.options.radio !== undefined) {
            removeItem.options.radio.content.map((i, key) => {
              if (i.checked) {
                if (i.price !== 0) {
                  totalFee = totalFee - i.price + item.price
                }
              }
            });
          }
          const number = item.num || 0;
          item.num = number - 1;
          aLaCarteNum[p] = aLaCarteNum[p] - 1;
        }
      });
    }
    this.setData({
      aLaCarte,
      removeAlaCarte: [],
      addAlaCarte,
      addItem: {},
      radioALaCarteRemoveIndex: 0,
      totalFee: totalFee.toFixed(2),
      aLaCarteNum,
    });
  },
  /**
   * 添加套餐
   */
  addSetMenu: function(addItem) {
    const setMenu = this.data.setMenu;
    let totalFee = Number(this.data.totalFee);
    for (var p in setMenu) {
      if(setMenu[p]._id === addItem._id) {
        totalFee +=  Number(setMenu[p].price);
        const number = setMenu[p].num || 0;
        setMenu[p].num = number + 1;
        addItem.num = number + 1;
      }
    }
    const addSetMenu = this.data.addSetMenu;
    console.log(addItem);
    addSetMenu.push(addItem);
    this.setData({
      setMenu,
      addSetMenu,
      addItem: {},
      totalFee: totalFee.toFixed(2),
    });
  },
  /**
   * 删除套餐
   */
  removeSetMenu: function(addItem) {
    const setMenu = this.data.setMenu;
    const removeSetMenu = this.data.removeSetMenu;
    const addSetMenu = this.data.addSetMenu;
    let totalFee = Number(this.data.totalFee);
    for (var p in setMenu) {
      if(setMenu[p]._id === addItem._id) {
        const number = setMenu[p].num || 0;
        setMenu[p].num = number - 1;
      }
    }
    for (var i in addSetMenu) {
      if(JSON.stringify(addSetMenu[i]) === JSON.stringify(removeSetMenu[this.data.radioSetMenuRemoveIndex])) {
        totalFee -= addSetMenu[i].price;
        addSetMenu.splice(i, 1);
        break;
      }
    }
    const removeItem = removeSetMenu[this.data.radioSetMenuRemoveIndex];
    removeSetMenu.splice(this.data.radioSetMenuRemoveIndex, 1);
    this.setData({
      setMenu,
      removeSetMenu,
      addSetMenu,
      addItem: {},
      totalFee: totalFee.toFixed(2),
    });
  },
  /**
   * 弹窗
   */
  showALaCarteModal: function(e) {
    const alacarte = e.target.dataset.alacarte;
    var arr = Object.keys(alacarte.options);
    var len = arr.length;
    if(!len) {
      this.setData({
        addItem: alacarte,
      });
      this.addAlaCarte(this.data.addItem);
      return;
    }
    this.setData({
      alaCarteModal: true,
      addItem: alacarte,
    })
  },
  /**
   * 弹窗
   */
  showRemoveAlaCarteModal: function(e) {
    const currentAlacarte = e.target.dataset.alacarte;
    const addAlaCarte = this.data.addAlaCarte;
    const removeAlaCarte = [];
    var arr = Object.keys(currentAlacarte.options);
    var len = arr.length;
    addAlaCarte.map((item, index) => {
      if(item._id === currentAlacarte._id){
        removeAlaCarte.push(item);
      }
    });
    if(!len) {
      this.setData({
        addItem: currentAlacarte,
        removeAlaCarte,
      })
      this.removeAlaCarte(this.data.addItem);
      return;
    }
    this.setData({
      addItem: currentAlacarte,
      removeAlaCarte,
      removeAlaCarteModal: true,
    })
  },
  /**
   * 弹窗
   */
  showSetMenuModal: function(e) {
    const setmenu = e.target.dataset.setmenu;
    const detail = setmenu.setMenuDetail;
    let noOptions = true;
    for(var i in detail) {
      if(detail[i].length > 1){
        noOptions = false;
      } else {
        detail[i].map(item => {
          if(JSON.stringify(item.options) !== "{}") {
            noOptions = false;
          } else {
            item.checked = true;
          }
        })
      }
    }
    if(noOptions) {
      this.setData({
        // setMenuModal: true,
        addItem: setmenu,
      });
      this.addSetMenu(setmenu);
    } else {
      this.setData({
        setMenuModal: true,
        addItem: setmenu,
      })
    }
  },
  /**
   * 删除套餐弹窗
   */
  showRemoveSetMenuModal: function(e) {
    const currentSetMenu = e.target.dataset.setmenu;
    const addSetMenu = this.data.addSetMenu;
    const removeSetMenu = [];

    console.log(currentSetMenu);

    addSetMenu.map((item, index) => {
      if(item._id === currentSetMenu._id){
        removeSetMenu.push(item);
      }
    });
    // 判断是否需要唤起弹框，如每个类型均一道菜，切没有单选复选则直接删除 无须弹框
    let noOptions = true;
    removeSetMenu.map(item => {
      for(var i in item.setMenuDetail) {
        if(item.setMenuDetail[i].length > 1){
          noOptions = false;
        } else {
          item.setMenuDetail[i].map(it => {
            if(JSON.stringify(it.options) !== "{}") {
              noOptions = false;
            }
          })
        }
      }
    })

    if(noOptions) {
      this.setData({
        addItem: currentSetMenu,
        removeSetMenu,
      });
      this.removeSetMenu(currentSetMenu);
    } else {
      this.setData({
        addItem: currentSetMenu,
        removeSetMenu,
        removeSetMenuModal: true,
      })
    }
  },
  /**
   * 弹窗
   */
  showDetails: function(e) {
    const detailInfo = e.currentTarget.dataset;
    this.setData({
      showModal: true,
      detailInfo,
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideSetMenuModal: function (e) {
    this.setData({
      setMenuModal: false
    });
  },
  /**
   * 隐藏模态对话框
   */
  hideRemoveSetMenuModal: function (e) {
    this.setData({
      removeSetMenuModal: false
    });
  },
  /**
   * 隐藏模态对话框
   */
  hideAlaCarteModal: function (e) {
    this.setData({
      alaCarteModal: false
    });
  },
  /**
   * 隐藏模态对话框
   */
  hideRemoveAlaCarteModal: function (e) {
    this.setData({
      removeAlaCarteModal: false
    });
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框取消按钮点击事件
   */
  onRemoveAlaCarteCancel: function () {
    this.hideRemoveAlaCarteModal();
    this.setData({ radioALaCarteRemoveIndex: 0 })
  },
  /**
   * 对话框取消按钮点击事件
   */
  onRemoveSetMenuCancel: function () {
    this.hideRemoveSetMenuModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onAlaCarteConfirm: function () {
    this.hideAlaCarteModal();
    this.addAlaCarte(this.data.addItem);
  },
  /**
   * 对话框确认按钮点击事件
   */
  onRemoveAlaCarteConfirm: function () {
    this.hideRemoveAlaCarteModal();
    this.removeAlaCarte(this.data.addItem);
  },
  onSetMenuConfirm: function () {
    this.hideSetMenuModal();
    this.addSetMenu(this.data.addItem);
  },
  /**
   * 对话框确认按钮点击事件
   */
  onRemoveSetMenuConfirm: function () {
    this.hideRemoveSetMenuModal();
    this.removeSetMenu(this.data.addItem);
  },
  // 单品添加选规格 单选
  radioALaCarteChange: function(e) {
    const addItem = this.data.addItem;
    const aLaCarte = this.data.aLaCarte;
    for (var p in aLaCarte) {
      aLaCarte[p].map((item, key) => {
        if(item._id === addItem._id) {
          const content = item.options.radio.content;
          content.map((i, index) => {
            if(i.chineseName === e.detail.value) {
              // aLaCarte[p][key].options.radio.content[index].checked = true;
              addItem.options.radio.content[index].checked = true;
            } else {
              // aLaCarte[p][key].options.radio.content[index].checked = false;
              addItem.options.radio.content[index].checked = false;
            }
          })
        }
      });
    }
    this.setData({
      // aLaCarte,
      addItem,
    });
  },
  // 单品添加选规格 多选
  checkboxALaCarteChange: function(e) {
    const addItem = this.data.addItem;
    const aLaCarte = this.data.aLaCarte;
    for (var p in aLaCarte) {
      aLaCarte[p].map((item, key) => {
        if(item._id === addItem._id) {
          const content = item.options.checkbox.content;
          content.map((i, index) => {
            if(e.detail.value.indexOf(i.chineseName) !== -1) {
              // aLaCarte[p][key].options.checkbox.content[index].checked = true;
              addItem.options.checkbox.content[index].checked = true;
            } else {
              // aLaCarte[p][key].options.checkbox.content[index].checked = false;
              addItem.options.checkbox.content[index].checked = false;
            }
          })
        }
      });
    }
    this.setData({
      // aLaCarte,
      addItem,
    });
  },
  radioALaCarteRemove: function(e) {
    this.setData({
      radioALaCarteRemoveIndex: Number(e.detail.value),
    });
  },
  radioSetMenuRemove: function(e) {
    this.setData({
      radioSetMenuRemoveIndex: Number(e.detail.value),
    });
  },
  radioSetMenuChange: function(e) {
    const addItem = this.data.addItem;
    const setMenu = this.data.setMenu;
    for (var p in setMenu) {
      if(setMenu[p]._id === addItem._id) {
        for(var q in setMenu[p].setMenuDetail) {
          if(q === e.currentTarget.dataset.index) {
            setMenu[p].setMenuDetail[q].map((item, key) => {
              if(item.name.chineseName === e.detail.value) {
                addItem.setMenuDetail[q][key].checked = true;
              } else {
                if(item.options.radio) {
                  const content = item.options.radio.content;
                  content.map((i, index) => {
                    addItem.setMenuDetail[q][key].options.radio.content[index].checked = false;
                  })
                }
                if(item.options.checkbox) {
                  const content2 = item.options.checkbox.content;
                  content2.map((i, index) => {
                    addItem.setMenuDetail[q][key].options.checkbox.content[index].checked = false;
                  })
                }
                addItem.setMenuDetail[q][key].checked = false;
              }
            });
          } else {
            console.log(setMenu[p].setMenuDetail[q]);
          }
        }
      }
    }
    this.setData({
      addItem,
    });
  },
  radioSetMenuOptionChange: function(e) {
    const addItem = this.data.addItem;
    const setMenu = this.data.setMenu;
    console.log(addItem,setMenu);
    for (var p in setMenu) {
      if(setMenu[p]._id === addItem._id) {
        for(var q in setMenu[p].setMenuDetail) {
          setMenu[p].setMenuDetail[q].map((item, key) => {
            if(q === e.currentTarget.dataset.index) {
              if(setMenu[p].setMenuDetail[q][key].name.chineseName === e.currentTarget.dataset.chinesename) {
                if(item.options.radio) {
                  const content = item.options.radio.content;
                  content.map((i, index) => {
                    if(i.chineseName === e.detail.value) {
                      addItem.setMenuDetail[q][key].checked = true;
                      addItem.setMenuDetail[q][key].options.radio.content[index].checked = true;
                    } else {
                      addItem.setMenuDetail[q][key].options.radio.content[index].checked = false;
                    }
                  })
                }
              } else {
                if(item.options.radio) {
                  const content = item.options.radio.content;
                  content.map((i, index) => {
                    addItem.setMenuDetail[q][key].options.radio.content[index].checked = false;
                  })
                }
                if(item.options.checkbox) {
                  const content2 = item.options.checkbox.content;
                  content2.map((i, index) => {
                    addItem.setMenuDetail[q][key].options.checkbox.content[index].checked = false;
                  })
                }
                addItem.setMenuDetail[q][key].checked = false;
              }
            }
          });
        }
      }
    }
    this.setData({
      addItem,
    });
  },
  checkboxSetMenuOptionChange: function(e) {
    const addItem = this.data.addItem;
    const setMenu = this.data.setMenu;
    for (var p in setMenu) {
      if(setMenu[p]._id === addItem._id) {
        for(var q in setMenu[p].setMenuDetail) {
          setMenu[p].setMenuDetail[q].map((item, key) => {
            if(q === e.currentTarget.dataset.index) {
              if(setMenu[p].setMenuDetail[q][key].name.chineseName === e.currentTarget.dataset.chinesename) {
                if(item.options.checkbox) {
                  const content = item.options.checkbox.content;
                  content.map((i, index) => {
                    if(e.detail.value.indexOf(i.chineseName) !== -1) {
                      addItem.setMenuDetail[q][key].checked = true;
                      addItem.setMenuDetail[q][key].options.checkbox.content[index].checked = true;
                    } else {
                      addItem.setMenuDetail[q][key].options.checkbox.content[index].checked = false;
                    }
                  })
                }
              } else {
                if(item.options.radio) {
                  const content = item.options.radio.content;
                  content.map((i, index) => {
                    addItem.setMenuDetail[q][key].options.radio.content[index].checked = false;
                  })
                }
                if(item.options.checkbox) {
                  const content2 = item.options.checkbox.content;
                  content2.map((i, index) => {
                    addItem.setMenuDetail[q][key].options.checkbox.content[index].checked = false;
                  })
                }
                addItem.setMenuDetail[q][key].checked = false;
              }
            }
          });
        }
      }
    }
    this.setData({
      addItem,
    });
  },
  alertNotice: function() {
    if(!this.data.addSetMenu.length && !this.data.addAlaCarte.length) {
      this.showToast("请选择菜品");
      return false;
    }
    this.setData({
      hidden: false,
    })
  },
  noticeCancel: function() {
    this.setData({
      hidden: true,
    })
  },
  noticeConfirm: function() {
    var that = this;
    this.setData({
      hidden: true,
    });
    app.globalData.addSetMenu = this.data.addSetMenu;
    app.globalData.addAlaCarte = this.data.addAlaCarte;
    app.globalData.currencyType = this.data.country.currencyType;
    app.globalData.totalFee = this.data.totalFee;
    app.globalData.resName = this.data.name;
    app.globalData.restaurantId = that.options._id;
    app.globalData.notes = this.data.notes;
    this.createOrder();
  },
  createOrder: function() {
    wx.navigateTo({
      url: '../order/order'
    })
    // wx.redirectTo({
    //   url: '../order/order'
    // })
  },
  toastHidden:function() {
    this.setData({
      hiddenToast: true,
    });
  }

})
