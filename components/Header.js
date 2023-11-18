import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-25 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex  items-center w-full justify-between ">
            <Link href="/">
              <Image src={'/mortein-logo.png'} width={100} height={100} alt='' priority={true} className=""/> 
            </Link>
            <Socials />
        </div>
      </div>
    </header>
  )
};

export default Header;
