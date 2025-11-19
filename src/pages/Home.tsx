import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaCss3, FaDocker, FaGolang, FaHtml5, FaJava, FaJs, FaNode, FaReact } from "react-icons/fa6";
import { SiNestjs, SiOpentelemetry, SiSpring, SiTailwindcss } from "react-icons/si";

export const Home = () => {
  return (
    <>
      {/* <Header /> */}

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
      <div className="md:w-full flex flex-col text-lg md:text-[1.2rem] text-balance">
        <p className="text-stone-700 leading-relaxed">
          Atualmente atuo como Analista Desenvolvedor Jr, desenvolvendo aplicações com <strong>React (Vite)</strong> e{" "}
          <strong>NestJS</strong>, focado em integrações e APIs REST. Também tenho contato com Java Spring Boot, além de
          experiência com <strong>PostgreSQL</strong>, <strong>Docker</strong> e práticas de{" "}
          <strong>observabilidade.</strong> Gosto de transformar ideias em sistemas eficientes, evoluir arquiteturas e
          entregar soluções escaláveis com qualidade e boas práticas.
        </p>
        <div className="flex gap-5 m-5">
          <FaJs size={40} />
          <BiLogoTypescript size={40} />
          <FaReact size={40} />
          <SiNestjs size={40} />
          <FaJava size={40} />
          <SiSpring size={40} />
          <SiTailwindcss size={40} />
          <FaHtml5 size={40} />
          <FaCss3 size={40} />
          <FaGolang size={40} />
          <SiOpentelemetry size={40} />
          <FaDocker size={40} />
          <BiLogoPostgresql size={40} />
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* <button>Contato</button> */}
      {/* </section> */}
    </>
  );
};
