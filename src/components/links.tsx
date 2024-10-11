import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Links() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <a
          href=""
          className="hover:bg-white hover:bg-opacity-10 size-8 flex justify-center items-center rounded-md transition-all duration-150 ease-in"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href=""
          className="hover:bg-white hover:bg-opacity-10 size-8 flex justify-center items-center rounded-md transition-all duration-150 ease-in"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a
          href=""
          className="hover:bg-white hover:bg-opacity-10 size-8 flex justify-center items-center rounded-md transition-all duration-150 ease-in"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </a>
      </div>
    </div>
  );
}
