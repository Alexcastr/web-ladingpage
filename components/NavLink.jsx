import Link from "next/link";

const Links = [
  {
    name: "Inicio",
    href: "#home",
  },
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Precios",
    href: "#pricing",
  },
  {
    name: "Acerca de mí",
    href: "#about",
  },
];

export const NavLink = ({
  className = "gap-6 hidden md:flex md:justify-between font-bold",
  defaultAnkorClass = "cursor-pointer hover:bg-gray-300 hover:rounded-xl hover:text-gray-900 p-2",
}) => {
  return (
    <div className={className}>
      {Links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            scroll={false}
            aria-label={link.name}
            legacyBehavior
          >
            <a className={defaultAnkorClass}> {link.name}</a>
          </Link>
        );
      })}
    </div>
  );
};
