import * as actionType from './actions';

const initialState = {
    tasks: [
        { id: 1, value: 'angular' , status: 'unchecked' },
        { id: 2, value: 'react' , status: 'checked' },
        { id: 3, value: 'redux' , status: 'checked' },
        { id: 4, value: 'vue.js' , status: 'unchecked' }
    ]
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