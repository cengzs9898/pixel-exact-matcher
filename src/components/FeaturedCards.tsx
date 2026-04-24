import { useEffect, useRef, useState } from "react";

interface FeaturedCardsProps {
  scrollProgress: number;
  projects: { img: string; title: string }[];
  backgroundImg?: string;
}

const FeaturedCards = ({ projects }: FeaturedCardsProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [cardProgress, setCardProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // progress based on overall page scroll within first viewport
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;
      // start rising as soon as the user scrolls; fully in place after ~1 viewport
      const progress = Math.max(0, Math.min(1, scrollY / (windowH * 0.8)));
      setCardProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateY = (1 - cardProgress) * 100;
  const opacity = cardProgress;

  return (
    <section
      ref={sectionRef}
      className="relative z-20 -mt-[100vh] md:-mt-[140vh] pb-12 md:pb-24 pointer-events-none"
    >
      <div
        className="max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20 pointer-events-auto"
        style={{
          transform: `translateY(${translateY}px)`,
          opacity,
          willChange: "transform, opacity",
        }}
      >
        <div className="flex flex-col md:flex-row gap-4 md:gap-5 justify-center items-center">
          {projects.map((project, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-[20px] w-full md:w-[511px] h-[400px] md:h-[952px] flex-shrink-0"
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
