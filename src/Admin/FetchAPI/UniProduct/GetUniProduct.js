import { domain } from '../../../Constant'

export default function getUniProduct() {
  return new Promise((resolve, reject) => {
     const url = domain + "/uni_product"
    fetch(url, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
       })
      .catch((error) => {
        reject(error);
      });
  });
}
