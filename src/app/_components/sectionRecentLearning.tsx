export default function SectionRecentLearning() {
  return (
    <section id='recentlearning' className='py-8'>
      <div className='flex flex-col gap-4 lg:w-1/2 px-8 mx-auto'>
        <h2 className='text-2xl font-bold text-center gap-4'>
          Recent Learning
        </h2>
        <div className='p-4 shadow-md rounded-md my-4 bg-gray-700'>
          <p className='text-white dark:text-gray-200'>
            <strong>Dart, Flutter:</strong> 웹 배포 후 일반 고객을 대상으로 하는
            모바일 앱 제작을 위해 학습 중
          </p>
          <p className='text-white dark:text-gray-200'>
            <strong>학습 방법:</strong> YouTube, 공식 Document
          </p>
        </div>
      </div>
    </section>
  );
}
