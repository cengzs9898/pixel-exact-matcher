import { Instagram } from "lucide-react";
import logoGold from "@/assets/logo-gold.png";

const Footer = () => (
  <footer className="bg-primary relative overflow-hidden">
    <div className="max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20 py-12 md:py-0 md:h-[300px] flex items-center">
      <div className="flex flex-col md:flex-row items-center md:items-center justify-between w-full gap-8 md:gap-0">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src={logoGold} alt="Servet İnşaat" className="w-[150px] md:w-[200px] h-auto" />
          <a href="https://instagram.com/servetkentseldonusum" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Instagram size={18} style={{ color: "#F7DF6B" }} />
            <span className="text-[13px] md:text-[14px] font-medium text-primary-foreground">servetkentseldonusum</span>
          </a>
        </div>
        <div className="text-center">
          <h4 className="text-[28px] md:text-[48px] font-extrabold leading-tight text-secondary mb-4 md:mb-6">İLETİŞİM İÇİN</h4>
          <div className="space-y-1 text-primary-foreground">
            <a href="https://maps.google.com/?q=Bağdat+Caddesi+Arı+Apartmanı+No:171+Göztepe+Kadıköy+İstanbul" target="_blank" rel="noopener noreferrer" className="text-[13px] md:text-[16px] font-medium hover:text-secondary transition-colors">Bağdat Caddesi Arı Apartmanı No: 171</a>
            <a href="https://maps.google.com/?q=Bağdat+Caddesi+Arı+Apartmanı+No:171+Göztepe+Kadıköy+İstanbul" target="_blank" rel="noopener noreferrer" className="text-[13px] md:text-[16px] font-medium hover:text-secondary transition-colors">Daire: 3 Göztepe Mahallesi, Kadıköy / İstanbul</a>
            <a href="tel:+905427313428" className="text-[13px] md:text-[16px] font-medium hover:text-secondary transition-colors">0 (542) 731 34 28</a>
            <a href="mailto:info@servetkentsel.com" className="text-[13px] md:text-[16px] font-medium hover:text-secondary transition-colors">info@servetkentsel.com</a>
          </div>
        </div>
        <div className="opacity-20 hidden lg:block">
          <img src={logoGold} alt="" className="w-[300px] h-auto" />
        </div>
      </div>
    </div>
    <div className="px-4 md:px-12 lg:px-20 pb-4 flex flex-col md:flex-row items-center md:items-center justify-between gap-2 md:gap-0">
      <span className="text-[11px] md:text-[12px] text-primary-foreground/50">© 2024 Servet İnşaat</span>
      <div className="flex gap-4 md:gap-6">
        <a href="#" className="text-[11px] md:text-[13px] font-medium text-primary-foreground/70">KVKK Aydılatması</a>
        <a href="#" className="text-[11px] md:text-[13px] font-medium text-primary-foreground/70">Çerez Politikaları</a>
      </div>
    </div>
  </footer>
);

export default Footer;
