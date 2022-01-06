const initState = {
    lists: [],
    allIDs: []
}

const listReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_LIST':
            const newList = {
                name: action.list.name,
                items: action.list.items,
                id: action.list.id
            }
            return {
                lists: [...state.lists, newList],
                allIDs: [...state.allIDs, newList.id]
            }
        case 'ADD_ITEM_TO_LIST':
            const listID = action.item.listID;
            const listIndex = state.allIDs.indexOf(listID);
            state.lists[listIndex].items.push({
                name: action.item.name,
                id: action.item.id,
                complete: action.item.complete
            })
            return state
        case 'LIST_ERROR':
            console.log('list error:', action.err);
            return state
        default:
            return state
    }

}

export default listReducer