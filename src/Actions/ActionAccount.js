import * as types from "../Constant"
export function _addNewAccoutn(payload) {
    return ({
        type: types.add_new_account_request,
        payload,
    });
}
