import { domain } from '../Constant'
export default function NewReceipt(data) {
    return new Promise((resolve, reject) => {
        const url = domain + '/recepit'
        console.log("fetchCart:  " + JSON.stringify(data))
        fetch(url, {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
                console.log("resCart:  " + JSON.stringify(res))
            })
            .catch((error) => {
                reject(error);
            });
    });
}