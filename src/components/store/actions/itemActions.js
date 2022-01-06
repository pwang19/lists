export const addItem = (item) => {
    return (dispatch, getState) => {
        try {
            dispatch({ type: 'ADD_ITEM', item })
        } catch (err) {
            dispatch({ type: 'ITEM_ERROR', err })
        }
    }
}