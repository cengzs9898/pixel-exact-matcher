import Header from "@/components/Header";
import Footer from "@/components/Footer";

import hakkimizdaBg from "@/assets/hakkimizda-bg.jpg";
import aboutFamily from "@/assets/about-family.jpg";
import teamZafer from "@/assets/team-zafer.jpg";
import teamKenan from "@/assets/team-kenan.jpg";
import projectsCarousel from "@/assets/projects-carousel.jpg";
import taahhutBg from "@/assets/taahhut-bg.jpg";
import projectUniversity from "@/assets/project-university.jpg";
import projectMarmaray from "@/assets/project-marmaray.jpg";
import projectCrystal from "@/assets/project-crystal.jpg";
import ProjectsCarousel from "@/components/ProjectsCarousel";

const Hakkimizda = () => {
  const features = [
    { icon: "🏗️", title: "18+ yıllık deneyim", desc: "Sektörde köklü tecrübe" },
    { icon: "🏢", title: "50+ tamamlanan proje", desc: "Başarıyla teslim edilen projeler" },
    { icon: "🌿", title: "Sürdürülebilir yapılar", desc: "Çevre dostu inşaat yaklaşımı" },
    { icon: "🤝", title: "Müşteri memnuniyeti", desc: "Güvene dayalı iş ortaklığı" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header activePage="Hakkımızda" />

      {/* HERO */}
      <section className="relative h-[300px] md:h-[400px]" style={{ marginTop: "60px" }}>
        <img src={hakkimizdaBg} alt="Hakkımızda" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-primary/50" />
        <div className="relative z-10 max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20 h-full flex items-end pb-6 md:pb-10">
          <h2 className="text-[36px] md:text-[60px] font-bold text-primary-foreground italic" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Hakkımızda
          </h2>
        </div>
      </section>

      {/* NEDEN SERVET */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="text-[28px] md:text-[42px] font-bold text-primary leading-tight md:leading-[52px] mb-6 md:mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Neden Servet Kentsel<br />Dönüşüm İnşaat?
            </h2>
            <p className="text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] text-foreground mb-4 md:mb-6">
              Servet Kentsel Dönüşüm İnşaat, yalnızca yapı üretmekle kalmaz; şehirleri dönüştüren, yaşam kalitesini yükselten ve gelecek nesillere güvenli, estetik ve sürdürülebilir alanlar bırakan bir vizyonla hareket eder.
            </p>
            <p className="text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] text-foreground">
              18 yılı aşkın sektör tecrübesiyle kentsel dönüşüm alanında öncü konumda yer alan firmamız, İstanbul'un en prestijli bölgelerinde hayata geçirdiği projelerle güçlü bir referans portföyüne sahiptir.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES + FAMILY */}
      <section className="relative">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-16">
              <h3 className="text-[24px] md:text-[36px] font-bold text-primary leading-tight md:leading-[44px] mb-6 md:mb-10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Servet İnşaat Kentsel Dönüşüm'ü<br />Seçmeniz İçin Sebepler!
              </h3>
              <div className="grid grid-cols-2 gap-3 md:gap-6">
                {features.map((feat, i) => (
                  <div key={i} className="bg-background rounded-xl p-4 md:p-6 shadow-md flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center text-xl md:text-2xl flex-shrink-0">
                      {feat.icon}
                    </div>
                    <div>
                      <h4 className="text-[13px] md:text-[16px] font-bold text-primary mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {feat.title}
                      </h4>
                      <p className="text-[11px] md:text-[13px] text-muted-foreground">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden h-[300px] md:h-auto">
              <img src={aboutFamily} alt="Aile" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
            </div>
          </div>
        </div>
      </section>

      {/* YÖNETİM KURULU */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20">
          <h2 className="text-[36px] md:text-[60px] font-bold text-center text-primary leading-tight md:leading-[74px] tracking-[0.04em] mb-12 md:mb-20" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Yönetim Kurulu
          </h2>

          {[
            { img: teamZafer, name: "ZAFER KELLECİ", title: "Genel Müdür & Kurucu Ortak", bio: "Kariyerine Kelleci İnşaat'ın 1980 yılında kuruluşuyla başlayan Zafer Kelleci, Yıldız Teknik Üniversitesi İnşaat Mühendisliği mezunudur. İnşaat sektöründe 35 yılı aşkın deneyime sahiptir.", grayscale: false },
            { img: teamKenan, name: "KENAN YURTGÜN", title: "Kurucu Ortak", bio: "1986 yılında Trabzon'da doğan Kenan Yurtgün, inşaat ve gayrimenkul sektöründe 15 yılı aşkın deneyime sahiptir. Müşteri odaklı yaklaşımı ile tanınır.", grayscale: true },
            { img: null, name: "SERVET ULUÇ", title: "Yönetim Kurulu Başkanı", bio: "Servet Uluç, uzun yıllara dayanan iş deneyimi ve liderlik vizyonuyla Servet İnşaat'ın Yönetim Kurulu Başkanlığı görevini yürütmektedir.", grayscale: false },
          ].map((member, i) => (
            <div key={i} className="max-w-[900px] mx-auto mb-12 md:mb-20">
              <div className="w-[200px] h-[250px] md:w-[300px] md:h-[360px] mx-auto overflow-hidden rounded-lg mb-4 md:mb-6" style={{ background: member.img ? undefined : "#D9D9D9" }}>
                {member.img ? (
                  <img src={member.img} alt={member.name} className={`w-full h-full object-cover ${member.grayscale ? "grayscale" : ""}`} loading="lazy" width={512} height={640} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center"><div className="w-20 h-20 md:w-28 md:h-28 bg-muted-foreground/20 rounded-full" /></div>
                )}
              </div>
              <div className="text-center mb-4 md:mb-6">
                <h3 className="text-[20px] md:text-[24px] font-bold text-primary" style={{ fontFamily: "'Montserrat', sans-serif" }}>{member.name}</h3>
                <p className="text-[14px] md:text-[16px] text-secondary font-medium">{member.title}</p>
              </div>
              <p className="text-[13px] md:text-[15px] leading-[22px] md:leading-[26px] text-foreground text-center px-4">{member.bio}</p>
              <p className="text-secondary text-[14px] md:text-[16px] font-medium italic text-center mt-3 md:mt-4 cursor-pointer">devamını oku...</p>
            </div>
          ))}
        </div>
      </section>

      {/* ÇALIŞMA SÜRECİMİZ */}
      <section className="relative">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="py-12 md:py-20 px-4 md:px-16 bg-background">
              <h2 className="text-[32px] md:text-[48px] font-bold text-primary leading-tight md:leading-[58px] mb-8 md:mb-12" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Çalışma Sürecimiz
              </h2>
              <div className="space-y-6 md:space-y-8">
                {[
                  { step: "🏠", title: "Danışmanlık ve Planlama", desc: "Projeleriniz için ihtiyaç analizi yaparak en uygun çözümleri sunarız." },
                  { step: "📐", title: "Proje Uygulaması", desc: "Tasarım aşamasından inşaat sürecine kadar tüm aşamalarda profesyonel ekibimizle yanınızdayız." },
                  { step: "🔧", title: "Bakım ve Destek", desc: "Proje tesliminden sonra da yanınızdayız. Düzenli bakım ve teknik destek hizmeti sunuyoruz." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 md:gap-5">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center text-xl md:text-2xl flex-shrink-0">{item.step}</div>
                    <div>
                      <h4 className="text-[16px] md:text-[20px] font-bold text-primary mb-1 md:mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>{item.title}</h4>
                      <p className="text-[13px] md:text-[14px] text-muted-foreground leading-[20px] md:leading-[22px]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden h-[300px] md:h-auto">
              <img src={taahhutBg} alt="İnşaat" className="w-full h-full object-cover" loading="lazy" width={1200} height={800} />
            </div>
          </div>
        </div>
      </section>

      <ProjectsCarousel
        images={[
          { img1: projectsCarousel, img2: taahhutBg },
          { img1: projectUniversity, img2: projectMarmaray },
          { img1: projectCrystal, img2: taahhutBg },
        ]}
        title="PROJELER"
      />

      <Footer />
    </div>
  );
};

export default Hakkimizda;
