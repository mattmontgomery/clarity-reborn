import stories from './stories';
import storyFilters from './storyFilters';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    stories,
    storyFilters
});

export default rootReducer;
