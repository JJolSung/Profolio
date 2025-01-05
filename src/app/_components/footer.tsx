import {
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import { RiGithubLine } from 'react-icons/ri';

interface ContactItemProps {
  Icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}

const ContactItem = ({ Icon, label, value, href }: ContactItemProps) => (
  <p className='flex items-center gap-2'>
    <Icon className='h-6 w-6 text-blue-400' />
    <strong className='block text-lg'>{label}:</strong>
    {href ? (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-400 hover:underline'
      >
        {value}
      </a>
    ) : (
      <span className='text-gray-400'>{value}</span>
    )}
  </p>
);

export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-12'>
      <div className='container mx-auto px-4'>
        <section id='contact' className='mb-8'>
          <h2 className='text-3xl font-bold text-center mb-8'>Contact</h2>

          <div className='flex flex-col md:flex-row justify-center md:items-start gap-4'>
            <div className='text-center md:text-left space-y-4'>
              <ContactItem
                Icon={PhoneIcon}
                label='Phone'
                value='672-727-9702'
              />
              <ContactItem
                Icon={EnvelopeIcon}
                label='Email'
                value='kms1208jj@gmail.com'
                href='mailto:kms1208jj@gmail.com'
              />
            </div>
            <div className='text-center md:text-left space-y-4'>
              <ContactItem
                Icon={GlobeAltIcon}
                label='Blog'
                value='jjolsung-1208.tistory.com'
                href='https://jjolsung-1208.tistory.com/'
              />
              <ContactItem
                Icon={RiGithubLine}
                label='GitHub'
                value='github.com/JJolSung'
                href='https://github.com/JJolSung'
              />
            </div>
          </div>
        </section>

        {/* Footer Bottom */}
        <div className='border-t border-gray-700 pt-6 text-center'>
          <p className='text-gray-500'>
            © 2024 My Resume. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
