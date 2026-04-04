import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import logoGoldGreen from "@/assets/logo-gold-green.png";
import taahhutHero from "@/assets/taahhut-hero.jpg";
import projectUniversity from "@/assets/project-university.jpg";
import projectMarmaray from "@/assets/project-marmaray.jpg";
import projectCrystal from "@/assets/project-crystal.jpg";
import projectSpor from "@/assets/project-spor.jpg";
import projectBegonya from "@/assets/project-begonya.jpg";
import projectAvm from "@/assets/project-avm.jpg";
import projectLise from "@/assets/project-lise.jpg";
import projectOtopark from "@/assets/project-otopark.jpg";
import projectKonut from "@/assets/project-konut.jpg";
import projectOfis from "@/assets/project-ofis.jpg";
import insta1 from "@/assets/insta1.jpg";
import insta2 from "@/assets/insta2.jpg";
import insta3 from "@/assets/insta3.jpg";
import insta4 from "@/assets/insta4.jpg";

const completedProjects = [
  { img: projectUniversity, title: "Rumeli Üniversitesi", slug: "rumeli-universitesi" },
  { img: projectMarmaray, title: "Marmaray Projesi", slug: "marmaray-projesi" },
  { img: projectSpor, title: "İBB Avcılar Spor Kompleksi", slug: "ibb-avcilar-spor-kompleksi" },
  { img: projectAvm, title: "Beyoğlu AVM İnşaat", slug: "beyoglu-avm" },
  { img: projectLise, title: "Eyüpler Anadolu Lisesi", slug: "eyupler-anadolu-lisesi" },
  { img: projectCrystal, title: "Crystal Rezidans Projesi", slug: "crystal-rezidans" },
  { img: projectOfis, title: "Levent Anadolu yakası İnşaat", slug: "levent-insaat" },
  { img: projectKonut, title: "İstanbul Lira Mahallesi", slug: "istanbul-lira" },
  { img: projectBegonya, title: "Kentsel & Marmara", slug: "kentsel-marmara" },
  { img: projectOtopark, title: "Güngören B3 Katlı Otopark", slug: "gungoren-otopark" },
];

const otherProjects = [
  { img: projectBegonya, title: "BEGONYA KİRAZLI", slug: "begonya-kirazli" },
  { img: projectCrystal, title: "CRYSTAL REZİDANS", slug: "crystal-rezidans" },
];

const TamamlananTaahhutler = () => (
  <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
    <Header />

    {/* HERO */}
    <section className="relative h-[300px] md:h-[450px]" style={{ marginTop: "60px" }}>
      <img src={taahhutHero} alt="Tamamlanan Taahhütler" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
      <div className="absolute inset-0 bg-primary/40" />
      <div className="relative z-10 max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20 h-full flex items-end pb-8 md:pb-12">
        <h1 className="text-[32px] md:text-[56px] font-bold text-primary-foreground italic leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Tamamlanan Taahhütler
        </h1>
      </div>
    </section>

    {/* GÜVENLE TAMAMLANAN PROJELER */}
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-[1100px] mx-auto px-4 md:px-12 lg:px-20">
        <h2 className="text-[28px] md:text-[42px] font-bold text-center text-primary leading-tight mb-3 md:mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Güvenle Tamamlanan<br />Projeler
        </h2>
        <p className="text-[14px] md:text-[16px] text-center text-muted-foreground leading-[22px] md:leading-[26px] max-w-[600px] mx-auto mb-8 md:mb-14">
          Üstlendiğimiz her projeyi, yüksek kalite anlayışı ve zamanında teslim ilkesiyle hayata geçiriyoruz. Bizim için her iş, güvenin somut bir yansımasıdır.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {completedProjects.map((project, i) => (
            <Link key={i} to={`/projeler/${project.slug}`} className="group">
              <div className="overflow-hidden rounded-xl shadow-md h-[130px] md:h-[200px]">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" width={600} height={600} />
              </div>
              <p className="text-[11px] md:text-[13px] font-medium text-muted-foreground mt-1.5 md:mt-2 text-center">{project.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* DİĞER PROJELER */}
    <section className="py-12 md:py-20" style={{ background: "linear-gradient(180deg, #E6E6E6 0%, #FFFFFF 100%)" }}>
      <div className="max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20">
        <h2 className="text-[32px] md:text-[48px] font-bold text-center text-primary mb-3 md:mb-4 tracking-[0.04em]" style={{ fontFamily: "'Montserrat', sans-serif" }}>DİĞER PROJELER</h2>
        <p className="text-[14px] md:text-[16px] text-center text-foreground leading-[22px] md:leading-[26px] max-w-[700px] mx-auto mb-8 md:mb-12">
          "Servet İnşaat kalitesiyle tamamlanan, yükselmeye devam eden ve yakında hayata geçecek projelerimizde, siz de Servet güvencesinin ayrıcalığını keşfedin."
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {otherProjects.map((p, i) => (
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

    {/* INSTAGRAM */}
    <section className="py-12 md:py-20 bg-primary">
      <div className="max-w-[1100px] mx-auto px-4 md:px-12 lg:px-20 text-center">
        <h2 className="text-[24px] md:text-[42px] font-extrabold text-primary-foreground tracking-[0.04em] mb-3 md:mb-4">INSTAGRAMDAN TAKİP ET!</h2>
        <p className="text-[13px] md:text-[16px] text-primary-foreground/70 leading-[20px] md:leading-[24px] max-w-[500px] mx-auto mb-6 md:mb-10">
          Geleceğin yaşam alanlarını birlikte keşfetmek ve fırsatları kaçırmamak için Instagram'dan bizi takip edin.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-3 mb-6 md:mb-8">
          {[insta1, insta2, insta3, insta4, insta1].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-lg aspect-square">
              <img src={img} alt={`Instagram ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" width={300} height={300} />
            </div>
          ))}
        </div>
        <a href="https://instagram.com/servetkentseldonusum" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
          <Instagram size={18} style={{ color: "#F7DF6B" }} />
          <span className="text-[14px] md:text-[18px] font-medium text-primary-foreground">servetkentseldonusum</span>
        </a>
      </div>
    </section>

    {/* LARGE LOGO */}
    <section className="py-12 md:py-20 bg-background flex items-center justify-center">
      <img src={logoGoldGreen} alt="Servet İnşaat" className="w-[200px] md:w-[300px] h-auto" />
    </section>

    <Footer />
  </div>
);

export default TamamlananTaahhutler;
