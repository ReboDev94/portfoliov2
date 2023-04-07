import { Button } from '@/components/Button';

const navLinkClass = `
text-neutral-800
hover:cursor-pointer
relative
after:absolute
after:content-['']
after:bg-neutral-800
after:h-[2px]
after:w-[0px]
after:left-0
after:-bottom-[5px]
after:rounded-xl
after:duration-300
after:hover:w-full
`;

const NavBar = () => {
  return (
    <nav className="h-16 px-14 py-3 flex justify-between items-center text-base font-medium">
      <ul className="flex items-center gap-20">
        <a className={`${navLinkClass}`}>Home</a>
        <a className={`${navLinkClass}`}>About me</a>
        <a className={`${navLinkClass}`}>Certifications</a>
        <a className={`${navLinkClass}`}>Portfolio</a>
      </ul>

      <Button />
    </nav>
  );
};

export default NavBar;
