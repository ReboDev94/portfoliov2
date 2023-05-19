import { useEffect, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { Button } from '@/components/Button';
import { useTheme } from 'next-themes';
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

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
  const [menuNavbar, setMenuNavbar] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    router.events.on('routeChangeComplete', (url) => {
      setMenuNavbar(false);
    });
  }, [router.events])


  return (
    <nav className='px-4 sm:px-6 md:px-10 relative bg-light'>
      <div className='h-16 flex items-center justify-between'>
        <div className="min-w-max">
          <h1 className="font-bold text-2xl">
            <span>{'< R'}</span>
            <span className="text-light-black/70">{'J '}</span>
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
              rounded-b-lg
              px-6
              py-4
              md:relative
              md:transform-none
              md:top-0
              md:z-0
              md:shadow-none
              md:rounded-none
            bg-light
              md:flex-row
              md:items-center
              md:p-0`, {
          'hidden md:flex': !menuNavbar
        })}
        >
          <ul className="text-base flex gap-4  flex-col md:flex-row md:ml-14 md:items-center md:gap-10">
            {LINKS.map(({ label, path }) => (
              <Link
                key={path}
                href={path}
                className={classNames(
                  `
                    hover:cursor-pointer
                    relative
                    after:absolute
                    after:content-['']
                    after:bg-light-black
                    text-light-black/70
                    after:h-[2px]
                    after:w-[0px]
                    after:left-0
                    after:-bottom-[5px]
                    after:rounded-xl
                    after:duration-300
                    after:hover:w-full`,
                  { '!text-light-black font-semibold': router.pathname === path }
                )}
              >
                {label}
              </Link>
            ))}
          </ul>
          <div className='mt-4 md:mt-0 flex items-center gap-4'>
            <Button block onClick={() => router.push('/contact')}>Contact Me</Button>
          </div>
        </div>
        <div className='block md:hidden'>
          <FontAwesomeIcon
            icon={faBars}
            style={{ fontSize: 20 }}
            onClick={() => setMenuNavbar(!menuNavbar)}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

