import { Typewriter } from 'react-simple-typewriter';
import ProfilePhoto from '@/components/ProfilePhoto';
import ContactInformation from '@/components/ContactInformation';
import { Button } from '../components/Button';

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col container mx-auto md:px-20">
      <div className="flex-1 grid grid-cols-2">
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
          <div className='flex gap-2'>
            <Button>Hire me</Button>
            <Button>Resume</Button>
          </div>
        </div>
        <div className="grid place-content-center">
          <ProfilePhoto />
        </div>
      </div>
    </section>
  );
}
