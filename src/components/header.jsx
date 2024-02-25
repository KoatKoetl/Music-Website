import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const NavBar = () => {
  return (
    <nav className="my-2 flex">
      <BurgerMenu />

      <ul className="hidden gap-2 lil:flex sm:gap-10">
        <li className="rounded-md px-2 mediaPointer:hover:bg-accent mediaPointer:hover:text-accent-foreground mediaTouch:active:bg-accent mediaTouch:active:text-accent-foreground">
          <a
            href="#main"
            className="flex h-full items-center text-sm sm:text-base "
          >
            Home
          </a>
        </li>
        <li className="flex">
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-md px-2 text-sm sm:text-base mediaPointer:hover:bg-accent mediaPointer:hover:text-accent-foreground mediaTouch:active:bg-accent mediaTouch:active:text-accent-foreground">
              Artists
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2.5 border-2 bg-dark-gray text-white">
              <DropdownMenuLabel>
                <span className="text-sm sm:text-base">Artist sections</span>
                <DropdownMenuSeparator />
                {RenderSections()}
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
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

const BurgerMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-center rounded-md px-2 text-sm lil:hidden sm:text-base mediaPointer:hover:bg-accent mediaPointer:hover:text-accent-foreground mediaTouch:active:bg-accent mediaTouch:active:text-accent-foreground">
        <FontAwesomeIcon icon={faBars} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2.5 border-2 bg-dark-gray text-white">
        <DropdownMenuItem>
          {" "}
          <a
            href="#main"
            className="flex h-full items-center text-sm sm:text-base "
          >
            Home
          </a>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="border-2 bg-dark-gray text-white mediaPointer:hover:bg-accent mediaPointer:hover:text-accent-foreground mediaTouch:focus:bg-accent mediaTouch:focus:text-accent-foreground mediaTouch:active:bg-accent mediaTouch:active:text-accent-foreground ">
            Artists
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="border-2 bg-dark-gray text-white">
              {RenderSections()}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem>
          <a
            href="#tools"
            className="flex h-full items-center text-sm sm:text-base "
          >
            Used Tools
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const RenderSections = () => {
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
    </>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 mb-2 grid h-12 w-full bg-dark-gray shadow-md 2xl:justify-center">
      <div className="mx-5 flex justify-between sm:mx-6 2xl:w-[1500px]">
        <LogoImage />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
