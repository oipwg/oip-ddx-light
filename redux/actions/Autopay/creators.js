export const THRESHOLDS = 'THRESHOLDS'
export const UPDATE_INPUT = 'UPDATE_INPUT'

export const updateInput = (payload) => (dispatch) => {

    dispatch({
        type: UPDATE_INPUT,
        payload
    })
}

export const PURCHASED_TXID = 'PURCHASED_TXID';
export const updatePurchasedTxid = (payload) => (dispatch) => {  
    dispatch({
        type: PURCHASED_TXID,
        payload
    })
}