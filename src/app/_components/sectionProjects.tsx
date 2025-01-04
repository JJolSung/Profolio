const projects = [
  {
    name: '프로젝트1: 클라이밍 신규 고객 유치',
    description: `- 목표: 클라이밍장 신규 고객 분석 및 커리큘럼 최적화
- 활동: DataFrame 설계, 데이터 정규화, 마케팅 팀과 협업
- 회고: 운영 방침 개선 과정에서 설득의 어려움 경험`,
  },
  {
    name: '프로젝트2: 현대자동차 RS4, JW 개발 협업',
    description: `- 역할: Haptic 소자 판매 담당
- 성과: 현대자동차 및 관련 협력사와의 조율을 통해 제품 판매 성공
- 회고: 고객 설득에는 단순하면서도 효과적인 접근이 중요`,
  },
  {
    name: '프로젝트3: 개인용 Pomodoro 앱',
    description: `- 목표: 집중 시간 관리를 위한 앱 제작
- 사용 기술: Dart, Flutter
- 회고: Dart와 Flutter의 확장 가능성을 체감`,
  },
];

export default function SectionProjects() {
  return (
    <section
      id='projects'
      className='py-8 bg-gray-100 dark:bg-gray-800 rounded-lg'
    >
      <h2 className='section-title'>Projects</h2>
      <div className='flex flex-col sm:grid-cols-2 gap-6 px-2 '>
        {projects.map((project) => (
          <div
            key={project.name}
            className='p-4 bg-white shadow-md rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
          >
            <h3 className='font-semibold mb-2'>{project.name}</h3>
            <pre className='text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap'>
              {project.description}
            </pre>
          </div>
        ))}
      </div>
    </section>
  );
}
