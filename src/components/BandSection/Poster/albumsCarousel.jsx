import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import PropTypes from "prop-types";
import CarouselItems from "./carouselItems";

const Albums = () => {
  // Get all album images links in one array
  const albumCoverURLs = Object.values(
    import.meta.glob(
      "@assets/images/KINO-Albums/*.{png,jpg,jpeg,PNG,JPEG,webp}",
      {
        eager: true,
        as: "url",
      },
    ),
  );

  return (
    <div className="w-[210px] p-4">
      <h4 className="mb-2 text-center text-xl font-semibold">Albums</h4>

      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItems albumCoverURLs={albumCoverURLs} />
        </CarouselContent>
        <CarouselPrevious variant="ghost" className="left-[25%] top-[115%]" />
        <CarouselNext variant="ghost" className="right-[25%] top-[115%]" />
      </Carousel>
    </div>
  );
};

Albums.propTypes = {
  albumGallery: PropTypes.array,
};

export default Albums;
