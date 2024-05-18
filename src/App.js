import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FetchConfig from './components/FetchConfig';
import UpdateRemark from './components/UpdateRemark';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Fetch Configuration</Link></li>
            <li><Link to="/update-remark">Update Remark</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<FetchConfig />} />
          <Route path="/update-remark" element={<UpdateRemark />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
