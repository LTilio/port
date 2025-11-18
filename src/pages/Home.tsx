// @ts-ignore: Allow importing image file without explicit type declarations
import devAct from "../assets/img/devAct.png";

export const Home = () => {
  return (
    <section className="font-poppins text-gray-800/90 mx-auto">
      {/* Header */}
      <div className="flex flex-col text-hei">
        <span className="text-4xl font-semibold ">Olá</span>
        <span className="text-4xl font-semibold ">Mundo!</span>
        <hr className="text-gray-800/30 mt-3" />
      </div>

      {/* HERO */}
      <div className="flex flex-col md:flex-row items-center gap-10 animate-fadeIn">
        {/* Apresentação */}
        <div className="flex flex-col text-left justify-start w-full">
          <p className="text-stone-700 my-10 md:mb-5">
            <span className="font-bold text-3xl">Sou Leandro Tilio,</span>
            <span className="text-lg font-medium">
              Desenvolvedor full-stack
            </span>
          </p>
        </div>
        {/* Texto */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <p className="text-lg text-stone-700 leading-relaxed">
            Atualmente atuo como Analista Desenvolvedor Jr, desenvolvendo
            aplicações com
            <strong> React (Vite)</strong> e <strong>NestJS</strong>, focado em
            integrações e APIs REST. Também tenho contato com Java Spring Boot,
            além de experiência com <strong>PostgreSQL</strong>,
            <strong> Docker</strong> e práticas de{" "}
            <strong>observabilidade.</strong> Gosto de transformar ideias em
            sistemas eficientes, evoluir arquiteturas e entregar soluções
            escaláveis com qualidade e boas práticas.
          </p>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 animate-floating">
          <img
            src={devAct}
            alt="Desenvolvedor"
            className="w-80 md:w-[380px] lg:w-[400px] h-auto drop-shadow-sm"
          />
        </div>
      </div>
      <button>Contato</button>
    </section>
  );
};
