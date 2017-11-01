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
            }, {
              chineseName: '炸薯条4',
              name: 'French fries',
              price: 4,
            }, {
              chineseName: '炸薯条5',
              name: 'French fries',
              price: 5,
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
              chineseName: '炸薯条3',
              name: 'French fries',
              price: 3,
            }, {
              chineseName: '炸薯条4',
              name: 'French fries',
              price: 4,
            }, {
              chineseName: '炸薯条5',
              name: 'French fries',
              price: 5,
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
    removeAlaCarteModal: false,
    removeAlaCarte: [], // 删除弹框里的数据
    radioALaCarteRemoveIndex: '',
    addAlaCarte: [], // 已经添加的单品
    addItem: {}, // 添加的食物临时站位
    totalFee: 0,
    detailInfo: {},
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
    let totalFee = this.data.totalFee;
    for (var p in aLaCarte) {
      aLaCarte[p].map(item => {
        if(item._id === addItem._id) {
          totalFee += item.price;
          addItem.options.checkbox.content.map((i, key) => {
            if(i.checked) {
              totalFee += i.price;
            }
          });
          addItem.options.radio.content.map((i, key) => {
            if(i.checked) {
              totalFee += i.price;
            }
          });
          // console.log(totalFee);
          const number = item.num || 0;
          item.num = number + 1;
          // const aLaCarteNumber = aLaCarte[p].aLaCarteNumber || 0;
          // aLaCarte[p].aLaCarteNumber = aLaCarteNumber + 1;
        }
      });
    }
    const addAlaCarte = this.data.addAlaCarte;
    addAlaCarte.push(addItem);
    this.setData({
      aLaCarte,
      addAlaCarte,
      addItem: {},
      totalFee,
    });
  },
  /**
   * 删除单点
   */
  removeAlaCarte: function(addItem) {
    const aLaCarte = this.data.aLaCarte;
    const removeAlaCarte = this.data.removeAlaCarte;
    console.log(removeAlaCarte[this.data.radioALaCarteRemoveIndex]);
    const addAlaCarte = this.data.addAlaCarte;
    let totalFee = this.data.totalFee;
    for (var i in addAlaCarte) {
      if(addAlaCarte[i].toString() === removeAlaCarte[this.data.radioALaCarteRemoveIndex].toString()) {
        addAlaCarte.splice(i, 1);
        break;
      }
    }
    const removeItem = removeAlaCarte[this.data.radioALaCarteRemoveIndex];
    removeAlaCarte.splice(this.data.radioALaCarteRemoveIndex, 1);
    for (var p in aLaCarte) {
      aLaCarte[p].map(item => {
        if(item._id === addItem._id) {
          totalFee -= item.price;
          removeItem.options.checkbox.content.map((i, key) => {
            if(i.checked) {
              totalFee -= i.price;
            }
          });
          removeItem.options.radio.content.map((i, key) => {
            if(i.checked) {
              totalFee -= i.price;
            }
          });
          const number = item.num || 0;
          item.num = number - 1;
          // const aLaCarteNumber = aLaCarte[p].aLaCarteNumber || 0;
          // aLaCarte[p].aLaCarteNumber = aLaCarteNumber - 1;
        }
      });
    }
    this.setData({
      aLaCarte,
      removeAlaCarte,
      addAlaCarte,
      addItem: {},
      totalFee,
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
    this.setData({
      alaCarteModal: true,
      addItem: e.target.dataset.alacarte,
    })
  },
  /**
   * 弹窗
   */
  showRemoveAlaCarteModal: function(e) {
    const currentAlacarte = e.target.dataset.alacarte;
    const addAlaCarte = this.data.addAlaCarte;
    const removeAlaCarte = [];
    addAlaCarte.map((item, index) => {
      if(item._id === currentAlacarte._id){
        removeAlaCarte.push(item);
      }
    });
    this.setData({
      addItem: currentAlacarte,
      removeAlaCarte,
      removeAlaCarteModal: true,
    })
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
  hiddenAlaCarteModal: function (e) {
    this.setData({
      alaCarteModal: false
    });
  },
  /**
   * 隐藏模态对话框
   */
  hiddenRemoveAlaCarteModal: function (e) {
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
   * 对话框取消按钮点击事件
   */
  onRemoveAlaCarteCancel: function () {
    this.hiddenRemoveAlaCarteModal();
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
    this.hiddenRemoveAlaCarteModal();
    this.removeAlaCarte(this.data.addItem);
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
  }

})
