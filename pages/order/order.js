//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    totalFee: 298,
    currencyType: '$',
    addAlaCarte: [{
      num: 2,
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
            checked: true,
          }, {
            chineseName: '炸薯条4',
            name: 'French fries',
            price: 4,
            checked: true,
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
            checked: true,
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
      num: 2,
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
            checked: true,
          }, {
            chineseName: '炸薯条4',
            name: 'French fries',
            price: 4,
            checked: true,
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
            checked: true,
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
      num: 1,
      checked: true,
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
            checked: true,
          }, {
            chineseName: '炸薯条2',
            name: 'French fries2',
            price: 5,
            checked: true,
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
            checked: true,
          }, {
            chineseName: '中杯',
            name: 'mid',
            price: 2,
            checked: false,
          }, {
            chineseName: '小杯',
            name: 'sm',
            price: 0,
            checked: false,
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
    addSetMenu: [{
      num: 1,
      _id: 'setMenu_004',
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
          checked: true,
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
                checked: true,
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
                checked: true,
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
          checked: true,
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
        }],
      },
    }, {
      num: 2,
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
          checked: true,
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
                checked: true,
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
                checked: true,
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
          checked: true,
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
        }],
      },
    }, {
      num: 2,
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
          checked: true,
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
                checked: true,
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
                checked: true,
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
          checked: true,
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
        }],
      },
    }]
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },

  newAlaCarte: function (arr) {
    arr.sort();
    for (var i = 0; i <= arr.length - 1; i++) {
      arr[i].list = [];
      if (arr[i + 1]) {
        if (arr[i]._id == arr[i + 1]._id) {
          arr[i].list.push(arr[i].options);
          arr[i].list.push(arr[i+1].options);
          arr.splice(i + 1, 1);
        } else {
          arr[i].list.push(arr[i].options);
        }
      } else {
        arr[i].list.push(arr[i].options);
      }
    };
    return arr;
  },
  newSetMenu: function (arr) {
    // console.log(arr);
    arr.sort();
    for (var i = 0; i <= arr.length - 1; i++) {
      arr[i].list = [];
      if (arr[i + 1]) {
        if (arr[i]._id == arr[i + 1]._id) {
          console.log("包含相同元素，相同值为：", arr[i], arr[i+1]);
          arr[i].list.push(arr[i].setMenuDetail);
          arr[i].list.push(arr[i+1].setMenuDetail);
          arr.splice(i + 1, 1);
        } else {
          arr[i].list.push(arr[i].setMenuDetail);
        }
      } else {
        arr[i].list.push(arr[i].setMenuDetail);
      }
    }
    console.log(arr);
    return arr;
  },
  onLoad: function (options) {
    console.log('onLoad', this.data)
    console.log('onLoad ===> options', options)
    var that = this;
    new app.ToastCustom();
    //调用应用实例的方法获取全局数据
    const addAlaCarte = app.globalData.addAlaCarte || this.data.addAlaCarte;
    const addSetMenu = app.globalData.addSetMenu || this.data.addSetMenu;
    const newAlaCarte = this.newAlaCarte(addAlaCarte);
    const newSetMenu = this.newSetMenu(addSetMenu);

    that.setData({
      addAlaCarte: newAlaCarte,
      addSetMenu: newSetMenu,
      currencyType: app.globalData.currencyType,
      totalFee: app.globalData.totalFee,
      urlId: options.id,
    })
  },
  returnToUpdate: function() {
    // wx.navigateTo({
    //   url: '../restaurant/restaurant'
    // })
    wx.navigateBack({
      delta: 1
    })
  },
  confirm: function() {
    this.showToast("TODO: 调接口")
    // wx.navigateTo({
    //   url: '../history/history'
    // })
  }


})
