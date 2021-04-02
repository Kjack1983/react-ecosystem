import { createSelector } from 'reselect';

export const getTodos = state => state.todos.data;
export const getTodosLoading = state => state.todos.isLoading;

export const getIncompleteTodos = createSelector(
    getTodos,
    getTodosLoading,
    (todos, isLoading) => isLoading ? [] : todos.filter(todo => !todo.isCompleted),
);

export const getCompleteTodos = createSelector(
    getTodos,
    getTodosLoading,
    (todos, isLoading) => isLoading ? [] : todos.filter(todo => todo.isCompleted),
);