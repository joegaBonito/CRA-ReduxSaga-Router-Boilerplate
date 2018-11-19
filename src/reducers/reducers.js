import { INCREMENT, DECREMENT, SYNCHRONIZE } from '../actions/index';

const initialState = {
    count: 0,
    value: 0
}

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            let objInc = {
                ...state,
                count: state.count + 1
            }
            console.log(objInc);
            return objInc;
        case DECREMENT:
            let objDec = {
                ...state,
                count: state.count - 1
            }
            console.log(objDec);
            return objDec;
        case SYNCHRONIZE:
            let objSync = {
                ...state,
                value: state.count
            }
            console.log(objSync);
            return objSync;
        default:
            return state
    }
}