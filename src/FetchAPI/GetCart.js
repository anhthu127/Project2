import { domain } from '../Constant'
export default function getCArt(data) {
    console.log("fetch: "+data)
    return new Promise((resolve, reject) => {
        const url = domain + '/cart/?user_id=' + data
        fetch(url, {
            method: "GET",
            headers: { "Content-type": "application/json" },
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