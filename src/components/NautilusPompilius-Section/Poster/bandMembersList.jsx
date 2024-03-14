const BandMembersList = () => {
  return (
    <div className="min-w-full max-w-[400px] flex-1 p-2 sm:min-w-[350px] sm:p-4 ">
      <h4 className="mb-2 text-center text-lg font-semibold lil:text-xl">
        Band Members
      </h4>
      <ul className="text-sm lil:text-base">
        <li>
          <span className="font-semibold">Musician/Arranger:</span> Alexey
          Yurievich Mogilevsky -{" "}
          <a
            href="https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9,_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9_%D0%AE%D1%80%D1%8C%D0%B5%D0%B2%D0%B8%D1%87"
            target="blank"
            className="font-semibold text-blue-300 transition-colors mediaPointer:hover:text-white mediaTouch:active:text-white"
          >
            Wikipedia Link
          </a>
        </li>
        <li>
          <span className="font-semibold">Vocalist:</span> Vyacheslav
          Gennadievich Butusov -{" "}
          <a
            href="https://ru.wikipedia.org/wiki/%D0%91%D1%83%D1%82%D1%83%D1%81%D0%BE%D0%B2,_%D0%92%D1%8F%D1%87%D0%B5%D1%81%D0%BB%D0%B0%D0%B2_%D0%93%D0%B5%D0%BD%D0%BD%D0%B0%D0%B4%D1%8C%D0%B5%D0%B2%D0%B8%D1%87"
            target="blank"
            className="font-semibold text-blue-300 transition-colors mediaPointer:hover:text-white mediaTouch:active:text-white"
          >
            Wikipedia Link
          </a>
        </li>
        <li>
          <span className="font-semibold">Bass Player:</span> Igor Vladimirovich
          Kopylov -{" "}
          <a
            href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BF%D1%8B%D0%BB%D0%BE%D0%B2,_%D0%98%D0%B3%D0%BE%D1%80%D1%8C_%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D1%87"
            target="blank"
            className="font-semibold text-blue-300 transition-colors mediaPointer:hover:text-white mediaTouch:active:text-white"
          >
            Wikipedia Link
          </a>
        </li>
        <li>
          <span className="font-semibold">Guitarist:</span> Nikolai Petrovich
          Petrov -{" "}
          <a
            href="https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2,_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87_(%D0%BC%D1%83%D0%B7%D1%8B%D0%BA%D0%B0%D0%BD%D1%82)"
            target="blank"
            className="font-semibold text-blue-300 transition-colors mediaPointer:hover:text-white mediaTouch:active:text-white"
          >
            Wikipedia Link
          </a>
        </li>
        <li>
          <span className="font-semibold">Drummer:</span> Albert (Alik)
          Anatolyevich Potapkin -{" "}
          <a
            href="https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D1%82%D0%B0%D0%BF%D0%BA%D0%B8%D0%BD,_%D0%90%D0%BB%D1%8C%D0%B1%D0%B5%D1%80%D1%82_%D0%90%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D1%8C%D0%B5%D0%B2%D0%B8%D1%87"
            target="blank"
            className="font-semibold text-blue-300 transition-colors mediaPointer:hover:text-white mediaTouch:active:text-white"
          >
            Wikipedia Link
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BandMembersList;
