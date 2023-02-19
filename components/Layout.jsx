import { useState, useEffect } from "react";
import Head from "next/head";
import { Navbar, NavLink } from "./";

export const Layout = ({ children, title= "" }) => {
  const [openNavbar, setOpenNavbar] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme')
      if (theme) {
        setTheme(theme)
      } else {
        localStorage.setItem('theme', 'light')
        setTheme('light')
      }
    }
  }, [])

  useEffect(() => {
    if (theme !== '' && typeof window !== 'undefined') {
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', theme)
        document.documentElement.classList.add(theme)
        localStorage.setItem('theme', theme)
      } else {
        document.documentElement.setAttribute('data-theme', theme)
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', theme)
      }
    }
  }, [theme])


  function handleNavbar() {
    setOpenNavbar(!openNavbar);
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Alex Castro" />
        <meta name="description" content="Cursos de desarrollo web" />
        <meta name="keywords" content="landing, front end, desarrollo" />

        <meta
          property="og:title"
          content={`Informacion sobre los cursos de dasarrollo web y tecnologia basica `}
        />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        
      </Head>{" "}
      <div
        className={`relative min-h-screen bg-gradient-to-t from-primary ${
          theme === "light"
            ? "via-[#6b9ee4] to-[#558ddc]"
            : "via-gray-800 to-gray-900"
        }`}
      >
        <Navbar
          handleNavbar={handleNavbar}
          openNavbar={openNavbar}
          theme={theme}
          setTheme={setTheme}
        />

        <aside
          className={`${
            openNavbar ? "-translate-x-full " : ""
          }  bg-accent md:hidden w-52 h-56 rounded-lg space-y-6 py-7 px-2 sticky left-2 z-20 inset-y-0 left-0 top-20 transform  md:translate-x-0 transition duration-200 ease-in-out`}
        >
          <NavLink className="flex flex-col gap-2 pl-4 font-bold" />
        </aside>
        <main className=" flex-1 text-2xl font-bold px-4 sm:px-0">
          {children}
        </main>
      </div>
    </>
  );
};
