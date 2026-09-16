'use client';

import React, { useState } from 'react';
import { Logo } from './Logo';
import { Phone, Calendar, Clock, Menu, X, BookmarkCheck, MapPin } from 'lucide-react';

export type ScreenTab =
  | 'inicio'
  | 'a-clinica'
  | 'tratamentos'
  | 'equipa'
  | 'galeria'
  | 'perguntas-frequentes'
  | 'contactos';

interface NavbarProps {
  activeScreen: ScreenTab;
  onSelectScreen: (screen: ScreenTab) => void;
  onOpenBooking: (preselectedTreatment?: string) => void;
  onOpenMyAppointments: () => void;
  appointmentsCount: number;
}

export function Navbar({
  activeScreen,
  onSelectScreen,
  onOpenBooking,
  onOpenMyAppointments,
  appointmentsCount,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ScreenTab; label: string }[] = [
    { id: 'inicio', label: 'Início' },
    { id: 'a-clinica', label: 'A Clínica' },
    { id: 'tratamentos', label: 'Tratamentos' },
    { id: 'equipa', label: 'Equipa' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'perguntas-frequentes', label: 'FAQ' },
    { id: 'contactos', label: 'Contactos' },
  ];

  const handleNavClick = (id: ScreenTab) => {
    onSelectScreen(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#e5eeff] shadow-[0_1px_8px_rgba(15,43,72,0.06)] transition-all">
      {/* Top micro-bar for quick contact info */}
      <div className="hidden md:block bg-[#00162d] text-white/90 text-xs py-1.5 px-4 border-b border-[#0f2b48]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#89f5e7] shrink-0" />
              Estrada Monumental, Edif. Monumental Palace I, Funchal
            </span>
          </div>
          <div className="flex items-center gap-4">
            {appointmentsCount > 0 && (
              <button
                type="button"
                onClick={onOpenMyAppointments}
                className="flex items-center gap-1.5 text-xs bg-[#0f2b48] hover:bg-[#006a61] text-[#89f5e7] hover:text-white px-2.5 py-0.5 rounded-full transition-colors font-medium cursor-pointer"
              >
                <BookmarkCheck className="w-3.5 h-3.5" />
                <span>Os Meus Agendamentos ({appointmentsCount})</span>
              </button>
            )}
            <span className="flex items-center gap-1 text-slate-300 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#89f5e7]" />
              Seg.–Sex. 09h–19h | Sáb. 09h–13h
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo Lockup */}
        <button
          type="button"
          onClick={() => handleNavClick('inicio')}
          className="text-left cursor-pointer group focus:outline-none"
          title="Ir para o Início"
        >
          <Logo size="md" />
        </button>

        {/* Desktop Screen Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-lg font-['Inter'] text-[14px] font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0f2b48] text-white font-semibold shadow-sm'
                    : 'text-[#43474d] hover:text-[#00162d] hover:bg-[#eff4ff]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons (Right) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* My Appointments button (Desktop) */}
          {appointmentsCount > 0 && (
            <button
              type="button"
              onClick={onOpenMyAppointments}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#eff4ff] hover:bg-[#e5eeff] text-[#00162d] text-xs font-semibold transition-colors cursor-pointer border border-[#c4c6ce]/40"
            >
              <BookmarkCheck className="w-4 h-4 text-[#006a61]" />
              <span>Agendamentos ({appointmentsCount})</span>
            </button>
          )}

          {/* Direct Phone Call Button */}
          <a
            href="tel:+351927032235"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#eff4ff] hover:bg-[#e5eeff] text-[#00162d] text-xs font-semibold tracking-tight transition-colors border border-[#dce9ff]"
          >
            <Phone className="w-3.5 h-3.5 text-[#006a61]" />
            <span>+351 927 032 235</span>
          </a>

          {/* Primary CTA: Marcar Consulta */}
          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 rounded-full bg-[#0f2b48] hover:bg-[#006a61] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-[0_4px_12px_rgba(15,43,72,0.15)] hover:shadow-[0_6px_18px_rgba(0,106,97,0.25)] cursor-pointer transform hover:-translate-y-0.5 whitespace-nowrap min-h-[42px]"
          >
            <Calendar className="w-4 h-4 text-[#89f5e7] shrink-0" />
            <span className="hidden xs:inline">Marcar consulta</span>
            <span className="xs:hidden">Marcar</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-11 h-11 flex items-center justify-center rounded-xl text-[#00162d] hover:bg-[#eff4ff] focus:outline-none cursor-pointer border border-[#dce9ff]"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#e5eeff] px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-1.5 pt-2">
            {navItems.map((item) => {
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`p-2.5 rounded-lg text-left text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#0f2b48] text-white font-semibold'
                      : 'text-[#0b1c30] hover:bg-[#eff4ff]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            {appointmentsCount > 0 && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMyAppointments();
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-[#eff4ff] text-[#00162d] text-sm font-medium flex items-center justify-center gap-2"
              >
                <BookmarkCheck className="w-4 h-4 text-[#006a61]" />
                <span>Ver os meus agendamentos ({appointmentsCount})</span>
              </button>
            )}

            <a
              href="tel:+351927032235"
              className="w-full py-2.5 px-4 rounded-lg bg-[#f8f9ff] border border-slate-200 text-[#00162d] text-sm font-medium flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#006a61]" />
              <span>Ligar: +351 927 032 235</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-4 rounded-xl bg-[#0f2b48] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md"
            >
              <Calendar className="w-4 h-4 text-[#89f5e7]" />
              <span>Solicitar Agendamento</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
