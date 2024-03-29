import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { v4 as uuidv4 } from 'uuid';
import { Button } from '../components/Button';
import { Projects } from '@/interfaces/projects';
import { getAllProjects } from './api/data';

type Props = {
  projects: Projects[];
};
const Portfolio = ({ projects = [] }: Props) => {
  return (
    <section className="flex flex-col container mx-auto px-4 sm:px-6">
      <div className="mt-10">
        <h1 className="text-3xl font-semibold">
          <span className="text-light-black/70">P</span>ortfolio
        </h1>
      </div>
      {projects.map(({ title, description, skills, image, web, repo }) => (
        <div
          key={uuidv4()}
          className="grid grid-cols-1 lg:grid-cols-2 gap-2 my-10 lg:mt-10 lg:mb-16 lg:mx-36 lg:min-h-[22rem] group"
        >
          <div className="flex flex-col px-6 justify-center order-2 lg:order-none lg:group-even:order-2">
            <Link href={web} passHref legacyBehavior>
              <a
                className="text-4xl font-semibold mb-4 hover:underline underline-offset-2 hover:cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                {title}
              </a>
            </Link>
            <div className="flex flex-col gap-4">
              <p>{description}</p>
              <div>
                <h5 className="font-semibold ">Skills:</h5>
                <ul className="flex flex-wrap">
                  {skills.map((skill) => (
                    <li key={uuidv4()} className="mr-1.5 mt-2">
                      <span className="select-none border border-light-black/20 bg-light-black/20 font-medium px-3 py-1 text-xs leading-5 rounded-full hover:bg-light-black hover:text-light">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex gap-2">
                <Link href={repo} passHref legacyBehavior>
                  <a target="_blank" rel="noreferrer">
                    <Button>Go to Repo</Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[350px] lg:group-even:-left-8 lg:group-odd:left-8">
            <div className="border-[12px] h-[180px] sm:h-[260px] lg:h-[270px] rounded-lg absolute inset-x-0 top-8 border-light-black" />
            <div className="h-[180px] sm:h-[260px] lg:h-[260px] w-full border absolute group-even:-left-8 group-odd:left-8 object-fill shadow-lg rounded-lg">
              <Image
                src={'/img/portfolio/' + image}
                alt={`portfolio - ${title}`}
                fill
                sizes="100%"
                priority
                quality={100}
                className="rounded-[inherit]"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
export const getStaticProps = async () => {
  const projects = await getAllProjects();

  return {
    props: { projects },
  };
};
