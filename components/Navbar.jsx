
import { NavLink } from "./NavLink";
export const Navbar = ({ openNavbar, handleNavbar, setTheme, theme }) => {

  function handleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <nav className="sticky top-0 w-full h-20 shadow-md flex md:flex-row justify-around bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 z-40">
      <img
        src={ theme=== "light"?"./LogoAlexander.png": "./LogoAlexander.jpg"}
        className="my-auto ml-10 sm:ml-0 w-20 h-10 text-white"
      />
      <div className="my-auto">
        <NavLink />
      </div>

      <button
        onClick={handleNavbar}
        className={` focus:outline-none btn btn-outline my-auto order-first ${
          openNavbar ? "" : "animate-pulse"
        } transition duration-100 md:hidden`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {/* ToDo: wrap in a button */}
      <button
        onClick={handleTheme}
        className="btn btn-outline my-auto transition duration-300"
      >
        {theme === "light" ? (
          <svg
            className="w-8 h-8 fill-current swap-off"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 fill-current swap-on"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        )}
      </button>
    </nav>
  );
};
