import React from 'react';

function LikeButton({ isLiked, onLikeClick }) {
  return (
    <button
      className={`bg-blue-500 text-white rounded px-2 py-1 mt-2 ${isLiked ? 'bg-gray-300 cursor-not-allowed' : ''}`}
      onClick={onLikeClick} // Llama directamente a la función onLikeClick
      disabled={isLiked}
    >
      {isLiked ? 'Liked' : 'Like'}
    </button>
  );
}

export default LikeButton;
