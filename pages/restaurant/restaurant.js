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
          chineseName: '单选复选都有',
          name: '主菜XXXX1',
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
              price: 6,
            }, {
              chineseName: '中杯',
              name: 'mid',
              price: 5,
            }, {
              chineseName: '小杯',
              name: 'sm',
              price: 3,
              checked: true,
              default: true,
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
        _id: 'aLaCarte_004',
        category: {
          chineseName: '主菜',
          name: 'The Main dash',
        },
        categoryNum: 2,
        description: '',
        extraInfo: '附加信息mock数据',
        name: {
          chineseName: '只有单选',
          name: 'XXXXXX2',
        },
        image: 'https://m.360buyimg.com/n12/jfs/t2938/141/161562315/370464/79e5296/574e38faNb075dd83.jpg!q70.jpg',
        operateTime: '2017-10-30T13:24:32.201Z',
        operator: 'UT-TESTER',
        options: {
          radio: {
            content: [{
              chineseName: '大杯',
              name: 'big',
              price: 6,
            }, {
              chineseName: '中杯',
              name: 'mid',
              price: 5,
            }, {
              chineseName: '小杯',
              name: 'sm',
              price: 3,
              checked: true,
              default: true,
            }],
            title: {
              chineseName: '型号',
              name: 'xinghao',
            },
          },
        },
        price: 5,
        stock: 6,
      }, {
        _id: 'aLaCarte_005',
        category: {
          chineseName: '主菜',
          name: 'The Main dash',
        },
        categoryNum: 2,
        description: '配料信息mock数据',
        extraInfo: '',
        name: {
          chineseName: '只有复选',
          name: '主菜XXXX1',
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
        },
        price: 2,
        stock: 6,
      }, {
        _id: 'aLaCarte_006',
        category: {
          chineseName: '主菜',
          name: 'The Main dash',
        },
        categoryNum: 2,
        description: '配料信息mock数据',
        extraInfo: '附加信息mock数据',
        name: {
          chineseName: '无需选规格',
          name: '主菜XXXX1',
        },
        image: 'https://m.360buyimg.com/n12/jfs/t2938/141/161562315/370464/79e5296/574e38faNb075dd83.jpg!q70.jpg',
        operateTime: '2017-10-30T13:24:32.201Z',
        operator: 'UT-TESTER',
        options: {},
        price: 4,
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
          radio: {
            content: [{
              chineseName: '大杯',
              name: 'big',
              price: 6,
            }, {
              chineseName: '中杯',
              name: 'mid',
              price: 5,
            }, {
              chineseName: '小杯',
              name: 'sm',
              price: 3,
              checked: true,
              default: true,
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
    desc: '我们的汉堡超级好吃哟哟哦yuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu，测试英文单词换行问题~\n hahah \nsfdfd \nsfsdf我们的汉堡超级好吃哟哟哦yuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu，',
    detailImage: [
      'https://pro.modao.cc/uploads3/images/1265/12658374/raw_1505289890.jpeg',
      'https://pro.modao.cc/uploads3/images/1265/12658374/raw_1505289890.jpeg',
      'https://pro.modao.cc/uploads3/images/1265/12658374/raw_1505289890.jpeg',
      'https://pro.modao.cc/uploads3/images/1265/12658374/raw_1505289890.jpeg'
    ],
    mainImage: 'https://pro.modao.cc/uploads3/images/1289/12896118/raw_1505974928.jpeg',
    name: 'ssfsdfsfosfs & psfsdfsfsfsfsdffsfdsfsdfsdff',
    notes: '这里是饭店提示哦~',
    phoneNumber: '18612761252',
    operator: 'UT-TESTER',
    position: '-0.123298,51.511281',
    priceLevel: 5,
    rating: 4,
    setMenu: {
      '套餐一': {
        _id: 'setMenu_001',
        desc: '套餐一含3个头菜1个主菜',
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
                  price: 6,
                }, {
                  chineseName: '中杯',
                  name: 'mid',
                  price: 5,
                }, {
                  chineseName: '小杯',
                  name: 'sm',
                  price: 3,
                  checked: true,
                  default: true,
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
              // checkbox: {
              //   content: [{
              //     chineseName: '炸薯条',
              //     name: 'French fries',
              //     price: 3,
              //   }],
              //   title: {
              //     chineseName: '配菜',
              //     name: 'Garnish',
              //   },
              // },
              radio: {
                content: [{
                  chineseName: '大杯',
                  name: 'big',
                  price: 6,
                }, {
                  chineseName: '中杯',
                  name: 'mid',
                  price: 5,
                }, {
                  chineseName: '小杯',
                  name: 'sm',
                  price: 3,
                  checked: true,
                  default: true,
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
              // radio: {
              //   content: [{
              //     chineseName: '大杯',
              //     name: 'big',
              //     price: 3,
              //   }, {
              //     chineseName: '中杯',
              //     name: 'mid',
              //     price: 2,
              //   }, {
              //     chineseName: '小杯',
              //     name: 'sm',
              //     price: 0,
              //   }],
              //   title: {
              //     chineseName: '型号',
              //     name: 'xinghao',
              //   },
              // },
            },
            price: 3,
            stock: 6,
          }, {
            _id: 'aLaCarte_005',
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
              // checkbox: {
              //   content: [{
              //     chineseName: '炸薯条',
              //     name: 'French fries',
              //     price: 3,
              //   }],
              //   title: {
              //     chineseName: '配菜',
              //     name: 'Garnish',
              //   },
              // },
              // radio: {
              //   content: [{
              //     chineseName: '大杯',
              //     name: 'big',
              //     price: 3,
              //   }, {
              //     chineseName: '中杯',
              //     name: 'mid',
              //     price: 2,
              //   }, {
              //     chineseName: '小杯',
              //     name: 'sm',
              //     price: 0,
              //   }],
              //   title: {
              //     chineseName: '型号',
              //     name: 'xinghao',
              //   },
              // },
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
          chineseName: '套餐二',
          name: 'Combo2',
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
                  price: 6,
                }, {
                  chineseName: '中杯',
                  name: 'mid',
                  price: 5,
                }, {
                  chineseName: '小杯',
                  name: 'sm',
                  price: 3,
                  checked: true,
                  default: true,
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
                  price: 6,
                }, {
                  chineseName: '中杯',
                  name: 'mid',
                  price: 5,
                }, {
                  chineseName: '小杯',
                  name: 'sm',
                  price: 3,
                  checked: true,
                  default: true,
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
                  price: 6,
                }, {
                  chineseName: '中杯',
                  name: 'mid',
                  price: 5,
                }, {
                  chineseName: '小杯',
                  name: 'sm',
                  price: 3,
                  checked: true,
                  default: true,
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
      '套餐三': {
        _id: 'setMenu_003',
        desc: '套餐一含1个头菜1个主菜',
        category: {
          chineseName: '套餐三',
          name: 'Combo3',
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
                  price: 6,
                }, {
                  chineseName: '中杯',
                  name: 'mid',
                  price: 5,
                }, {
                  chineseName: '小杯',
                  name: 'sm',
                  price: 3,
                  checked: true,
                  default: true,
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
                  price: 6,
                }, {
                  chineseName: '中杯',
                  name: 'mid',
                  price: 5,
                }, {
                  chineseName: '小杯',
                  name: 'sm',
                  price: 3,
                  checked: true,
                  default: true,
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
      '套餐四': {
        _id: 'setMenu_004',
        desc: '套餐一含1个头菜1个主菜，无复选无单选',
        category: {
          chineseName: '套餐四',
          name: 'Combo4',
        },
        description: '配料信息mock数据',
        extraInfo: '附加信息mock数据',
        operateTime: '2017-10-30T13:24:32.201Z',
        operator: 'UT-TESTER',
        price: 10,
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
            },
            price: 7,
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
            options: {},
            price: 4,
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
      path: `/pages/restaurant/restaurant?id=${this.data.menuId}`,
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
  onLoad: function () {
    console.log('onLoad', this)
    var that = this;
    new app.ToastCustom();
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
    // TODO: 单点和套餐默认选择第一个
    // setMenuLeftSelected: '套餐一',
    // aLaCarteLeftSelected: '头菜',
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
    let defaultPrice = 0;
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
              if(i.default) {
                defaultPrice = i.price;
              }
            });
          }
          if(addItem.options.radio !== undefined) {
            addItem.options.radio.content.map((i, key) => {
              if(i.checked) {
                const currentPrice =  i.price - defaultPrice
                totalFee += currentPrice;
              }
            });
          }
          // console.log(totalFee);
          const number = item.num || 0;
          item.num = number + 1;
          addItem.num = number + 1;
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
    const addAlaCarte = this.data.addAlaCarte;
    let totalFee = this.data.totalFee;
    let removeIndex = this.data.radioALaCarteRemoveIndex
    for (var i in addAlaCarte) {
      if(JSON.stringify(addAlaCarte[i]) === JSON.stringify((removeAlaCarte[removeIndex]))) {
        addAlaCarte.splice(i, 1);
        break;
      }
    }
    const removeItem = removeAlaCarte[removeIndex];
    removeAlaCarte.splice(removeIndex, 1);
    let defaultPrice = 0;
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
              if(i.default) {
                defaultPrice = i.price;
              }
            });
          }
          if(removeItem.options.radio !== undefined) {
            removeItem.options.radio.content.map((i, key) => {
              if(i.checked) {
                const currentPrice =  i.price - defaultPrice
                totalFee -= currentPrice;
              }
            });
          }
          const number = item.num || 0;
          item.num = number - 1;
          // const aLaCarteNumber = aLaCarte[p].aLaCarteNumber || 0;
          // aLaCarte[p].aLaCarteNumber = aLaCarteNumber - 1;
        }
      });
    }
    this.setData({
      aLaCarte,
      removeAlaCarte: [],
      addAlaCarte,
      addItem: {},
      radioALaCarteRemoveIndex: 0,
      totalFee,
    });
  },
  /**
   * 添加套餐
   */
  addSetMenu: function(addItem) {
    const setMenu = this.data.setMenu;
    let totalFee = this.data.totalFee;
    for (var p in setMenu) {
      if(setMenu[p]._id === addItem._id) {
        totalFee += setMenu[p].price;
        const number = setMenu[p].num || 0;
        setMenu[p].num = number + 1;
        addItem.num = number + 1;
      }
    }
    const addSetMenu = this.data.addSetMenu;
    addSetMenu.push(addItem);
    this.setData({
      setMenu,
      addSetMenu,
      addItem: {},
      totalFee,
    });
  },
  /**
   * 删除套餐
   */
  removeSetMenu: function(addItem) {
    const setMenu = this.data.setMenu;
    const removeSetMenu = this.data.removeSetMenu;
    const addSetMenu = this.data.addSetMenu;
    let totalFee = this.data.totalFee;
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
      totalFee,
    });
  },
  /**
   * 弹窗
   */
  showALaCarteModal: function(e) {
    const alacarte = e.target.dataset.alacarte
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
    console.log(setmenu);
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
    console.log(detailInfo);
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
                if(item.options.checkbox.content !== undefined) {
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
    app.globalData.currencyType = this.data.currencyType;
    app.globalData.totalFee = this.data.totalFee;
    app.globalData.resName = this.data.name;
    app.globalData.notes = this.data.notes;
    this.createOrder();
  },
  createOrder: function() {
    wx.navigateTo({
      url: '../order/order'
    })
  },
  toastHidden:function() {
    this.setData({
      hiddenToast: true,
    });
  }

})
