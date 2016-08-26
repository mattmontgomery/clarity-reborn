import { delay } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
const { random } = Math;
export default function* addStory() {
    while(true) {
        const { payload } = yield take('ADD_STORY');
        yield call(delay, 200);
        console.log(payload);
        yield [
            put({ type: 'ADD_STORY_DONE', payload: { id: payload.id, random: random() } }),
            put({ type: 'ADD_STORY_DONE', payload: { id: payload.id, random: random() } }),
            put({ type: 'ADD_STORY_DONE', payload: { id: payload.id, random: random() } }),
            put({ type: 'ADD_STORY_DONE', payload: { id: payload.id, random: random() } }),
            put({ type: 'ADD_STORY_DONE', payload: { id: payload.id, random: random() } }),
        ];
    }
}
