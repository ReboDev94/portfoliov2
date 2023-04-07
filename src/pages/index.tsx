import Image from 'next/image';
import Logo from '@/components/Logo';
import NavBar from '@/components/NavBar';
import ProfilePhoto from '@/components/ProfilePhoto';
import SocialMedia from '@/components/SocialMedia';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import { v4 as uuidv4 } from 'uuid';

type IContactInformation = {
  label: string;
  value: string;
  link?: string;
};

const contactInformation: IContactInformation[] = [
  {
    label: 'Email',
    value: 'rrrrebolledohdz@gmail.com',
    link: 'mailto:rrrrebolledohdz@gmail.com',
  },
  {
    label: 'Phone',
    value: '+52 747-133-38-71',
    link: 'https://api.whatsapp.com/send?phone=7471333871',
  },
  {
    label: 'Location',
    value: 'Chilpancingo de los bravos, Gro, Mex',
  },
];

export default function Home() {
  return (
    <section className="flex">
      <div className="w-20 h-screen border-r border-r-gray-200 flex flex-col items-center justify-between">
        <div className="h-16 grid place-content-center">
          <Logo />
        </div>
        <SocialMedia className="flex flex-col gap-5 py-5" />
      </div>
      <div className="flex-1 flex flex-col">
        <NavBar />
        <div className="flex-1 grid grid-cols-2 px-14">
          <div className="font-semibold text-neutral-800 gap-5 flex flex-col justify-center">
            <span className="text-xl">Hi There,</span>
            <h1 className="text-6xl font-bold tracking-tight">
              I´m Rafael de <span className="text-red-600">J</span>esús
            </h1>
            <h4 className="text-3xl">
              <span className="mr-2">I´m a</span>
              <Typewriter
                deleteSpeed={10}
                typeSpeed={50}
                cursor
                cursorColor="red"
                loop
                words={['Software engineer', 'Full Stack Developer']}
              />
            </h4>
          </div>
          <div className="grid place-content-center">
            <ProfilePhoto />
          </div>
        </div>
        <div className="h-24 px-14">
          <div className="flex">
            {contactInformation.map(({ label, value, link }) => (
              <div
                key={uuidv4()}
                className="text-neutral-800 flex flex-col gap-2 first-of-type:pl-0 px-10 border-r-2 border-r-red-500"
              >
                <span className="font-semibold text-lg">{label}:</span>
                {link ? (
                  <Link
                    href={link}
                    passHref
                    legacyBehavior
                    className="cursor-pointer font-normal select-text"
                  >
                    <a target="_blank" rel="noreferrer">
                      {value}
                    </a>
                  </Link>
                ) : (
                  <span className="font-normal select-text">{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
