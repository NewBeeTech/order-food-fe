/**
 * 蒙层
 */

let _compData = {
  '__layer__.isShow': false,
  '__layer__.loadImg': '../../assets/images/loading2.gif',
}
let layer = {
  showLayer: function() {
    let self = this;
    self.setData({
      '__layer__.isShow': true,
    });
  },
  hiddenLayer: function() {
    let self = this;
    self.setData({
      '__layer__.isShow': false,
    });
  }
}
function Layer () {
  // 拿到当前页面对象
  let pages = getCurrentPages();
  let curPage = pages[pages.length - 1];
  this.__page = curPage;
  Object.assign(curPage, layer);
  // 附加到page上，方便访问
  curPage.layer = this;
  // 把组件的数据“注入”到页面的data对象中
  curPage.setData(_compData);
  console.log('layer', this);
  return this;
}

module.exports = {
  Layer
}
