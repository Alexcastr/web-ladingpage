import Image from "next/image";
import Link from "next/link";

import { AiOutlinePlayCircle } from "react-icons/ai";

export const Home = () => {
  return (
    <section id="home" className="flex flex-col gap-10 md:gap-2 md:flex-row md:justify-around -mt-44 md:mt-0 sm:px-4">
      <div className="text-center md:max-w-lg md:my-auto md:pt-10">
        <h1 className="text-5xl">Asegura tu futuro aprendiendo programación</h1>
        <p className="text-center text-lg text-gray-200 py-6">
        Con la programación web puedes crear aplicaciones que impactan a millones de personas en todo el mundo. ¡Descubre cómo hacerlo!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link target="_blank" href="https://forms.gle/4RSiWgLt3H6A9Jht5" className="px-3 py-2 btn btn-lg bg-gray-50 rounded-full border border-cyan-600 text-cyan-600 border-cyan-600 hover:bg-cyan-600 hover:text-gray-50 transition duration-500">
            ¡Inscríbete!
          </Link>

          <Link target="_blank" href="https://my-portfolio-website-alexcastr.vercel.app/#projects_section" className="btn btn-lg rounded-full flex gap-2 items-center bg-gray-50 rounded-full border border-cyan-600 text-cyan-600 border-cyan-600 hover:bg-cyan-600 hover:text-gray-50 transition duration-500">
            {" "}
            <span>
              <AiOutlinePlayCircle className="w-12 h-12 text-gray-800" />
            </span>{" "}
            ¡Mis proyectos!
          </Link>
        </div>
      </div>
      <div className="">
        <Image
          className="mx-auto"
          src="/web-development.png"
          alt="Hero"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};
