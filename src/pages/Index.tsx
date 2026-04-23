import { useState, useEffect, useRef } from "react";
import { Play, ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { useScrollParallax } from "@/hooks/useScrollParallax";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import FeaturedCards from "@/components/FeaturedCards";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import projectUniversity from "@/assets/project-university.jpg";
import projectMarmaray from "@/assets/project-marmaray.jpg";
import projectCrystal from "@/assets/project-crystal.jpg";
import featuredRumeli from "@/assets/featured-rumeli.png";
import featuredMarmaray from "@/assets/featured-marmaray.png";
import featuredCrystal from "@/assets/featured-crystal.png";
import featuredBg from "@/assets/featured-bg.png";
import aboutFamily from "@/assets/about-family.jpg";
import projectsCarousel from "@/assets/projects-carousel.jpg";
import taahhutBg from "@/assets/taahhut-bg.jpg";
import contactBg from "@/assets/contact-bg.jpg";
import insta1 from "@/assets/insta1.jpg";
import insta2 from "@/assets/insta2.jpg";
import insta3 from "@/assets/insta3.jpg";
import insta4 from "@/assets/insta4.jpg";
import logoGold from "@/assets/logo-gold.png";
import logoGoldGreen from "@/assets/logo-gold-green.png";

const Index = () => {
  const [activeTimeline, setActiveTimeline] = useState(3);
  const { ref: heroRef, scrollProgress } = useScrollParallax();

  const timelinePeriods = [
    { label: "2013-2014", items: ["Şirket kuruluşu ve ilk projeler", "İstanbul'da kentsel dönüşüm çalışmalarına başlangıç"] },
    { label: "2014-2015", items: ["Rumeli Üniversitesi projesi tamamlandı", "Marmaray Projesi'ne katkı sağlandı"] },
    { label: "2015-2016", items: ["Crystal Rezidans projesi başlatıldı", "Toplam 50.000 m² inşaat alanı tamamlandı"] },
    { label: "2016-2017", items: ["Bağcılar İş Merkezi – 6.200 m²\nÇok katlı iş merkezi projesi, betonarme yapı uygulaması.", "Bağcılar Konut – 14.500 m²\nÇok katlı konut projesi; kentsel dönüşüm kapsamında modern yaşam alanı."] },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header activePage="Anasayfa" />

      {/* HERO */}
      <section
        ref={heroRef as React.RefObject<HTMLElement>}
        className="relative h-[70vh] md:h-screen overflow-hidden mt-[60px] md:mt-[146px]"
      >
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: `scale(${1 + scrollProgress * 0.15})`,
            transition: "transform 0.1s linear",
          }}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary/40" />
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full text-primary-foreground text-center px-4"
          style={{
            opacity: 1 - scrollProgress * 2.5,
            transform: `translateY(${scrollProgress * -80}px) scale(${1 - scrollProgress * 0.1})`,
            transition: "opacity 0.05s linear, transform 0.05s linear",
          }}
        >
          <p className="text-[32px] md:text-[70px] font-normal leading-[118%]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Servet İnşaat
          </p>
          <p className="text-[32px] md:text-[70px] font-normal leading-[118%]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <strong>Yaşanılası Mekanlar</strong>
          </p>
          <button
            className="mt-4 md:mt-6 flex items-center justify-center gap-2 md:gap-3 md:w-[339px] md:h-[70px] px-5 py-3"
            style={{ background: "rgba(0,0,0,0.2)", borderRadius: "58px" }}
          >
            <Play size={20} className="text-primary-foreground md:w-6 md:h-6" />
            <span className="text-[18px] md:text-[33px] font-extrabold leading-[40px] text-primary-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>Videoyu Oynat</span>
          </button>
          <p className="mt-6 md:mt-12 text-[18px] md:text-[30px] font-light italic text-primary-foreground">
            Sadece şehirleri değil...<br />Geleceği dönüştürüyoruz.
          </p>
        </div>
      </section>

      {/* 3 FEATURED PROJECTS - Rolex-style scroll into hero */}
      <FeaturedCards scrollProgress={scrollProgress} backgroundImg={featuredBg} projects={[
        { img: featuredRumeli, title: "RUMELİ\nÜNİVERSİTESİ" },
        { img: featuredMarmaray, title: "MARMARAY\nPROJESİ" },
        { img: featuredCrystal, title: "CRYSTAL\nREZİDANS" },
      ]} />

      {/* NEDEN SERVET */}
      <section className="py-10 md:py-16">
        <h2 className="text-[36px] md:text-[80px] font-bold text-center text-primary leading-tight md:leading-[98px] tracking-[0.04em] px-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Neden Servet Kentsel<br />Dönüşüm İnşaat?
        </h2>
      </section>

      {/* About Banner */}
      <section className="relative min-h-[500px] md:h-[838px]">
        <img src={aboutFamily} alt="Aile" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={800} height={600} />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20 flex flex-col md:flex-row h-full py-12 md:py-0">
          <div className="flex items-center md:w-1/2">
            <div>
              <p className="text-[18px] md:text-[31px] font-semibold leading-[28px] md:leading-[38px] text-primary-foreground mb-6 md:mb-8" style={{ fontFamily: "'Inter', sans-serif", textShadow: "0px 4px 20px #0D4746" }}>
                Servet Kentsel Dönüşüm İnşaat, yalnızca yapı üretmekle kalmaz; şehirleri dönüştüren, yaşam kalitesini yükselten ve gelecek nesillere güvenli, estetik ve sürdürülebilir alanlar bırakan bir vizyonla hareket eder.
              </p>
              <p className="text-[18px] md:text-[31px] font-semibold leading-[28px] md:leading-[38px] text-primary-foreground mb-6 md:mb-8" style={{ fontFamily: "'Inter', sans-serif", textShadow: "0px 4px 20px #0D4746" }}>
                18 yılı aşkın sektör tecrübemiz ve kentsel dönüşüm alanındaki uzmanlığımız ile
              </p>
              <button className="text-[20px] md:text-[31px] font-extrabold text-secondary">devamını oku</button>
            </div>
          </div>
          <div className="hidden md:flex items-end w-1/2 justify-start pb-16">
            <img src={logoGold} alt="Servet İnşaat" className="w-[300px] lg:w-[415px] h-auto" style={{ filter: "drop-shadow(0px 4px 20px #0D4746)" }} />
          </div>
        </div>
      </section>

      {/* PROJELER */}
      <ProjectsCarousel
        images={[
          { img1: projectsCarousel, img2: taahhutBg },
          { img1: projectUniversity, img2: projectMarmaray },
          { img1: projectCrystal, img2: heroBg },
        ]}
      />

      {/* TAMAMLANAN TAAHHÜTLER */}
      <section className="relative py-12 md:py-20">
        <div className="max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="overflow-hidden rounded-lg h-[300px] md:h-[562px]">
              <img src={taahhutBg} alt="Taahhütler" className="w-full h-full object-cover" loading="lazy" width={1200} height={800} />
            </div>
            <div>
              <h2 className="text-[36px] md:text-[80px] font-bold text-primary leading-tight md:leading-[98px] tracking-[0.04em] text-center mb-6 md:mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                TAMAMLANAN<br />TAAHHÜTLER
              </h2>
              <p className="text-[16px] md:text-[30px] font-medium leading-[24px] md:leading-[36px] tracking-[0.04em] text-center" style={{ fontFamily: "'Inter', sans-serif", color: "#000", maxWidth: "643px", margin: "0 auto" }}>
                Servet İnşaat kalitesiyle tamamlanan, yükselmeye devam eden ve yakında hayata geçecek projelerimizde, siz de Servet güvencesinin ayrıcalığını keşfedin.
              </p>
              <div className="flex justify-center md:justify-end mt-6 md:mt-8">
                <button className="w-[60px] h-[60px] md:w-[105px] md:h-[105px] bg-primary flex items-center justify-center">
                  <ChevronRight size={28} style={{ color: "#F7DF6B" }} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TARİHÇE */}
      <section className="py-12 md:py-20" style={{ background: "linear-gradient(180deg, #E6E6E6 0%, #FFFFFF 100%)" }}>
        <div className="max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20">
          <h2 className="text-[36px] md:text-[80px] font-semibold text-center text-primary leading-tight md:leading-[98px] tracking-[0.04em] mb-8 md:mb-16" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            TARİHÇE
          </h2>
          <div className="flex items-center justify-center gap-0 mb-0 max-w-[1575px] mx-auto overflow-x-auto">
            <button onClick={() => setActiveTimeline(Math.max(0, activeTimeline - 1))} className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] bg-primary flex items-center justify-center flex-shrink-0">
              <ChevronLeft size={22} style={{ color: "#F7DF6B" }} strokeWidth={3} />
            </button>
            <div className="flex-1 border border-black/20 flex items-end min-w-0">
              {timelinePeriods.map((period, i) => (
                <button key={i} onClick={() => setActiveTimeline(i)} className="flex-1 relative min-w-0">
                  <span className="block py-3 md:py-6 text-[14px] md:text-[27px] font-medium tracking-[0.04em] md:tracking-[0.08em] text-center" style={{ fontFamily: "'Inter', sans-serif", color: "#000" }}>
                    {period.label}
                  </span>
                  {i === activeTimeline && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80px] md:w-[178px] h-[6px] md:h-[11px] rounded-t-[3px]" style={{ background: "#0D4746" }} />
                  )}
                </button>
              ))}
            </div>
            <button onClick={() => setActiveTimeline(Math.min(timelinePeriods.length - 1, activeTimeline + 1))} className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] bg-primary flex items-center justify-center flex-shrink-0">
              <ChevronRight size={22} style={{ color: "#F7DF6B" }} strokeWidth={3} />
            </button>
          </div>
          <div className="max-w-[1149px] mx-auto mt-8 md:mt-16 text-center px-4">
            {timelinePeriods[activeTimeline].items.map((item, i) => (
              <p key={i} className="text-[16px] md:text-[27px] font-extrabold leading-[24px] md:leading-[33px] tracking-[0.04em] md:tracking-[0.08em] text-primary whitespace-pre-line mb-4 md:mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* İLETİŞİM FORMU */}
      <section className="relative min-h-[600px] md:min-h-[1259px]">
        <img src={contactBg} alt="İletişim" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={800} style={{ filter: "blur(2.5px)" }} />
        <div className="absolute inset-0 bg-primary/30" />
        <div className="relative z-10 max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20 flex items-center py-12 md:py-0 min-h-[600px] md:min-h-[1259px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center w-full">
            <div className="rounded-lg p-6 md:p-10 shadow-xl" style={{ background: "#F7F8F3", boxShadow: "7px 7px 10px rgba(0,0,0,0.45)" }}>
              <h3 className="text-[20px] md:text-[25px] font-bold text-primary mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Bizimle İletişime Geçin,<br />Sizi Arayalım.
              </h3>
              <form className="space-y-3 md:space-y-4 mt-4 md:mt-6">
                <input type="text" placeholder="Ad ve Soyad" className="w-full px-4 py-2.5 md:py-3 border text-[16px] md:text-[21px] font-medium focus:outline-none focus:ring-2 focus:ring-ring" style={{ fontFamily: "'Montserrat', sans-serif", color: "#385573", borderColor: "#6D6D6D", borderWidth: "0.3px" }} />
                <input type="email" placeholder="E-Posta" className="w-full px-4 py-2.5 md:py-3 border text-[16px] md:text-[21px] font-medium focus:outline-none focus:ring-2 focus:ring-ring" style={{ fontFamily: "'Montserrat', sans-serif", color: "#385573", borderColor: "#6D6D6D", borderWidth: "0.3px" }} />
                <input type="tel" placeholder="Telefon No" className="w-full px-4 py-2.5 md:py-3 border text-[16px] md:text-[21px] font-medium focus:outline-none focus:ring-2 focus:ring-ring" style={{ fontFamily: "'Montserrat', sans-serif", color: "#385573", borderColor: "#6D6D6D", borderWidth: "0.3px" }} />
                <select className="w-full px-4 py-2.5 md:py-3 border text-[16px] md:text-[21px] font-medium focus:outline-none focus:ring-2 focus:ring-ring appearance-none bg-transparent" style={{ fontFamily: "'Montserrat', sans-serif", color: "#385573", borderColor: "#6D6D6D", borderWidth: "0.3px" }}>
                  <option>İlgilendiğiniz Proje</option>
                  <option>Crystal Rezidans</option>
                  <option>Diğer</option>
                </select>
                <div className="space-y-2 md:space-y-3 mt-3 md:mt-4">
                  <label className="flex items-start gap-2 md:gap-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 md:w-7 md:h-7 mt-0.5 border border-[#6D6D6D] rounded-none flex-shrink-0" />
                    <span className="text-[12px] md:text-[15px] font-medium leading-[16px] md:leading-[18px]" style={{ fontFamily: "'Montserrat', sans-serif", color: "#000" }}>Servet İnşaat'a ait tüm haberlerden telefon/mesaj yolu ile haberdar olmak istiyorum.</span>
                  </label>
                  <label className="flex items-start gap-2 md:gap-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 md:w-7 md:h-7 mt-0.5 border border-[#6D6D6D] rounded-none flex-shrink-0" />
                    <span className="text-[12px] md:text-[15px] font-medium leading-[16px] md:leading-[18px]" style={{ fontFamily: "'Montserrat', sans-serif", color: "#000" }}>Servet İnşaat'a ait tüm haberlerden e-posta yolu ile haberdar olmak istiyorum.</span>
                  </label>
                  <label className="flex items-start gap-2 md:gap-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 md:w-7 md:h-7 mt-0.5 flex-shrink-0" style={{ background: "#0D4746", border: "0.3px solid #F7DF6B" }} />
                    <span className="text-[12px] md:text-[15px] font-medium leading-[16px] md:leading-[18px] underline" style={{ fontFamily: "'Montserrat', sans-serif", color: "#000" }}>Kişisel Verilerin Korunması Kuralları'nı okudum ve onaylıyorum.</span>
                  </label>
                </div>
                <button type="submit" className="w-full py-3 md:py-4 text-[20px] md:text-[25px] font-extrabold bg-primary text-secondary mt-3 md:mt-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Gönder
                </button>
              </form>
            </div>
            <div className="text-primary-foreground text-center md:text-left">
              <h2 className="text-[32px] md:text-[65px] font-black leading-tight md:leading-[79px] mb-4 md:mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                İLETİŞİM FORMU
              </h2>
              <p className="text-[18px] md:text-[37px] font-medium leading-[26px] md:leading-[45px]" style={{ fontFamily: "'Inter', sans-serif", textShadow: "0px 4px 5.4px rgba(0,0,0,0.5)", maxWidth: "744px" }}>
                Servet İnşaat projeleri hakkında görüş ve taleplerinizi bizimle paylaşmak için iletişim formunu doldurabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20 text-center">
          <h2 className="text-[24px] md:text-[80px] font-semibold text-primary leading-tight md:leading-[98px] tracking-[0.04em] mb-4 md:mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            INSTAGRAMDAN TAKİP ET!
          </h2>
          <p className="text-[14px] md:text-[35px] font-medium leading-[22px] md:leading-[42px] max-w-[949px] mx-auto mb-6 md:mb-12" style={{ fontFamily: "'Inter', sans-serif", color: "#000" }}>
            Geleceğin yaşam alanlarını birlikte keşfetmek ve fırsatları kaçırmamak için Instagram'dan bizi takip edin.
          </p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-5 max-w-[1584px] mx-auto mb-6 md:mb-10">
            {[insta1, insta2, insta3, insta4, insta1].map((img, i) => (
              <a key={i} href="https://instagram.com/servetkentseldonusum" target="_blank" rel="noopener noreferrer" className="block overflow-hidden aspect-square">
                <img src={img} alt={`Instagram ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" loading="lazy" width={512} height={512} />
              </a>
            ))}
          </div>
          <a href="https://instagram.com/servetkentseldonusum" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 md:gap-3">
            <Instagram size={24} className="md:w-10 md:h-10" style={{ color: "#F7DF6B" }} />
            <span className="text-[18px] md:text-[45px] font-medium text-primary" style={{ fontFamily: "'Inter', sans-serif" }}>servetkentseldonusum</span>
          </a>
        </div>
      </section>

      {/* FOOTER LOGO */}
      <section className="py-8 md:py-16 flex justify-center px-4">
        <img src={logoGoldGreen} alt="Servet İnşaat" className="w-[250px] md:w-[644px] h-auto" loading="lazy" />
      </section>

      {/* OLD FOOTER - replaced with shared */}
      <footer className="bg-primary py-12 md:py-0" style={{ minHeight: "300px" }}>
        <div className="max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20 py-8 md:pt-20 text-center">
          <h4 className="text-[32px] md:text-[65px] font-extrabold leading-tight md:leading-[79px] text-secondary mb-6 md:mb-10">İLETİŞİM İÇİN</h4>
          <div className="space-y-2 md:space-y-3 text-primary-foreground">
            <a href="https://maps.google.com/?q=Bağdat+Caddesi+Arı+Apartmanı+No:171+Göztepe+Kadıköy+İstanbul" target="_blank" rel="noopener noreferrer" className="text-[14px] md:text-[23px] font-medium leading-[22px] md:leading-[28px] hover:text-secondary transition-colors block">Bağdat Caddesi Arı Apartmanı No: 171<br />Daire: 3 Göztepe Mahallesi, Kadıköy / İstanbul</a>
            <a href="tel:+905427313428" className="text-[14px] md:text-[23px] font-medium hover:text-secondary transition-colors block">0 (542) 731 34 28</a>
            <a href="mailto:info@servetkentsel.com" className="text-[14px] md:text-[23px] font-medium hover:text-secondary transition-colors block">info@servetkentsel.com</a>
          </div>
          <div className="mt-8 md:mt-16 pt-4 md:pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            <a href="https://instagram.com/servetkentseldonusum" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Instagram size={20} style={{ color: "#F7DF6B" }} />
              <span className="text-[14px] md:text-[18px] font-medium text-primary-foreground">servetkentseldonusum</span>
            </a>
            <div className="flex gap-4 md:gap-8">
              <a href="#" className="text-[12px] md:text-[17px] font-medium text-primary-foreground">KVKK Aydılatması</a>
              <a href="#" className="text-[12px] md:text-[17px] font-medium text-primary-foreground">Çerez Politikaları</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
