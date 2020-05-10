import * as type from "../../Constant"
const DEFAULT_STATE = {
    staffAccount: null

}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
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
        case type.refresh_store_request:
            return {
                staffAccount: null
            }
        default:
            return state;
    }
}