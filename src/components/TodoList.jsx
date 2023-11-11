import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../services";
import { addTodo, updateStatus, updateTask } from "../redux/actions/todo";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);

  //notification manager
  const notifySuccess = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  //notification manager
  const notifyError = (message) => {
    toast.error(message, {
      position: "top-right",
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
      data.forEach((todo) => {
        dispatch(addTodo(todo));
      });
    });
  }, [dispatch]);

  //add todo list
  const handleAddTodo = async (e) => {
    e.preventDefault();
    try {
      if (title.trim() !== "") {
        const newTodo = {
          title,
          description,
          status: "Todo",
        };

        dispatch(addTodo(newTodo));
        setModalOpen(false);
        setTitle("");
        setDescription("");
        notifySuccess("Added your todo successfully");
      }
    } catch (error) {
      notifyError("Adding failed");
    }
  };

  //update status part
  const handleUpdate = async (id) => {
    const todoToUpdate = todos.find((todo) => todo.id === id);

    if (todoToUpdate) {
      let newStatus;
      if (todoToUpdate.status === "Todo") {
        newStatus = "In Progress";
      } else if (todoToUpdate.status === "In Progress") {
        newStatus = "Done";
      }

      try {
        dispatch(updateStatus(id, newStatus));

        // Display success notification
        notifySuccess("Todo status updated successfully!");
      } catch (error) {
        // Display error notification
        notifyError("Error updating todo status. Please try again.");
      }
    }
  };

  //update task details
  const handleUpdateTask = async () => {
    try {
      if (!selectedTask) {
        return;
      }

      const updatedTask = {
        ...selectedTask,
        title,
        description,
      };

      dispatch(updateTask(selectedTask.id, updatedTask));
      setEditModalOpen(false);
      setTitle("");
      setDescription("");
      setSelectedTask(null); // Reset selected task

      // Display success notification
      notifySuccess("Updated your task successfully");
    } catch (error) {
      notifyError("Updating failed");
    }
  };

  //filter tasks
  const todosTodo = todos.filter((todo) => todo.status === "Todo");
  const todosInProgress = todos.filter((todo) => todo.status === "In Progress");
  const todosDone = todos.filter((todo) => todo.status === "Done");

  //model open
  const openModal = () => {
    setModalOpen(true);
  };

  //modal close
  const closeModal = () => {
    setModalOpen(false);
  };

  //edit modal close
  const openEditModal = (taskId) => {
    const taskToEdit = todos.find((todo) => todo.id === taskId);
    setSelectedTask(taskToEdit);
    setEditModalOpen(true);
  };

  //edit modal close
  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  return (
    <div className="w-full px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-5">
          <ToastContainer />
          <h3 className="mb-5 font-TTHovesProTrialDemiBold p-4 bg-slate-100 rounded-md ">
            Todo
          </h3>
          <div className="bg-slate-100 p-5 rounded-lg">
            <div className="bg-slate-100 rounded-lg mb-5">
              <button
                className="w-full border-2 p-2 rounded-lg hover hover:bg-black hover:text-white font-TTHovesProTrialDemiBold"
                onClick={openModal}
              >
                Add Task
              </button>
              <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={{
                  content: {
                    height: "400px",
                    width: "25rem",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  },
                }}
              >
                <div className="p-5">
                  <div className="flex flex-col items-center justify-center">
                    <p className="font-TTHovesProTrialDemiBold text-lg">
                      Add Todo Task
                    </p>
                    <p className="font-TTHovesProTrialMedium text-sm p-3 text-gray-500">
                      Fill out your all data of to do
                    </p>
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
                          Add Task
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </Modal>
            </div>
            {todosTodo.map((todo, key) => (
              <div
                className="bg-white p-5 rounded-md shadow-md border-l-4 mb-5 border-red-300"
                key={key}
              >
                <div className="flex flex-row">
                  <p
                    className="font-TTHovesProTrialDemiBold"
                    onClick={() => openEditModal(todo.id)}
                  >
                    {todo.title}
                  </p>
                  <ArrowCircleRightIcon
                    className="ml-auto w-5"
                    onClick={() => handleUpdate(todo.id)}
                  />
                </div>
                <p className="font-TTHovesProTrialRegular mt-3">
                  {todo.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Modal
          className=""
          isOpen={isEditModalOpen}
          onRequestClose={closeEditModal}
          style={{
            content: {
              height: "400px",
              width: "25rem",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
          }}
        >
          <div className="p-5">
            <div className="flex flex-col items-center justify-center">
              <p className="font-TTHovesProTrialDemiBold text-lg">
                Edit Your Task
              </p>
              <p className="font-TTHovesProTrialMedium text-sm p-3 text-gray-500">
                Update your task details
              </p>
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
                    placeholder={selectedTask?.title ?? ""}
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
                  >
                    Description
                  </label>
                  <textarea
                    type="text"
                    id="content"
                    className="border border-formLable rounded px-2 py-2 mb-4 mt-1 w-full bg-white"
                    placeholder={selectedTask?.description ?? ""}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-full flex justify-center">
                  <button
                    onClick={handleUpdateTask}
                    className="bg-black font-TTHovesProTrialDemiBold text-white font-bold py-2 px-4 rounded-lg w-full text-center  hover:bg-slate-100 hover:text-black hover:border-2"
                  >
                    Update Task
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Modal>
        <div className="p-5">
          <h3 className="mb-5 font-TTHovesProTrialDemiBold p-4 bg-slate-100 rounded-md ">
            In progress
          </h3>
          <div className="bg-slate-100 p-5 rounded-lg">
            {todosInProgress.map((todo, key) => (
              <div
                className="bg-white p-5 rounded-md shadow-md border-l-4 mb-5 border-yellow-400"
                key={key}
              >
                <div className="flex flex-row">
                  <p
                    className="font-TTHovesProTrialDemiBold"
                    onClick={() => openEditModal(todo.id)}
                  >
                    {todo.title}
                  </p>
                  <ArrowCircleRightIcon
                    className="ml-auto w-5"
                    onClick={() => handleUpdate(todo.id)}
                  />
                </div>
                <p className="font-TTHovesProTrialRegular mt-3">
                  {todo.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5">
          <h3 className="mb-5 font-TTHovesProTrialDemiBold p-4 bg-slate-100 rounded-md ">
            Done
          </h3>
          <div className="bg-slate-100 p-5 rounded-lg">
            {todosDone.map((todo, key) => (
              <div
                className="bg-white p-5 rounded-md shadow-md border-l-4 mb-5 border-green-500"
                key={key}
              >
                <div className="flex flex-row">
                  <p
                    className="font-TTHovesProTrialDemiBold"
                    onClick={() => openEditModal(todo.id)}
                  >
                    {todo.title}
                  </p>
                  {/* <ArrowCircleRightIcon className='ml-auto w-5' /> */}
                </div>
                <p className="font-TTHovesProTrialRegular mt-3">
                  {todo.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
