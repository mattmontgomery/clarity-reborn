import story from 'sagas/story';
export default function* rootSaga() {
    yield [
        story()
    ];
}
