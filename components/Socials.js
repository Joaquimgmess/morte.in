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
    url: "https://www.youtube.com/@morteinofficial",
  },
  {
    icon: <RiInstagramLine className="" />,
    url: "https://www.instagram.com/morteinofficial",
  },
  {
    icon: <RiFacebookLine className="" />,
    url: "https://m.facebook.com/morteinband",
  },
  {
    icon: <RiWhatsappLine className="" />,
    url: "https://api.whatsapp.com/send?phone=55329916-0904&text=Ol%C3%A1%20Mortein!",
  },
  {
    icon: <RiSpotifyLine className="" />,
    url: "https://open.spotify.com/intl-pt/artist/0u8wARS8M0esg03GTdCc1u?si=HPE3ZpBvS3SZNDYHZXgrAA",
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
