import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProjectManagement from './components/AdminPanel/ProjectManagement';
import ClientManagement from './components/AdminPanel/ClientManagement';
import ContactFormResponses from './components/AdminPanel/ContactFormResponses';
import './App.css';

const App = () => {
  return (
    <Router>
        
      <div className="admin-panel">
        <nav className="sidebar">
          <ul>
            <li><Link to="/admin/project">Project Management</Link></li>
            <li><Link to="/admin/client">Client Management</Link></li>
            <li><Link to="/admin/contacts">Contact Form Responses</Link></li>
          </ul>
        </nav>
        <main className="content">
        <h1>Admin Panel</h1>
          <Routes>
            <Route path="/admin/project" element={<ProjectManagement />} />
            <Route path="/admin/client" element={<ClientManagement />} />
            <Route path="/admin/contacts" element={<ContactFormResponses />} />
            <Route path="/" element={<h2>Welcome to the Admin Panel</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
