import React from 'react';

const ModalInfoProject = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-overlay') {
      onClose();
    }
  };
  return (
    <div
      id="modal-overlay"
      onClick={handleOutsideClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white w-11/12 md:w-1/2 lg:w-3/5 max-h-[90vh] rounded-lg overflow-y-auto shadow-lg transform transition-transform duration-300 ease-out scale-100">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">{project.title}</h2>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <div className="text-sm text-gray-500 flex gap-3 flex-col">
            <p><strong>Link Web: </strong><a target='_blank' className='hover:text-sky-600' href={project.linkUrlWeb}>{project.linkUrlWeb}</a></p>
            <p><strong>Link Repository: </strong>
              {project.linkUrlRepo.split(',').map(url => {
                return <li><a target='_blank' className='hover:text-sky-600' href={url.trim()}>{url.trim()}</a></li>
              })}
            </p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <p><strong>Platform:</strong> {project.platform}</p>

            <h2 className="text-xl font-bold mb-4 text-center">Project Showcase</h2>
            <div className='list-project-showcase flex flex-col'>
              {project.imageAppShowCase.length > 0 && project.imageAppShowCase.map((value, index) => {
                return <img src={value} alt="" />
              })}
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ModalInfoProject;
