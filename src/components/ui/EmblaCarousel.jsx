import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { CardProj } from "./CardProj";

export function EmblaCarousel({ projects }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    startIndex: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(1);
  const [showMask, setShowMask] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setShowMask(emblaApi.canScrollPrev() && emblaApi.canScrollNext());
    };

    onSelect();
    emblaApi.on("select", onSelect);

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <div className="relative w-full h-full">
      <div
        ref={emblaRef}
        className={`h-[500px]
          ${
            showMask
              ? "md:mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] transition-all duration-300"
              : ""
          }`}
      >
        <div className="flex gap-1 py-3 h-full">
          {projects.map((project, i) => {
            const isActive = i === selectedIndex;

            // w-[360px]
            return (
              <div
                key={i}
                className={`
                  flex shrink-0
                  w-[360px]
                  h-full
                  transition-all duration-300
                  ${isActive ? "scale-100 opacity-100 blur-0" : "scale-85 opacity-60 blur-[1px]"}
                `}
              >
                <CardProj {...project} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
