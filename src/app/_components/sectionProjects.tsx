const projects = [
  {
    name: 'Project 1: Climbing New Customer Acquisition',
    description: `- Goal: Analyze new customers and optimize the curriculum
- Activities: Design DataFrame, normalize data, collaborate with marketing team
- Reflection: Difficulty in persuading during the improvement of operating policy`,
  },
  {
    name: 'Project 2: Hyundai RS4, JW Development Collaboration',
    description: `- Role: Sales of Haptic elements
- Result: Successfully sold products through coordination with Hyundai and related partners
- Reflection: Importance of simple and effective approaches in persuading customers`,
  },
  {
    name: 'Project 3: Personal Pomodoro App',
    description: `- Goal: Create an app for time management
- Technologies: Dart, Flutter
- Reflection: Appreciation of the extensibility of Dart and Flutter`,
  },
];

export default function SectionProjects() {
  return (
    <section id='projects' className='py-8 '>
      <h2 className='text-2xl font-bold text-center gap-4 mb-8'>Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-8'>
        {projects.map((project) => (
          <div
            key={project.name}
            className='p-4 shadow-md rounded-md hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 bg-gray-700 transition-all'
          >
            <h3 className='font-semibold mb-2 text-white'>{project.name}</h3>
            <pre className=' text-white dark:text-gray-300 whitespace-pre-wrap'>
              {project.description}
            </pre>
          </div>
        ))}
      </div>
    </section>
  );
}
