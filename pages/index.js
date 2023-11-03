import Image from "next/image";
import ProjectsBtn from "../components/ProjectsBtn";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full flex">
      <div className="w-full h-full bg-gradiant-to-r from-primary/10 via-black/30 to-black/10 flex">
        {/* Texto e Botão */}
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full w-full xl:w-1/2 xl:ml-28 sm:ml-0">
          <h1 className="h1 font-bold xl:text-7xl sm:text-xl">MÖRTEIN <br/> 
            <span className="text-black ">Rápido, pesado e melódico.</span> 
          </h1>
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <div className="hidden xl:flex">
            <ProjectsBtn />
          </div>
          
        </div>
        {/* Imagem */}
        <div className="hidden xl:flex w-1/2 xl:mr-10">
          <Image src={'/mortein1.png'} width={737} height={678} alt='' className="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
