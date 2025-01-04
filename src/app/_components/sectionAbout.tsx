'use client';

import { useState } from 'react';

export default function SectionAbout() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id='about' className='py-8'>
      <h2 className='section-title'>About Me</h2>
      <div
        className={`text-gray-700 dark:text-gray-400 ${
          isExpanded ? '' : 'line-clamp-3'
        } overflow-hidden`}
      >
        {/* 
          '웹개발 소프트웨어 개발자 지원한 이유' 부분을 여기에 배치 
        */}
        <p className='mb-2'>
          저는 원래 AI 의료 로봇 산업에 기여하고 싶어 로봇 개발을 꿈꿨습니다.
          하지만 학비가 부족하여 대학을 졸업하지 못하고 군대에서 9년간 복무한 후
          바로 무역 회사 생활을 시작하게 되었습니다.
        </p>
        <p className='mb-2'>
          AI 로봇 산업에서 일하고 싶어서 “Python을 이용한 AI 자율주행 교육”
          부트캠프에 지원하여 6개월간 공부를 하였습니다. 이후 로봇 개발이 학위
          중심으로 이루어지는 현실을 깨닫고 직접 회사를 설립하기 위해 웹 개발과
          AI를 접목한 플랫폼 제작에 도전하기로 결정했습니다.
        </p>
        <p className='mb-2'>
          현재 캐나다에서 동생과 협업하며 웹사이트 개발을 진행하고 있으며, 영어
          학습과 동시에 캐나다에서 생활비를 벌기 위해 웹 개발자로 지원하게
          되었습니다.
        </p>
        <p>
          주어진 일에 최선을 다하며 기대에 부응할 자신이 있습니다. 향후 이
          경험을 기반으로 로봇 회사를 설립하는 것이 제 목표입니다.
        </p>
      </div>
      <button
        onClick={toggleExpand}
        className='mt-2 text-blue-500 hover:underline focus:outline-none'
      >
        {isExpanded ? 'Show Less' : 'Read More'}
      </button>
    </section>
  );
}
