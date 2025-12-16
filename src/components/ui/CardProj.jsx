import { FaExternalLinkAlt } from "react-icons/fa";
import testeimg from "../../assets/img/image.png";

export function CardProj({ title, description, tags, href, imgSrc }) {
  title = title || "Project Title";
  description = description || "Project Description";
  tags = tags || ["tag1", "tag2"];
  href = href || "#home";
  imgSrc = imgSrc || null;
  return (
    <div className="bg-white m-3 max-w-[360px] rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      {/* Imagem */}
      <img src={imgSrc || testeimg} alt="project image" className="w-full h-[180px] object-cover rounded-t-xl" />

      {/* Conteúdo */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="text-lg font-semibold text-stone-900">{title}</h3>

        {/* Descrição */}
        <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">{description}</p>
        {/* <div className="relative group">
          <p className="line-clamp-3 text-sm text-stone-600">{description}</p>

          <div className="absolute z-20 hidden group-hover:block bg-white p-3 shadow-lg rounded-lg text-sm text-stone-700 max-w-sm">
            {description}
          </div>
        </div> */}
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
