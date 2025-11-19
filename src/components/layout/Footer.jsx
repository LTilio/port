import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  const icons = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/leandro-tilio/" },
    { icon: FaGithub, url: "https://github.com/LTilio" },
    { icon: FaWhatsapp, url: "https://github.com/LTilio" },
  ];

  return (
    <footer
      className="
        fixed bottom-0 right-0 left-0 w-full
        bg-stone-200/60 backdrop-blur
        pb-4
        z-50
      "
    >
      {/* WRAPPER CENTRALIZADO */}
      <div className="max-w-6xl mx-auto px-5">
        {/* Agora o HR está dentro do wrapper → fica centralizado */}
        <hr className="border-gray-800/30 mb-5" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm font-poppins">&copy;2025 Ltilio, Inc. All rights reserved.</p>

          <div className="flex gap-2 text-xl">
            {icons
              .filter((item) => item.url)
              .map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      hover:text-stone-700 dark:hover:text-white 
                      hover:scale-105 transform transition cursor-pointer
                      ${item.icon === FaWhatsapp ? "hover-animate-whatsapp" : ""}
                    `}
                  >
                    <Icon size={30} />
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </footer>
  );
}
