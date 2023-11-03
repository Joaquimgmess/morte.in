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
    icon: <RiYoutubeLine className="w-8 h-8 xl:w-12 xl:h-12 text-white" />,
    url: "https://www.youtube.com/@mortein",
  },
  {
    icon: <RiInstagramLine className="w-8 h-8 xl:w-12 xl:h-12 text-white" />,
    url: "https://www.instagram.com/mortein",
  },
  {
    icon: <RiFacebookLine className="w-8 h-8 xl:w-12 xl:h-12 text-white" />,
    url: "https://www.facebook.com/mortein",
  },
  {
    icon: <RiWhatsappLine className="w-8 h-8 xl:w-12 xl:h-12 text-white" />,
    url: "https://api.whatsapp.com/send?phone=SEUNUMERO",
  },
  {
    icon: <RiSpotifyLine className="w-8 h-8 xl:w-12 xl:h-12 text-white" />,
    url: "https://open.spotify.com/artist/mortein",
  },
];

const Socials = () => {
  return (
    <div className="flex space-x-4 xl:space-x-8">
      {socialLinks.map((socialLink, index) => (
        <Link href={socialLink.url} target="_blank" rel="noreferrer" key={index} className="hover:text-slate-900 hover:scale-130 transition-all duration-300">
          {socialLink.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
