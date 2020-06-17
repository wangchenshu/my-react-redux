
const DEFAULT_NAME = 'walter';
const DEFAULT_AGE = 10;
const initialState = {
    name: '',
    age: DEFAULT_AGE
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case 'SET_NAME':
            return Object.assign({}, state, {
                name: DEFAULT_NAME
            })
        case 'RESET_NAME':
            return Object.assign({}, state, {
                name: ''
            })
        case 'SET_AGE':
            return Object.assign({}, state, {
                age: 20
            })
        case 'RESET_AGE':
            return Object.assign({}, state, {
                age: DEFAULT_AGE
            })
        default:
            return state;
    }
}