import * as actionType from './actions';

const initialState = {
    tasks: [
        { id: 1, value: 'Angular', status: 'unchecked' },
        { id: 2, value: 'React', status: 'checked' },
        { id: 3, value: 'Redux', status: 'checked' },
        { id: 4, value: 'Vue.js', status: 'unchecked' }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_TASK:
            return {
                tasks: state.tasks.concat({ id: Math.random(), value: action.task, status: 'unchecked' })
            }
        case actionType.DELETE_TASK:
            return {
                tasks: state.tasks.filter(task => task.id !== action.id)
            }
        case actionType.CHECK_TASK:
            return {
                tasks: state.tasks.map(task => task.id === action.id ? { ...task, status: 'checked' } : task)
            }
        case actionType.UNCHECK_TASK:
            return {
                tasks: state.tasks.map(task => task.id === action.id ? { ...task, status: 'unchecked' } : task)
            }
        default:
            return state
    }
}

export default reducer;