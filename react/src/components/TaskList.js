import React, { useState } from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onLikeClick }) {
  const [searchTitle, setSearchTitle] = useState('');
  const [searchState, setSearchState] = useState('');

  const filteredTasks = tasks.filter((task) => {
    // Aplicar el filtro por título
    if (searchTitle && !task.title.toLowerCase().includes(searchTitle.toLowerCase())) {
      return false;
    }

    // Aplicar el filtro por estado
    if (searchState && task.state !== searchState) {
      return false;
    }

    return true;
  });

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <div>
        <label>Buscar por Título:</label>
        <input
          type="text"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Filtrar por Estado:</label>
        <select
          value={searchState}
          onChange={(e) => setSearchState(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="estado1">Estado 1</option>
          <option value="estado2">Estado 2</option>
          {/* Agrega más opciones de estado según tu aplicación */}
        </select>
      </div>
      <ul className="space-y-4">
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} onLikeClick={onLikeClick} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

