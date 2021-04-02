import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import {
    getTodosLoading, 
    getCompleteTodos, 
    getIncompleteTodos 
} from "./selectors";
import { loadTodos, removeTodoRequest, updateTodoRequest} from './thunks';

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;

const TodoList = (props) => {
    let { 
        completedTodos, 
        incompletedTodos, 
        onRemovePressed, 
        onCompletedPressed, 
        isLoading, 
        startLoadingTodos 
    } = props;

    useEffect(() => {
        startLoadingTodos()
    }, []);

    const loadTodosArray = (arrayTodos = [], title = '', props = {}) => {
        let {onRemovePressed, onCompletedPressed} = props;
        let noRecords = <div>No records in {title} list</div>;

        let todoList = (
            <>
                <h3>{title}:</h3>
                {arrayTodos.map(todo => <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onRemovePressed={onRemovePressed}
                    onCompletedPressed={onCompletedPressed}/>)}
            </>
        );

        return Array.isArray(arrayTodos) && arrayTodos.length ? todoList : null;
    }

    const loadingMessage = <div>Loading todos .....</div>

    const content = (
        <ListWrapper>
            <NewTodoForm />
            {/* Incompleted todo List */}
            {loadTodosArray(incompletedTodos, 'IncompletedTodos', props)}
            {/* Completed todo List */}
            {loadTodosArray(completedTodos, 'CompletedTodos', props)}
        </ListWrapper>
    );

    return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
    isloading: getTodosLoading(state),
    completedTodos: getCompleteTodos(state),
    incompletedTodos: getIncompleteTodos(state)
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(updateTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);