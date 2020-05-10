import { domain } from '../../../Constant'
export default function addUniProduct(data) {

  return new Promise((resolve, reject) => {

    const url = domain+ '/product/'+data 
    fetch(url, {
        method: 'DELETE'
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

