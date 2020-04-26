import { domain } from '../../../Constant'

export default function getStaffAcount() {
    return new Promise((resolve, reject) => {
        const url = domain + "/staff"
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
