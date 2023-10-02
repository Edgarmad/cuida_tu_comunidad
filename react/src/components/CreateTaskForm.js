import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CreateTaskForm({ onTaskCreate }) {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    date: '',
    state: '',
    creator_name: '',
  });

  const [states, setStates] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/states')
      .then(response => {
        setStates(response.data.states);
      })
      .catch(error => {
        console.error('Error al obtener la lista de estados', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskCreate(taskData);
    setTaskData({
      title: '',
      description: '',
      date: '',
      state: '',
      creator_name: '',
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Crear Nueva Tarea</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block">Título:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={taskData.title}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="description" className="block">Descripción:</label>
          <textarea
            id="description"
            name="description"
            value={taskData.description}
            onChange={handleChange}
            className="border rounded p-2 w-full h-32"
          />
        </div>
        <div>
          <label htmlFor="date" className="block">Fecha:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={taskData.date}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="state" className="block">Estado:</label>
          <select
            id="state"
            name="state"
            value={taskData.state}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          >
            <option value="">Selecciona un estado</option>
            {states.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="creator_name" className="block">Nombre del Creador:</label>
          <input
            type="text"
            id="creator_name"
            name="creator_name"
            value={taskData.creator_name}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded p-2 w-full">
          Crear Tarea
        </button>
      </form>
    </div>
  );
}

export default CreateTaskForm;
