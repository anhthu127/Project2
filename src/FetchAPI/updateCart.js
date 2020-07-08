import { domain } from '../Constant'
export default function updateCart(data, user_id) {
    console.log("fetch: " + data)
    return new Promise((resolve, reject) => {
        const url = domain + '/cart/?user_id=' + user_id;
        fetch(url, {
            method: "PUT",
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