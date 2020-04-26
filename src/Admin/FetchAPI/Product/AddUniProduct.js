import { domain } from '../../../Constant'
export default function addUniProduct(data) {

  return new Promise((resolve, reject) => {

    const url = domain + '/uni_product'
    fetch(url, {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data)
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

