import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTodoStatus } from '../redux/actions/TodoAction';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleStatusChange = () => {
    const newStatus = todo.status === 'Todo' ? 'Done' : 'Todo';
    dispatch(updateTodoStatus(todo.id, newStatus));
  };

  return (
    <div>
      <p>{todo.title}</p>
      <input type="checkbox" checked={todo.status === 'Done'} onChange={handleStatusChange} />
    </div>
  );
};

export default TodoItem;
