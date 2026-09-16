'use client';

import React from 'react';
import { X, MapPin } from 'lucide-react';
import { GalleryItem } from '@/data/clinic-data';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export function LightboxModal({ item, onClose }: LightboxModalProps) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#00162d]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full flex flex-col items-center max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-[#89f5e7] flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
          <span>Fechar</span>
        </button>

        <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-[#0f2b48] border border-white/10 flex flex-col">
          <div className="relative aspect-16/10 sm:aspect-16/9 w-full bg-black/40 overflow-hidden flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover sm:object-contain max-h-[68vh]"
            />
          </div>

          <div className="p-4 sm:p-5 bg-[#00162d] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-full bg-[#0f2b48] text-[#89f5e7] text-[11px] font-semibold uppercase">
                  {item.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#89f5e7]" />
                  São Martinho, Funchal
                </span>
              </div>
              <h4 className="font-['Manrope'] text-lg font-bold text-white">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                {item.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#0f2b48] hover:bg-[#006a61] text-xs font-semibold text-white transition-colors cursor-pointer shrink-0"
            >
              Voltar à Galeria
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
