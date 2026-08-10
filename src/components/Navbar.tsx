'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Activity, Wrench } from 'lucide-react';
import { LeadMagnetModal } from './LeadMagnetModal';

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Trang chủ' },
    { href: '/kien-thuc', label: 'Kiến thức' },
    { href: '/cong-cu', label: 'Công cụ & Template' },
    { href: '/gioi-thieu', label: 'Giới thiệu' },
    { href: '/lien-he', label: 'Liên hệ' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  // Keyboard accessibility: ESC key closes mobile menu drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[#DCE2E7] bg-white/95 backdrop-blur-md">
        {/* DESKTOP NAVBAR (Unchanged) */}
        <div className="hidden md:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 items-center justify-between">
          {/* Desktop Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#14202B] flex items-center justify-center text-[#2F6FED] group-hover:bg-[#2F6FED] group-hover:text-white transition-all">
              <Activity className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-[#14202B] text-base tracking-tight group-hover:text-[#2F6FED] transition-colors">
                VẬN HÀNH MỚI
              </span>
              <span className="text-[10px] text-[#667085] font-mono tracking-wider -mt-1 uppercase">
                OPERATIONS INTELLIGENCE
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    active
                      ? 'text-[#235789] bg-[#EBF2FE] border border-[#C5D8F9]'
                      : 'text-[#435164] hover:text-[#14202B] hover:bg-[#F7F8F5]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-1.5 bg-[#2F6FED] hover:bg-[#1D5BD8] text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all shadow-sm cursor-pointer"
            >
              <span>Nhận tài liệu AI</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* MOBILE HEADER (Left = Hamburger, Center = Logo, Right = Balance Spacer) */}
        <div className="flex md:hidden h-16 px-4 items-center justify-between">
          {/* LEFT: Mobile Hamburger Button (≥ 44x44px touch target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-[#14202B] hover:bg-[#F7F8F5] border border-[#DCE2E7] transition-colors cursor-pointer"
            aria-label="Mở menu điều hướng"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* CENTER: Wordmark */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-[#14202B] flex items-center justify-center text-[#2F6FED]">
              <Activity className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col text-center">
              <span className="font-heading font-bold text-[#14202B] text-base tracking-tight">
                VẬN HÀNH MỚI
              </span>
              <span className="hidden sm:inline-block text-[9px] text-[#667085] font-mono tracking-wider -mt-1 uppercase">
                OPERATIONS INTELLIGENCE
              </span>
            </div>
          </Link>

          {/* RIGHT: Visual Balance Spacer */}
          <div className="w-[44px] h-[44px] pointer-events-none" aria-hidden="true" />
        </div>

        {/* MOBILE LEFT-SLIDING DRAWER OVERLAY */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs animate-fadeIn"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Left Drawer Container */}
            <div className="relative w-4/5 max-w-xs bg-white border-r border-[#DCE2E7] h-full p-5 space-y-4 shadow-2xl flex flex-col justify-between z-10 animate-slideRight">
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between border-b border-[#DCE2E7] pb-4 mb-4">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#14202B] flex items-center justify-center text-[#2F6FED]">
                      <Activity className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-heading font-bold text-[#14202B] text-sm tracking-tight">
                      VẬN HÀNH MỚI
                    </span>
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-[#435164] hover:bg-[#F7F8F5]"
                    aria-label="Đóng menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="space-y-1">
                  {navLinks.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                          active
                            ? 'text-[#235789] bg-[#EBF2FE] border border-[#C5D8F9]'
                            : 'text-[#14202B] hover:bg-[#F7F8F5]'
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Bottom CTA */}
              <div className="pt-4 border-t border-[#DCE2E7]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setModalOpen(true);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#2F6FED] hover:bg-[#1D5BD8] text-white font-semibold px-4 py-3 rounded-xl text-sm shadow-sm"
                >
                  <span>Nhận bộ AI Prompt miễn phí</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#DCE2E7] p-2.5 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2 pl-2">
          <Wrench className="w-4 h-4 text-[#235789]" />
          <span className="text-xs font-semibold text-[#14202B]">Kho công cụ Operations</span>
        </div>
        <Link
          href="/cong-cu"
          className="inline-flex items-center gap-1 bg-[#2F6FED] hover:bg-[#1D5BD8] text-white text-xs font-semibold px-3.5 py-2 rounded-xl"
        >
          <span>Khám phá</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Lead Magnet Modal */}
      <LeadMagnetModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
