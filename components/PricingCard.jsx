import Link from "next/link";


const priceContent = [
  {
    id: "1",
    title: "Desarrollador web front-end junior",
    price: "$150.000",
    priceSpan: "/Mes",
    content: [
      "Enfoque en proyectos prácticos y divertidos",
      "Introducción a diferentes lenguajes de programación ( HTML, CSS, JS )",
      "Desarrollo de habilidades técnicas y de resolución de problemas",
      "Manejo de herramientas de desarrollo web",
      "Introducción a la libreria React",
    ],
    formSource: "https://forms.gle/LtnwP7YY6FhaxVp98"
  },
  {
    id: "2",
    title: "Tecnología productiva: curso básico",
    price: "$150.000",
    priceSpan: "/Mes",
    content: [
      "Introducción a la informática",
      "Fundamentos de la tecnología de la información",
      "Herramientas de productividad y presentaciones digitales",
      "Herramientas de ofimática",
      "Introducción a la programación",
    ],
    formSource: "https://forms.gle/Yhd6xHnci7pmjQ3h8"
  },
];

export const PricingCard = () => {
  return (
    <section id="pricing">
      <h2 className="text-4xl text-[#6566f1] text-center bg-[#1f2437] w-full rounded-lg py-4">Paquetes</h2>
      <div className="flex flex-col justify-center sm:flex-row gap-5 py-20">
        {priceContent.map((item) => {
        return (
          <div
            key={item.id}
            className="max-w-sm border border-slate-500 rounded-xl shadow-lg mx-auto sm:mx-0"
          >
            <div className="p-5">
              <h1 className="text-left pb-6">{item.title}</h1>
              <p className="font-extrabold text-4xl">
                {item.price}
                <span className="text-sm font-medium">{item.priceSpan}</span>
              </p>
              <ul className="my-7 space-y-5">
                <li className=" flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-100">
                    {item.content[0]}
                  </span>
                </li>
                <li className=" flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-100">
                    {item.content[1]}
                  </span>
                </li>
                <li className=" flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-100">
                    {item.content[2]}
                  </span>
                </li>
                <li className=" flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-100">
                    {item.content[3]}
                  </span>
                </li>
                <li className=" flex space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-100">
                    {item.content[4]}
                  </span>
                </li>
              </ul>
              <Link
              target="_blank"
                href={item.formSource}
                className="btn btn-outline flex justify-center items-center w-full"
              >
                Click aqui!
              </Link>
            </div>
          </div>
        );
      })}
      </div>
      
    </section>
  );
};
