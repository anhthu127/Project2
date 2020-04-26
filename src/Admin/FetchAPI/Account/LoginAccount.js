import { domain } from '../../../Constant'

export default function loginAccount(data) {
    return new Promise((resolve, reject) => {
        const url = domain + `/staff?user_name=${data.username}&password=${data.password}`
        console.log("url : " + url)
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
