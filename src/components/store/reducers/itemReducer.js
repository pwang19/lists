const initState = {
    items: [],
    allIDs: []
}

const itemReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const newItem = {
                name: action.item.name,
                id: action.item.id,
                complete: false
            }
            return {
                items: [...state.items, newItem],
                allIDs: [...state.allIDs, newItem.id]
            }
        case 'ITEM_ERROR':
            console.log('item error:', action.err);
            return state
        default:
            return state
    }
}

export default itemReducer