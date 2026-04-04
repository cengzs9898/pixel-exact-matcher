import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import logoGold from "@/assets/logo-gold.png";
import projectSpor from "@/assets/project-spor.jpg";
import projectUniversity from "@/assets/project-university.jpg";
import projectMarmaray from "@/assets/project-marmaray.jpg";
import projectCrystal from "@/assets/project-crystal.jpg";
import projectBegonya from "@/assets/project-begonya.jpg";
import sporInterior1 from "@/assets/spor-interior-1.jpg";
import sporInterior2 from "@/assets/spor-interior-2.jpg";

const projectsData: Record<string, {
  title: string; subtitle: string; heroImg: string; gallery: string[];
  info: { label: string; value: string }[]; mapUrl: string; mapEmbed: string;
}> = {
  "ibb-avcilar-spor-kompleksi": {
    title: "İBB Avcılar Spor Kompleksi", subtitle: "Zemin Kat - Kaba İnşaat Yapımı", heroImg: projectSpor,
    gallery: [projectSpor, sporInterior1, sporInterior2],
    info: [
      { label: "İş Veren", value: "İNŞAART" }, { label: "Müteahhit Unvanı", value: "ULUÇ İNŞAAT" },
      { label: "Yapıldığı Yer", value: "AVCILAR" }, { label: "Proje Üstleniliş Biçimi", value: "TAAHHÜT İBB SPOR KOMPLEKSİ" },
      { label: "İnşaat Başlangıç Tarihi", value: "2014-02-20" }, { label: "İnşaat Bitiş Tarihi", value: "2014-07-01" },
      { label: "Toplam Alan", value: "10.5000 M2" }, { label: "Proje", value: "ZEMİN KAT" }, { label: "İmalat", value: "KABA İNŞAAT YAPIMI" },
    ],
    mapUrl: "https://maps.google.com/?q=Avcılar+Spor+Kompleksi+Istanbul",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.5!2d28.72!3d41.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzAwLjAiTiAyOMKwNDMnMTIuMCJF!5e0!3m2!1str!2str!4v1",
  },
  "rumeli-universitesi": { title: "Rumeli Üniversitesi", subtitle: "Eğitim Yapısı - Taahhüt", heroImg: projectUniversity, gallery: [projectUniversity], info: [{ label: "İş Veren", value: "RUMELİ ÜNİVERSİTESİ" }, { label: "Yapıldığı Yer", value: "SİLİVRİ" }, { label: "Proje", value: "EĞİTİM YAPISI" }], mapUrl: "https://maps.google.com/?q=Rumeli+Universitesi+Istanbul", mapEmbed: "" },
  "marmaray-projesi": { title: "Marmaray Projesi", subtitle: "Altyapı Projesi", heroImg: projectMarmaray, gallery: [projectMarmaray], info: [{ label: "İş Veren", value: "ULAŞTIRMA BAKANLIĞI" }, { label: "Yapıldığı Yer", value: "İSTANBUL" }, { label: "Proje", value: "ALTYAPI" }], mapUrl: "https://maps.google.com/?q=Marmaray+Istanbul", mapEmbed: "" },
  "crystal-rezidans": { title: "Crystal Rezidans", subtitle: "Konut Projesi", heroImg: projectCrystal, gallery: [projectCrystal], info: [{ label: "İş Veren", value: "CRYSTAL İNŞAAT" }, { label: "Yapıldığı Yer", value: "İSTANBUL" }, { label: "Proje", value: "KONUT" }], mapUrl: "https://maps.google.com/?q=Crystal+Rezidans+Istanbul", mapEmbed: "" },
};

const otherProjects = [
  { slug: "begonya-kirazli", title: "BEGONYA KİRAZLI", img: projectBegonya },
  { slug: "crystal-rezidans", title: "CRYSTAL REZİDANS", img: projectCrystal },
];

