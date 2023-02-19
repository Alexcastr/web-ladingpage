import Image from "next/image"


export const About = () => {
  return (
    <section id="about" className="py-10 md:px-4">
      <h2 className="text-center font-extrabold text-3xl lg:text-2xl pb-10 flex content-center justify-center max-w-md mx-auto">
        Mejora tus habilidades tecnológicas
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center">
        <Image
          className="rounded-full mx-auto"
          src="/programing-one.png"
          alt="about programming image"
          width={400}
          height={400}
        />
        <div>
          <h3 className="font-bold text-xl text-orange-700">ACERCA DE MI</h3>
          <h4 className="text-xl sm:text-2xl lg:text-2xl sm:font-extrabold py-2">
            Desarrollador de sitios web <br/> y estratega de marketing digital 
          </h4>
          <p className="text-left font-normal text-lg lg:text-2xl text-slate-200 max-w-xl">
            Necesitas una aplicación web de alta calidad o una estrategia de
            marketing digital efectiva, Me especializo en el desarrollo de
            aplicaciones web utilizando tecnologías modernas como el stack MERN
            (MongoDB, Express, React, Node.js) y el framework Next.js. Además,
            tengo experiencia en la gestión de bases de datos SQL y NoSQL.
          </p>
        </div>
      </div>
    </section>
  );
}
