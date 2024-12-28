const skills = {
  frontend: [
    'React',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'Dart',
    'Flutter',
  ],
  backend: ['Node.js', 'AWS Cognito', 'Supabase', 'Firebase'],
  database: ['PostgreSQL', 'MySQL'],
  ai_ml: ['LangChain', 'TensorFlow', 'Keras', 'PyTorch', 'OpenCV', 'Streamlit'],
  data_analysis: ['Python', 'NumPy', 'Pandas'],
};

export default function SectionSkills() {
  return (
    <section
      id='skills'
      className='py-8 bg-gray-100 dark:bg-gray-800 rounded-lg'
    >
      <h2 className='text-2xl font-bold mb-4 border-b-2 border-gray-300'>
        Skills
      </h2>
      <div className='space-y-8'>
        {/* Frontend */}
        <div>
          <h3 className='text-xl font-semibold mb-2'>Frontend</h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 px-2'>
            {skills.frontend.map((skill) => (
              <div
                key={skill}
                className='bg-white shadow-md p-4 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h3 className='text-xl font-semibold mb-2'>Backend</h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 px-2'>
            {skills.backend.map((skill) => (
              <div
                key={skill}
                className='bg-white shadow-md p-4 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Database */}
        <div>
          <h3 className='text-xl font-semibold mb-2'>Database</h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 px-2'>
            {skills.database.map((skill) => (
              <div
                key={skill}
                className='bg-white shadow-md p-4 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* AI/ML */}
        <div>
          <h3 className='text-xl font-semibold mb-2'>AI(ML/DL)</h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 px-2'>
            {skills.ai_ml.map((skill) => (
              <div
                key={skill}
                className='bg-white shadow-md p-4 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Data Analysis */}
        <div>
          <h3 className='text-xl font-semibold mb-2'>Data Analysis</h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 px-2'>
            {skills.data_analysis.map((skill) => (
              <div
                key={skill}
                className='bg-white shadow-md p-4 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
