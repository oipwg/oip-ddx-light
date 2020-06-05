import * as actions from '../actions/Autopay/creators'

const initalState = {
    video: 100,
    audio: 50,
    photos: 30,
    articles: 15,
    other: 10,
    purchased: [
    
    ]
}

const Autopay = (state = initalState, action) => {

    switch (action.type){
        case actions.THRESHOLDS: {
            return {
                ...state,
            }
        }
        case actions.UPDATE_INPUT: {
            return {
                ...state,
                ...action.payload
                
            }
        }
        case actions.PURCHASED_TXID: {
            return {
                ...state,
                purchased: [...state.purchased, {
                    txid: action.payload.txid,
                    payment_txid: action.payload.payment_txid,
                    terms: action.payload.terms
                }]

            }
        }
        default:
            return state;
    }


} 


export default Autopay