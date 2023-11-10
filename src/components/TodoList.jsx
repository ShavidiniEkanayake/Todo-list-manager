import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../utils/api';
import { addTodo } from '../redux/actions/todoAction';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  useEffect(() => {
    getTodos().then((data) => {
      console.log("aa", data)
      data.forEach((todo) => {
        dispatch(addTodo(todo));
      });
    });
  }, [dispatch]);

  const todosTodo = todos.filter((todo) => todo.status === 'Todo');
  const todosInProgress = todos.filter((todo) => todo.status === 'In Progress');
  const todosDone = todos.filter((todo) => todo.status === 'Done');

  return (
    <div className='w-full p-10'>
      <h2>Todo List</h2>

      <div className='flex'>
        <div className='p-5 w-1/3'>
          <h3 className='mb-5 font-TTHovesProTrialDemiBold p-4 bg-slate-100 rounded-md '>Todo</h3>
          <div className='bg-slate-100 p-5 rounded-lg'>
            <div className='bg-white p-5 rounded-md shadow-md border-l-4 mb-5 border-red-300'>
              {/* {todosTodo.map((todo) => ( */}
                <div>
                  {/* <p>{todo.id}</p> */}
                  <div className='flex flex-row'>
                    <p className='font-TTHovesProTrialDemiBold'>Tittle</p>
                    <ArrowCircleRightIcon className='ml-auto w-5' />
                  </div>
                  <p className='font-TTHovesProTrialRegular mt-3'>Lorem ipsum dore aikllla sknkt wo al jneknknkndunkdnkns</p>
                </div>
              {/* ))} */}
            </div>
          </div>
        </div>


        <div className='bg-yellow-300  w-1/3'>
          <h3>In Progress</h3>
          {todosInProgress.map((todo) => (
            <p>{todo.id}</p>
          ))}
        </div>

        <div className='bg-green-400  w-1/3'>
          <h3>Done</h3>
          {todosDone.map((todo) => (
            <p>{todo.id}</p>
          ))}
        </div>
      </div>

    </div>
  );
};

export default TodoList;
