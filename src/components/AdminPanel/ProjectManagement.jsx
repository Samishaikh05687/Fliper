import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProjectManagement.css'; // Make sure to import your CSS file

const ProjectManagement = () => {
  const [projects, setProjects] = useState([]);
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get('http://localhost:5000/services');
      setProjects(response.data);
    };
    fetchProjects();
  }, []);

  const addProject = async () => {
    const newProject = { image, name, description };
    await axios.post('http://localhost:5000/services', newProject);
    setProjects([...projects, newProject]);
    setImage('');
    setName('');
    setDescription('');
  };

  return (
    <div className="project-management-container">
      <h2>Manage Projects</h2>
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addProject}>Add Project</button>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <img src={project.image} alt={project.name} />
            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectManagement;
