import { domain } from '../Constant'
export default function getAds() {
    // const dataToServer = {
    //     type: data.type.trim()
    // }
    return new Promise((resolve, reject) => {
        const url = domain + '/product';
        fetch(url, {
            method: "GET",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify()
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
