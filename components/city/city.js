/**
 * 上拉加载
 */

let _compData = {
  '__city__.isShow': false,
  '__city__.list': [],
}

let city = {
  // data: {total: number, current: number, pageSize: number}
  show: function(data) {
    let self = this;
    const isShow = this.data.__city__.isShow;
    const list = self.data.cityList;
    this.setData({ '__city__.isShow': !isShow });
    if(!isShow) {
      this.setData({ '__city__.list': list });
    }
    console.log(this.data.__city__.list);
  },
  choose: function(data) {
    let self = this;
    console.log(data);
    if(!this.data.__city__.hasMore) return;
    that.setData({ '__city__.isLoading': true });
    console.log(this.data.current, this.data.pageSize);
    wx.request({
      url: this.data.url,
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data)
        that.setData({
          list: this.data.list.concat(res.data.result.list),
          current: Number(res.data.result.current),
        });
      }
    })
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
  return this;
}

module.exports = {
  City
}
