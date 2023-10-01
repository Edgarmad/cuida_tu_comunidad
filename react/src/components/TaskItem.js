import React, { useState } from 'react';
import axios from 'axios';
import LikeButton from './LikeButton'; // Importa el nuevo componente

function TaskItem({ task, onDelete }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(task.likes_count);

  const handleLikeClick = () => {
    axios.post(`http://localhost:8000/api/tasks/${task.id}/like`)
      .then((response) => {
        setIsLiked(true);
        setLikesCount(response.data.likesCount);
      })
      .catch((error) => {
        console.error('Error al dar "Like":', error);
      });
  };
  const handleDeleteClick = () => {
    axios.delete(`http://localhost:8000/api/tasks/${task.id}`)
      .then((response) => {
        // Llama a la función onDelete para eliminar la tarea del estado
        onDelete(task.id);
      })
      .catch((error) => {
        console.error('Error al eliminar la tarea:', error);
      });
  };
  return (
    <li className="bg-white rounded shadow p-4">
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p className="text-gray-600">{task.description}</p>
      <p className="text-gray-500">Fecha de Creación: {task.date}</p>
      <p className="text-gray-500">Estado: {task.state}</p>
      <p className="text-gray-500">Creador: {task.creator_name}</p>
      <p className="text-gray-500">Likes: {likesCount}</p>
      {/* Utiliza el componente LikeButton */}
      <LikeButton
        isLiked={isLiked}
        onLikeClick={handleLikeClick}
      />
       <button
        className="bg-red-500 text-white rounded px-2 py-1 mt-2"
        onClick={handleDeleteClick}
      >
        Eliminar
      </button>
    </li>
  );
}

export default TaskItem;
