/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { v4 as uuidv4 } from 'uuid';
import { Button } from '../components/Button';
import Link from 'next/link';
import { Projects } from '@/interfaces/projects';
import { getAllProjects } from './api/data';


type Props = {
  projects: Projects[]
}
const portfolio = ({ projects = [] }: Props) => {

  const router = useRouter();

  return (
    <section className="flex flex-col container mx-auto px-4 sm:px-6 md:px-10">
      <div className="mt-10">
        <h1 className="text-3xl font-semibold">
          <span className="text-red-600">P</span>ortfolio
        </h1>
      </div>
      {
        projects.map(({ title, description, skills, image, web, repo }) =>
          <div key={uuidv4()} className="grid grid-cols-2 gap-2 mt-10 mb-16 md:mx-36 md:min-h-[22rem] group">
            <div className="flex flex-col px-6 justify-center group-even:order-2">
              <Link href={web} passHref legacyBehavior>
                <a className="text-4xl font-semibold text-red-600 mb-4 hover:underline underline-offset-2 hover:cursor-pointer" target="_blank" rel="noreferrer">{title}</a>
              </Link>
              <div className='flex flex-col gap-4'>
                <p className='text-neutral-800'>{description}</p>
                <div>
                  <h5 className='font-semibold text-neutral-800'>Skills:</h5>
                  <ul className="flex flex-wrap">
                    {
                      skills.map((skill) =>
                        <li key={uuidv4()} className="mr-1.5 mt-2">
                          <span className="select-none border border-red-600 bg-red-100 font-medium px-3 py-1 text-xs leading-5 rounded-full hover:bg-red-600 hover:text-white">
                            {skill}
                          </span>
                        </li>
                      )
                    }
                  </ul>
                </div>
                <div className='mt-4'>
                  <Button onClick={() => router.push(repo)}>Go to Repo</Button>
                </div>
              </div>
            </div>
            <div className='relative w-full'>
              <div className='border-[12px] h-[300px] rounded-lg absolute inset-x-0 top-8 border-red-600' />
              <div className='h-[300px] w-full border absolute group-even:-left-8 group-odd:left-8 object-fill shadow-lg rounded-lg'>
                <Image
                  src={'/img/portfolio/' + image}
                  alt={`portfolio - ${title}`}
                  fill
                  sizes='100%'
                  priority
                  className='rounded-[inherit]'
                />
              </div>
            </div>
          </div>
        )
      }
    </section>
  );
};

export default portfolio;
export const getStaticProps = async () => {
  const projects = await getAllProjects();

  return {
    props: { projects },
  };
};