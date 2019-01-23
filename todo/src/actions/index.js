export const ADD_TO_DO = 'ADD_TO_DO';

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