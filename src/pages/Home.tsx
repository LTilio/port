// @ts-ignore: Allow importing image file without explicit type declarations
import devAct from "../assets/img/devAct.png";
// @ts-ignore: Allow importing image file without explicit type declarations
import snorlax from "../assets/img/snorlax.gif";

export const Home = () => {
  return (
    <>
      {/* <section className="font-poppins text-gray-800/90 mx-auto"> */}
      {/* Header */}
      <div className="flex flex-row justify-end text-stone-700">
        <div className="flex flex-col text-right">
          <span className="text-4xl font-semibold">Olá</span>
          <span className="text-4xl font-semibold">Mundo!</span>
        </div>
        <img
          src={snorlax}
          alt="pokemon snorlax"
          className="w-20 h-auto scale-x-[-1] opacity-90 drop-shadow-lg"
        />
      </div>
      <hr className="text-gray-800/30 pt-3" />
      <div className="flex flex-col justify-end text-stone-700 animate-fadeIn">
        <span className="font-bold text-3xl">Sou Leandro Tilio,</span>{" "}
        <span className="text-lg font-medium">Desenvolvedor full-stack</span>
      </div>
      {/* HERO */}
      {/* <div className="flex flex-col items-center animate-fadeIn"> */}
      {/* Texto — fica terceiro no mobile e à esquerda no desktop */}
      {/* <div className=""> */}
      {/* Imagem — fica segundo no mobile e à direita no desktop */}
      {/* <p className="text-stone-700 my-5 flex flex-col w-full">
          <span className="font-bold text-3xl">Sou Leandro Tilio,</span>{" "}
          <span className="text-lg font-medium">Desenvolvedor full-stack</span>
        </p> */}
      {/* <div className="md:flex md:flex-row-reverse justify-center items-center md:-mt-5">
          <div className="md:w-1/2 flex justify-center md:justify-end animate-floating m-5">
            <img
              src={devAct}
              alt="Desenvolvedor"
              className="w-80 md:w-[400px] h-auto drop-shadow-sm md:pb-15"
            />
          </div> */}
      {/* <div className="md:w-full flex flex-col text-lg md:text-[1.2rem] text-balance">
            <p className="text-stone-700 leading-relaxed">
              Atualmente atuo como Analista Desenvolvedor Jr, desenvolvendo
              aplicações com <strong>React (Vite)</strong> e{" "}
              <strong>NestJS</strong>, focado em integrações e APIs REST. Também
              tenho contato com Java Spring Boot, além de experiência com{" "}
              <strong>PostgreSQL</strong>, <strong>Docker</strong> e práticas de{" "}
              <strong>observabilidade.</strong> Gosto de transformar ideias em
              sistemas eficientes, evoluir arquiteturas e entregar soluções
              escaláveis com qualidade e boas práticas.
            </p>
          </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* <button>Contato</button> */}
      {/* </section> */}
    </>
  );
};
