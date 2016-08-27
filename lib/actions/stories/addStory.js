export default function addStory(id) {
    return {
        type: 'ADD_STORY',
        payload: { id }
    };
}
