import { delay } from 'redux-saga';
import { take } from 'redux-saga/effects';

export default function* addStoryDone() {
    while(true) {
        const { payload } = yield take('ADD_STORY_DONE');
        console.log(payload);
    }
}
