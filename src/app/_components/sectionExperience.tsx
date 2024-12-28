export default function SectionExperience() {
  return (
    <section id='experience' className='py-8'>
      <h2 className='text-2xl font-bold mb-4 border-b-2 border-gray-300'>
        Experience
      </h2>
      <ul className='space-y-4 px-2'>
        {[
          {
            title: 'Frontend Developer',
            company: 'Tech Corp',
            period: '2022 - 2024',
          },
          { title: 'Intern', company: 'Startup X', period: '2021 - 2022' },
        ].map((exp) => (
          <li
            key={exp.title}
            className='p-4 bg-white shadow-md rounded-md hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600'
          >
            <h3 className='font-semibold text-lg'>{exp.title}</h3>
            <p className='text-sm text-gray-500'>{exp.company}</p>
            <span className='text-sm text-gray-400'>{exp.period}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
