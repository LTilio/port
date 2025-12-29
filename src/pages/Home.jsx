import { EmblaCarousel } from "../components/ui/EmblaCarousel";

export const Home = () => {
  return (
    <>
      <div id="home" className="w-full">
        <div className="flex flex-col justify-end text-stone-700">
          <span className="font-bold text-3xl">Sou Leandro Tilio,</span>{" "}
          <span className="text-lg font-medium mb-5">Desenvolvedor full-stack</span>
        </div>
      </div>
      <div id="projects" className="flex flex-col pt-5 justify-end text-stone-700">
        <span className="font-bold text-3xl">Projetos</span>{" "}
      </div>
      <div id="projects" className="w-[95%] flex justify-center items-center m-auto overflow-hidden">
        <EmblaCarousel
          projects={[
            {
              title: "Projeto 1",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
              tags: ["React", "Node.js"],
              href: "#",
            },
            {
              title: "Projeto 2",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam aperiam laborum quibusdam est et eaque consectetur totam neque, debitis animi incidunt, ipsum id officiis excepturi libero eius ab nostrum doloremque? Amet quam ducimus eligendi illo obcaecati illum consequatur vitae maxime minima magni, exercitationem aspernatur, sed, mollitia aperiam dolorum cum porro?",
              tags: ["React", "Node.js"],
              href: "#",
            },
            {
              title: "Projeto 3",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam aperiam laborum quibusdam est et eaque consectetur totam neque, debitis animi incidunt, ipsum id officiis excepturi libero eius ab nostrum doloremque? Amet quam ducimus eligendi illo obcaecati illum consequatur vitae maxime minima magni, exercitationem aspernatur, sed, mollitia aperiam dolorum cum porro?",
              tags: ["NestJS", "PostgreSQL"],
              href: "#",
            },
            {
              title: "Projeto 4",
              description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate optio quos hic laudantium quibusdam cumque ducimus dolores ad sint fugiat, quidem commodi, deserunt debitis ut nam explicabo vitae unde voluptatem ab distinctio in odio laborum. Labore, reprehenderit. Mollitia unde, ab sapiente repudiandae minus sed eveniet quisquam natus omnis ratione pariatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate optio quos hic laudantium quibusdam cumque ducimus dolores ad sint fugiat, quidem commodi, deserunt debitis ut nam explicabo vitae unde voluptatem ab distinctio in odio laborum. Labore, reprehenderit. Mollitia unde, ab sapiente repudiandae minus sed eveniet quisquam natus omnis ratione pariatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate optio quos hic laudantium quibusdam cumque ducimus dolores ad sint fugiat, quidem commodi, deserunt debitis ut nam explicabo vitae unde voluptatem ab distinctio in odio laborum. Labore, reprehenderit. Mollitia unde, ab sapiente repudiandae minus sed eveniet quisquam natus omnis ratione pariatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate optio quos hic laudantium quibusdam cumque ducimus dolores ad sint fugiat, quidem commodi, deserunt debitis ut nam explicabo vitae unde voluptatem ab distinctio in odio laborum. Labore, reprehenderit. Mollitia unde, ab sapiente repudiandae minus sed eveniet quisquam natus omnis ratione pariatur?",
              tags: ["NestJS", "PostgreSQL"],
              href: "#",
            },
            {
              title: "Projeto 5",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam aperiam laborum quibusdam est et eaque consectetur totam neque, debitis animi incidunt, ipsum id officiis excepturi libero eius ab nostrum doloremque? Amet quam ducimus eligendi illo obcaecati illum consequatur vitae maxime minima magni, exercitationem aspernatur, sed, mollitia aperiam dolorum cum porro?",
              tags: ["NestJS", "PostgreSQL"],
              href: "#",
            },
            {
              title: "Projeto 6",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam aperiam laborum quibusdam est et eaque consectetur totam neque, debitis animi incidunt, ipsum id officiis excepturi libero eius ab nostrum doloremque? Amet quam ducimus eligendi illo obcaecati illum consequatur vitae maxime minima magni, exercitationem aspernatur, sed, mollitia aperiam dolorum cum porro?",
              tags: ["NestJS", "PostgreSQL"],
              href: "#",
            },
          ]}
        />
      </div>
      <div className="bg-amber-600 w-full mt-[50px]">AQUI É UMA DIV</div>
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
