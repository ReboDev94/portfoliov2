import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <section className="flex">
      <div className="w-20 py-5 h-screen border-r border-r-gray-200 flex flex-col items-center justify-between">
        <h1 className="text-gray-700 font-bold text-xl">
          <span>{'< R'}</span>
          <span className="text-red-500">{'J '}</span>
          <span>{'/>'}</span>
        </h1>
        <div>
          <FontAwesomeIcon icon={faGithubSquare} className="text-red-900" style={{ fontSize: 30 }} />
        </div>
      </div>
      <div className="flex-1">2</div>
    </section>
  );
}
