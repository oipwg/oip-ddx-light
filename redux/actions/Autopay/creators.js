export const THRESHOLDS = 'THRESHOLDS'
export const UPDATE_INPUT = 'UPDATE_INPUT'

export const updateInput = (payload) => (dispatch) => {

    dispatch({
        type: UPDATE_INPUT,
        payload
    })
}