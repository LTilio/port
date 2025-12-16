import { CardProj } from "../components/ui/CardProj";

export const Home = () => {
  return (
    <>
      <div id="home" className="w-full h-screen bg-stone-900">
        <div className="flex flex-col justify-end text-stone-700">
          <span className="font-bold text-3xl">Sou Leandro Tilio,</span>{" "}
          <span className="text-lg font-medium mb-5">Desenvolvedor full-stack</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <CardProj />
          <CardProj
            title="Projeto 1"
            description="     Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil vel ratione repudiandae ex sapiente. Quos,
        delectus, impedit fugiat doloribus, aspernatur quisquam labore incidunt vitae officia rem consectetur. Eos,
        praesentium. Alias, consequuntur. Molestiae dolorum dicta necessitatibus sequi quas, ad repellat iusto
        distinctio animi numquam incidunt laudantium, error totam culpa cupiditate."
            tags={["React", "Node.js"]}
            href="#"
          />
        </div>
      </div>
    </>
  );
};

// import blob from "../assets/img/blob.svg";
// import trans from "../assets/img/TranshumansChilly.svg";

// <div className="relative w-[50%]">
//   {/* Blob – camada inferior */}
//   <img
//     src={blob}
//     alt="blob bg"
//     className="absolute bottom-0 left-0 w-full h-auto scale-x-[-1] opacity-90 drop-shadow-lg z-0"
//   />

//   {/* TC – camada superior */}
//   <img src={trans} alt="tc" className="relative w-[90%] h-auto scale-x-[-1] drop-shadow-lg z-10" />
// </div>;
// <>
//   <div className="md:w-full flex flex-col text-lg md:text-[1.2rem] text-balance">
//     <p className="text-stone-700 leading-relaxed">
//       Atualmente atuo como Analista Desenvolvedor Jr, desenvolvendo aplicações com <strong>React (Vite)</strong> e{" "}
//       <strong>NestJS</strong>, focado em integrações e APIs REST. Também tenho contato com Java Spring Boot, além de
//       experiência com <strong>PostgreSQL</strong>, <strong>Docker</strong> e práticas de{" "}
//       <strong>observabilidade.</strong> Gosto de transformar ideias em sistemas eficientes, evoluir arquiteturas e
//       entregar soluções escaláveis com qualidade e boas práticas.
//     </p>
//   </div>
// </>
