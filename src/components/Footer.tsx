import { Instagram } from "lucide-react";
import logoGold from "@/assets/logo-gold.png";
import logoGoldGreen from "@/assets/logo-gold-green.png";
import footerBg from "@/assets/footer-bg.png";

const Footer = () => (
  <footer className="relative overflow-hidden bg-primary">
    {/* Background image — vertically centered, horizontally right-aligned */}
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-no-repeat"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundPosition: "right center",
        backgroundSize: "auto 100%",
      }}
    />

    <div className="relative max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20 py-12 md:py-0 md:min-h-[300px] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center w-full gap-8 md:gap-6">
        {/* LEFT — logo aligned with İLETİŞİM İÇİN heading */}
        <div className="flex justify-center md:justify-start">
          <img
            src={logoGoldGreen}
            alt="Servet İnşaat"
            className="w-[200px] md:w-[289px] h-auto"
            style={{ maxHeight: "139px", objectFit: "contain" }}
          />
        </div>

        {/* CENTER — contact info */}
        <div className="text-center">
          <h4 className="text-[28px] md:text-[48px] font-extrabold leading-tight text-secondary mb-4 md:mb-6">
            İLETİŞİM İÇİN
          </h4>
          <div className="space-y-1 text-primary-foreground">
            <a
              href="https://maps.google.com/?q=Bağdat+Caddesi+Arı+Apartmanı+No:171+Göztepe+Kadıköy+İstanbul"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[13px] md:text-[16px] font-medium hover:text-secondary transition-colors"
            >
              Bağdat Caddesi Arı Apartmanı No: 171
            </a>
            <a
              href="https://maps.google.com/?q=Bağdat+Caddesi+Arı+Apartmanı+No:171+Göztepe+Kadıköy+İstanbul"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[13px] md:text-[16px] font-medium hover:text-secondary transition-colors"
            >
              Daire: 3 Göztepe Mahallesi, Kadıköy / İstanbul
            </a>
            <a
              href="tel:+905427313428"
              className="block text-[13px] md:text-[16px] font-medium hover:text-secondary transition-colors"
            >
              0 (542) 731 34 28
            </a>
            <a
              href="mailto:info@servetkentsel.com"
              className="block text-[13px] md:text-[16px] font-medium hover:text-secondary transition-colors"
            >
              info@servetkentsel.com
            </a>
          </div>
        </div>

        {/* RIGHT — instagram */}
        <div className="flex justify-center md:justify-end">
          <a
            href="https://instagram.com/servetkentseldonusum"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Instagram size={18} style={{ color: "#F7DF6B" }} />
            <span className="text-[13px] md:text-[16px] font-medium text-primary-foreground">
              servetkentseldonusum
            </span>
          </a>
        </div>
      </div>
    </div>

    <div className="relative px-4 md:px-12 lg:px-20 pb-4 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
      <span className="text-[11px] md:text-[12px] text-primary-foreground/50">© 2024 Servet İnşaat</span>
      <div className="flex gap-4 md:gap-6">
        <a href="#" className="text-[11px] md:text-[13px] font-medium text-primary-foreground/70">KVKK Aydılatması</a>
        <a href="#" className="text-[11px] md:text-[13px] font-medium text-primary-foreground/70">Çerez Politikaları</a>
      </div>
    </div>
  </footer>
);

export default Footer;
