import * as actionTypes from '../actionTypes'
export default function home(state = {
    data: [],
    loading: false
}, action) {
    console.log(11112222, action);
    
    switch (action.type) {
        case actionTypes.HOME_LIST_UPDATING:
            return { ...state, loading: true, data: state.data }
        case actionTypes.HOME_LIST:
            return { ...state, loading: false, data: action.val }
        case actionTypes.HOME_LIST_ERROR:
            return { ...state, loading: false, data: [] }
        default:
            return state;
    }
}