/**
* 小程序接口地址
*/

const host = 'https://caieatong.com/api/';
const api_url = {
  host,

  // 城市列表
  city_list: `${host}city/list`,

  // 饭店列表
  restaurant_list: `${host}restaurant/listByCity`,

  // 饭店详情
  restaurant_details: `${host}restaurant/getDetail`,
}

 module.exports = api_url;
