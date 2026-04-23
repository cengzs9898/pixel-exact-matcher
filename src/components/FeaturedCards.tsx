import { useEffect, useRef, useState } from "react";

interface FeaturedCardsProps {
  scrollProgress: number;
  projects: { img: string; title: string }[];
}

const FeaturedCards = ({ scrollProgress, projects }: FeaturedCardsProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [cardProgress, setCardProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      // Start animating when section enters viewport from bottom
      // 1 = fully visible, 0 = just entering
      const progress = Math.max(0, Math.min(1, 1 - rect.top / windowH));
      setCardProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cards rise up and scale as user scrolls
  const translateY = Math.max(0, (1 - cardProgress) * 120); // px to travel up
  const scale = 0.85 + cardProgress * 0.15; // 0.85 → 1.0
  const opacity = 0.3 + cardProgress * 0.7; // 0.3 → 1.0

  return (
    <section
      ref={sectionRef}
      className="relative z-20 -mt-16 md:-mt-40 py-12 md:py-24"
    >
      {/* Blurred background layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url(${projects[0]?.img ?? ""})`,
          filter: "blur(4.2px)",
          transform: "scale(1.05)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-primary/30" aria-hidden="true" />

      <div
        className="max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20 relative"
        style={{
          transform: `translateY(${translateY}px) scale(${scale})`,
          opacity,
          willChange: "transform, opacity",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-[20px] h-[250px] md:h-[750px] lg:h-[951px]"
              style={{
                transitionDelay: `${i * 0.05}s`,
              }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width={640}
                height={1200}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center pb-6 md:pb-10">
                <h3
                  className="text-primary-foreground text-[24px] md:text-[45px] font-extrabold whitespace-pre-line text-center leading-tight md:leading-[55px]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    textShadow: "0px 4px 4px rgba(0,0,0,0.5), 0px 4px 4px rgba(0,0,0,0.25)",
                  }}
                >
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;
