import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TodoList from '../components/TodoList';
import { addTodo } from '../redux/actions/todoAction';
import Header from '../components/Header'

const Home = () => {

  return (
    <div>
      <Header />    
      <TodoList />
    </div>
  );
};

export default Home;
