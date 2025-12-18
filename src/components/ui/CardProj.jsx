import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import testeimg from "../../assets/img/image.png";

export function CardProj({ title, description, tags, href, imgSrc }) {
  const descRef = useRef(null);
  const [isClamped, setIsClamped] = useState(false);

  title = title || "Project Title";
  description = description || "Project Description";
  tags = tags || ["tag1", "tag2"];
  href = href || "#home";
  imgSrc = imgSrc || null;

  useEffect(() => {
    const checkClamp = () => {
      const el = descRef.current;
      if (!el) return;
      setIsClamped(el.scrollHeight > el.clientHeight);
    };

    checkClamp();

    window.addEventListener("resize", checkClamp);
    return () => window.removeEventListener("resize", checkClamp);
  }, [description]);

  return (
    <div className="overflow-y-visible bg-white m-3 w-[350px] h-[400px] rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      {/* Imagem */}
      <img src={imgSrc || testeimg} alt="project image" className="w-full h-[180px] object-cover rounded-t-xl" />

      {/* Conteúdo */}
      <div className="p-5 flex flex-col flex-1 gap-1">
        <h3 className="text-lg font-semibold text-stone-900">{title}</h3>

        {/* Descrição */}
        {/* <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">{description}</p> */}
        <div className="relative group">
          <p ref={descRef} className="line-clamp-3 text-sm text-stone-600">
            {description}
          </p>
          {isClamped && (
            // <span className="absolute bottom-0 right-0 bg-linear-to-l from-white via-amber-950 to-transparent px-2 text-sm text-stone-600 cursor-pointer">
            //   ...
            // </span>
            <div className="absolute z-20 hidden group-hover:block bg-stone-100 p-3 shadow-lg rounded-lg text-sm text-stone-700 left-2 top-2 transform transition-all">
              {description}
            </div>
          )}
        </div>
        {/* Empurra tudo abaixo para o fundo */}
        <div className="mt-auto flex flex-col gap-3">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 rounded-md bg-stone-100 text-stone-600">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a href={href} className="group text-sm font-medium text-stone-900 flex justify-end">
            <div className="flex gap-2 items-center">
              <span className="hover:underline">Ver projeto</span>
              <FaExternalLinkAlt className="transition-transform duration-200 ease-out group-hover:scale-110" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
