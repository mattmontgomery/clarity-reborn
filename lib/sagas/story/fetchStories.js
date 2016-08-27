import { put, take } from 'redux-saga/effects';
import qwest from 'qwest';

export default function* fetchStories() {
    while (true) {
        const {payload} = yield take('FETCH_STORIES');
        const {pivotal} = window.ClarityReborn.config;
        const url = pivotal.apiBaseUrl + 'projects/' + pivotal.projectId + '/stories';
        const stories = yield qwest.get(url, {
            filter: "state:"+payload.state.join(',')
            //with_state: payload.state,
            //with_story_type: "feature,bug,chore"
        }, {
            headers: {
                "X-TrackerToken": pivotal.apiKey
            }
        }).then((xhr, res)=> {
            return res;
        }).catch((err)=> {
            return [];
        });
        yield put({type: "ADD_STORIES", payload: stories});
    }
}
