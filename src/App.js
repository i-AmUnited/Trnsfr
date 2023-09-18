import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import AddFiles from './components/add_files';
import Morefile from './components/morefiles';
import FileDownload from './pages/fileDownload';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<AddFiles />} />
        <Route path="tasks" element={<Morefile />} />
      </Route>
      <Route path='/fileDownload' element={<FileDownload />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
