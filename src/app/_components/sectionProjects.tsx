const projects = [
  { name: 'Project A', description: 'A web app built with React.' },
  { name: 'Project B', description: 'A mobile app using Flutter.' },
];

export default function SectionProjects() {
  return (
    <section
      id='projects'
      className='py-8 bg-gray-100 dark:bg-gray-800 rounded-lg'
    >
      <h2 className='text-2xl font-bold mb-4 border-b-2 border-gray-300'>
        Projects
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 px-2'>
        {projects.map((project) => (
          <div
            key={project.name}
            className='p-4 bg-white shadow-md rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
          >
            <h3 className='font-semibold'>{project.name}</h3>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
