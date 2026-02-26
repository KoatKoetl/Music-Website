// KINO band images
import bandKinoPhoto from "../band-kino/band-kino.webp";
import kinoAlbum1 from "../band-kino/kino-albums/Chyorny-album.webp";
import kinoAlbum2 from "../band-kino/kino-albums/Eto-ne-lubovi.webp";
import kinoAlbum3 from "../band-kino/kino-albums/gruppa-krovi.webp";
import kinoAlbum4 from "../band-kino/kino-albums/kino-45.webp";
import kinoAlbum5 from "../band-kino/kino-albums/kino-46.webp";
import kinoAlbum6 from "../band-kino/kino-albums/nachalnik-kamchatki.webp";
import kinoAlbum7 from "../band-kino/kino-albums/Noch.webp";
import kinoAlbum8 from "../band-kino/kino-albums/Posledniy-geroy.webp";
import kinoAlbum9 from "../band-kino/kino-albums/Zvezda-po-imeni-Solntse.webp";

// Nautilus Pompilius band images
import bandNautilusPhoto from "../band-nautiluspompilius/band-nautiluspompilius.webp";
import nautilusAlbum1 from "../band-nautiluspompilius/nautiluspompilius-albums/30Лет.webp";
import nautilusAlbum2 from "../band-nautiluspompilius/nautiluspompilius-albums/1983_Переезд.webp";
import nautilusAlbum3 from "../band-nautiluspompilius/nautiluspompilius-albums/1997_Атлантида.webp";
import nautilusAlbum4 from "../band-nautiluspompilius/nautiluspompilius-albums/Князь_тишины.webp";
import nautilusAlbum5 from "../band-nautiluspompilius/nautiluspompilius-albums/Наугад.webp";
import nautilusAlbum6 from "../band-nautiluspompilius/nautiluspompilius-albums/Невидимка.webp";
import nautilusAlbum7 from "../band-nautiluspompilius/nautiluspompilius-albums/Никомуникабельность.webp";
import nautilusAlbum8 from "../band-nautiluspompilius/nautiluspompilius-albums/Подъем.webp";
import nautilusAlbum9 from "../band-nautiluspompilius/nautiluspompilius-albums/Разлука.webp";
import nautilusAlbum10 from "../band-nautiluspompilius/nautiluspompilius-albums/Раскол.webp";
import nautilusAlbum11 from "../band-nautiluspompilius/nautiluspompilius-albums/Титаник.webp";
import nautilusAlbum12 from "../band-nautiluspompilius/nautiluspompilius-albums/ЧеловекБезИмени.webp";
import nautilusAlbum13 from "../band-nautiluspompilius/nautiluspompilius-albums/Чужая_Земля.webp";
import nautilusAlbum14 from "../band-nautiluspompilius/nautiluspompilius-albums/ЯблоКитай.webp";

