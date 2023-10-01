import React from 'react';

function TaskItem({ task, onLikeClick }) {
  return (
    <li className="bg-white rounded shadow p-4">
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p className="text-gray-600">{task.description}</p>
      <p className="text-gray-500">Fecha de Creación: {task.date}</p>
      <p className="text-gray-500">Estado: {task.state}</p>
      <p className="text-gray-500">Creador: {task.creator_name}</p>
      <p className="text-gray-500">Likes: {task.likes_count}</p>
      <button
        className="bg-blue-500 text-white rounded px-2 py-1 mt-2"
        onClick={() => onLikeClick(task.id)}
      >
        Dar Like
      </button>
    </li>
  );
}

export default TaskItem;