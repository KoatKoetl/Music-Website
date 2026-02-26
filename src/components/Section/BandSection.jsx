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

  // Use API covers if available, otherwise fall back to local covers
  const finalAlbumCovers = useMemo(() => {
    if (albumCovers && albumCovers.length > 0) {
      // Remove duplicates from final array
      const seen = new Set();
      return albumCovers.filter((cover) => {
        if (seen.has(cover)) return false;
        seen.add(cover);
        return true;
      });
    }
    return poster.albums.albumGallery.images || [];
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
