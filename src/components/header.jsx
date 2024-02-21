const Header = () => {
  return (
    <header className="sticky top-0 z-50 mb-2 grid h-12 w-full shadow-md 2xl:justify-center">
      <div className="mx-5 flex justify-between 2xl:w-[1500px]">
        <LogoImage />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;

function NavBar() {
  return (
    <nav>
      <ul className="flex h-full gap-10">
        <li className="h-full">
          <a href="" className="flex h-full items-center">
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
}

function LogoImage() {
  return (
    <div className="flex items-center justify-center">
      <img
        src="Light-LOGO-guitar-pick-svgrepo-com.svg"
        alt="Logo guitar pick with centered note inside"
        width={40}
        height={40}
      />
      <span className="text-xl font-bold">My Favorite Music</span>
    </div>
  );
}
