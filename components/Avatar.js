import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none "> 
      <Image src={'/mortein1.png'} width={737} height={678} alt='' />
    </div>
  )
  ;
};

export default Avatar;
