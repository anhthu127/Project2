import { all } from 'redux-saga/effects';
import { adsSaga } from './Home'
import { CusAccountSaga } from "./AccountSaga"
import {cartSaga} from "./CartSaga"

import { UniSaga } from "../Admin/Saga/UniSaga"
import { CustomerSaga } from "../Admin/Saga/CustomerAccount"
import { HomeAdminSaga } from "../Admin/Saga/HomeAdmin"
import { AccountSaga } from "../Admin/Saga/AccountSaga"
function* rootSaga() {
    yield all([
        ...CusAccountSaga,
        ...adsSaga,
        ...cartSaga,
        ...UniSaga,
        ...CustomerSaga,
        ...HomeAdminSaga,
        ...AccountSaga,
    ])
}

export default rootSaga;