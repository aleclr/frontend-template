import { JSX } from "react";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/logo_dataforest2.png";
import NavbarLinks from "./NavbarLinks";
import { SelectedPage } from "../shared/types";
import useMediaQuery from "../hooks/useMediaQuery";
import ActionButton from "../shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

export default function Navbar({isTopOfPage, selectedPage, setSelectedPage}: Props): JSX.Element {

  const flexBetween = "flex justify-between items-center";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "bg-transparent" : "bg-blue-200 drop-shadow";


  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} bg-blue-500 fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img src={Logo} alt="logo"/>
            {/* right side */}
            { isAboveMediumScreens ? (
              // DESKTOP SCREENS
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <NavbarLinks 
                    page="Dashboard"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <NavbarLinks
                    page="Cadastrar Dados"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <NavbarLinks
                    page="Monitoramento"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <NavbarLinks
                    page="Predição"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>Cadastrar Dados</ActionButton>
                </div>
              </div>
            ) : (
              // MOBILE SCREENS
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="text-white h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      { !isAboveMediumScreens && isMenuToggled && (
        <div
          className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-blue-200 drop-shadow-xl"
        >
          {/* CLOSE ICON */}
          <div
            className="flex justify-end p-12"
          >
            <button
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <XMarkIcon className="text-gray-400 h-6 w-6" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[20%] flex flex-col gap-10 text-2xl">
            <NavbarLinks 
              page="Dashboard"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavbarLinks
              page="Cadastrar Dados"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavbarLinks
              page="Monitoramento"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavbarLinks
              page="Predição"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
}