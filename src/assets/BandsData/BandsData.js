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
          src: "/src/assets/band-kino/band-kino.webp",
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
              "/src/assets/band-kino/kino-albums/Chyorny-album.webp",
              "/src/assets/band-kino/kino-albums/Eto-ne-lubovi.webp",
              "/src/assets/band-kino/kino-albums/gruppa-krovi.webp",
              "/src/assets/band-kino/kino-albums/kino-45.webp",
              "/src/assets/band-kino/kino-albums/kino-46.webp",
              "/src/assets/band-kino/kino-albums/nachalnik-kamchatki.webp",
              "/src/assets/band-kino/kino-albums/Noch.webp",
              "/src/assets/band-kino/kino-albums/Posledniy-geroy.webp",
              "/src/assets/band-kino/kino-albums/Zvezda-po-imeni-Solntse.webp",
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
          src: "/src/assets/band-nautiluspompilius/band-nautiluspompilius.webp",
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
              "/src/assets/band-nautiluspompilius/nautiluspompilius-albums/30Лет.webp",
              "/src/assets/band-nautiluspompilius/nautiluspompilius-albums/1983_Переезд.webp",
              "/src/assets/band-nautiluspompilius/nautiluspompilius-albums/1997_Атлантида.webp",
              "/src/assets/band-nautiluspompilius/nautiluspompilius-albums/Князь_тишины.webp",
              "/src/assets/band-nautiluspompilius/nautiluspompilius-albums/Наугад.webp",
              "/src/assets/band-nautiluspompilius/nautiluspompilius-albums/Невидимка.webp",
              "/src/assets/band-nautiluspompilius/nautiluspompilius-albums/Никомуникабельность.webp",
              "/src/assets/band-nautiluspompilius/nautiluspompilius-albums/Подъем.webp",
              "/src/assets/band-nautiluspompilius/nautiluspompilius-albums/Разлука.webp",
              "/src/assets/band-nautiluspompilius/nautiluspompilius-albums/Раскол.webp",
              "/src/assets/band-nautiluspompilius/nautiluspompilius-albums/Титаник.webp",
              "/src/assets/band-nautiluspompilius/nautiluspompilius-albums/ЧеловекБезИмени.webp",
              "/src/assets/band-nautiluspompilius/nautiluspompilius-albums/Чужая_Земля.webp",
              "/src/assets/band-nautiluspompilius/nautiluspompilius-albums/ЯблоКитай.webp",
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
];
