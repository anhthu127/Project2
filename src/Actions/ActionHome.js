import * as types from "../Constant"
export function getAdsProducts(payload) {
  return ({
    type: types.get_ads_product_request,
    payload
  });
}
