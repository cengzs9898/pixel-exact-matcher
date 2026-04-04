import { useState } from "react";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import logoGold from "@/assets/logo-gold.png";
import iletisimHero from "@/assets/iletisim-hero.jpg";

const Iletisim = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header activePage="İletişim" />

      {/* HERO */}
      <section className="relative h-[250px] md:h-[400px]" style={{ marginTop: "60px" }}>
        <img src={iletisimHero} alt="İletişim" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-primary/50" />
        <div className="relative z-10 max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20 h-full flex items-end pb-6 md:pb-10">
          <h1 className="text-[36px] md:text-[60px] font-bold text-primary-foreground italic" style={{ fontFamily: "'Montserrat', sans-serif" }}>İletişim</h1>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-[1200px] mx-auto px-4 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h2 className="text-[28px] md:text-[36px] font-bold text-primary mb-6 md:mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>Bize Ulaşın</h2>
              <div className="space-y-5 md:space-y-6">
                {[
                  { icon: MapPin, title: "Adres", content: <a href="https://maps.google.com/?q=Bağdat+Caddesi+Arı+Apartmanı+No:171+Göztepe+Kadıköy+İstanbul" target="_blank" rel="noopener noreferrer" className="text-[14px] md:text-[15px] text-muted-foreground leading-[22px] md:leading-[24px] hover:text-primary transition-colors">Bağdat Caddesi Arı Apartmanı No: 171<br />Daire: 3 Göztepe Mahallesi, Kadıköy / İstanbul</a> },
                  { icon: Phone, title: "Telefon", content: <a href="tel:+905427313428" className="text-[14px] md:text-[15px] text-muted-foreground hover:text-primary transition-colors">0 (542) 731 34 28</a> },
                  { icon: Mail, title: "E-posta", content: <a href="mailto:info@servetkentsel.com" className="text-[14px] md:text-[15px] text-muted-foreground hover:text-primary transition-colors">info@servetkentsel.com</a> },
                  { icon: Instagram, title: "Instagram", content: <a href="https://instagram.com/servetkentseldonusum" target="_blank" rel="noopener noreferrer" className="text-[14px] md:text-[15px] text-secondary hover:underline">@servetkentseldonusum</a> },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-[14px] md:text-[16px] font-bold text-primary mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>{item.title}</h4>
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-[28px] md:text-[36px] font-bold text-primary mb-6 md:mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>Mesaj Gönderin</h2>
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <input type="text" placeholder="Adınız Soyadınız" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-2.5 md:py-3 border border-muted rounded-lg text-[14px] md:text-[15px] bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                  <input type="email" placeholder="E-posta Adresiniz" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full px-4 py-2.5 md:py-3 border border-muted rounded-lg text-[14px] md:text-[15px] bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <input type="tel" placeholder="Telefon Numaranız" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-2.5 md:py-3 border border-muted rounded-lg text-[14px] md:text-[15px] bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                  <input type="text" placeholder="Konu" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required className="w-full px-4 py-2.5 md:py-3 border border-muted rounded-lg text-[14px] md:text-[15px] bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <textarea placeholder="Mesajınız..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={4} className="w-full px-4 py-2.5 md:py-3 border border-muted rounded-lg text-[14px] md:text-[15px] bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                <button type="submit" className="w-full py-3 md:py-4 bg-primary text-primary-foreground text-[15px] md:text-[16px] font-bold rounded-lg hover:bg-primary/90 transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>GÖNDER</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-primary py-12 md:py-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-[200px] md:w-[300px] opacity-10 hidden md:block">
          <img src={logoGold} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-[1000px] mx-auto px-4 md:px-12 lg:px-20 relative z-10">
          <h2 className="text-[32px] md:text-[48px] font-bold text-center text-primary-foreground mb-6 md:mb-10 tracking-[0.06em]" style={{ fontFamily: "'Montserrat', sans-serif" }}>LOKASYON</h2>
          <div className="bg-background rounded-lg overflow-hidden shadow-lg mb-4 md:mb-6 h-[220px] md:h-[350px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.5!2d29.06!3d40.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU4JzQ4LjAiTiAyOcKwMDMnMzYuMCJF!5e0!3m2!1str!2str!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Servet İnşaat Lokasyonu" />
          </div>
          <div className="flex justify-center">
            <a href="https://maps.google.com/?q=Bağdat+Caddesi+Arı+Apartmanı+No:171+Göztepe+Kadıköy+İstanbul" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 border-2 border-primary-foreground rounded-full text-primary-foreground text-[14px] md:text-[16px] font-medium hover:bg-primary-foreground hover:text-primary transition-colors">
              <MapPin size={16} /> Yol Tarifi Al
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Iletisim;
