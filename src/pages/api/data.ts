// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { promises as fs } from 'fs';
import { join } from 'path';
import { Certificate, CertificatesJSON } from '@/interfaces/certificates';
import { Projects } from '@/interfaces/projects';

const certificatesDirectory = join(process.cwd(), '_data');

export async function getAllCertificates() {
  const fullPath = join(certificatesDirectory, `certificates.json`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const dataJson: CertificatesJSON = JSON.parse(fileContents);

  const data = Object.keys(dataJson).reduce<Certificate[]>((acc, current) => {
    const certificate = dataJson[current] as unknown as Certificate[];
    return [...acc, ...certificate];
  }, []);
  return data;
}

export async function getAllProjects() {
  const fullPath = join(certificatesDirectory, `projects.json`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const dataJson: Projects[] = JSON.parse(fileContents);
  return dataJson;
}

