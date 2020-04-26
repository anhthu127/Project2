import { domain } from '../../../Constant'

export default function getAccount() {
  return new Promise((resolve, reject) => {
     const url = domain + "/account"
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
