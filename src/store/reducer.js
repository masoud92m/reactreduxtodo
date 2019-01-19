import * as actionType from './actions';

const initialState = {
    tasks: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_TASK:
            return {}
        case actionType.DELETE_TASK:
            return {}
        case actionType.CHECK_TASK:
            return {}
        case actionType.UNCHECK_TASK:
            return {}
        default:
            return state
    }
}

export default reducer;