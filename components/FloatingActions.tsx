'use client';

import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '@/data/clinic-data';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export function WhatsAppIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.04 3.67C14.24 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.67 20.16 9.32 19.8 8.13 19.09L7.85 18.92L4.73 19.74L5.56 16.7L5.37 16.4C4.59 15.15 4.18 13.55 4.18 11.91C4.18 7.37 7.88 3.67 12.04 3.67ZM8.82 7.15C8.65 7.15 8.37 7.21 8.13 7.47C7.89 7.73 7.21 8.37 7.21 9.68C7.21 10.99 8.16 12.25 8.29 12.43C8.42 12.61 10.15 15.27 12.8 16.41C13.43 16.68 13.92 16.84 14.31 16.96C14.94 17.16 15.52 17.13 15.98 17.07C16.49 16.99 17.55 16.42 17.77 15.8C17.99 15.18 17.99 14.65 17.92 14.54C17.85 14.43 17.68 14.37 17.42 14.24C17.16 14.11 15.89 13.48 15.65 13.39C15.41 13.3 15.24 13.26 15.06 13.52C14.88 13.78 14.38 14.37 14.23 14.54C14.08 14.71 13.93 14.73 13.67 14.6C13.41 14.47 12.57 14.2 11.58 13.31C10.8 12.62 10.28 11.76 10.13 11.5C9.98 11.24 10.11 11.1 10.24 10.97C10.36 10.85 10.5 10.66 10.63 10.51C10.76 10.36 10.81 10.25 10.9 10.08C10.99 9.91 10.94 9.75 10.88 9.62C10.81 9.49 10.28 8.19 10.06 7.66C9.85 7.15 9.63 7.22 9.47 7.21C9.32 7.2 9.15 7.15 8.98 7.15H8.82Z" />
    </svg>
  );
}

export function FloatingActions({ onOpenBooking }: FloatingActionsProps) {
  return (
    <>
      {/* Botão Flutuante Circular do WhatsApp */}
      <aside className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50">
        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar no WhatsApp com a Clínica Dentária dos Piornais"
          className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_10px_30px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        >
          {/* Anel subtil pulsante */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

          {/* Ícone oficial do WhatsApp */}
          <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white transition-transform group-hover:scale-105" />

          {/* Tooltip no desktop */}
          <span className="pointer-events-none absolute right-full mr-3 hidden sm:group-hover:flex items-center whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#00162d] text-white text-xs font-medium shadow-lg opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
            Fale connosco no WhatsApp
            <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#00162d]" />
          </span>
        </a>
      </aside>

      {/* Mobile Bottom Quick-Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#e5eeff] p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] flex items-center gap-2 shadow-[0_-4px_20px_rgba(15,43,72,0.08)]">
        <a
          href="tel:+351927032235"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 min-h-[44px] rounded-xl bg-[#eff4ff] text-[#00162d] font-semibold text-xs transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#006a61]" />
          <span>Ligar</span>
        </a>

        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 min-h-[44px] rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs transition-colors shadow-sm"
        >
          <WhatsAppIcon className="w-4 h-4 text-white" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 min-h-[44px] rounded-xl bg-[#0f2b48] text-white font-semibold text-xs transition-colors shadow-sm cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-[#89f5e7]" />
          <span>Marcar</span>
        </button>
      </div>
    </>
  );
}
