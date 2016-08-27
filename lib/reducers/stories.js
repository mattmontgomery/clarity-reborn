export default function stories(state = [], action) {
    console.log(state,action);
    switch (action.type) {
        case 'ADD_STORIES':
            console.log(action.payload);
            return action.payload;
        case 'ADD_STORY':
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}
