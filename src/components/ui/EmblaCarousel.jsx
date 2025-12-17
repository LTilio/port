import { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { CardProj } from "./CardProj";

const TWEEN_FACTOR = 0.6;
const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

export function EmblaCarousel({ projects }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
  });

  const tweenNodes = useRef([]);

  /* ---------- Scale effect ---------- */
  const setTweenNodes = useCallback((api) => {
    tweenNodes.current = api.slideNodes();
  }, []);

  const tweenScale = useCallback((api) => {
    const scrollProgress = api.scrollProgress();

    api.scrollSnapList().forEach((snap, index) => {
      const diff = snap - scrollProgress;
      const tween = 1 - Math.abs(diff * TWEEN_FACTOR);
      const scale = clamp(tween, 0.85, 1);

      const slide = tweenNodes.current[index];
      if (slide) {
        slide.style.transform = `scale(${scale})`;
      }
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    tweenScale(emblaApi);

    emblaApi.on("reInit", setTweenNodes).on("reInit", tweenScale).on("scroll", tweenScale);
  }, [emblaApi, tweenScale]);

  /* ---------- Controls ---------- */
  //   const scrollPrev = () => emblaApi?.scrollPrev();
  //   const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative w-full">
      {/* Prev */}

      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-6 py-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className="
                flex shrink-0
                transition-transform
                duration-100
                w-
                sm:w-[45%]
                lg:w-[360px]
              "
            >
              <CardProj {...project} />
            </div>
          ))}
        </div>
      </div>

      {/* Next */}
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2"
      >
        →
      </button>
    </div>
  );
}
