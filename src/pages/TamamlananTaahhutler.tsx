import { ChevronLeft, ChevronRight, Instagram, MapPin } from "lucide-react";
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

const projectTimeline: { year: string; projects: { title: string; desc: string }[] }[] = [
  { year: "2008", projects: [{ title: "Maltepe Hasan Şadoğlu Mesleki ve Teknik Anadolu Lisesi (İlci Holding) — 17.500 m²", desc: "Eğitim kurumu projesi, okul binası kaba ve ince inşaat uygulaması." }] },
  { year: "2009", projects: [{ title: "Güneşli Konut Projesi — 20 Daire & 2 Dükkan", desc: "Karma kullanımlı konut ve ticari alan projesi inşaat uygulaması." }] },
  { year: "2011", projects: [{ title: "Silivri Balcı Holding Üniversite — 65.000 m²", desc: "Kapsamlı üniversite kampüsü ve eğitim binaları anahtar teslim/betonarme inşaat projesi." }] },
  { year: "2012", projects: [
    { title: "Esenler Atışalanı Anadolu Lisesi (Kahraman İnşaat) — 17.300 m²", desc: "Eğitim kurumu projesi, okul binası yapı uygulaması." },
    { title: "Esenler Amiral Vehbi Ziya Dümer Anadolu Lisesi (Kahraman İnşaat) — 17.300 m²", desc: "Eğitim kurumu projesi, donanımlı okul binası inşası." },
    { title: "Esenler Belediye Binası — 18.000 m²", desc: "Kamu hizmet binası projesi, geniş ölçekli betonarme ve üst yapı uygulaması." },
    { title: "Marmaray Yenikapı – Yedikule – Kazlıçeşme", desc: "Büyük ölçekli ulaşım ve altyapı projesi kapsamında gerçekleştirilen yapı işleri." },
  ]},
  { year: "2013", projects: [
    { title: "Haznedar Katlı Otopark — 30.000 m²", desc: "Çok katlı otopark projesi, yüksek tonajlı betonarme yapı uygulaması." },
    { title: "Esenler Özdilek İmam Hatip Lisesi (Tet Yapı) — 16.800 m²", desc: "Eğitim kurumu inşaat projesi ve temel yapı işleri." },
    { title: "İBB Avcılar Sosyal Tesis (İnsaart Yapı) — 15.000 m²", desc: "Belediye sosyal tesis binası inşaat ve yapı uygulaması." },
  ]},
  { year: "2014", projects: [{ title: "Irak Kerbela Yurt ve Okul Projesi (İnsaart Yapı) — 20.300 m²", desc: "Uluslararası eğitim ve konaklama projesi, yurt ve okul inşası." }] },
  { year: "2015", projects: [
    { title: "Bağcılar Balabey-1 İnşaat Konut Projesi — 6.000 m²", desc: "Konut projesi temel ve kaba inşaat uygulaması." },
    { title: "Bağcılar MK Huzur Konut Projesi — 5.300 m²", desc: "Konut projesi, betonarme ve üstyapı uygulaması." },
  ]},
  { year: "2016", projects: [
    { title: "Bakırköy İnto Tekstil — 15.400 m²", desc: "Endüstriyel tesis ve tekstil fabrikası yapı uygulaması." },
    { title: "Bağcılar Sefa İnşaat 1 Konut Projesi — 12.000 m²", desc: "Çok katlı konut projesi inşaat ve yapı uygulaması." },
  ]},
  { year: "2017", projects: [
    { title: "Bağcılar Naturel İnşaat Konut Projesi — 14.500 m²", desc: "Modern konut projesi genel inşaat uygulaması." },
    { title: "Bağcılar Koşar İnşaat İş Merkezi — 8.200 m²", desc: "İş merkezi projesi, ticari alanlara yönelik betonarme yapı uygulaması." },
  ]},
  { year: "2018", projects: [
    { title: "Bağcılar Sefa İnşaat 2 — 11.600 m²", desc: "Gelişmiş konut projesi yapı uygulaması." },
    { title: "Bağcılar Adem Almuş İnşaat Rezidans", desc: "Rezidans projesi, yüksek katlı yapı inşaat uygulaması." },
  ]},
  { year: "2019", projects: [
    { title: "Bağcılar MK İnşaat Konut Projesi (3 Blok) — 45.900 m²", desc: "Geniş çaplı, 3 bloktan oluşan toplu konut projesi inşaat uygulaması." },
    { title: "Bağcılar Balabey İnşaat Konut Projesi — 6.000 m²", desc: "Konut projesi yapı uygulaması." },
  ]},
  { year: "2021", projects: [{ title: "Bağcılar CR Huzur Yapı Rezidans — 33.500 m²", desc: "Rezidans projesi, malzemeli demir-beton ve kapsamlı işçilik uygulaması." }] },
  { year: "2022", projects: [
    { title: "Bağcılar Özboy İnşaat Konut Projesi — 12.000 m²", desc: "Yeni nesil konut projesi inşaat uygulaması." },
    { title: "Güneşli Konut Projesi — 16 Daire & 2 Dükkan", desc: "Karma kullanımlı konut ve ticari alan projesi yapım işleri." },
    { title: "Bağcılar Bilici Tekstil İş Merkezi", desc: "Tekstil odaklı ticari iş merkezi projesi yapı uygulaması." },
    { title: "Bağcılar Yaygan İş Merkezi", desc: "İş merkezi projesi, ticari yapı inşaat uygulaması." },
  ]},
  { year: "2023", projects: [{ title: "Bayrampaşa Okul (Tüyemder) — 4.500 m²", desc: "Eğitim kurumu inşaat projesi ve altyapı işleri." }] },
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

    {/* PROJE TARİHÇESİ - TIMELINE */}
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-[1100px] mx-auto px-4 md:px-12 lg:px-20">
        <h2 className="text-[28px] md:text-[42px] font-bold text-center text-primary leading-tight mb-3 md:mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Proje Tarihçesi
        </h2>
        <p className="text-[14px] md:text-[16px] text-center text-muted-foreground leading-[22px] md:leading-[26px] max-w-[600px] mx-auto mb-10 md:mb-16">
          2008'den bugüne hayata geçirdiğimiz projelerin yıl yıl dökümü.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-secondary/40 md:-translate-x-1/2" aria-hidden="true" />

          <div className="space-y-10 md:space-y-16">
            {projectTimeline.map((entry, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={entry.year} className="relative">
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-secondary border-4 border-background shadow-md -translate-x-1/2 top-1 md:top-2 z-10" aria-hidden="true" />

                  <div className={`pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12`}>
                    {/* Year */}
                    <div className={`${isLeft ? "md:text-right md:pr-12" : "md:col-start-2 md:text-left md:pl-12"} mb-3 md:mb-0`}>
                      <span className="inline-block text-[28px] md:text-[40px] font-bold text-primary leading-none" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {entry.year}
                      </span>
                    </div>
                    {/* Projects */}
                    <div className={`${isLeft ? "md:col-start-2 md:pl-12" : "md:col-start-1 md:row-start-1 md:text-right md:pr-12"} space-y-4`}>
                      {entry.projects.map((p, i) => (
                        <div key={i} className="bg-background rounded-lg shadow-md border border-border p-4 md:p-5">
                          <h3 className="text-[14px] md:text-[16px] font-bold text-primary leading-snug mb-1 md:mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            {p.title}
                          </h3>
                          <p className="text-[12px] md:text-[13px] text-muted-foreground leading-[18px] md:leading-[20px]">
                            {p.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
