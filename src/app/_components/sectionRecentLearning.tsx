export default function SectionRecentLearning() {
  return (
    <section id='recentlearning' className='py-8'>
      <div className='flex flex-col gap-4 lg:w-1/2 px-8 mx-auto'>
        <h2 className='text-2xl font-bold text-center gap-4'>
          Recent Learning
        </h2>
        <div className='p-4 shadow-md rounded-md my-4 bg-gray-700'>
          <p className='text-white dark:text-gray-200'>
            <strong>Dart, Flutter:</strong> Currently learning to develop a
            mobile app for general customers after deploying a web service for a
            real company.
          </p>
          <p className='text-white dark:text-gray-200'>
            <strong>Learning Method :</strong> YouTube, Official Document
          </p>
        </div>
      </div>
    </section>
  );
}
