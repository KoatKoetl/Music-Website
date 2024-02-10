import anime from "animejs";
import { Suspense, lazy, useEffect } from "react";
import guitarImageLogo from "/src/assets/images/Main/guitarStartLogo.webp";
import loadingImage from "/src/assets/images/Main/loading.gif";

const LazyLoadedImage = lazy(() => import("./LazyLoad/lazyLoadImage.jsx"));

const animateTyping = () => {
  let textWrapper = Array.from(document.querySelectorAll(".text-wrapper"));

  textWrapper.forEach((wrapper) => {
    wrapper.innerHTML = wrapper.textContent.replace(
      /\S/g,
      "<span class='letter inline-block drop-shadow-font-shadow-2'>$&</span>",
    );
  });

  anime({
    targets: ".title .letter",
    translateY: ["1.1em", 0],
    translateZ: 0,
    opacity: [0, 1],
    duration: 1000,
    delay: (el, i) => 50 * i,
  });
};

const animateBackgroundAppear = () => {
  anime({
    targets: ".background-image",
    opacity: [0, 0.65],
    duration: 4000,
    easing: "easeInOutQuad",
  });
};

const MissingImage = () => {
  return (
    <>
      <img
        src={loadingImage}
        alt="Image is loading"
        className="background-image absolute left-1/2 top-[70%] size-10 -translate-x-1/2 animate-spin-slow rounded-full bg-cover bg-center"
      />
    </>
  );
};

const Main = () => {
  useEffect(() => {
    animateTyping();
    animateBackgroundAppear();
  }, []);

  const imageProps = {
    src: guitarImageLogo,
    alt: "photo of guitar in black and white from top of freatboard",
    styles:
      "background-image animate-spin-slow absolute left-0 top-0 h-full w-full rounded-full bg-cover bg-center opacity-0",
  };

  return (
    <main className="mb-20 flex min-h-[90svh] items-center justify-center">
      <div className="relative flex h-[250px] w-[260px] flex-col items-center justify-center overflow-hidden rounded-full p-10 text-center font-DMSerifDisplay transition-all duration-500 ease-in-out hover:shadow-12xl lil:h-[330px] lil:w-[345px] sm:h-[425px] sm:w-[450px] md:size-[650px] lg:size-[550px] xl:size-[650px] 2xl:size-[800px] 4xl:size-[1000px]">
        <h1 className="title leading-0 relative z-10 flex lg:mb-4">
          <span className="text-wrapper 4x:text-12xl relative inline-block overflow-hidden text-2xl font-bold lil:text-4xl lil:leading-normal sm:text-5xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            <span className="letters">Hello everyone,</span>
          </span>
        </h1>
        <h2 className="title relative z-10 flex flex-col">
          <span className="text-wrapper relative inline-block overflow-hidden text-sm font-bold lil:text-xl md:px-2 md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl 4xl:text-4xl">
            <span className="letters">This website is just made up</span>
          </span>
          <span className="text-wrapper relative inline-block overflow-hidden text-sm font-bold lil:text-xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl 4xl:text-4xl">
            <span className="letters">of my favorite music</span>
          </span>
        </h2>
        <Suspense fallback={<MissingImage />}>
          <LazyLoadedImage {...imageProps} />
        </Suspense>
      </div>
    </main>
  );
};

export default Main;
