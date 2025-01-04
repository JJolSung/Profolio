export default function SectionAwards() {
  return (
    <section id='awards' className='py-8'>
      <h2 className='section-title'>Awards</h2>
      <div className='p-4 bg-white shadow-md rounded-md dark:bg-gray-700'>
        <h3 className='font-semibold text-lg'>과학기술부 장관상</h3>
        <p className='text-sm text-gray-500 dark:text-gray-300 my-2'>
          자율주행 AI 개발 경진대회 금상 수상
        </p>
        <ul className='list-disc list-inside text-gray-700 dark:text-gray-200 ml-4'>
          <li>
            AI 자율주행 알고리즘 개발 및 적용 프로젝트에서 창의적 해결책을 제시
          </li>
        </ul>
      </div>
    </section>
  );
}
