export default function SectionExperience() {
  return (
    <section id='experience' className='py-8'>
      <h2 className='section-title'>Experience</h2>

      {/* 무역 영업 */}
      <div className='p-4 bg-white shadow-md rounded-md my-4 dark:bg-gray-700'>
        <h3 className='font-semibold text-lg'>무역 영업</h3>
        <p className='text-sm text-gray-500 dark:text-gray-300'>
          일본 ↔ 한국 무역 영업 담당
        </p>
        <ul className='list-disc list-inside text-gray-700 dark:text-gray-200 mt-2 ml-4'>
          <li>
            현대자동차, 기아자동차와 협업하여 제품 개발 및 성공적인 납품 성과
          </li>
        </ul>
      </div>

      {/* Web Application 제작 */}
      <div className='p-4 bg-white shadow-md rounded-md my-4 dark:bg-gray-700'>
        <h3 className='font-semibold text-lg'>Web Application 제작</h3>
        <p className='text-sm text-gray-500 dark:text-gray-300'>
          사용 기술: Next.js, React, Supabase, PostgreSQL, MUI, AWS Cognito,
          TypeScript
        </p>
        <ul className='list-disc list-inside text-gray-700 dark:text-gray-200 mt-2 ml-4'>
          <li>
            엔터프라이즈 급 웹 애플리케이션 개발 중 (2025년 7월 배포 목표)
          </li>
          <li>Full-Stack 개발자로 백엔드, 프론트엔드, 서버 작업 진행</li>
        </ul>
      </div>
    </section>
  );
}
