import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

const RenderDropDownMenu = () => {
  const [sectionIds, setSectionIds] = useState([]);

  useEffect(() => {
    const generateSectionIds = () => {
      const sectionIdTemplate = "section-";
      const ids = [];

      document.querySelectorAll("section").forEach((element) => {
        if (element.id && element.id.startsWith(sectionIdTemplate)) {
          ids.push(element.id);
        }
      });

      return ids;
    };

    setSectionIds(generateSectionIds());
  }, []);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-md px-2 text-sm sm:text-base mediaPointer:hover:bg-accent mediaPointer:hover:text-accent-foreground mediaTouch:active:bg-accent mediaTouch:active:text-accent-foreground">
          Artists
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2.5 border-2 bg-dark-gray text-white">
          <DropdownMenuLabel>
            <span className="text-sm sm:text-base">Artist sections</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {sectionIds.map((id) => (
            <DropdownMenuItem key={id} className="p-0">
              <a
                href={`#${id}`}
                className="flex-1 px-2 py-1.5 text-sm sm:text-base"
              >
                {id.split("-").pop()}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

const NavBar = () => {
  return (
    <nav className="my-2 flex">
      <ul className="flex gap-2 sm:gap-10">
        <li className="rounded-md px-2 mediaPointer:hover:bg-accent mediaPointer:hover:text-accent-foreground mediaTouch:active:bg-accent mediaTouch:active:text-accent-foreground">
          <a
            href="#main"
            className="flex h-full items-center text-sm sm:text-base "
          >
            Home
          </a>
        </li>
        <RenderDropDownMenu />
        <li className="rounded-md px-2 mediaPointer:hover:bg-accent mediaPointer:hover:text-accent-foreground mediaTouch:active:bg-accent mediaTouch:active:text-accent-foreground">
          <a
            href="#tools"
            className="flex h-full items-center text-sm sm:text-base "
          >
            Used Tools
          </a>
        </li>
      </ul>
    </nav>
  );
};

const LogoImage = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src="Light-LOGO-guitar-pick-svgrepo-com.svg"
        alt="Logo guitar pick with centered note inside"
        width={40}
        height={40}
      />
      <span className="hidden text-sm font-bold lil:block sm:text-xl">
        My Favorite Music
      </span>
    </div>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 mb-2 grid h-12 w-full bg-dark-gray shadow-md 2xl:justify-center">
      <div className="mx-1 flex justify-between sm:mx-5 2xl:w-[1500px]">
        <LogoImage />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
