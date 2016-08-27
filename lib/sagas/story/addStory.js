import { delay } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
const { random } = Math;
export default function* addStory() {
    while(true) {
        const { payload } = yield take('ADD_STORY');
        console.log(payload);
        yield [];
    }
}
