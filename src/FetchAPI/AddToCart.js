import { domain } from '../Constant'
export default function AddToCart(data) {
  console.log("fetchCart:  " + JSON.stringify(data))
   return new Promise((resolve, reject) => {
    const url = domain + '/cart'
    fetch(url, {
      method: 'PATCH',
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

