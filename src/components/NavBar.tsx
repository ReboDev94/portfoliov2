import Link from 'next/link';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { Button } from '@/components/Button';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const LINKS = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About Me',
    path: '/about',
  },
  {
    label: 'Certifications',
    path: '/certifications',
  },
  {
    label: 'Portfolio',
    path: '/portfolio',
  },
];

const NavBar = () => {
  const router = useRouter();
  const [menuNavbar, setMenuNavbar] = useState(false)

  return (
    <nav className='px-4 sm:px-6 md:px-10 relative'>
      <div className='h-16 flex items-center justify-between'>
        <div className="min-w-max">
          <h1 className="text-neutral-800 font-bold text-2xl">
            <span>{'< R'}</span>
            <span className="text-red-600">{'J '}</span>
            <span>{'/>'}</span>
          </h1>
        </div>
        <div className={classNames(`
              flex-1
              flex
              flex-col
              justify-between
              absolute
              top-full
              inset-x-0
              transform
              translate-y-0
              z-10
              shadow-lg
              rounded-lg
              px-6
              py-4
              md:relative
              md:transform-none
              md:top-0
              md:z-0
              md:shadow-none
              md:rounded-none
            bg-white
              md:flex-row
              md:items-center
              md:p-0`, {
              'hidden md:flex': !menuNavbar
        })}
        >
          <ul className="text-base font-medium flex gap-4  flex-col md:flex-row md:ml-14 md:items-center md:gap-10">
            {LINKS.map(({ label, path }) => (
              <Link
                key={path}
                href={path}
                className={classNames(
                  `text-neutral-800
                    hover:cursor-pointer
                    relative
                    after:absolute
                    after:content-['']
                    after:bg-neutral-800
                    after:h-[2px]
                    after:w-[0px]
                    after:left-0
                    after:-bottom-[5px]
                    after:rounded-xl
                    after:duration-300
                    after:hover:w-full`,
                  { '!text-red-600': router.pathname === path }
                )}
              >
                {label}
              </Link>
            ))}
          </ul>
          <div className='mt-4 md:mt-0'>
            <Button block onClick={() => router.push('/contact')}>Contact Me</Button>
          </div>
        </div>
        <div className='block md:hidden'>
          <Button onClick={() => setMenuNavbar(!menuNavbar)}>
            <FontAwesomeIcon
              icon={faBars}
              className="text-neutral-800"
              style={{ fontSize: 20 }}
            />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
