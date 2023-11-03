import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiWhatsappLine,
  RiSpotifyLine,
} from "react-icons/ri";

const socialLinks = [
  {
    icon: <RiYoutubeLine className="" />,
    url: "https://www.youtube.com/@mortein",
  },
  {
    icon: <RiInstagramLine className="" />,
    url: "https://www.instagram.com/mortein",
  },
  {
    icon: <RiFacebookLine className="" />,
    url: "https://www.facebook.com/mortein",
  },
  {
    icon: <RiWhatsappLine className="" />,
    url: "https://api.whatsapp.com/send?phone=55329916-0904&text=Ol%C3%A1%20Mortein!",
  },
  {
    icon: <RiSpotifyLine className="" />,
    url: "https://open.spotify.com/artist/mortein",
  },
];

const Socials = () => {
  return (
    <div className="flex space-x-4 xl:space-x-8">
      {socialLinks.map((socialLink, index) => (
        <Link href={socialLink.url} target="_blank" rel="noreferrer" key={index} className=" text-white hover:text-slate-900 hover:scale-110 transition-all duration-300">
          {socialLink.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
