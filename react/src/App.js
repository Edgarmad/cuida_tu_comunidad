import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import CreateTaskForm from './components/CreateTaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  // Función para otorgar "like" a una tarea
  const handleLikeClick = (taskId) => {
    // Realiza una solicitud a tu API para otorgar "like" a la tarea
    // Actualiza el estado de las tareas después de otorgar "like"
  };

  // Función para manejar la creación de tareas
  const handleTaskCreate = async (newTaskData) => {
    try {
      // Realiza una solicitud HTTP POST al servidor para crear una nueva tarea
      const response = await fetch('http://localhost:8000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTaskData),
      });

      if (response.ok) {
        // La tarea se creó con éxito en el servidor, ahora actualiza el estado de las tareas
        const newTask = await response.json();
        setTasks([...tasks, newTask]);
      } else {
        // Ocurrió un error al crear la tarea, maneja el error aquí (puede ser una validación en el servidor, por ejemplo)
        console.error('Error al crear la tarea');
      }
    } catch (error) {
      // Maneja errores de red u otros errores
      console.error('Error de red al crear la tarea', error);
    }
  };


  useEffect(() => {
    fetch('http://localhost:8000/api/tasks') // Reemplaza con la URL correcta de tu API
    .then((response) => response.json())
    .then((data) => {
      // Actualizar el estado de las tareas con los datos recibidos del servidor
      setTasks(data);
    })
    .catch((error) => {
      console.error('Error al obtener la lista de tareas:', error);
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <CreateTaskForm onTaskCreate={handleTaskCreate} /> {}
      <TaskList tasks={tasks} onLikeClick={handleLikeClick} />
    </div>
  );
}

export default App;
