const Header = () => {
  return (
    <header className="sticky top-0 z-50 mb-2 grid h-12 w-full bg-black bg-opacity-50 2xl:justify-center">
      <div className="mx-5 flex h-full  items-center justify-between 2xl:w-[1500px]">
        <img src="" alt="" width={40} height={40} />
        <nav>
          <ul className="flex items-center">
            <li>
              <a href="">Home</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
