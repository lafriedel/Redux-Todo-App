export const ADD_TO_DO = 'ADD_TO_DO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const DELETE_TO_DO = 'DELETE_TO_DO';

export const addToDo = task => {
    return {
        type: ADD_TO_DO,
        payload: {
            task: task,
            id: Date.now(),
            completed: false
        }
    }
}

export const toggleCompleted = id => {
    return {
        type: TOGGLE_COMPLETED,
        payload: id
    }
}

export const deleteToDo = id => {
    return {
        type: DELETE_TO_DO,
        payload: id
    }
}