const ProjeDetay = () => {
  const { slug } = useParams<{ slug: string }>();
  const [galleryIndex, setGalleryIndex] = useState(0);
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center px-4">
          <h1 className="text-[28px] md:text-[40px] font-bold text-primary mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Proje Bulunamadı</h1>
          <Link to="/" className="text-secondary underline">Anasayfaya Dön</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header />

      {/* HERO */}
      <section className="relative h-[350px] md:h-[550px]" style={{ marginTop: "60px" }}>
        <img src={project.heroImg} alt={project.title} className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-[16px] md:text-[24px] text-primary-foreground/80 mb-1 md:mb-2">Servet İnşaat</p>
          <h1 className="text-[28px] md:text-[50px] font-bold text-primary-foreground leading-tight md:leading-[60px] mb-2 md:mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>{project.title}</h1>
          <p className="text-[14px] md:text-[18px] text-primary-foreground/70">{project.subtitle}</p>
        </div>
      </section>

      {/* PROJE HAKKINDA */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-[1000px] mx-auto px-4 md:px-12 lg:px-20">
          <h2 className="text-[32px] md:text-[48px] font-bold text-center text-primary mb-8 md:mb-12 tracking-[0.06em]" style={{ fontFamily: "'Montserrat', sans-serif" }}>PROJE HAKKINDA</h2>
          <div className="border-t border-b border-muted py-6 md:py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2 md:gap-y-3">
              <div>
                <p className="text-[13px] md:text-[14px] text-muted-foreground mb-1">Proje Bilgileri</p>
                {project.info.filter((_, i) => i < 4).map((item, i) => (
                  <p key={i} className="text-[13px] md:text-[14px] text-foreground">
                    <span className="text-muted-foreground">{item.label}:</span> <span className="font-bold">{item.value}</span>
                  </p>
                ))}
              </div>
              <div className="mt-2 md:mt-0">
                {project.info.filter((_, i) => i >= 4).map((item, i) => (
                  <p key={i} className="text-[13px] md:text-[14px] text-foreground">
                    <span className="text-muted-foreground">{item.label}:</span> <span className="font-bold">{item.value}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-8 md:py-10 bg-background">
        <div className="max-w-[1000px] mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex justify-center gap-3 mb-6 md:mb-8">
            <button onClick={() => setGalleryIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-primary flex items-center justify-center">
              <ChevronLeft size={20} style={{ color: "#F7DF6B" }} strokeWidth={3} />
            </button>
            <button onClick={() => setGalleryIndex((prev) => (prev + 1) % project.gallery.length)} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-primary flex items-center justify-center">
              <ChevronRight size={20} style={{ color: "#F7DF6B" }} strokeWidth={3} />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {project.gallery.map((img, i) => (
              <div key={i} className={`overflow-hidden rounded-lg cursor-pointer transition-all h-[120px] md:h-[200px] ${i === galleryIndex ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"}`} onClick={() => setGalleryIndex(i)}>
                <img src={img} alt={`Galeri ${i + 1}`} className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOKASYON */}
      <section className="py-12 md:py-20 bg-primary relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-[200px] md:w-[300px] opacity-10 hidden md:block">
          <img src={logoGold} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-[800px] mx-auto px-4 md:px-12 lg:px-20 relative z-10">
          <h2 className="text-[32px] md:text-[48px] font-bold text-center text-primary-foreground mb-6 md:mb-10 tracking-[0.06em]" style={{ fontFamily: "'Montserrat', sans-serif" }}>LOKASYON</h2>
          <div className="bg-background rounded-lg overflow-hidden shadow-lg mb-4 md:mb-6 h-[200px] md:h-[300px]">
            {project.mapEmbed ? (
              <iframe src={project.mapEmbed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Proje Lokasyonu" />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center"><MapPin size={48} className="text-muted-foreground" /></div>
            )}
          </div>
          <div className="flex justify-center">
            <a href={project.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 border-2 border-primary-foreground rounded-full text-primary-foreground text-[14px] md:text-[16px] font-medium hover:bg-primary-foreground hover:text-primary transition-colors">
              <MapPin size={16} /> Yol Tarifi Al
            </a>
          </div>
        </div>
      </section>

      {/* DİĞER PROJELER */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20">
          <h2 className="text-[32px] md:text-[48px] font-bold text-center text-primary mb-4 md:mb-6 tracking-[0.06em]" style={{ fontFamily: "'Montserrat', sans-serif" }}>DİĞER PROJELER</h2>
          <p className="text-[14px] md:text-[18px] font-medium text-center leading-[22px] md:leading-[28px] max-w-[800px] mx-auto mb-8 md:mb-12" style={{ color: "#000" }}>
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

      <Footer />
    </div>
  );
};

export default ProjeDetay;
