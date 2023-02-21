import Image from "next/image"
import { PhoneIcon, MailIcon } from '@heroicons/react/solid'


export const About = () => {
  return (
    <section id="about" className="py-10 sm:px-4">
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
          <h3 className="font-bold text-xl text-orange-700">
            MI COMPROMISO CONTIGO
          </h3>
          <h4 className="text-xl sm:text-2xl lg:text-2xl sm:font-extrabold py-2">
            Desarrollador de sitios web <br /> y estratega de marketing digital
          </h4>
          <p className="text-left font-normal text-lg lg:text-2xl text-slate-200 max-w-xl">
            Mi compromiso es ofrecerte un soporte inigualable, en todo momento.
            Si tienes alguna pregunta o problema, no dudes en contactarme. Estoy
            aquí para ayudarte en lo que necesites, para que puedas seguir
            avanzando y alcances tus metas.
          </p>
          <div className="flex justify-start font-medium text-sm gap-2 sm:gap-4 my-6">
            <div className="flex justify-center gap-1 text-white duration-300 hover:text-orange-600">
              <MailIcon className="w-4 h-4 sm:w-6 sm:h-6 my-auto" aria-hidden="true" />
              <a
              className="text-xs sm:text-base lg:text-lg"
                target="_blank"
                rel="noreferrer"
                href="mailto:castro.t.alex@gmail.com"
                itemProp="email"
              >
                Castro.t.alex@gmail.com
              </a>
            </div>
            <div className="flex justify-center gap-1 text-white duration-300 hover:text-orange-600">
              <PhoneIcon className="w-4 h-4 sm:w-6 sm:h-5 my-auto" aria-hidden="true" />
              <a
              className="text-xs sm:text-base lg:text-lg"
                target="_blank"
                rel="noreferrer"
                href="https://api.whatsapp.com/send?phone=573186824243&text=Hola, Nececito mas informacion!"
                itemProp="telephone"
              >
                318 6824243
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
