const BandMembersList = () => {
  return (
    <ul className="min-w-[300px] max-w-[400px] flex-1 p-4">
      <h4 className="mb-2 text-center text-xl font-semibold">Band Members</h4>
      <li>
        <span className="font-semibold">Vocalist:</span> Viktor Robertovich Tsoi
        -{" "}
        <a
          href="https://en.wikipedia.org/wiki/Viktor_Tsoi"
          target="blank"
          className="text-red-600"
        >
          Wikipedia
        </a>
      </li>
      <li>
        <span className="font-semibold">Guitarist:</span> Yuri Dmitriyevich
        Kasparyan -{" "}
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
  );
};

export default BandMembersList;
