import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../utils/api';
import { addTodo } from '../redux/actions/todoAction';
import { updateTodoStatus } from '../redux/actions/todoAction';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const TodoList = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const todos = useSelector((state) => state.todo.todos);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  //notification manager
  const notifySuccess = () => {
    toast.success('Todo added successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  //notification manager
  const notifyError = () => {
    toast.error('Error adding todo. Please try again.', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  //fetch todo data
  useEffect(() => {
    getTodos().then((data) => {
      console.log("data", data)
      setData(data);
      data.forEach((todo) => {
        dispatch(addTodo(todo));
      });
    });
  }, [dispatch]);

  //add todo list
  const handleAddTodo = async (e) => {
    e.preventDefault();
    try {
      if (title.trim() !== '') {
        const newTodo = {
          title,
          description,
          status: 'Todo',
        };

        dispatch(addTodo(newTodo));
        setModalOpen(false);
        setTitle('');
        setDescription('');
        notifySuccess();
      }
    } catch (error) {
      console.error('Error adding todo:', error);
      notifyError();
    }
  };

  //move ti inprogress
  const handleMoveToInProgress = (id) => {
    dispatch(updateTodoStatus(id));
  };

  //filter tasks
  const todosTodo = todos.filter((todo) => todo.status === 'Todo');
  const todosInProgress = todos.filter((todo) => todo.status === 'In Progress');
  const todosDone = todos.filter((todo) => todo.status === 'Done');

  //model open
  const openModal = () => {
    setModalOpen(true);
  };

  //modal close
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='w-full p-10'>
      <div className='flex'>
        <div className='px-5 w-1/3'>
          <h3 className='mb-5 font-TTHovesProTrialDemiBold p-4 bg-slate-100 rounded-md '>Todo</h3>
          <div className='bg-slate-100 p-5 rounded-lg'>
            <div className='bg-slate-100 rounded-lg mb-5'>
              <button className='w-full border-2 p-2 rounded-lg hover hover:bg-black hover:text-white font-TTHovesProTrialDemiBold' onClick={openModal}>Add</button>
              <Modal
                className=''
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={{
                  content: {
                    height: "400px",
                    width: "25rem",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                  },
                }}
              >
                <div className='p-5'>
                  <div className='flex flex-col items-center justify-center'>
                    <p className='font-TTHovesProTrialDemiBold text-lg'>Add Todo Task</p>
                    <p className='font-TTHovesProTrialMedium text-sm p-3 text-gray-500'>Fill out your all data of to do</p>
                  </div>

                  <form>
                    <div className="">
                      <div className="w-full">
                        <label
                          htmlFor="title"
                          className="text-formLable font-semibold mb-2"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          id="title"
                          className="border border-formLable rounded px-2 py-2 mb-4 mt-1 w-full bg-white"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-full">
                        <label
                          htmlFor="content"
                          className="text-formLable font-semibold mb-2"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        >
                          Description
                        </label>
                        <textarea
                          type="text"
                          id="content"
                          className="border border-formLable rounded px-2 py-2 mb-4 mt-1 w-full bg-white"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-full flex justify-center">
                        <button
                          onClick={handleAddTodo}
                          className="bg-black font-TTHovesProTrialDemiBold text-white font-bold py-2 px-4 rounded-lg w-full text-center  hover:bg-slate-100 hover:text-black hover:border-2"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </Modal>
            </div>
            {todosTodo.map((todo, key) => (
              <div className='bg-white p-5 rounded-md shadow-md border-l-4 mb-5 border-red-300' key={key}>
                <div className='flex flex-row'>
                  <p className='font-TTHovesProTrialDemiBold'>{todo.title}</p>
                  <ArrowCircleRightIcon className='ml-auto w-5' onClick={() => handleMoveToInProgress(todo.id)} />
                </div>
                <p className='font-TTHovesProTrialRegular mt-3'>Lorem ipsum dore aikllla sknkt wo al jneknknkndunkdnkns</p>
              </div>
            ))}
          </div>
        </div>

        <div className='px-5 w-1/3'>
          <h3 className='mb-5 font-TTHovesProTrialDemiBold p-4 bg-slate-100 rounded-md '>In progress</h3>
          <div className='bg-slate-100 p-5 rounded-lg'>
            {todosInProgress.map((todo, key) => (
              <div className='bg-white p-5 rounded-md shadow-md border-l-4 mb-5 border-yellow-400' key={key}>
                <div className='flex flex-row'>
                  <p className='font-TTHovesProTrialDemiBold'>{todo.title}</p>
                  <ArrowCircleRightIcon className='ml-auto w-5' />
                </div>
                <p className='font-TTHovesProTrialRegular mt-3'>Lorem ipsum dore aikllla sknkt wo al jneknknkndunkdnkns</p>
              </div>
            ))}
          </div>
        </div>

        <div className='px-5 w-1/3'>
          <h3 className='mb-5 font-TTHovesProTrialDemiBold p-4 bg-slate-100 rounded-md '>Done</h3>
          <div className='bg-slate-100 p-5 rounded-lg'>
            {todosDone.map((todo, key) => (
              <div className='bg-white p-5 rounded-md shadow-md border-l-4 mb-5 border-green-500' key={key}>
                <div className='flex flex-row'>
                  <p className='font-TTHovesProTrialDemiBold'>{todo.title}</p>
                  <ArrowCircleRightIcon className='ml-auto w-5' />
                </div>
                <p className='font-TTHovesProTrialRegular mt-3'>Lorem ipsum dore aikllla sknkt wo al jneknknkndunkdnkns</p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default TodoList;
