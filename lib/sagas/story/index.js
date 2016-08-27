import addStory from './addStory';
import addStoryDone from './addStoryDone';
import fetchStories from './fetchStories';

export default function* rootSaga() {
    yield [
        addStory(),
        addStoryDone(),
        fetchStories()
    ];
}
