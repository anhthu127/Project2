import { domain } from '../../../Constant'
export default function updateUni(data) {
  console.log("fetch:  " + JSON.stringify(data))
  return new Promise((resolve, reject) => {

    const url = domain + '/uni_product/'+ data.id
    fetch(url, {
      method: "PATCH",
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

