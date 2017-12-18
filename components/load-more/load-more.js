/**
 * 上拉加载
 */

let _compData = {
  '__loadmore__.hasMore': false,
  '__loadmore__.isLoading': false,
}

let loadMore = {
  // data: {total: number, current: number, pageSize: number}
  show: function(data) {
    let self = this;
    let hasMore = false;
    if(data.total > data.current * data.pageSize) hasMore = true;
    self.setData({ '__loadmore__.hasMore': hasMore });
  },
  loading: function(data) {
    let self = this;
    if(!data.__loadmore__.hasMore) return;
    self.setData({ '__loadmore__.isLoading': true });
    var that = this;
    wx.showLoading({
      mask: true,
    })
    // that.setData({ restaurantList:[], total: 0 });
    // 请求餐厅列表
    wx.request({
      url: that.data.url,
      header:{
        "Content-Type":"application/json"
      },
      data: {
        "city.name": that.data.currentCityEg,
        "country.name": that.data.currentCountry,
        "pageNo": that.data.current + 1,
        "pageSize": 10,
      },
      success: function(res){
        if(res.data.code === 0){
          const list = res.data.data.rows;
          list.map((item, index) => {
            let rating1 = item.rating;
            let rating2 = 0;
            const rating = item.rating;
            const ratingInt = parseInt(rating);
            if ( rating > ratingInt) {
              rating1 = ratingInt;
              rating2 = 1;
            }
            item['rating1'] = rating1;
            item['rating2'] = rating2;
          })
          that.setData({
            restaurantList: that.data.restaurantList.concat(list),
            current: Number(that.data.current + 1),
            total: res.data.data.total,
          });
          // app.globalData.currencyType = that.data.currentCurrency;
          let hasMore = false;
          if(res.data.data.total > (that.data.current + 1) * that.data.pageSize) hasMore = true;
          self.setData({ '__loadmore__.hasMore': hasMore });
          wx.hideLoading();
        } else {
          wx.hideLoading();
          wx.showToast({
            title: '加载失败',
            image: '../../assets/images/fail.png',
          })
        }
        self.setData({ '__loadmore__.isLoading': false });
      },
      fail: function(res){
        wx.hideLoading();
        wx.showToast({
          title: '加载失败',
          image: '../../assets/images/fail.png',
        })
        self.setData({ '__loadmore__.isLoading': false });
      },
    })
  }
}
function LoadMore () {
  // 拿到当前页面对象
  let pages = getCurrentPages();
  let curPage = pages[pages.length - 1];
  Object.assign(curPage, loadMore);
  // 附加到page上，方便访问
  curPage.loadMore = this;
  // 把组件的数据“注入”到页面的data对象中
  curPage.setData(_compData);
  return this;
}

module.exports = {
  LoadMore
}
