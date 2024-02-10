import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PropTypes from "prop-types";
import React, { lazy } from "react";
import bandPhoto from "../assets/images/band-KINO.webp";
const LazyLoadedImage = lazy(() => import("./LazyLoad/lazyLoadImage.jsx"));

// Get all album images links in one array
const albumGallery = Object.values(
  import.meta.glob(
    "@assets/images/KINO-Albums/*.{png,jpg,jpeg,PNG,JPEG,webp}",
    {
      eager: true,
      as: "url",
    },
  ),
);

const AlbumCovers = ({ imageLinks }) => {
  return (
    <React.Fragment>
      {imageLinks.map((link, index) => {
        // Get the file name without extension
        const albumTitle = link.split("/").pop().split(".").shift();

        return (
          <CarouselItem className="flex justify-center text-center" key={index}>
            <LazyLoadedImage
              key={index}
              src={link}
              alt={`KINO` + " - " + albumTitle}
              width={150}
              height={150}
              title={albumTitle}
            />
          </CarouselItem>
        );
      })}
    </React.Fragment>
  );
};

AlbumCovers.propTypes = {
  imageLinks: PropTypes.array,
};

const BandSection = () => {
  const bandImageProps = {
    src: bandPhoto,
    alt: "photo in black and white of band KINO",
    styles: "justify-self-center rounded-lg",
    width: 600,
  };

  return (
    <section className="font-Rubik">
      <div className="flex bg-dark-pink px-16 py-10">
        <div className="max-w-[650px] bg-dark-gray p-4 shadow-poster">
          <a href="https://en.wikipedia.org/wiki/Kino_(band)" target="blank">
            <h3 className="text-center text-[13rem] font-bold leading-[180px] tracking-tighter">
              К<span className="font-normal">И</span>НО
            </h3>
          </a>
          <div className="grid">
            <LazyLoadedImage {...bandImageProps} />
          </div>
          <div className="flex flex-wrap justify-center md:justify-normal">
            <ul className="w-[400px] p-4">
              <h4 className="mb-2 text-center text-xl font-semibold">
                Band Members
              </h4>
              <li>
                <span className="font-semibold">Vocalist:</span> Viktor
                Robertovich Tsoi -{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Viktor_Tsoi"
                  target="blank"
                  className="text-red-600"
                >
                  Wikipedia
                </a>
              </li>
              <li>
                <span className="font-semibold">Guitarist:</span> Yuri
                Dmitriyevich Kasparyan -{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Yuri_Kasparyan#External_links"
                  target="blank"
                  className="text-red-600"
                >
                  Wikipedia
                </a>
              </li>
              <li>
                <span className="font-semibold">Drummer:</span> Georgy (Gustav)
                Konstantinovich Guryanov -{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Georgy_Guryanov"
                  target="blank"
                  className="text-red-600"
                >
                  Wikipedia
                </a>
              </li>
              <li>
                <span className="font-semibold">Bass player:</span> Alexander
                Valentinovich Titov -{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Alexander_Titov_(rock_musician)"
                  target="blank"
                  className="text-red-600"
                >
                  Wikipedia
                </a>
              </li>
            </ul>
            <ul className="w-[210px] p-4">
              <h4 className="mb-2 text-center text-xl font-semibold">Albums</h4>
              <Carousel>
                <CarouselContent>
                  <AlbumCovers imageLinks={albumGallery} />
                </CarouselContent>
                <CarouselPrevious
                  variant="ghost"
                  className="md:left-[25%] md:top-[115%]"
                />
                <CarouselNext
                  variant="ghost"
                  className="md:right-[25%] md:top-[115%]"
                />
              </Carousel>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BandSection;
