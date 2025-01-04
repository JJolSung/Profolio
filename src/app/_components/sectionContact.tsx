export default function SectionContact() {
  return (
    <section id='contact' className='py-8'>
      <h2 className='section-title'>Contact</h2>
      <div className='px-2 space-y-2 text-gray-700 dark:text-gray-300'>
        <p>
          <strong>전화번호:</strong> 672-727-9702
        </p>
        <p>
          <strong>이메일:</strong>{' '}
          <a
            href='mailto:kms1208jj@gmail.com'
            className='text-blue-500 hover:underline'
          >
            kms1208jj@gmail.com
          </a>
        </p>
        <p>
          <strong>Blog:</strong>{' '}
          <a
            href='https://jjolsung-1208.tistory.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:underline'
          >
            jjolsung-1208.tistory.com
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a
            href='https://github.com/JJolSung'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:underline'
          >
            github.com/JJolSung
          </a>
        </p>
      </div>
    </section>
  );
}
