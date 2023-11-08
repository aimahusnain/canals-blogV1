import { ChatIcon } from "@heroicons/react/outline";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../icons";
import siteMetadata from "../../utils/siteMetaData";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Sicons = () => {
  return (
    <Popover hover={true} className="absolute top-[50%]">
      <PopoverTrigger className="bg-emerald-400 drop-shadow-lg p-4 rounded-full ml-5 absolute top-[calc(100%-80px)] hover:bg-emerald-500 transition shadow">
        <ChatIcon className="w-8 h-8 text-white" />
      </PopoverTrigger>
      <PopoverContent className="mb-3 bg-dark dark:bg-light drop-shadow-2xl ease-in-out flex flex-col border-none gap-4 w-[64px] items-center justify-center text-center">
        <a
          href={siteMetadata.linkedin}
          className="inline-block w-6 h-6"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.twitter}
          className="inline-block w-6 h-6"
          aria-label="Reach out to me via Twitter"
          target="_blank"
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.github}
          className="inline-block w-6 h-6"
          aria-label="Check my profile on Github"
          target="_blank"
        >
          <GithubIcon className="hover:scale-125 transition-all ease duration-200 fill-white dark:fill-dark" />
        </a>
        <a
          href={siteMetadata.dribbble}
          className="inline-block w-6 h-6"
          aria-label="Check my profile on Dribbble"
          target="_blank"
        >
          <DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </PopoverContent>
    </Popover>
  );
};

export default Sicons;
