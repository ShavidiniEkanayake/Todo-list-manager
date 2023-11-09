import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from '../components/TodoItem';
import { getTodos } from '../utils/Api';
import { addTodo } from '../redux/actions/TodoAction';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  useEffect(() => {
    getTodos().then((data) => {
      data.forEach((todo) => {
        dispatch(addTodo(todo));
      });
    });
  }, [dispatch]);

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;