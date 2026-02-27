import anime from "animejs";
import  { useEffect } from "react";
import guitarImageLogo from "/Main/guitarStartLogo.webp";

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

const Main = () => {
  useEffect(() => {
    animateTyping();
    animateBackgroundAppear();
  }, []);

  return (
    <main
      className="mb-20 flex min-h-[90svh] items-center justify-center"
      id="main"
    >
      <div className="relative flex size-[260px] flex-col items-center justify-center overflow-hidden rounded-full bg-transparent p-10 text-center font-DMSerifDisplay transition-all duration-500 ease-in-out lil:size-[400px] sm:size-[500px] md:size-[650px] lg:size-[600px] xl:size-[700px] 2xl:size-[800px] 4xl:size-[1000px] mediaPointer:hover:shadow-10xl mediaTouch:active:shadow-10xl">
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
        <img
          src={guitarImageLogo}
          alt="photo of guitar in black and white from top of freatboard"
          className="background-image absolute left-0 top-0 h-full w-full rounded-full bg-cover bg-center opacity-0"
        />
      </div>
    </main>
  );
};

export default Main;
