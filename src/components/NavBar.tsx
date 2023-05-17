import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { Button } from '@/components/Button';

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

  return (
    <nav>
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="min-w-max">
            <h1 className="text-gray-700 font-bold text-2xl">
              <span>{'< R'}</span>
              <span className="text-red-600">{'J '}</span>
              <span>{'/>'}</span>
            </h1>
          </div>
          <div className="hidden md:block">
            <ul className="text-base font-medium flex items-center gap-20 ml-14">
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
          </div>
        </div>
        <div className="hidden md:block">
          <Button onClick={()=>router.push('/contact')}>Contact Me</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
