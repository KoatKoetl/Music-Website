import { LazyLoadImage } from "react-lazy-load-image-component";
import useAPI from "../../useDeezerAPI";

// const mockAPI_DATA = [
//   {
//     id: 410639982,
//     readable: true,
//     title: "Просто хочешь ты знать",
//     title_short: "Просто хочешь ты знать",
//     link: "https://www.deezer.com/track/410639982",
//     duration: 208,
//     rank: 61806,
//     explicit_lyrics: false,
//     explicit_content_lyrics: 0,
//     explicit_content_cover: 2,
//     preview:
//       "https://cdns-preview-5.dzcdn.net/stream/c-5cfefa14ad6e3cc0e567b02bd839b8a9-3.mp3",
//     md5_image: "2610d464edcb94565e75ad53cd03c8e0",
//     time_add: 1662218342,
//     artist: {
//       id: 4549736,
//       name: "Виктор Цой",
//       link: "https://www.deezer.com/artist/4549736",
//       tracklist: "https://api.deezer.com/artist/4549736/top?limit=50",
//       type: "artist",
//     },
//     album: {
//       id: 48811912,
//       title: "Виктор Цой и Группа Кино. Полная Дискография",
//       cover: "https://api.deezer.com/album/48811912/image",
//       cover_small:
//         "https://e-cdns-images.dzcdn.net/images/cover/2610d464edcb94565e75ad53cd03c8e0/56x56-000000-80-0-0.jpg",
//       cover_medium:
//         "https://e-cdns-images.dzcdn.net/images/cover/2610d464edcb94565e75ad53cd03c8e0/250x250-000000-80-0-0.jpg",
//       cover_big:
//         "https://e-cdns-images.dzcdn.net/images/cover/2610d464edcb94565e75ad53cd03c8e0/500x500-000000-80-0-0.jpg",
//       cover_xl:
//         "https://e-cdns-images.dzcdn.net/images/cover/2610d464edcb94565e75ad53cd03c8e0/1000x1000-000000-80-0-0.jpg",
//       md5_image: "2610d464edcb94565e75ad53cd03c8e0",
//       tracklist: "https://api.deezer.com/album/48811912/tracks",
//       type: "album",
//     },
//     type: "track",
//   },
//   {
//     id: 410640082,
//     readable: true,
//     title: "Солнечные дни",
//     title_short: "Солнечные дни",
//     link: "https://www.deezer.com/track/410640082",
//     duration: 192,
//     rank: 38585,
//     explicit_lyrics: false,
//     explicit_content_lyrics: 0,
//     explicit_content_cover: 2,
//     preview:
//       "https://cdns-preview-3.dzcdn.net/stream/c-36913027bdfa6e7872badb0ab97d0fb9-3.mp3",
//     md5_image: "2610d464edcb94565e75ad53cd03c8e0",
//     time_add: 1662218342,
//     artist: {
//       id: 4549736,
//       name: "Виктор Цой",
//       link: "https://www.deezer.com/artist/4549736",
//       tracklist: "https://api.deezer.com/artist/4549736/top?limit=50",
//       type: "artist",
//     },
//     album: {
//       id: 48811912,
//       title: "Виктор Цой и Группа Кино. Полная Дискография",
//       cover: "https://api.deezer.com/album/48811912/image",
//       cover_small:
//         "https://e-cdns-images.dzcdn.net/images/cover/2610d464edcb94565e75ad53cd03c8e0/56x56-000000-80-0-0.jpg",
//       cover_medium:
//         "https://e-cdns-images.dzcdn.net/images/cover/2610d464edcb94565e75ad53cd03c8e0/250x250-000000-80-0-0.jpg",
//       cover_big:
//         "https://e-cdns-images.dzcdn.net/images/cover/2610d464edcb94565e75ad53cd03c8e0/500x500-000000-80-0-0.jpg",
//       cover_xl:
//         "https://e-cdns-images.dzcdn.net/images/cover/2610d464edcb94565e75ad53cd03c8e0/1000x1000-000000-80-0-0.jpg",
//       md5_image: "2610d464edcb94565e75ad53cd03c8e0",
//       tracklist: "https://api.deezer.com/album/48811912/tracks",
//       type: "album",
//     },
//     type: "track",
//   },
// ];

const SongList = () => {
  // Use deezer API
  const { playList, loading } = useAPI("playlist/10674002782");

  // Check onLoading
  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center p-6">
        Loading...
      </div>
    );
  }

  // Check on missing data
  if (!playList || playList.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center p-6">
        No playlist data found.
      </div>
    );
  }

  return (
    <ul className="grid max-h-[770px] gap-4 overflow-scroll">
      {playList.map((track, index) => (
        <li
          key={track.id}
          className="rounded-sm hover:bg-dark-gray hover:shadow-xl"
        >
          <div className="flex flex-wrap gap-4 px-2 py-0.5">
            <div className="relative size-20 screen-1400:size-24">
              <span className="absolute left-1 z-10 font-bold">
                {index + 1}
              </span>
              <LazyLoadImage
                effect="blur"
                key={track.id}
                src={track.album.cover}
                alt={"Song " + track.title + " cover image"}
                styles={"relative z-0 h-full w-full text-sm text-center"}
                width={96}
                height={96}
                threshold={300}
              />
            </div>
            <div className="flex flex-col justify-center">
              <h5 className="text-lg font-semibold screen-1400:text-2xl">
                {track.title}
              </h5>
              <h6 className="screen-1400:text-md text-sm opacity-80 hover:opacity-100">
                <span className="font-semibold">Artist name:</span>{" "}
                {track.artist.name}
              </h6>
              <h6 className="screen-1400:text-md text-sm opacity-80 hover:opacity-100">
                <span className="font-semibold">Album:</span>{" "}
                {track.album.title}
              </h6>
            </div>
            <div className="flex min-w-[200px] flex-1 items-center justify-center">
              <a
                href={track.link}
                className="whitespace-break-spaces text-center hover:drop-shadow-font-shadow-2"
              >
                <h5>
                  <strong>Deezer</strong>
                  <br />
                  Click here and listen full song
                </h5>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            {/* <span>Song preview</span> */}
            <audio controls className="audio-player w-full px-2">
              <source src={track.preview} type="audio/ogg" />
            </audio>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SongList;
