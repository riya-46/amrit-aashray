import { HeartHandshake, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Vision", href: "#vision" },
  { label: "Gallery", href: "#gallery" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#f0c39b] bg-[#fff7ee]/96 shadow-[0_6px_24px_rgba(31,77,92,0.06)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8">
        <a className="flex min-w-0 items-center gap-3" href="#home">
          <img
            src="/logo.jpeg"
            alt="Amrit Aashray Logo"
            className="h-16 w-16 shrink-0 rounded-2xl object-contain shadow-sm"
          />
          <div className="min-w-0">
            <p className="text-[2.15rem] font-black leading-tight text-[#f47c13] [-webkit-text-stroke:1px_#b45b17] sm:text-[2.6rem]">
              Amrit Aashray
            </p>
          </div>
        </a>

        <nav
          className="hidden items-center gap-7 text-base font-semibold text-[#1f4d5c] lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a className="nav-link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="hidden items-center gap-3 rounded-full border-4 border-[#f47c13] bg-[#ffd166] px-7 py-4 text-xl font-black text-[#143743] shadow-[0_16px_34px_rgba(255,209,102,0.34)] transition hover:-translate-y-0.5 hover:bg-[#ffc64d] lg:inline-flex"
          href="#volunteer"
        >
          <HeartHandshake size={24} />
          Volunteer
        </a>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#f2d6bd] text-[#1f4d5c] lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <nav
          className="border-t border-[#f2d6bd] bg-[#fffaf5] px-5 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto grid max-w-7xl gap-3">
            {navLinks.map((link) => (
              <a
                className="rounded-md px-2 py-2 font-semibold text-[#1f4d5c]"
                href={link.href}
                key={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="mt-1 inline-flex w-max items-center gap-2 rounded-full border-4 border-[#f47c13] bg-[#ffd166] px-5 py-3 font-bold text-[#143743]"
              href="#volunteer"
              onClick={() => setIsOpen(false)}
            >
              <HeartHandshake size={18} />
              Volunteer
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
