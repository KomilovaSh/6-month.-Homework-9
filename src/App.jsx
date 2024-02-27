import { useState } from 'react';
import axios from 'axios'; 
import Form from './Form';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://auth-rg69.onrender.com/api/auth/signup', formData);
      console.log('Registration successful:', response.data);
      
    } catch (error) {
      console.error('Registration failed:', error);
     
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <input type="text" name="name" placeholder="Ismingiz" value={formData.name} onChange={handleChange} />
    <input type="email" name="email" placeholder="Elektron pochta" value={formData.email} onChange={handleChange} />
    <input type="password" name="password" placeholder="Parol" value={formData.password} onChange={handleChange} />
    <button type="submit">Ro'yxatdan o'tish</button>
  </form>
  );
};

export default RegistrationForm;
