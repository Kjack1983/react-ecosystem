import { 
    createTodo,
    markTodoAsCompleted, 
    removeTodo, 
    loadTodosInProgress, 
    loadToDoSuccess, 
    loadToDoFailure 
} from './actions';

export const loadTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodosInProgress());
        const response = await fetch('http://localhost:8080/todos');
        const todos = await response.json();
        dispatch(loadToDoSuccess(todos));
    } catch (error) {
        dispatch(loadToDoFailure());
        dispatch(displayAlert(error));
    }
}

export const addTodoRequest = text => async dispatch => {
    try {
        const body = JSON.stringify({ text });
        const response = await fetch('http://localhost:8080/todos', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body,
        });
        const todo = await response.json();
        dispatch(createTodo(todo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const removeTodoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`,{
            method: 'delete',
        })

        const todo = await response.json();
        dispatch(removeTodo(todo));
    } catch (error) {
        dispatch(displayAlert(error));
    }
}

export const updateTodoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            method: 'post',
        });
        const todo = await response.json();
        dispatch(markTodoAsCompleted(todo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const displayAlert = text => () => {
    alert(text);
};