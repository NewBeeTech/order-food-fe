/**
* 小程序接口地址
*/

const host = 'https://caieatong.com/api/';
const api_url = {
  host,
  // 获取第三方session
  get_session: `${host}auth/getSessionid`,

  // 城市列表
  city_list: `${host}city/list`,

  // 饭店列表
  restaurant_list: `${host}restaurant/listByCity`,

  // 饭店详情
  restaurant_details: `${host}restaurant/getDetail`,

  // 保存订单
  create_order: `${host}order/save`,

  // 获取订单详情
  get_order: `${host}order/getDetail`,

  // 获取历史订单列表
  history_list: `${host}user/getOrderList`,
}

 module.exports = api_url;
