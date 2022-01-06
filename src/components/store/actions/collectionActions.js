export const addListToCollection = (list) => {
    return (dispatch, getState) => {
        try {
            dispatch({ type: 'ADD_LIST_TO_COLLECTION', list })
        } catch (err) {
            dispatch({ type: 'ITEM_ERROR', err })
        }
    }
}