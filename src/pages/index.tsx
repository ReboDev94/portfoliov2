import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { Button } from '../components/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col container mx-auto lg:px-20">
      <div className="flex-1 grid grid-cols-2 gap-10 md:gap-0 my-10 md:my-0">
        <div className="font-semibold  gap-5 flex flex-col justify-center col-span-2 md:col-span-1 order-2 md:order-1">
          <span className="text-xl">Hi There,</span>
          <h1 className="text-6xl font-bold tracking-tight">
            I´m Rafael de <span className="text-light-black/70">J</span>esús
          </h1>
          <h4 className="text-3xl">
            <span className="mr-2">I´m a</span>
            <Typewriter
              deleteSpeed={10}
              typeSpeed={50}
              cursor
              cursorColor="gray"
              loop
              words={['Software engineer', 'Full Stack Developer']}
            />
          </h4>
          <div className='flex gap-2'>
            <Link href="/CV/CV-RAFAEL_DE_JESUS_REBOLLEDO_HDZ_WEB_FULLSTACK.pdf" passHref legacyBehavior >
              <a target="_blank" rel="noreferrer">
                <Button>Download Resume</Button>
              </a>
            </Link>
          </div>
        </div>
        <div className="grid place-content-center col-span-2 md:col-span-1 md:order-2 relative">
          <div className='w-[300px] h-[300px] lg:h-[400px] lg:w-[420px] relative'>
            <Image src="/img/profile.png" alt="profile" fill priority />
          </div>
        </div>
      </div>
    </section>
  );
}
