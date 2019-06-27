export default function inputReducer(state = {value: ''}, action) {
    const {type, value} = action;
    switch (type) {
        case 'SET_VALUE':
            if (value !== '') {
                return {value}
            }
            return state
        case 'CLEAR_VALUE':
            if (state.value !== '') {
                return {value}
            }
            return state
        default:
            return state
    }
}