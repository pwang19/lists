const initState = {
    collections: [],
    lists: [],
    id: null
}

const collectionReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_LIST_TO_COLLECTION':
            return {
                lists: [...state.lists, action.list]
            }
        case 'COLLECTION_ERROR':
            console.log('collection error:', action.err);
            return state
        default:
            return state
    }

}

export default collectionReducer