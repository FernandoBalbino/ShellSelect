import React from 'react';

export default function ToolsLoading() {
  return (
    <section className="max-w-[90rem] mt-10 relative mx-auto">
      <div className="animate-pulse">
        {/* Título e Descrição */}
        <div className="text-center">
          <div className="h-12 bg-gray-300 rounded-md w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-300 rounded-md w-2/3 mx-auto mb-8"></div>
        </div>

        {/* Filtros */}
        <div className="flex justify-center space-x-4 mb-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-10 w-28 bg-gray-300 rounded-full"></div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid max-w-7xl mx-auto grid-cols-2 gap-y-6 gap-x-6 xl:grid-cols-4 justify-center justify-items-center items-center content-center p-9">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="w-full h-[200px] rounded-lg bg-gray-300 flex flex-col space-y-4 p-4"
            >
              <div className="w-full h-36 bg-gray-300 rounded-lg"></div>
              <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded-md w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
