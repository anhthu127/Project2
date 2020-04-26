import * as types from "../../Constant"

export function _GetListStaffAccount() {
    return ({
        type: types.get_list_staff_request,
    })
};
export function _GetSalary() {
    return ({
        type: types.get_list_staff_salary_request,
    })
}
export function _GetListSuplier() {
    return ({
        type: types.get_uni_product_request,
    })
};
