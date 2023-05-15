import React from 'react';

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-8">Página não encontrada</h1>
        <p className="text-gray-600 mb-4">A página que você está procurando não existe ou foi removida.</p>
        <a href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Voltar à página inicial
        </a>
      </div>
    </div>
  );
}

export default NotFound;