import { LazyLoadImage } from "react-lazy-load-image-component";
import DeezerLogo from "/home/stanislav/GitHub_Repositories/Music-Website/src/assets/images/Tools_logo/Deezer-LOGO.webp";
import RapidAPI from "/home/stanislav/GitHub_Repositories/Music-Website/src/assets/images/Tools_logo/RapidAPI_blue_LOGO.webp";
import ReactLogo from "/home/stanislav/GitHub_Repositories/Music-Website/src/assets/images/Tools_logo/React_LOGO.webp";
import TailwindCSSLogo from "/home/stanislav/GitHub_Repositories/Music-Website/src/assets/images/Tools_logo/TailwindCSS_LOGO.webp";

const Tools = () => {
  return (
    <section id="tools">
      <div className="bg-green-grass py-8 shadow-md">
        <h5 className="text-center text-4xl font-semibold text-white lil:text-5xl">
          Created using
        </h5>
        <ul className="flex flex-wrap items-center justify-center gap-4">
          <li>
            <a href="https://react.dev/" target="blank">
              <LazyLoadImage
                src={ReactLogo}
                className="h-8 flex-1 transition-transform lil:h-16 md:h-24 mediaPointer:hover:rotate-12 mediaTouch:active:rotate-12"
              />
            </a>
          </li>
          <li>
            <a href="https://tailwindcss.com/" target="blank">
              <LazyLoadImage
                src={TailwindCSSLogo}
                className="h-4 flex-1 transition-transform lil:h-8 md:h-12 mediaPointer:hover:rotate-12 mediaTouch:active:rotate-12"
              />
            </a>
          </li>
          <li>
            <a href="https://www.deezer.com/en/" target="blank">
              <LazyLoadImage
                src={DeezerLogo}
                className="h-3 flex-1 transition-transform lil:h-6 md:h-10  mediaPointer:hover:rotate-12 mediaTouch:active:rotate-12"
              />
            </a>
          </li>
          <li>
            <a href="https://rapidapi.com/" target="blank">
              <LazyLoadImage
                src={RapidAPI}
                className="h-12 flex-1 transition-transform lil:h-24 md:h-36 mediaPointer:hover:rotate-12 mediaTouch:active:rotate-12"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Tools;
