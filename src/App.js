import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import AddFiles from './components/add_files';
import ViewContent from './components/view_content';
import FileDownload from './pages/fileDownload';
import FileReady from './components/file_ready';
import SendAsMail from './components/sendmail_form';
import Loading from './components/loading';
import TermsOfService from './pages/termsOfService';
import PrivacyPolicy from './pages/privacyPolicy';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<AddFiles />} />
        <Route path="file_ready" element={<FileReady />} />
        <Route path="view_content" element={<ViewContent />} />
        <Route path="send_file" element={<SendAsMail />} />
        <Route path="loading" element={<Loading/>} />
      </Route>
      <Route path='/fileDownload' element={<FileDownload />} />
      <Route path='/terms' element={<TermsOfService />} />
      <Route path='/privacy' element={<PrivacyPolicy />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
