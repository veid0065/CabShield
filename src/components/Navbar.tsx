import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onAuditClick: () => void;
}

export function Navbar({ onAuditClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Denial Defense', href: '#denial-defense' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Hindustan Cabs', href: '#hindustan-cabs' },
    { label: 'Savings Model', href: '#savings-estimator' },
  ];

  const handleMobileNav = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#E4E4DF] bg-[#F8F8F6]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#"
          className="font-display text-lg font-bold tracking-tight text-[#111317] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111317]"
        >
          CAB SHIELD
        </a>

        {/* Zone 2: 4 concise single-line text nav links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A4E57]"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#111317] after:absolute after:inset-x-0 after:bottom-0 after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-[#111317] after:transition-transform after:duration-150 hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111317]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onAuditClick}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#111317] px-4 py-2 text-sm font-medium text-[#F8F8F6] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#242830] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111317] cursor-pointer"
          >
            Book Fleet Audit
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex md:hidden h-11 w-11 items-center justify-center rounded-lg border border-[#DCDCD5] text-[#111317] transition-colors hover:bg-[#ECECE6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111317] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-[#E4E4DF] bg-[#F8F8F6] px-6 py-4 md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleMobileNav}
                className="flex min-h-[44px] items-center text-sm font-medium text-[#2A2D34] hover:text-[#111317]"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                handleMobileNav();
                onAuditClick();
              }}
              className="mt-2 flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#111317] px-4 py-2.5 text-sm font-medium text-[#F8F8F6]"
            >
              Book Fleet Audit
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
