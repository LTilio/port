// @ts-ignore: Allow importing image file without explicit type declarations
import snorlax from "../../assets/img/snorlax.gif";

export function Header() {
  const links = [
    { name: "Home", href: "home" },
    { name: "Projects", href: "projects" },
    { name: "About", href: "about" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <>
      <div id="home" className="flex flex-row justify-end items-end text-stone-700">
        <div className="flex flex-col text-right">
          <span className="text-4xl font-semibold">Olá</span>
          <span className="text-4xl font-semibold">Mundo!</span>
        </div>
        <img src={snorlax} alt="pokemon snorlax" className="w-20 h-auto scale-x-[-1] opacity-90 drop-shadow-lg" />
      </div>
      <hr className="text-gray-800/30 pt-3" />
      <div className="flex gap-5 mb-5">
        {links.map((link) => (
          <a
            key={link.name}
            href={`#${link.href}`}
            className="text-sm font-extralight text-stone-700 hover:text-stone-900"
          >
            {link.name}
          </a>
        ))}
      </div>
      {/* <div className="flex flex-col justify-end text-stone-700">
        <span className="font-bold text-3xl">Sou Leandro Tilio,</span>{" "}
        <span className="text-lg font-medium mb-5">Desenvolvedor full-stack</span>
      </div> */}
    </>
  );
}
