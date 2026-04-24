import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logoGold from "@/assets/logo-gold.png";
import iconMenu from "@/assets/icon-menu.png";
import iconSearch from "@/assets/icon-search.png";
import iconInstagram from "@/assets/icon-instagram.png";
import projectUniversity from "@/assets/project-university.jpg";
import projectMarmaray from "@/assets/project-marmaray.jpg";
import projectCrystal from "@/assets/project-crystal.jpg";
import projectSpor from "@/assets/project-spor.jpg";

interface HeaderProps {
  activePage?: string;
}

const menuItems = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Yaşanası Mekanlar", href: "#" },
  { label: "Projelendirme ve Tadilat", href: "#" },
  { label: "Çözüm Ortakları", href: "#" },
  { label: "Haberler", href: "#" },
  { label: "Satıştaki Gayrimenkullerimiz", href: "/satistaki-gayrimenkullerimiz" },
  { label: "İletişim", href: "/iletisim" },
];

const menuProjects = [
  { img: projectUniversity, title: "Rumeli Üniversitesi" },
  { img: projectMarmaray, title: "Marmaray Projesi" },
  { img: projectCrystal, title: "Crystal Rezidans" },
  { img: projectSpor, title: "İBB Avcılar Spor Kompleksi" },
];

const Header = ({ activePage }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuAnimating, setMenuAnimating] = useState(false);

  // Handle menu open/close with Rolex-style animation
  const openMenu = () => {
    setMenuOpen(true);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => {
      setMenuVisible(true);
      setMenuAnimating(true);
    });
  };

  const closeMenu = () => {
    setMenuVisible(false);
    setMenuAnimating(true);
    setTimeout(() => {
      setMenuOpen(false);
      setMenuAnimating(false);
      document.body.style.overflow = "";
    }, 600);
  };

  useEffect(() => {
    if (menuVisible) {
      const timer = setTimeout(() => setMenuAnimating(false), 600);
      return () => clearTimeout(timer);
    }
  }, [menuVisible]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary h-[60px] md:h-[146px]">
      <Link to="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto z-10">
        <img src={logoGold} alt="Servet İnşaat" className="h-[40px] md:h-[117px] w-auto" />
      </Link>
      <div className="relative max-w-[1920px] mx-auto flex items-center justify-between h-full px-4 md:px-12 lg:px-20">
        <button onClick={openMenu} className="flex items-center gap-2 md:gap-3 text-primary-foreground group">
          <img src={iconMenu} alt="" aria-hidden="true" className="h-[18px] md:h-[26px] w-auto transition-transform duration-300 group-hover:scale-110" />
          <span className="text-sm md:text-lg font-medium transition-opacity duration-300 group-hover:opacity-80" style={{ color: "#F0F0F0" }}>Menü</span>
        </button>
        <div className="flex items-center gap-3 md:gap-8">
          <button className="flex items-center gap-1 md:gap-2 text-primary-foreground">
            <img src={iconSearch} alt="" aria-hidden="true" className="h-[18px] md:h-[22px] w-auto" />
            <span className="text-sm md:text-lg font-medium hidden sm:inline" style={{ color: "#F0F0F0" }}>Ara</span>
          </button>
          <a href="https://instagram.com/servetkentseldonusum" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2">
            <img src={iconInstagram} alt="" aria-hidden="true" className="h-[24px] w-auto" />
            <span className="text-lg font-medium" style={{ color: "#F0F0F0" }}>servetkentseldonusum</span>
          </a>
          <a href="https://instagram.com/servetkentseldonusum" target="_blank" rel="noopener noreferrer" className="md:hidden">
            <img src={iconInstagram} alt="Instagram" className="h-[20px] w-auto" />
          </a>
        </div>
      </div>

      {/* Fullscreen Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col md:flex-row"
          style={{
            transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            opacity: menuVisible ? 1 : 0,
          }}
        >
          {/* Left Panel - Menu */}
          <div
            className="w-full md:w-1/2 bg-primary flex flex-col justify-between px-6 md:px-20 py-6 md:py-20 min-h-screen md:min-h-0"
            style={{
              transform: menuVisible ? "translateX(0)" : "translateX(-100%)",
              transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div>
              <button
                onClick={closeMenu}
                className="md:hidden w-10 h-10 rounded-full border-2 border-secondary text-secondary flex items-center justify-center text-lg font-bold mb-4 transition-transform duration-300 hover:scale-110 hover:rotate-90"
              >
                X
              </button>
              <nav className="mt-4 md:mt-16 space-y-1 md:space-y-2">
                {menuItems.map((item, index) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`block text-[20px] md:text-[28px] font-medium py-1.5 md:py-2 transition-all duration-500 ${
                      item.label === activePage
                        ? "text-secondary"
                        : "text-primary-foreground hover:text-secondary hover:translate-x-3"
                    }`}
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      opacity: menuVisible ? 1 : 0,
                      transform: menuVisible ? "translateY(0)" : "translateY(20px)",
                      transition: `opacity 0.4s ease ${0.15 + index * 0.05}s, transform 0.4s ease ${0.15 + index * 0.05}s, color 0.3s ease`,
                    }}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div
              className="space-y-6 md:space-y-12 mt-6 md:mt-0"
              style={{
                opacity: menuVisible ? 1 : 0,
                transform: menuVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.5s ease 0.6s, transform 0.5s ease 0.6s",
              }}
            >
              <a href="https://instagram.com/servetkentseldonusum" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img src={iconInstagram} alt="" aria-hidden="true" className="h-[24px] w-auto" />
                <span className="text-primary-foreground text-[16px] md:text-[20px] font-medium">servetkentseldonusum</span>
              </a>
              <img src={logoGold} alt="Servet İnşaat" className="w-[180px] md:w-[280px] h-auto" />
            </div>
          </div>

          {/* Right Panel - Projects */}
          <div
            className="hidden md:flex w-1/2 bg-background relative items-start justify-center pt-20"
            style={{
              transform: menuVisible ? "translateX(0)" : "translateX(100%)",
              transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <button
              onClick={closeMenu}
              className="absolute top-6 left-6 w-[50px] h-[50px] rounded-full border-2 border-primary text-primary flex items-center justify-center text-xl font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:rotate-90 hover:scale-110"
            >
              X
            </button>
            <div className="grid grid-cols-2 gap-4 p-12 pt-16 max-w-[700px]">
              {menuProjects.map((project, i) => (
                <div
                  key={i}
                  className="relative group overflow-hidden rounded-xl cursor-pointer"
                  style={{
                    height: "220px",
                    opacity: menuVisible ? 1 : 0,
                    transform: menuVisible ? "scale(1)" : "scale(0.9)",
                    transition: `opacity 0.4s ease ${0.2 + i * 0.08}s, transform 0.4s ease ${0.2 + i * 0.08}s`,
                  }}
                >
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
                    <span className="px-5 py-2 rounded-full text-[16px] font-bold text-primary transition-all duration-300 group-hover:bg-secondary group-hover:text-primary" style={{ fontFamily: "'Montserrat', sans-serif", background: "rgba(255,255,255,0.85)" }}>
                      {project.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
