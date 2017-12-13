/**
* TODO:网络请求封装
*/

function getApi(url) {

  wx.request({
    url,
    header:{
      "Content-Type":"application/json"
    },
    data: {},
    success: function(res){
      // that.setData({ cityList:res.data.data });
    },
  })
}


module.exports = {
  getApi
}
