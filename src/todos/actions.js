export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = todo => ({
    type: CREATE_TODO,
    payload: { todo },
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = todo => ({
    type: REMOVE_TODO,
    payload: { todo },
});

export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';
export const markTodoAsCompleted = todo => ({
    type: MARK_TODO_AS_COMPLETED,
    payload: { todo },
});

export const LOAD_TO_DO_IN_PROGRESS = 'LOAD_TO_DO_IN_PROGRESS';
export const loadTodosInProgress = () => ({
    type: LOAD_TO_DO_IN_PROGRESS,
});

export const LOAD_TO_DO_SUCCESS = 'LOAD_TO_DO_SUCCESS';
export const loadToDoSuccess = todos => ({
    type: LOAD_TO_DO_SUCCESS,
    payload: { todos },
});

export const LOAD_TO_DO_FAILURE = 'LOAD_TO_DO_FAILURE';
export const loadToDoFailure = () => ({
    type: LOAD_TO_DO_FAILURE,
});