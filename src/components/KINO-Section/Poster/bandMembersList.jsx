const BandMembersList = () => {
  return (
    <div className="min-w-full max-w-[400px] flex-1 p-2 sm:min-w-[350px] sm:p-4 ">
      <h4 className="mb-2 text-center text-lg font-semibold lil:text-xl">
        Band Members
      </h4>
      <ul className="text-sm lil:text-base">
        <li>
          <span className="font-semibold">Vocalist:</span> Viktor Robertovich
          Tsoi -{" "}
          <a
            href="https://en.wikipedia.org/wiki/Viktor_Tsoi"
            target="blank"
            className="mediaPointer:hover:text-red-600 mediaTouch:active:text-red-600 font-semibold text-red-300 transition-colors"
          >
            Wikipedia Link
          </a>
        </li>
        <li>
          <span className="font-semibold">Guitarist:</span> Yuri Dmitriyevich
          Kasparyan -{" "}
          <a
            href="https://en.wikipedia.org/wiki/Yuri_Kasparyan#External_links"
            target="blank"
            className="mediaPointer:hover:text-red-600 mediaTouch:active:text-red-600 font-semibold text-red-300 transition-colors"
          >
            Wikipedia Link
          </a>
        </li>
        <li>
          <span className="font-semibold">Drummer:</span> Georgy (Gustav)
          Konstantinovich Guryanov -{" "}
          <a
            href="https://en.wikipedia.org/wiki/Georgy_Guryanov"
            target="blank"
            className="mediaPointer:hover:text-red-600 mediaTouch:active:text-red-600 font-semibold text-red-300 transition-colors"
          >
            Wikipedia Link
          </a>
        </li>
        <li>
          <span className="font-semibold">Bass player:</span> Alexander
          Valentinovich Titov -{" "}
          <a
            href="https://en.wikipedia.org/wiki/Alexander_Titov_(rock_musician)"
            target="blank"
            className="mediaPointer:hover:text-red-600 mediaTouch:active:text-red-600 font-semibold text-red-300 transition-colors"
          >
            Wikipedia Link
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BandMembersList;
