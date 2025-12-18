import useEmblaCarousel from "embla-carousel-react";
import { CardProj } from "./CardProj";

const TWEEN_FACTOR = 0.6;
// const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

export function EmblaCarousel({ projects }) {
  const [emblaRef] = useEmblaCarousel({
    align: "center",
    loop: false,
  });

  return (
    <div className="relative w-full h-full">
      {/* Prev */}

      {/* Carousel */}
      <div ref={emblaRef} className="overflow-x-hidden h-full">
        {/* <div ref={emblaRef} className=""> */}
        <div className="flex gap-6 py-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className="
                flex
                transition-transform
                duration-100
                w-full
                sm:w-[45%]
                lg:w-[360px]
              "
            >
              <CardProj {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
