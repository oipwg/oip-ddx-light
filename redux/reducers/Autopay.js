import * as actions from '../actions/Autopay/creators'

const initalState = {
    video: 100,
    audio: 50,
    photos: 30,
    articles: 15,
    other: 10
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
        default:
            return state;
    }


} 


export default Autopay