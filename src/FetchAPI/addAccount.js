import { domain } from '../Constant'
export default function addAccount(data) {
    return new Promise((resolve, reject) => {
        const url = domain + '/account'
        fetch(url, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
                console.log(res)
            })
            .catch((error) => {
                reject(error);
            });
    });
}
