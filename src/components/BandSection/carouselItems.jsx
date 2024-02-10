import { CarouselItem } from "@/components/ui/carousel";
import PropTypes from "prop-types";
import React, { Suspense } from "react";
import LazyLoadedImage from "../LazyLoad/lazyLoadImage";

const CarouselItems = ({ albumCoverURLs }) => {
  // Check on empty url array
  if (!albumCoverURLs || albumCoverURLs.length === 0) {
    // Return one CarouselItem if array is empty
    return (
      <React.Fragment>
        <CarouselItem className="flex h-[150px] w-[194px] items-center justify-center text-center">
          No data
        </CarouselItem>
      </React.Fragment>
    );
  }

  // If not empty render items
  return (
    // Render all items from the array
    <React.Fragment>
      {albumCoverURLs.map((link, index) => {
        // Get the file name without extension
        const albumTitle = link.split("/").pop().split(".").shift();

        return (
          <CarouselItem
            className="flex h-[150px] w-[194px] justify-center text-center"
            key={index}
          >
            <Suspense
              fallback={
                <div className="flex items-center justify-center">
                  Loading...
                </div>
              }
            >
              <LazyLoadedImage
                key={albumTitle}
                src={link}
                alt={`KINO` + " - " + albumTitle}
                width={150}
                height={150}
                title={albumTitle}
              />
            </Suspense>
          </CarouselItem>
        );
      })}
    </React.Fragment>
  );
};

CarouselItems.propTypes = {
  albumCoverURLs: PropTypes.array,
};

export default CarouselItems;
