// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultPage from './DefaultPage';
import AddPage from './AddPage';
import SubtractPage from './SubtractPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DefaultPage />} />
                <Route path="/sum/:a/:b" element={<AddPage />} />
                <Route path="/sub/:a/:b" element={<SubtractPage />} />
            </Routes>
        </Router>
    );
};

export default App;
