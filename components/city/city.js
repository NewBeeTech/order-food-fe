/**
 * 上拉加载
 */

let _compData = {
  '__city__.isShow': false,
  '__city__.list': [],
  '__city__.currentCity': '',
}
let city = {
  // data: {total: number, current: number, pageSize: number}
  showCity: function(data) {
    let self = this;
    const isShow = this.data.__city__.isShow;
    const list = self.data.cityList;
    this.setData({ '__city__.isShow': !isShow });

    if(!isShow) {
      this.setData({ noScollClass: 'noscroll' });
      this.setData({ '__city__.list': list });
    } else {
      this.setData({ noScollClass: '' });
    }
  },
  choose: function(data) {
    let self = this;
    const city = data.currentTarget.dataset.city;
    const country = data.currentTarget.dataset.country;
    const currentCity = data.currentTarget.dataset.chinese;
    const currency = data.currentTarget.dataset.currency;
    console.log(city, country, currentCity, currency);
    self.setData({ '__city__.isShow': false });
    self.setData({ '__city__.currentCity': currentCity });
    this.setData({
      currentCurrency: currency,
      currentCity: currentCity,
      noScollClass: '',
    });
    // wx.request({
    //   url: this.data.url,
    //   data: {},
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function(res) {
    //     console.log(res.data)
    //     that.setData({
    //       list: this.data.list.concat(res.data.result.list),
    //       current: Number(res.data.result.current),
    //     });
    //   }
    // });

  }
}
function City () {
  // 拿到当前页面对象
  let pages = getCurrentPages();
  let curPage = pages[pages.length - 1];
  Object.assign(curPage, city);
  // 附加到page上，方便访问
  curPage.city = this;
  // 把组件的数据“注入”到页面的data对象中
  curPage.setData(_compData);
  curPage.setData({'__city__.currentCity': this.data.currentCity });
  return this;
}

module.exports = {
  City
}
