export default function fetchStories(state = ['unstarted'], storyTypes = "feature,bug,chore",) {
    return {
        type: "FETCH_STORIES",
        payload: {
            state,
            storyTypes
        }
    };
}
