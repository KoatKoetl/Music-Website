import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 mb-2 grid h-12 w-full bg-dark-gray shadow-md 2xl:justify-center">
      <div className="mx-5 flex justify-between 2xl:w-[1500px]">
        <LogoImage />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;

const NavBar = () => {
  return (
    <nav className="my-2 flex">
      <ul className="flex gap-10">
        <li className="rounded-md px-2 mediaPointer:hover:bg-accent mediaPointer:hover:text-accent-foreground mediaTouch:active:bg-accent mediaTouch:active:text-accent-foreground">
          <a href="#main" className="flex h-full items-center ">
            Home
          </a>
        </li>
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-md px-2 focus:outline-none mediaPointer:hover:bg-accent mediaPointer:hover:text-accent-foreground mediaTouch:active:bg-accent mediaTouch:active:text-accent-foreground">
            Artists
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2.5 border-2 bg-dark-gray text-white">
            <DropdownMenuLabel>Artist sections</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="p-0">
              <a href="#KINO" className="flex-1 px-2 py-1.5">
                KINO
              </a>{" "}
            </DropdownMenuItem>
            <DropdownMenuItem className="p-0">
              <a href="#Nautilus" className="flex-1 px-2 py-1.5">
                Nautilus Pompilius
              </a>{" "}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ul>
    </nav>
  );
};

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
