export const addItemToList = (item) => {
    return (dispatch, getState) => {
        try {
            dispatch({ type: 'ADD_ITEM_TO_LIST', item })
        } catch (err) {
            dispatch({ type: 'LIST_ERROR', err })
        }
    }
}

export const createList = (list) => {
    return (dispatch, getState) => {
        try {
            dispatch({ type: 'CREATE_LIST', list })
        } catch (err) {
            dispatch({ type: 'LIST_ERROR', err })
        }
    }
}