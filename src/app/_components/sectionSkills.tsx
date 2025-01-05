import {
  CodeBracketIcon,
  ServerStackIcon,
  CircleStackIcon,
  CpuChipIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

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
  icon: React.ReactElement;
}

function SkillCard({ title, items, icon }: SkillSectionProps) {
  return (
    <div className='bg-gray-700 text-white rounded-lg shadow-md p-6 flex flex-col '>
      <div className='flex items-center mb-4'>
        {icon}
        <h3 className='text-xl font-bold ml-2'>{title}</h3>
      </div>
      <ul className='space-y-2'>
        {items.map((item) => (
          <li key={item} className='text-gray-300 text-base font-semibold'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SectionSkills() {
  return (
    <section id='skills' className='py-8'>
      <h2 className='text-2xl font-bold text-center mb-8'>Technical Skills</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 container mx-auto px-8'>
        <SkillCard
          title='Frontend'
          items={skills.frontend}
          icon={<CodeBracketIcon className='h-6 w-6 text-blue-500' />}
        />
        <SkillCard
          title='Backend'
          items={skills.backend}
          icon={<ServerStackIcon className='h-6 w-6 text-green-500' />}
        />
        <SkillCard
          title='Database'
          items={skills.database}
          icon={<CircleStackIcon className='h-6 w-6 text-purple-500' />}
        />
        <SkillCard
          title='AI & ML'
          items={skills.ai_ml}
          icon={<CpuChipIcon className='h-6 w-6 text-red-500' />}
        />
        <SkillCard
          title='Data Analysis'
          items={skills.data_analysis}
          icon={<ChartBarIcon className='h-6 w-6 text-orange-500' />}
        />
      </div>
    </section>
  );
}
