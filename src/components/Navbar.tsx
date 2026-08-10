'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Cpu, ArrowRight } from 'lucide-react';
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

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center text-teal-400 group-hover:border-accent-500/50 transition-colors">
              <Cpu className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-slate-100 text-base tracking-tight group-hover:text-teal-300 transition-colors">
                VẬN HÀNH MỚI
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest -mt-1 uppercase">
                SYSTEM + AI OPS
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? 'text-teal-300 bg-slate-900 border border-slate-800'
                      : 'text-slate-300 hover:text-slate-100 hover:bg-slate-900/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-200 text-xs font-semibold px-4 py-2 rounded-lg transition-all cursor-pointer"
            >
              <span>Nhận tài liệu AI</span>
              <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                    active
                      ? 'text-teal-300 bg-slate-900 border border-slate-800'
                      : 'text-slate-300 hover:bg-slate-900/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setModalOpen(true);
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-accent-600 text-slate-950 font-semibold px-4 py-2.5 rounded-lg text-sm transition-all"
              >
                <span>Nhận bộ AI Prompt miễn phí</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Lead Magnet Modal Trigger */}
      <LeadMagnetModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
