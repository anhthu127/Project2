import {   adsSaga } from './Home'
import { all } from 'redux-saga/effects';
import {UniSaga} from "../Admin/Saga/UniSaga"

function* rootSaga( ) {
    yield all([
        ...adsSaga,
        ...UniSaga,
    ])
}

export default rootSaga;