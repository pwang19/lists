import { combineReducers } from 'redux'
import listReducer from './listReducer';
import itemReducer from './itemReducer';
import collectionReducer from './collectionReducer';

const rootReducer = combineReducers({
    collection: collectionReducer,
    list: listReducer,
    item: itemReducer
})

export default rootReducer;