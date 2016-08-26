import addStory from 'sagas/story/addStory';
import addStoryDone from 'sagas/story/addStoryDone';
export default function* rootSaga() {
    yield [
        addStory(),
        addStoryDone(),
    ];
}
