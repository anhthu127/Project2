import * as type from "../../Constant"
const DEFAULT_STATE = {
    staffAccount: null

}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {

        //list staff
        case type.get_list_staff_request:
            return {
                ...state,
            };
        case type.get_list_staff_success:
            return {
                ...state,
                payload: action.payload
            };
        case type.get_list_staff_failure:
            return {
                ...state
            };

        case type.login_account_request:
            return {
                ...state,
            };
        case type.login_account_success:
            return {
                ...state,
                payload: action.payload
            };
        case type.login_account_falure:
            return {
                ...state
            };
        default:
            return state;
    }

}