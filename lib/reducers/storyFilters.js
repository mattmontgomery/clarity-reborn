export default function storyFilters(filters = ['unstarted'], action) {
    switch (action.type) {
        case 'ADD_STORY_FILTER':
            return [
                ...filters,
                action.payload
            ];
        case 'REMOVE_STORY_FILTER':
            return [
                ...filters.slice(0, action.payload),
                ...filters.slice(action.payload + 1)
            ];
        default:
            return filters;
    }
}
