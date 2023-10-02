import React, { useState } from 'react';
import axios from 'axios';
import LikeButton from './LikeButton';
import Swal from 'sweetalert2';

function TaskItem({ task, onLikeClick, onDelete }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    axios.post(`http://localhost:8000/api/tasks/${task.id}/like`)
      .then((response) => {
        setIsLiked(true);
        task.likes_count = response.data.likesCount;
        onLikeClick(task);
      })
      .catch((error) => {
        console.error('Error al dar "Like":', error);
      });
  };

  const handleDeleteClick = () => {
    // Muestra una confirmación antes de eliminar la tarea
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer. ¿Quieres eliminar esta tarea?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8000/api/tasks/${task.id}`)
          .then((response) => {
            Swal.fire({
              title: 'Tarea eliminada',
              text: response.data.message,
              icon: 'success',
              confirmButtonText: 'Aceptar',
            }).then(() => {
              window.location.reload();
            });
          })
          .catch((error) => {
            console.error('Error al eliminar la tarea:', error);
            Swal.fire({
              title: 'Error al eliminar la tarea',
              text: error.response.data.message,
              icon: 'error',
              confirmButtonText: 'Aceptar',
            });
          });
      }
    });
  };

  return (
    <li className="bg-white rounded shadow p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">Titulo: {task.title}</h3>
      <p className="text-gray-600 mb-2">Descripción: {task.description}</p>
      <p className="text-gray-500">Fecha de Creación: {task.date}</p>
      <p className="text-gray-500">Estado: {task.state}</p>
      <p className="text-gray-500">Creador: {task.creator_name}</p>
      <p className="text-gray-500">Likes: {task.likes_count}</p>
      <LikeButton
        isLiked={isLiked}
        taskId={task.id}
        onLikeClick={handleLikeClick}
      />
      <button
        className="bg-red-500 text-white rounded px-2 py-1 m-2 hover:bg-red-600"
        onClick={handleDeleteClick}
      >
        Eliminar
      </button>
    </li>
  );
}

export default TaskItem;
