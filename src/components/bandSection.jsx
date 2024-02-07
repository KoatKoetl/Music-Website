import bandPhoto from "../assets/images/band-KINO.webp";

const BandSection = () => {
  return (
    <section className="bg-dark-pink font-Rubik h-svh">
      <div className="bg-dark-pink flex px-16 py-10">
        <div className="shadow-poster max-w-[650px] bg-dark-gray p-4">
          <h3 className="text-center text-[13rem] font-bold leading-[180px] tracking-tighter">
            К<span className="font-normal">И</span>НО
          </h3>
          <div className="grid">
            <img
              src={bandPhoto}
              alt=""
              width={600}
              className="justify-self-center rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2">
            <ul className="p-4">
              <h4 className="text-center text-xl font-semibold">
                Band Members
              </h4>
              <li>
                <span className="font-semibold">Lead Vocalist:</span> Viktor
                Robertovich Tsoi -{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Viktor_Tsoi"
                  target="blank"
                >
                  Wikipedia
                </a>
              </li>
              <li>
                <span className="font-semibold">Lead Vocalist:</span> Viktor
                Robertovich Tsoi - <a href="">Wikipedia</a>
              </li>
              <li>
                <span className="font-semibold">Lead Vocalist:</span> Viktor
                Robertovich Tsoi - <a href="">Wikipedia</a>
              </li>
              <li>
                <span className="font-semibold">Lead Vocalist:</span> Viktor
                Robertovich Tsoi - <a href="">Wikipedia</a>
              </li>
            </ul>
            <ul className="p-4">
              <h4 className="text-center text-xl font-semibold">Albums</h4>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BandSection;
