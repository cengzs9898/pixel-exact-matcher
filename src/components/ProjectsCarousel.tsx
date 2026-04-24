import { useState } from "react";
import ArrowButton from "./ArrowButton";

interface ProjectsCarouselProps {
  images: { img1: string; img2: string }[];
  title?: string;
  subtitle?: string;
  bottomLabel?: string;
  imgHeight?: string;
}

const ProjectsCarousel = ({
  images,
  title = "PROJELER",
  subtitle = '"Servet İnşaat kalitesiyle tamamlanan, yükselmeye devam eden ve yakında hayata geçecek projelerimizde, siz de Servet güvencesinin ayrıcalığını keşfedin."',
  bottomLabel = "TAMAMLANAN PROJELER",
  imgHeight = "md:h-[339px]",
}: ProjectsCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => setCurrentSlide((p) => (p - 1 + images.length) % images.length);
  const next = () => setCurrentSlide((p) => (p + 1) % images.length);

  const slide = images[currentSlide];

  return (
    <section className="py-12 md:py-20" style={{ background: "linear-gradient(180deg, #E6E6E6 0%, #FFFFFF 100%)" }}>
      <div className="max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20">
        <h2
          className="text-[36px] md:text-[80px] font-bold text-center text-primary leading-tight md:leading-[98px] tracking-[0.04em] mb-4 md:mb-6"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {title}
        </h2>
        <p
          className="text-[16px] md:text-[30px] font-medium text-center leading-[24px] md:leading-[36px] tracking-[0.04em] max-w-[1243px] mx-auto mb-8 md:mb-12"
          style={{ fontFamily: "'Inter', sans-serif", color: "#000" }}
        >
          {subtitle}
        </p>

        <div className="relative overflow-hidden mb-6 md:mb-8">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 transition-opacity duration-500"
            key={currentSlide}
            style={{ animation: "fade-in 0.5s ease-out" }}
          >
            <div className={`overflow-hidden rounded-lg h-[200px] ${imgHeight}`}>
              <img
                src={slide.img1}
                alt="Proje"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
                width={1200}
                height={800}
              />
            </div>
            <div className={`overflow-hidden rounded-lg h-[200px] ${imgHeight}`}>
              <img
                src={slide.img2}
                alt="Proje"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
                width={1200}
                height={800}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <ArrowButton direction="left" size={60} onClick={prev} className="md:!w-[105px] md:!h-[105px]" />
          <ArrowButton direction="right" size={60} onClick={next} className="md:!w-[105px] md:!h-[105px]" />
          <div className="flex gap-2 ml-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  i === currentSlide ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>

        <p
          className="text-[22px] md:text-[36px] font-medium text-center tracking-[0.04em]"
          style={{ fontFamily: "'Montserrat', sans-serif", color: "#000" }}
        >
          {bottomLabel}
        </p>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
