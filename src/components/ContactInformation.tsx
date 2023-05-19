
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

type IContactInformation = {
  icon: IconDefinition;
  value: string;
  link?: string;
};

const contactInformation: IContactInformation[] = [
  {
    icon: faEnvelope,
    value: 'rrrrebolledohdz@gmail.com',
    link: 'mailto:rrrrebolledohdz@gmail.com',
  },
  {
    icon: faPhone,
    value: '+52 747-133-38-71',
    link: 'https://api.whatsapp.com/send?phone=7471333871',
  },
  {
    icon: faLocationDot,
    value: 'Chilpancingo de los bravos, Gro, Mex',
  },
];


const ContactInformation = () => {
  return (
    <div className="flex flex-col gap-6">
      {contactInformation.map(({ icon, value, link }) => (
        <div key={uuidv4()} className='flex items-center gap-4'>
          <FontAwesomeIcon
            icon={icon}
            className="text-neutral-800 hover:cursor-pointer"
            style={{ fontSize: 25 }}
          />
          {link ? (
            <Link href={link} passHref legacyBehavior className="cursor-pointer font-normal select-text">
              <a target="_blank" rel="noreferrer" className='hover:underline hover:underline-offset-2'>
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
