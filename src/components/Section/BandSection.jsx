import Poster from "./Poster";
import PlayList from "./Playlist/Playlist";
import { useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";

const BandSection = ({ bandData }) => {
  const { section_id, section_styles, poster, playlist } = bandData;
  const [albumCovers, setAlbumCovers] = useState([]);

  const handleAlbumCoversFetch = useCallback((covers) => {
    setAlbumCovers((prevCovers) => {
      // Only update if we have new covers
      if (!covers || covers.length === 0) {
        return prevCovers;
      }

      // Merge with existing covers, avoiding duplicates
      const existingSet = new Set(prevCovers);
      const newUniqueCovers = covers.filter((cover) => !existingSet.has(cover));

      if (newUniqueCovers.length === 0) {
        return prevCovers;
      }

      return [...prevCovers, ...newUniqueCovers];
    });
  }, []);

  // First priority: Use local album covers from the data file
  // Second priority: If local array is empty, use API covers
  const finalAlbumCovers = useMemo(() => {
    const localCovers = poster.albums.albumGallery.images || [];
    
    // If local images array has data, use them (first priority)
    if (localCovers.length > 0) {
      return localCovers;
    }
    
    // If local images array is empty, use API covers (second priority)
    if (albumCovers && albumCovers.length > 0) {
      // Remove duplicates from final array
      const seen = new Set();
      return albumCovers.filter((cover) => {
        if (seen.has(cover)) return false;
        seen.add(cover);
        return true;
      });
    }
    
    // Fallback to empty array
    return [];
  }, [albumCovers, poster.albums.albumGallery.images]);

  const mergedAlbums = {
    ...poster.albums,
    albumGallery: {
      ...poster.albums.albumGallery,
      images: finalAlbumCovers,
    },
  };

  const mergedPoster = {
    ...poster,
    albums: mergedAlbums,
  };

  return (
    <section id={section_id}>
      <div
        className={`flex flex-wrap justify-center gap-12 p-3 lil:p-5 2xl:py-10 ${section_styles}`}
      >
        <Poster posterData={mergedPoster} />
        <PlayList
          playlistData={playlist}
          bandName={poster.bandName}
          onAlbumCoversFetch={handleAlbumCoversFetch}
        />
      </div>
    </section>
  );
};

BandSection.propTypes = {
  bandData: PropTypes.object,
};

export default BandSection;
