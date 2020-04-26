import { adsSaga } from './Home'
import { all } from 'redux-saga/effects';
import { UniSaga } from "../Admin/Saga/UniSaga"
import { CustomerSaga } from "../Admin/Saga/CustomerAccount"
import { HomeAdminSaga } from "../Admin/Saga/HomeAdmin"
import { AccountSaga } from "../Admin/Saga/AccountSaga"
function* rootSaga() {
    yield all([
        ...adsSaga,
        ...UniSaga,
        ...CustomerSaga,
        ...HomeAdminSaga,
        ...AccountSaga,
    ])
}

export default rootSaga;