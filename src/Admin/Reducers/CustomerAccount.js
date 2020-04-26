import * as type from "../../Constant"
const DEFAULT_STATE = {
    Account: null

}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case type.get_list_account_request:
            return {
                ...state,
            };

        case type.get_list_account_success:
            return {
                ...state,
                payload: action.payload
            };
        case type.get_list_account_failure:
            return {
                ...state
            };
        default:
            return state;
    }
}