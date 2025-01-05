export default function SectionAwards() {
  return (
    <section id='awards' className='py-8 dark:bg-gray-800'>
      <div className='flex flex-col gap-4 lg:w-1/2 px-8 mx-auto'>
        <h2 className='text-2xl font-bold text-center gap-4'>Awards</h2>

        <div className='p-4 shadow-md rounded-md my-4 bg-gray-700'>
          <h3 className='font-semibold text-lg text-white'>
            Minister of Science and Technology Award of South Korea
          </h3>
          <p className='text-sm text-white dark:text-gray-300'>
            Gold Prize Winner in the AI Development Competition for Autonomous
            Driving
          </p>
          <ul className='list-disc list-inside text-white dark:text-gray-200 mt-2 ml-4'>
            <li>
              I developed an AI model to support autonomous driving, which
              earned me the Gold Prize in a competition.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
