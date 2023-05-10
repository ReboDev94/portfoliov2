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
      <div className="mt-10">
        <h1 className="text-3xl font-semibold">
          <span className="text-red-600">C</span>ertifications
        </h1>

        <div className="my-10">
          <div className="flex flex-wrap -mx-2">
            {allCertificates.map(({ title, src }) => (
              <div className="w-1/4 p-2" key={uuidv4()}>
                <div className="bg-white rounded-md border shadow-md border-neutral-200 hover:border-red-600 hover:shadow-red-200">
                  <div className="relative w-full h-60">
                    <Image src={src} alt="certificate-" fill className="rounded-t-md" />
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
