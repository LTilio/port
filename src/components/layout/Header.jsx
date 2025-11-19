// @ts-ignore: Allow importing image file without explicit type declarations
import snorlax from "../../assets/img/snorlax.gif";

export function Header() {
  return (
    <>
      <div className="flex flex-row justify-end items-end text-stone-700">
        <div className="flex flex-col text-right">
          <span className="text-4xl font-semibold">Olá</span>
          <span className="text-4xl font-semibold">Mundo!</span>
        </div>
        <img src={snorlax} alt="pokemon snorlax" className="w-20 h-auto scale-x-[-1] opacity-90 drop-shadow-lg" />
      </div>
      <hr className="text-gray-800/30 pt-3" />
      <div className="flex flex-col justify-end text-stone-700">
        <span className="font-bold text-3xl">Sou Leandro Tilio,</span>{" "}
        <span className="text-lg font-medium">Desenvolvedor full-stack</span>
      </div>
    </>
  );
}
