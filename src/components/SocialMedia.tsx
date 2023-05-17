import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

type Props = {
  className?: string;
};
const SocialMedia = ({ className = '' }: Props) => {
  return (
    <div className={`${className}`}>
      <Link href="https://github.com/ReboDev94">
        <FontAwesomeIcon
          icon={faGithubSquare}
          className="text-neutral-800 hover:text-gray-900 hover:cursor-pointer"
          style={{ fontSize: 30 }}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/rafael-de-jesus-rebolledo-hern%C3%A1ndez-rebodev/">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-neutral-800 hover:text-blue-600 hover:cursor-pointer"
          style={{ fontSize: 30 }}
        />
      </Link>
      <Link href="https://www.facebook.com/rebolledohernandez">
        <FontAwesomeIcon
          icon={faFacebookSquare}
          className="text-neutral-800 hover:text-blue-500 hover:cursor-pointer"
          style={{ fontSize: 30 }}
        />
      </Link>
    </div>
  );
};

export default SocialMedia;
