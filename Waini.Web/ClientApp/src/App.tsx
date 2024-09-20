import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './Components/UsersList';
import UserForm from './Components/UserForm';

const App = () => {
    console.log("App component is rendering");
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/add" element={<UserForm />} />
                <Route path="/edit/:id" element={<UserForm />} />
                <Route path="/delete/:id" element={<UserForm />} />
            </Routes>
        </Router>
    );
};

export default App;
