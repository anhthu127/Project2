import { domain } from '../Constant'
export default function deleteCart(data) {
    console.log("fetch: " + data)
    return new Promise((resolve, reject) => {
        const url = domain + '/cart/' + data;
        fetch(url, {
            method: "DELETE",
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