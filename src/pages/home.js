import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TodoList from '../components/TodoList';
import { addTodo } from '../redux/actions/todoAction';
import Header from '../components/Header'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const Home = () => {

  return (
    <div>
      <Header />
      <div className='px-5'>
        <nav className="bg-white mt-[0.10rem]">
        <div className="w-full pl-6 py-3 pr-6 shadow-sm flex items-center justify-between">
          <ul className="flex flex-row font-medium space-x-8">
            <li>
              <a
                href="#"
                className="text-darkblue hover:text-lightblue text-sm font-TTHovesProTrialMedium "
                aria-current="page"
              >
                <AddRoundedIcon className="text-lightblue mr-1" /> Create New
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-darkblue hover:text-lightblue text-sm font-TTHovesProTrialMedium"
              >
                <RefreshRoundedIcon className="text-lightblue mr-1 w-5" />{" "}
                Refresh
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-darkblue hover:text-lightblue text-sm font-TTHovesProTrialMedium"
              >
                <SettingsRoundedIcon className="text-lightblue mr-1 w-5" /> Manage View
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-darkblue hover:text-lightblue text-sm font-TTHovesProTrialMedium"
              >
                <FileDownloadOutlinedIcon className="text-lightblue mr-1 w-5" /> Export
              </a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
      
      <TodoList />
    </div>
  );
};

export default Home;
