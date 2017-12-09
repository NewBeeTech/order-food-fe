/**
* 小程序接口地址
*/

function getApi(url) {

  wx.request({
    url,
    header:{
      "Content-Type":"application/json"
    },
    data: {},
    success: function(res){
      that.setData({ cityList:res.data.data });
    },
  })
}


module.exports = {
  getApi
}
