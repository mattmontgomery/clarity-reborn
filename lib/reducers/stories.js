export default function stories(state = [], action) {
    switch (action.type) {
        case 'ADD_STORY':
            return [
                ...state,
                action.payload
            ]
            break;
        default:
            return state;
    }
}
