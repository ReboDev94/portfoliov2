import React from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { getAllCertificates } from './api/data';
import { Certificate } from '@/interfaces/certificates';

type Props = {
  allCertificates: Certificate[];
};

const certifications = ({ allCertificates }: Props) => {
  return (
    <section className="flex flex-col container mx-auto px-4 sm:px-6 md:px-10">
      <div className='py-10'>
        <h1 className="text-3xl font-semibold">
          <span className="text-light-black/70">C</span>ertifications
        </h1>
        <div className="mt-10">
          <div className="flex flex-wrap -mx-2">
            {allCertificates.map(({ title, src }) => (
              <div className="w-full md:w-1/2 lg:w-1/4 p-2" key={uuidv4()}>
                <div className="bg-light rounded-md shadow-md border border-light-black/20 hover:border-light-black hover:shadow-light-black/20">
                  <div className="relative w-full h-60">
                    <Image
                      src={src}
                      alt={`certificate - ${title}`}
                      fill
                      sizes='100%'
                      priority
                      className="rounded-t-md" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold line-clamp-2 h-12">{title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default certifications;

export const getStaticProps = async () => {
  const allCertificates = await getAllCertificates();

  return {
    props: { allCertificates },
  };
};
