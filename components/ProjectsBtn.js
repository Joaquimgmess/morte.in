import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";


const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link href={'/songs'} className="relative w-[185px] h-[185px] flex justify-center items-center rounded-full">
        <Image src={'/mortein-logo.png'} width={141} height={148} alt='' className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"/>
      </Link>
    </div>
  )
};

export default ProjectsBtn;
