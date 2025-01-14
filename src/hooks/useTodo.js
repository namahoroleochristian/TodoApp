import { useState } from 'react';
import axios from 'axios';

const useTodo = () => {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addTodo = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:2012/todo', { title });
      console.log('Added new todo:', response.data);
      setTitle('');
    } catch (err) {
      setError(err.message);
      console.error('Error adding todo:', err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    title,
    setTitle,
    addTodo,
    loading,
    error,
  };
};

export default useTodo;
