export default function SectionStrengths() {
  return (
    <section id='strengths' className='py-8'>
      <div className='flex flex-col gap-4 lg:w-1/2 px-8 mx-auto'>
        <h2 className='text-2xl font-bold text-center gap-4'>
          Strengths & Weaknesses
        </h2>
        <div className='p-4 shadow-md rounded-md my-4 bg-gray-700'>
          <div>
            <h3 className='font-semibold text-white'>Strengths</h3>
            <ul className='list-disc list-inside ml-4 mt-2 text-white dark:text-gray-200'>
              <li>
                <strong>Perseverance and mental strength :</strong> Developed
                strong mental resilience and perseverance through experience in
                the Republic of Korea Special Forces (Defense Intelligence
                Command).
              </li>
              <li>
                <strong>Team leadership :</strong> Grew the lowest-ranked team
                to the top-ranked team in a short period of time while serving
                as a deputy team leader.
              </li>
              <li>
                <strong>Problem-solving ability :</strong> Analyzed the current
                situation and proposed the best solution, effectively
                coordinating with related departments.
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-white'>Weaknesses</h3>
            <p className='text-white dark:text-gray-200'>
              Although I do not hold a formal degree, I have consistently
              acquired practical skills required in the field through personal
              projects. In particular, I have independently managed the entire
              process of web development, from planning and designing to
              development and deployment, gaining comprehensive hands-on
              experience. These experiences have been invaluable in solving
              problems independently and learning new technologies effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