export const bandsData = [
  {
    KINO: {
      section_id: "section-KINO",
      section_styles: "bg-dark-pink",
      poster: {
        bandName: "КИНО",
        name_styles:
          "text-center font-bold leading-[1] tracking-tighter [font-size:_clamp(2em,30vw,13em)] md:text-[13rem] md:leading-[180px]",
        poster_styles:
          "flex min-w-[250px] max-w-[650px] flex-1 rotate-[20deg] scale-50 transform-gpu flex-col items-center justify-center overflow-hidden bg-dark-gray p-2 shadow-poster transition-all duration-1000 focus-within:rotate-[360deg] focus-within:skew-x-0 focus-within:skew-y-0 focus-within:scale-100 hover:rotate-[360deg] hover:skew-x-0 hover:skew-y-0 hover:scale-100 lil:min-w-[435px] lil:-skew-x-6 lil:-skew-y-12 sm:p-4 md:min-w-[650px]",
        aria_label: "custom made KINO band poster",
        bandMembersPhoto: {
          src: bandKinoPhoto,
          alt: "photo in black and white of band KINO",
          effect: "blur",
          styles: "justify-self-center rounded-lg",
          placeholderSrc: "band-KINO",
        },
        bandMembersList: {
          title: "Band Members",
          members: [
            {
              role: "Vocalist",
              name: "Viktor Robertovich Tsoi",
              wiki_link: "https://en.wikipedia.org/wiki/Viktor_Tsoi",
            },
            {
              role: "Guitarist",
              name: "Yuri Dmitriyevich Kasparyan",
              wiki_link:
                "https://en.wikipedia.org/wiki/Yuri_Kasparyan#External_links",
            },
            {
              role: "Drummer",
              name: "Georgy (Gustav) Konstantinovich Guryanov",
              wiki_link: "https://en.wikipedia.org/wiki/Georgy_Guryanov",
            },
            {
              role: "Bassist",
              name: "Alexander Valentinovich Titov",
              wiki_link:
                "https://en.wikipedia.org/wiki/Alexander_Titov_(rock_musician)",
            },
          ],
        },
        albums: {
          title: "Albums",
          albumGallery: {
            images: [
              kinoAlbum1,
              kinoAlbum2,
              kinoAlbum3,
              kinoAlbum4,
              kinoAlbum5,
              kinoAlbum6,
              kinoAlbum7,
              kinoAlbum8,
              kinoAlbum9,
            ],
            carouselDelay: 5000,
          },
        },
      },
      playlist: {
        title: "Playlist",
        songList: {
          playlistID: "10674002782",
        },
      },
    },
  },
  {
    NautilusPompilius: {
      section_id: "section-NautilusPompilius",
      section_styles: "bg-black",
      poster: {
        bandName: "NAUTILUS POMPILIUS",
        name_styles:
          "text-center font-bold leading-[1] tracking-tighter [font-size:_clamp(2em,16svw,7em)] md:text-[7rem]",
        poster_styles:
          "lil:skew-y-4 flex min-w-[250px] max-w-[650px] flex-1 -rotate-[20deg] scale-50 transform-gpu flex-col items-center justify-center overflow-hidden bg-gradient-to-t from-[#1e3b7288] via-[#1e3b72b2] to-[#2a529894] p-2 shadow-inversePoster shadow-gray-700 transition-all duration-1000 focus-within:rotate-[360deg] focus-within:skew-x-0 focus-within:skew-y-0 focus-within:scale-100 hover:rotate-[360deg] hover:skew-x-0 hover:skew-y-0 hover:scale-100 lil:min-w-[435px] lil:skew-x-12 sm:p-4 md:min-w-[650px]",
        aria_label: "custom made Nautilus Pompilius band poster",
        bandMembersPhoto: {
          src: bandNautilusPhoto,
          alt: "photo in black and white of band Nautilus Pompilius",
          effect: "blur",
          styles: "justify-self-center rounded-lg",
          placeholderSrc: "band-nautiluspompilius",
        },
        bandMembersList: {
          title: "Band Members",
          members: [
            {
              role: "Vocalist",
              name: "Vyacheslav Petrovich Butusov",
              wiki_link: "https://en.wikipedia.org/wiki/Vyacheslav_Butusov",
            },
            {
              role: "Musician/Arranger",
              name: "Alexey Yurievich Mogilevsky",
              wiki_link:
                "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9,_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9_%D0%AE%D1%80%D1%8C%D0%B5%D0%B2%D0%B8%D1%87",
            },
            {
              role: "Bass Player",
              name: "Igor Vladimirovich Kopylov",
              wiki_link: "https://en.wikipedia.org/wiki/Igor_Kopylov",
            },
            {
              role: "Guitarist",
              name: "Nikolai Petrovich Petrov",
              wiki_link:
                "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2,_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87_(%D0%BC%D1%83%D0%B7%D1%8B%D0%BA%D0%B0%D0%BD%D1%82)",
            },
            {
              role: "Drummer",
              name: "Albert Anatolyevich Potapkin",
              wiki_link:
                "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D1%82%D0%B0%D0%BF%D0%BA%D0%B8%D0%BD,_%D0%90%D0%BB%D1%8C%D0%B1%D0%B5%D1%80%D1%82_%D0%90%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D1%8C%D0%B5%D0%B2%D0%B8%D1%87",
            },
          ],
        },
        albums: {
          title: "Albums",
          albumGallery: {
            images: [
              nautilusAlbum1,
              nautilusAlbum2,
              nautilusAlbum3,
              nautilusAlbum4,
              nautilusAlbum5,
              nautilusAlbum6,
              nautilusAlbum7,
              nautilusAlbum8,
              nautilusAlbum9,
              nautilusAlbum10,
              nautilusAlbum11,
              nautilusAlbum12,
              nautilusAlbum13,
              nautilusAlbum14,
            ],
            carouselDelay: 5000,
          },
        },
      },
      playlist: {
        title: "Playlist",
        songList: {
          playlistID: "9677186642",
        },
      },
    },
  },
  {
    LinkinPark: {
      section_id: "section-LinkinPark",
      section_styles: "bg-gradient-to-br from-gray-900 via-red-900 to-gray-900",
      poster: {
        bandName: "LINKIN PARK",
        name_styles:
          "text-center font-bold leading-[1] tracking-widest [font-size:_clamp(2em,20vw,6em)] md:text-[6rem] text-white drop-shadow-[0_0_15px_rgba(255,0,0,0.7)]",
        poster_styles:
          "flex min-w-[250px] max-w-[650px] flex-1 rotate-[-15deg] scale-50 transform-gpu flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-800 via-red-950 to-black p-2 shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all duration-1000 focus-within:rotate-[360deg] focus-within:skew-x-0 focus-within:skew-y-0 focus-within:scale-100 hover:rotate-[360deg] hover:skew-x-0 hover:skew-y-0 hover:scale-100 hover:shadow-[0_0_50px_rgba(255,0,0,0.8)] lil:min-w-[435px] lil:skew-x-6 sm:p-8 md:min-w-[650px]",
        aria_label: "custom made LINKIN PARK band poster",
        bandMembersPhoto: {
          src: "https://cdn-images.dzcdn.net/images/playlist/9382252d4e63ffa4434c8d3139e85914/500x500-000000-80-0-0.jpg",
          alt: "photo of band Linkin Park performing live",
          effect: "blur",
          styles: "justify-self-center rounded-lg object-cover",
          placeholderSrc: "band-linkinpark",
        },
        bandMembersList: {
          title: "Band Members",
          members: [
            {
              role: "Vocalist/Rapper",
              name: "Mike Shinoda",
              wiki_link: "https://en.wikipedia.org/wiki/Mike_Shinoda",
            },
            {
              role: "Drummer",
              name: "Brad Delson",
              wiki_link: "https://en.wikipedia.org/wiki/Brad_Delson",
            },
            {
              role: "DJ/Turntablist",
              name: "Joe Hahn",
              wiki_link: "https://en.wikipedia.org/wiki/Joe_Hahn",
            },
            {
              role: "Bassist",
              name: "Dave Farrell",
              wiki_link: "https://en.wikipedia.org/wiki/Dave_Farrell",
            },
            {
              role: "Vocalist (Late)",
              name: "Chester Bennington",
              wiki_link: "https://en.wikipedia.org/wiki/Chester_Bennington",
            },
          ],
        },
        albums: {
          title: "Albums",
          albumGallery: {
            images: [],
            carouselDelay: 5000,
          },
        },
      },
      playlist: {
        title: "Playlist",
        songList: {
          playlistID: "3382903206",
        },
      },
    },
  },
  {
    ThreeDaysGrace: {
      section_id: "section-ThreeDaysGrace",
      section_styles: "bg-gradient-to-t from-black via-gray-900 to-red-950",
      poster: {
        bandName: "THREE DAYS GRACE",
        name_styles:
          "text-center font-bold leading-[1] tracking-[0.2em] [font-size:_clamp(2em,18vw,4em)] md:text-[4rem] text-white drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]",
        poster_styles:
          "flex min-w-[250px] max-w-[650px] flex-1 rotate-[10deg] scale-50 transform-gpu flex-col items-center justify-center overflow-hidden bg-gradient-to-t from-black via-red-950/50 to-gray-900 p-2 shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-1000 focus-within:rotate-[360deg] focus-within:skew-x-0 focus-within:skew-y-0 focus-within:scale-100 hover:rotate-[360deg] hover:skew-x-0 hover:skew-y-0 hover:scale-100 hover:shadow-[0_0_45px_rgba(220,38,38,0.7)] lil:min-w-[435px] lil:-skew-x-6 sm:p-8 md:min-w-[650px]",
        aria_label: "custom made THREE DAYS GRACE band poster",
        bandMembersPhoto: {
          src: "https://cdn-images.dzcdn.net/images/playlist/afec868ee1fa5f99e35a4d985679b8f0/500x500-000000-80-0-0.jpg",
          alt: "photo of band Three Days Grace performing on stage",
          effect: "blur",
          styles: "justify-self-center rounded-lg object-cover",
          placeholderSrc: "band-threedaysgrace",
        },
        bandMembersList: {
          title: "Band Members",
          members: [
            {
              role: "Lead Vocalist",
              name: "Matt Walst",
              wiki_link: "https://en.wikipedia.org/wiki/Matt_Walst",
            },
            {
              role: "Guitarist",
              name: "Barry Stock",
              wiki_link: "https://en.wikipedia.org/wiki/Barry_Stock",
            },
            {
              role: "Bassist",
              name: "Brad Walst",
              wiki_link: "https://en.wikipedia.org/wiki/Brad_Walst",
            },
            {
              role: "Drummer",
              name: "Neil Sanderson",
              wiki_link: "https://en.wikipedia.org/wiki/Neil_Sanderson",
            },
            {
              role: "Former Vocalist",
              name: "Adam Gontier",
              wiki_link: "https://en.wikipedia.org/wiki/Adam_Gontier",
            },
          ],
        },
        albums: {
          title: "Albums",
          albumGallery: {
            images: [],
            carouselDelay: 5000,
          },
        },
      },
      playlist: {
        title: "Playlist",
        songList: {
          playlistID: "8182376742",
        },
      },
    },
  },
];
