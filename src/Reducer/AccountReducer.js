import * as type from "../Constant"

const DEFAULT_STATE = {
    isLoading: false,
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessage: null,
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case type.add_new_account_request:
            return {
                ...state,
                isLoading: true,
            };
        case type.add_new_account_success:
            return {
                ...state,
                isLoading: false
            };
        case type.add_new_account_failure:
            return {
                ...state,
                isLoading: true,
                errorMessage: action.payload.errorMessage
            };
        case type.client_login_request:
            return {
                ...state,

            }
        case type.client_login_success:
            return {
                ...state,
                isLoading: false
            };
        case type.client_login_failure:
            return {
                ...state,
                isLoading: true,
                errorMessage: action.payload.errorMessage
            };
        default: // need this for default case
            return state
    }
}