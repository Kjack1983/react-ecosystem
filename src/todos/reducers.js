import { 
    CREATE_TODO, 
    REMOVE_TODO, 
    MARK_TODO_AS_COMPLETED,
    LOAD_TO_DO_IN_PROGRESS,
    LOAD_TO_DO_SUCCESS,
    LOAD_TO_DO_FAILURE
} from './actions';

const initialState = { isLoading: true, data: [] };

export const todos = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { todo } = payload;
            return {
                ...state,
                data: state.data.concat(todo)
            };
        }
        case REMOVE_TODO: {
            const { todo: todoToRemove } = payload;
            return {
                ...state,
                data: state.data.filter(todo => todo.id !== todoToRemove.id),
            };
        }
        case MARK_TODO_AS_COMPLETED: {
            const { todo: markedTodo } = payload;
            return {
                ...state,
                data: state.data.map(todo => todo.id === markedTodo.id ?  markedTodo : todo)
            };
        }
        case LOAD_TO_DO_SUCCESS: {
            const { todos } = payload;
            return {
                ...state,
                isLoading: false,
                data: todos
            };
        }
        case LOAD_TO_DO_IN_PROGRESS:
            return {
                ...state,
                isLoading: true
            }
        case LOAD_TO_DO_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}