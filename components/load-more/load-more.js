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
    this.setData({ '__loadmore__.hasMore': hasMore });
  },
  loading: function(data) {
    let self = this;
    console.log(data);
    if(!this.data.__loadmore__.hasMore) return;
    that.setData({ '__loadmore__.isLoading': true });
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
