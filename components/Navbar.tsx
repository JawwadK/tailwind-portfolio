"use client";
import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
  label: string;
  page: string;
}
const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];
const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <header className="w-full mx-auto px-4 bg-slate-50 shadow fixed top-0 z-50 sm:px-20 dark:bg-zinc-900 dark:border-zinc-600 text-cyan-950 dark:text-white">
        <div className="justify-between md:items-center md:flex ">
          <div>
            <div className="flex items-center justify-between py-3">
              <Link
                className="cursor-pointer"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                // @ts-ignore
              >
                <div className="md:py-5 md:block">
                  <h2 className="text-4xl font-bold hover:scale-110 duration-150">Jawwad Khan</h2>
                </div>
              </Link>
              <div className="md:hidden">
                <button onClick={() => setNavbar(!navbar)}>
                  {navbar ? <IoMdClose size={35} /> : <IoMdMenu size={35} />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {NAV_ITEMS.map((item, idx) => {
                  return (
                    <Link
                      key={idx}
                      to={item.page}
                      className={
                        "text-xl block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100 cursor-pointer"
                      }
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={() => setNavbar(!navbar)}
                      // @ts-ignore
                    >
                      {item.label}
                    </Link>
                  );
                })}
                {currentTheme === "dark" ? (
                  <button onClick={() => setTheme("light")} className="p-2">
                    <FaSun
                      size={25}
                      className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100 cursor-pointer dark:text-white"
                    />
                  </button>
                ) : (
                  <button onClick={() => setTheme("dark")} className="p-2">
                    <FaMoon
                      size={25}
                      className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100 cursor-pointer dark:text-white"
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;