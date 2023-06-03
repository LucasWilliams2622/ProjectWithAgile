import {all, takeEvery} from 'redux-saga/effects';

/**
 * when it listen the change it will run appSaga
 */
import appSaga from './appSaga';
import demoSaga from './demoSaga';

export default sagas = function*(){
    yield all([
        takeEvery('CHANGE_APP_MODE',appSaga),
        takeEvery('GET_COMMENTS',demoSaga)
    ])
}
