export default function SectionExperience() {
  return (
    <section id='experience' className='py-8 dark:bg-gray-800'>
      <div className='flex flex-col gap-4 lg:w-1/2 px-8 mx-auto'>
        <h2 className='text-2xl font-bold text-center gap-4'>Experience</h2>

        <div className='p-4 shadow-md rounded-md my-4 bg-gray-700'>
          <h3 className='font-semibold text-lg text-white'>Trade Sales</h3>
          <p className='text-sm text-white dark:text-gray-300'>
            Sales of Japanese and Korean trade
          </p>
          <ul className='list-disc list-inside text-white dark:text-gray-200 mt-2 ml-4'>
            <li>
              Collaboration with Hyundai and Kia to develop and successfully
              deliver products
            </li>
          </ul>
        </div>

        <div className='p-4 shadow-md rounded-md my-4 bg-gray-700'>
          <h3 className='font-semibold text-lg text-white'>
            Web Application Development (Now)
          </h3>
          <p className='text-sm text-white dark:text-gray-300'>
            Technologies used: Next.js, React, Supabase, PostgreSQL, MUI, AWS
            Cognito, TypeScript
          </p>
          <ul className='list-disc list-inside text-white dark:text-gray-200 mt-2 ml-4'>
            <li>
              Developing an enterprise-level web application (targeted for
              deployment in July 2025)
            </li>
            <li>
              Full-Stack developer working on backend, frontend, and server
              development
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
