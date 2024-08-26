import React, { useState } from 'react';
import './ContactFormResponses.css'; // Make sure to import your CSS file

const ContactFormResponses = () => {
  // Dummy data
  const [contacts, setContacts] = useState([
    {
      _id: '1',
      name: 'John Doe',
      email: 'johndoe@example.com',
      mobile: '123-456-7890',
      city: 'New York',
    },
    {
      _id: '2',
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      mobile: '987-654-3210',
      city: 'Los Angeles',
    },
    {
      _id: '3',
      name: 'Bob Johnson',
      email: 'bobjohnson@example.com',
      mobile: '555-123-4567',
      city: 'Chicago',
    },
  ]);
  
  // useEffect(() => {
  //   const fetchContacts = async () => {
  //     const response = await axios.get('http://localhost:5000');
  //     // setContacts(response.data);
  //   };
  //   fetchContacts();
  // }, []);
  return (
    <div className="contact-form-responses-container">
      <h2>Contact Form Responses</h2>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Mobile Number</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.mobile}</td>
              <td>{contact.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactFormResponses;
