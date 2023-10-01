import React,  { useState, useEffect } from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onLikeClick }) {
  const [searchTitle, setSearchTitle] = useState('');
  const [searchState, setSearchState] = useState('');
  const [filteredTasks, setFilteredTasks] = useState([]);
  useEffect(() => {
    // Filtra las tareas basadas en los criterios de búsqueda
    const filtered = tasks.filter((task) => {
      const titleMatch = task.title.toLowerCase().includes(searchTitle.toLowerCase());
      const stateMatch = task.state.toLowerCase() === searchState.toLowerCase();
  
      // Filtra por título y/o estado según los criterios
      return (titleMatch || !searchTitle) && (stateMatch || !searchState);
    });
  
    // Actualiza el estado 'filteredTasks' con las tareas filtradas
    setFilteredTasks(filtered);
  }, [tasks, searchTitle, searchState]);
  
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <div>
      <input
        type="text"
        placeholder="Buscar por título"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Buscar por estado"
        value={searchState}
        onChange={(e) => setSearchState(e.target.value)}
      />
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
