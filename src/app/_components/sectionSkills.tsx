const skills = {
  frontend: [
    'React',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'Dart',
    'Flutter',
    'MUI',
  ],
  backend: ['Node.js', 'AWS Cognito', 'Supabase', 'Firebase'],
  database: ['PostgreSQL', 'MySQL'],
  ai_ml: ['TensorFlow', 'Keras', 'OpenCV', 'LangChain', 'Streamlit'],
  data_analysis: ['Python', 'NumPy', 'Pandas'],
};

interface SkillSectionProps {
  title: string;
  items: string[];
}

function SkillSection({ title, items }: SkillSectionProps) {
  return (
    <div>
      <h3 className='text-xl font-semibold mb-2 px-4'>{title}</h3>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 px-2'>
        {items.map((skill) => (
          <div key={skill} className='skill-card'>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SectionSkills() {
  return (
    <section
      id='skills'
      className='py-8 bg-gray-100 dark:bg-gray-800 rounded-lg'
    >
      <h2 className='section-title'>Skills</h2>
      <div className='space-y-8'>
        {Object.entries(skills).map(([category, items]) => (
          <SkillSection
            key={category}
            title={category.replace('_', ' ').toUpperCase()}
            items={items}
          />
        ))}
      </div>
    </section>
  );
}
