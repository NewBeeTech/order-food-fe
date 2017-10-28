/**
* 小程序接口地址
*/

const host = 'http://test.dashooo.com';

const api_url = {
  host,

  // 城市列表
  city_list: `${host}/api/restaurant/listByCity`,

  // 饭店列表
  restaurant_list: `${host}/api/city/list`,

  // 饭店详情
  restaurant_details: `${host}/api/restaurant/getDetail`,
}

 module.exports = api_url;
