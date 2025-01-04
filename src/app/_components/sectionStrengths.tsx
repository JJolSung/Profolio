export default function SectionStrengths() {
  return (
    <section id='strengths' className='py-8'>
      <h2 className='section-title'>Strengths & Weaknesses</h2>
      <div className='p-4 bg-white shadow-md rounded-md dark:bg-gray-700 space-y-4'>
        <div>
          <h3 className='font-semibold'>강점</h3>
          <ul className='list-disc list-inside ml-4 mt-2 text-gray-700 dark:text-gray-200'>
            <li>
              <strong>끈기와 정신력:</strong> 대한민국 특수부대(정보사령부)
              경험으로 강인한 정신력과 인내심 보유
            </li>
            <li>
              <strong>팀 리더십:</strong> 부팀장 근무 시 최하위 팀을 단기간에
              최상위 팀으로 성장
            </li>
            <li>
              <strong>문제 해결 능력:</strong> 현재 상황을 분석하고 최선의
              해결책을 제시, 관련 부서와 효과적 조율
            </li>
          </ul>
        </div>

        <div>
          <h3 className='font-semibold'>약점</h3>
          <p className='text-gray-700 dark:text-gray-200'>
            아직 정규 학위가 없다는 점을 극복하기 위해 노력 중이며, 실무경험과
            프로젝트 성과로 신뢰를 쌓아가고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
