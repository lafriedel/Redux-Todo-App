import { ADD_TO_DO, TOGGLE_COMPLETED, DELETE_TO_DO } from '../actions';

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
        // let newList = [state.todos];
        // newList.push(action.payload);
        return {
            ...state, 
            todos: [...state.todos, action.payload]
        };
        case TOGGLE_COMPLETED:
        console.log(action.payload);
        return {
            ...state,
            todos: state.todos.map(todo => 
                (todo.id === action.payload)
                ? {...todo, completed: !todo.completed} 
                : todo
            )
        };
        case DELETE_TO_DO:
        return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload)
        }
        default:
        return state;
    }
};