import { ADD_TO_DO } from '../actions';

const initialState = {
    todos: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_DO:
        return {
            ...state, todos: action.payload
        }
        default:
        return state;
    }
};