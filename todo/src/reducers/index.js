import { ADD_TO_DO } from '../actions';

const initialState = {
    todos: [
        {
            task: "Create To-Do app",
            id: 1528817077286,
            completed: false
        },
        {
            task: "Celebrate my birthday",
            id: 1528817084358,
            completed: false
        }
    ]
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