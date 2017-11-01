//restaurant.js
import apiUrl from '../../common/api-url';

//获取应用实例
var app = getApp()
Page({
  data: {
    menuId: '1',
    aLaCarteLeftSelected: '主菜',
    aLaCarte: {
      '主菜': [{
        _id: 'aLaCarte_003',
        category: {
          chineseName: '主菜',
          name: 'The Main dash',
        },
        categoryNum: 2,
        description: '配料信息mock数据',
        extraInfo: '附加信息mock数据',
        name: {
          chineseName: '大龙虾3',
          name: 'XXXX3',
        },
        image: 'https://m.360buyimg.com/n12/jfs/t2938/141/161562315/370464/79e5296/574e38faNb075dd83.jpg!q70.jpg',
        operateTime: '2017-10-30T13:24:32.201Z',
        operator: 'UT-TESTER',
        options: {
          checkbox: {
            content: [{
              chineseName: '炸薯条',
              name: 'French fries',
              price: 3,
            }],
            title: {
              chineseName: '配菜',
              name: 'Garnish',
            },
          },
          radio: {
            content: [{
              chineseName: '大杯',
              name: 'big',
              price: 3,
            }, {
              chineseName: '中杯',
              name: 'mid',
              price: 2,
            }, {
              chineseName: '小杯',
              name: 'sm',
              price: 0,
            }],
            title: {
              chineseName: '型号',
              name: 'xinghao',
            },
          },
        },
        price: 3,
        stock: 6,
      }],
      '头菜': [{
        _id: 'aLaCarte_002',
        category: {
          chineseName: '头菜',
          name: 'The first dash',
        },
        categoryNum: 1,
        description: '配料信息mock数据',
        extraInfo: '附加信息mock数据',
        name: {
          chineseName: '面包和橄榄0',
          name: 'Bread and Olives0',
        },
        image: 'https://m.360buyimg.com/n12/jfs/t2938/141/161562315/370464/79e5296/574e38faNb075dd83.jpg!q70.jpg',
        operateTime: '2017-10-30T13:24:32.201Z',
        operator: 'UT-TESTER',
        options: {
          checkbox: {
            content: [{
              chineseName: '炸薯条',
              name: 'French fries',
              price: 3,
            }],
            title: {
              chineseName: '配菜',
              name: 'Garnish',
            },
          },
          radio: {
            content: [{
              chineseName: '大杯',
              name: 'big',
              price: 3,
            }, {
              chineseName: '中杯',
              name: 'mid',
              price: 2,
            }, {
              chineseName: '小杯',
              name: 'sm',
              price: 0,
            }],
            title: {
              chineseName: '型号',
              name: 'xinghao',
            },
          },
          price: 3,
          stock: 6,
        },
      }, {
        _id: 'aLaCarte_001',
        category: {
          chineseName: '头菜',
          name: 'The first dash',
        },
        categoryNum: 1,
        description: '配料信息mock数据',
        extraInfo: '附加信息mock数据',
        name: {
          chineseName: '面包和橄榄1',
          name: 'Bread and Olives1',
        },
        image: 'https://m.360buyimg.com/n12/jfs/t2938/141/161562315/370464/79e5296/574e38faNb075dd83.jpg!q70.jpg',
        operateTime: '2017-10-30T13:24:32.201Z',
        operator: 'UT-TESTER',
        options: {
          checkbox: {
            content: [{
              chineseName: '炸薯条',
              name: 'French fries',
              price: 3,
            }],
            title: {
              chineseName: '配菜',
              name: 'Garnish',
            },
          },
          radio: {
            content: [{
              chineseName: '大杯',
              name: 'big',
              price: 3,
            }, {
              chineseName: '中杯',
              name: 'mid',
              price: 2,
            }, {
              chineseName: '小杯',
              name: 'sm',
              price: 0,
            }],
            title: {
              chineseName: '型号',
              name: 'xinghao',
            },
          },
        },
        price: 3,
        stock: 6,
      }],
    },
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
    setMenu: {
      '套餐一': {
        _id: 'setMenu_001',
        desc: '套餐一含2个头菜1个主菜',
        category: {
          chineseName: '套餐一',
          name: 'Combo1',
        },
        description: '配料信息mock数据',
        extraInfo: '附加信息mock数据',
        operateTime: '2017-10-30T13:24:32.201Z',
        operator: 'UT-TESTER',
        price: 86,
        setMenuDetail: {
          '主菜': [{
            _id: 'aLaCarte_003',
            category: {
              chineseName: '主菜',
              name: 'The Main dash',
            },
            categoryNum: 2,
            description: '配料信息mock数据',
            extraInfo: '附加信息mock数据',
            name: {
              chineseName: '大龙虾3',
              name: 'XXXX3',
            },
            image: 'https://m.360buyimg.com/n12/jfs/t2938/141/161562315/370464/79e5296/574e38faNb075dd83.jpg!q70.jpg',
            operateTime: '2017-10-30T13:24:32.201Z',
            operator: 'UT-TESTER',
            options: {
              checkbox: {
                content: [{
                  chineseName: '炸薯条',
                  name: 'French fries',
                  price: 3,
                }],
                title: {
                  chineseName: '配菜',
                  name: 'Garnish',
                },
              },
              radio: {
                content: [{
                  chineseName: '大杯',
                  name: 'big',
                  price: 3,
                }, {
                  chineseName: '中杯',
                  name: 'mid',
                  price: 2,
                }, {
                  chineseName: '小杯',
                  name: 'sm',
                  price: 0,
                }],
                title: {
                  chineseName: '型号',
                  name: 'xinghao',
                },
              },
            },
            price: 3,
            stock: 6,
          }],
          '头菜': [{
            _id: 'aLaCarte_002',
            category: {
              chineseName: '头菜',
              name: 'The first dash',
            },
            categoryNum: 1,
            description: '配料信息mock数据',
            extraInfo: '附加信息mock数据',
            name: {
              chineseName: '面包和橄榄0',
              name: 'Bread and Olives0',
            },
            image: 'https://m.360buyimg.com/n12/jfs/t2938/141/161562315/370464/79e5296/574e38faNb075dd83.jpg!q70.jpg',
            operateTime: '2017-10-30T13:24:32.201Z',
            operator: 'UT-TESTER',
            options: {
              checkbox: {
                content: [{
                  chineseName: '炸薯条',
                  name: 'French fries',
                  price: 3,
                }],
                title: {
                  chineseName: '配菜',
                  name: 'Garnish',
                },
              },
              radio: {
                content: [{
                  chineseName: '大杯',
                  name: 'big',
                  price: 3,
                }, {
                  chineseName: '中杯',
                  name: 'mid',
                  price: 2,
                }, {
                  chineseName: '小杯',
                  name: 'sm',
                  price: 0,
                }],
                title: {
                  chineseName: '型号',
                  name: 'xinghao',
                },
              },
            },
            price: 3,
            stock: 6,
          }, {
            _id: 'aLaCarte_001',
            category: {
              chineseName: '头菜',
              name: 'The first dash',
            },
            categoryNum: 1,
            description: '配料信息mock数据',
            extraInfo: '附加信息mock数据',
            name: {
              chineseName: '面包和橄榄1',
              name: 'Bread and Olives1',
            },
            image: 'https://m.360buyimg.com/n12/jfs/t2938/141/161562315/370464/79e5296/574e38faNb075dd83.jpg!q70.jpg',
            operateTime: '2017-10-30T13:24:32.201Z',
            operator: 'UT-TESTER',
            options: {
              checkbox: {
                content: [{
                  chineseName: '炸薯条',
                  name: 'French fries',
                  price: 3,
                }],
                title: {
                  chineseName: '配菜',
                  name: 'Garnish',
                },
              },
              radio: {
                content: [{
                  chineseName: '大杯',
                  name: 'big',
                  price: 3,
                }, {
                  chineseName: '中杯',
                  name: 'mid',
                  price: 2,
                }, {
                  chineseName: '小杯',
                  name: 'sm',
                  price: 0,
                }],
                title: {
                  chineseName: '型号',
                  name: 'xinghao',
                },
              },
            },
            price: 3,
            stock: 6,
          }],
        }
      },
      '套餐二': {
        _id: 'setMenu_002',
        desc: '套餐一含2个头菜1个主菜',
        category: {
          chineseName: '套餐一',
          name: 'Combo1',
        },
        description: '配料信息mock数据',
        extraInfo: '附加信息mock数据',
        operateTime: '2017-10-30T13:24:32.201Z',
        operator: 'UT-TESTER',
        price: 86,
        setMenuDetail: {
          '主菜': [{
            _id: 'aLaCarte_003',
            category: {
              chineseName: '主菜',
              name: 'The Main dash',
            },
            categoryNum: 2,
            description: '配料信息mock数据',
            extraInfo: '附加信息mock数据',
            name: {
              chineseName: '大龙虾3',
              name: 'XXXX3',
            },
            image: 'https://m.360buyimg.com/n12/jfs/t2938/141/161562315/370464/79e5296/574e38faNb075dd83.jpg!q70.jpg',
            operateTime: '2017-10-30T13:24:32.201Z',
            operator: 'UT-TESTER',
            options: {
              checkbox: {
                content: [{
                  chineseName: '炸薯条',
                  name: 'French fries',
                  price: 3,
                }],
                title: {
                  chineseName: '配菜',
                  name: 'Garnish',
                },
              },
              radio: {
                content: [{
                  chineseName: '大杯',
                  name: 'big',
                  price: 3,
                }, {
                  chineseName: '中杯',
                  name: 'mid',
                  price: 2,
                }, {
                  chineseName: '小杯',
                  name: 'sm',
                  price: 0,
                }],
                title: {
                  chineseName: '型号',
                  name: 'xinghao',
                },
              },
            },
            price: 3,
            stock: 6,
          }],
          '头菜': [{
            _id: 'aLaCarte_002',
            category: {
              chineseName: '头菜',
              name: 'The first dash',
            },
            categoryNum: 1,
            description: '配料信息mock数据',
            extraInfo: '附加信息mock数据',
            name: {
              chineseName: '面包和橄榄0',
              name: 'Bread and Olives0',
            },
            image: 'https://m.360buyimg.com/n12/jfs/t2938/141/161562315/370464/79e5296/574e38faNb075dd83.jpg!q70.jpg',
            operateTime: '2017-10-30T13:24:32.201Z',
            operator: 'UT-TESTER',
            options: {
              checkbox: {
                content: [{
                  chineseName: '炸薯条',
                  name: 'French fries',
                  price: 3,
                }],
                title: {
                  chineseName: '配菜',
                  name: 'Garnish',
                },
              },
              radio: {
                content: [{
                  chineseName: '大杯',
                  name: 'big',
                  price: 3,
                }, {
                  chineseName: '中杯',
                  name: 'mid',
                  price: 2,
                }, {
                  chineseName: '小杯',
                  name: 'sm',
                  price: 0,
                }],
                title: {
                  chineseName: '型号',
                  name: 'xinghao',
                },
              },
            },
            price: 3,
            stock: 6,
          }, {
            _id: 'aLaCarte_001',
            category: {
              chineseName: '头菜',
              name: 'The first dash',
            },
            categoryNum: 1,
            description: '配料信息mock数据',
            extraInfo: '附加信息mock数据',
            name: {
              chineseName: '面包和橄榄1',
              name: 'Bread and Olives1',
            },
            image: 'https://m.360buyimg.com/n12/jfs/t2938/141/161562315/370464/79e5296/574e38faNb075dd83.jpg!q70.jpg',
            operateTime: '2017-10-30T13:24:32.201Z',
            operator: 'UT-TESTER',
            options: {
              checkbox: {
                content: [{
                  chineseName: '炸薯条',
                  name: 'French fries',
                  price: 3,
                }],
                title: {
                  chineseName: '配菜',
                  name: 'Garnish',
                },
              },
              radio: {
                content: [{
                  chineseName: '大杯',
                  name: 'big',
                  price: 3,
                }, {
                  chineseName: '中杯',
                  name: 'mid',
                  price: 2,
                }, {
                  chineseName: '小杯',
                  name: 'sm',
                  price: 0,
                }],
                title: {
                  chineseName: '型号',
                  name: 'xinghao',
                },
              },
            },
            price: 3,
            stock: 6,
          }],
        }
      },
    },
    setMenuLeftSelected: '套餐一',
    selectedStyle: 'aLaCarte',
    showModal: false,
    alaCarteModal: false,
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
    // const addItem = e.target.dataset.alacarte;
    const aLaCarte = this.data.aLaCarte;
    for (var p in aLaCarte) {
      aLaCarte[p].map(item => {
        if(item._id === addItem._id) {
          const number = item.num || 0;
          item.num = number + 1;
          // const aLaCarteNumber = aLaCarte[p].aLaCarteNumber || 0;
          // aLaCarte[p].aLaCarteNumber = aLaCarteNumber + 1;
        }
      });
    }
    console.log(aLaCarte);
    this.setData({
      aLaCarte,
    });
    console.log(this.data.aLaCarte);
  },
  /**
   * 删除单点
   */
  removeAlaCarte: function(e) {
    const addItem = e.target.dataset.alacarte;
    const aLaCarte = this.data.aLaCarte;
    for (var p in aLaCarte) {
      aLaCarte[p].map(item => {
        if(item._id === addItem._id) {
          const number = item.num || 0;
          item.num = number - 1;
          // const aLaCarteNumber = aLaCarte[p].aLaCarteNumber || 0;
          // aLaCarte[p].aLaCarteNumber = aLaCarteNumber - 1;
        }
      });
    }
    this.setData({
      aLaCarte,
    });
  },
  /**
   * 添加套餐
   */
  addSetMenu: function(e) {
    const addItem = e.target.dataset.setmenu;
    const setMenu = this.data.setMenu;
    for (var p in setMenu) {
      if(setMenu[p]._id === addItem._id) {
        const number = setMenu[p].num || 0;
        setMenu[p].num = number + 1;
      }
    }
    this.setData({
      setMenu,
    });
  },
  /**
   * 删除套餐
   */
  removeSetMenu: function(e) {
    const addItem = e.target.dataset.setmenu;
    const setMenu = this.data.setMenu;
    for (var p in setMenu) {
      if(setMenu[p]._id === addItem._id) {
        const number = setMenu[p].num || 0;
        setMenu[p].num = number - 1;
      }
    }
    this.setData({
      setMenu,
    });
  },
  /**
   * 弹窗
   */
  showALaCarteModal: function(e) {
    console.log(e);
    this.setData({
      alaCarteModal: true,
      addItem: e.target.dataset.alacarte,
    })
  },
  /**
   * 弹窗
   */
  showDetails: function() {
    this.setData({
      showModal: true
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
  hiddenAlaCarteModal: function (e) {
    this.setData({
      alaCarteModal: false
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
  hideAlaCarteModal: function () {
    this.setData({
      alaCarteModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
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
    console.log();
    this.hideAlaCarteModal();
    this.addAlaCarte(this.data.addItem);
  }

})
