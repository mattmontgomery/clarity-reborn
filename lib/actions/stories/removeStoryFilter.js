export default function removeStoryFilter(filterIdx) {
    return {
        type: 'REMOVE_STORY_FILTER',
        payload: filterIdx
    };
}
