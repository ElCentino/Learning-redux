import C from '../constants'

export const goal = (state, action) => {

    if(C.SET_GOAL === action.type) {

        return parseInt(action.payload);
    } else {

        return state;
    }
}