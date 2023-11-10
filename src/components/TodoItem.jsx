import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTodoStatus } from '../redux/actions/todoAction';

const TodoItem = () => {
  // const dispatch = useDispatch();

  // const handleStatusChange = () => {
  //   const newStatus = todo.status === 'Todo' ? 'Done' : 'Todo';
  //   dispatch(updateTodoStatus(todo.id, newStatus));
  // };

  return (
    <div className='p-10'>
      <div>
        {/* <p>{todo.title}</p> */}
        {/* <input type="checkbox" checked={todo.status === 'Done'} onChange={handleStatusChange} /> */}
      </div>
    </div>
  );
};

export default TodoItem;