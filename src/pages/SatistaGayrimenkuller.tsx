import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import projectBegonya from "@/assets/project-begonya.jpg";
import projectCrystal from "@/assets/project-crystal.jpg";

const satistaProjects = [
  { img: projectBegonya, title: "BEGONYA KİRAZLI", slug: "begonya-kirazli" },
  { img: projectCrystal, title: "CRYSTAL REZİDANS", slug: "crystal-rezidans" },
];

const SatistaGayrimenkuller = () => (
  <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
    <Header activePage="Satıştaki Gayrimenkullerimiz" />

    {/* HERO */}
    <section className="relative h-[300px] md:h-[450px]" style={{ marginTop: "60px" }}>
      <img src={projectBegonya} alt="Satıştaki Gayrimenkullerimiz" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
      <div className="absolute inset-0 bg-primary/40" />
      <div className="relative z-10 max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20 h-full flex items-end pb-8 md:pb-12">
        <h1 className="text-[32px] md:text-[56px] font-bold text-primary-foreground italic leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Satıştaki Gayrimenkullerimiz
        </h1>
      </div>
    </section>

    {/* PROJELER */}
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-[1100px] mx-auto px-4 md:px-12 lg:px-20">
        <h2 className="text-[28px] md:text-[42px] font-bold text-center text-primary leading-tight mb-3 md:mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Satıştaki Projelerimiz
        </h2>
        <p className="text-[14px] md:text-[16px] text-center text-muted-foreground leading-[22px] md:leading-[26px] max-w-[600px] mx-auto mb-8 md:mb-14">
          Servet İnşaat güvencesiyle satışa sunulan projelerimizi keşfedin. Hayalinizdeki yaşam alanı sizi bekliyor.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {satistaProjects.map((p, i) => (
            <Link key={i} to={`/projeler/${p.slug}`} className="group">
              <div className="overflow-hidden rounded-lg mb-3 h-[250px] md:h-[350px]">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={800} height={1000} />
              </div>
              <p className="text-[16px] md:text-[18px] font-bold text-center tracking-[0.04em]" style={{ fontFamily: "'Montserrat', sans-serif", color: "#000" }}>{p.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default SatistaGayrimenkuller;
