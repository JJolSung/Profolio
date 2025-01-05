'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function SectionAbout() {
  // handle expand and collapse
  const [isExpanded, setIsExpanded] = useState(false);

  // toggle expand and collapse
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id='about' className='py-8 dark:bg-gray-800 gap-4'>
      <div className='flex flex-col gap-4 w-1/2 mx-auto'>
        <h2 className='text-2xl font-bold text-center gap-4'>About Me</h2>
        <div className='flex flex-row gap-4'>
          <Image
            src='/images/IMG_1863.PNG'
            alt='profile'
            width={100}
            height={100}
            className='rounded-full'
          />
          <div className='flex flex-col justify-center'>
            <h3 className='text-2xl font-bold'>Myeong-sub Kim</h3>
            <p className='text-gray-500'>Web Developer</p>
          </div>
        </div>
        <div
          className={`text-gray-700 dark:text-white ${
            isExpanded ? '' : 'line-clamp-3'
          } overflow-hidden`}
        >
          <p className='mb-2'>
            I originally dreamed of contributing to the AI medical robotics
            industry by developing robots. However, due to a lack of tuition
            funds, I was unable to graduate from university and instead served
            in the military for 9 years before starting my career in a trading
            company.
          </p>
          <p className='mb-2'>
            I wanted to work in the AI robotics industry, so I enrolled in a
            6-month &quot;AI Autonomous Driving with Python&quot; bootcamp.
            After realizing that robot development is heavily centered around
            formal degrees, I decided to challenge myself by creating a platform
            that integrates web development and AI with the goal of starting my
            own company.
          </p>
          <p className='mb-2'>
            I am currently collaborating with my younger sibling to develop
            websites in Canada. At the same time, I am learning English while
            working as a web developer to support my living expenses here.
          </p>
          <p>
            I am confident in my ability to give my best to any task and meet
            expectations. My ultimate goal is to establish a robotics company in
            the future based on this experience.
          </p>
        </div>
        <button
          onClick={toggleExpand}
          className='mt-2 text-blue-500 hover:underline focus:outline-none'
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </section>
  );
}
