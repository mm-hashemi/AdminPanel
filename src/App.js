import React from 'react';
import Navbar from './navbar/nav';
import Sidebar from './sidebar/sidebar';
import Dashboard from './pages/dashboard/DashboardCo';
import MainContents from './pages/mangementp/MainContents';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className='flex justify-between'>
      <BrowserRouter>
      <Sidebar/>

    <div className='w-full'>
    <Navbar/>

    <Routes>
    <Route path='/' element={<Dashboard/>}></Route>
    </Routes>

    <MainContents/>


    </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
