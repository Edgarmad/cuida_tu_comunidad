import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importa axios para realizar solicitudes HTTP

function CreateTaskForm({ onTaskCreate }) {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    date: '',
    state: '', // Inicialmente, el estado está vacío
    creator_name: '',
  });

  const [states, setStates] = useState([]); // Estado para almacenar la lista de estados

  useEffect(() => {
    // Realiza una solicitud GET para obtener la lista de estados
    axios.get('http://localhost:8000/api/states')
      .then(response => {
        setStates(response.data.states); // Asigna la lista de estados a la variable de estado
      })
      .catch(error => {
        console.error('Error al obtener la lista de estados', error);
      });
  }, []); // El segundo argumento vacío asegura que esta solicitud se realice solo una vez al montar el componente

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envía los datos de la nueva tarea al servidor (puedes utilizar una solicitud HTTP para esto).
    // Luego, llama a la función onTaskCreate para actualizar el estado de la lista de tareas.
    onTaskCreate(taskData);
    // Limpia el formulario
    setTaskData({
      title: '',
      description: '',
      date: '',
      state: '',
      creator_name: '',
    });
  };

  return (
    <div>
      <h2>Crear Nueva Tarea</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={taskData.title}
            onChange={handleChange}
            className="border rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            name="description"
            value={taskData.description}
            onChange={handleChange}
            className="border rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="date">Fecha:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={taskData.date}
            onChange={handleChange}
            className="border rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="state">Estado:</label>
          <select
            id="state"
            name="state"
            value={taskData.state}
            onChange={handleChange}
            className="border rounded p-2"
          >
            <option value="">Selecciona un estado</option>
            {states.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="creator_name">Nombre del Creador:</label>
          <input
            type="text"
            id="creator_name"
            name="creator_name"
            value={taskData.creator_name}
            onChange={handleChange}
            className="border rounded p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
          Crear Tarea
        </button>
      </form>
    </div>
  );
}

export default CreateTaskForm;
