import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ClientManagement.css'; // Make sure to import your CSS file

const ClientManagement = () => {
  const [clients, setClients] = useState([]);
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [designation, setDesignation] = useState('');

  useEffect(() => {
    const fetchClients = async () => {
      const response = await axios.get('http://localhost:5000/clients');
      setClients(response.data);
    };
    fetchClients();
  }, []);

  const addClient = async () => {
    const newClient = { image, name, description, designation };
    await axios.post('http://localhost:5000/clients', newClient);
    setClients([...clients, newClient]);
    setImage('');
    setName('');
    setDescription('');
    setDesignation('');
  };

  return (
    <div className="client-management-container">
      <h2>Manage Clients</h2>
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Client Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Client Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Client Designation"
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
      />
      <button onClick={addClient}>Add Client</button>
      <ul>
        {clients.map((client) => (
          <li key={client._id}>
            <img src={client.image} alt={client.name} />
            <div>
              <h3>{client.name}</h3>
              <p>{client.description}</p>
              <p>{client.designation}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientManagement;
