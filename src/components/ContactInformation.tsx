
import Link from 'next/link';
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

const ContactInformation = () => {
  return (
    <div className="flex">
      {contactInformation.map(({ label, value, link }) => (
        <div
          key={uuidv4()}
          className="text-neutral-800 flex flex-col gap-2 first-of-type:pl-0 px-10 border-r-2 border-r-gray-500"
        >
          <span className="font-semibold text-lg">{label}:</span>
          {link ? (
            <Link href={link} passHref legacyBehavior className="cursor-pointer font-normal select-text">
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
  );
}

export default ContactInformation
