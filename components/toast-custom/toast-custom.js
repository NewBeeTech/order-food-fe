/**
 * Toast
 */

let _compData = {
  '__toast__.isShow': false,
  '__toast__.content': '',
}
let toastCustom = {
  showToast: function(data) {
    let self = this;
    self.setData({
      '__toast__.isShow': true,
      '__toast__.content': data,
    });
    setTimeout(function(){
      self.setData({
        '__toast__.isShow': false,
      });
    }, 2000);
  }
}
function ToastCustom () {
  // 拿到当前页面对象
  let pages = getCurrentPages();
  let curPage = pages[pages.length - 1];
  this.__page = curPage;
  Object.assign(curPage, toastCustom);
  // 附加到page上，方便访问
  curPage.toastCustom = this;
  // 把组件的数据“注入”到页面的data对象中
  curPage.setData(_compData);
  console.log(curPage.data);
  return this;
}

module.exports = {
  ToastCustom
}
