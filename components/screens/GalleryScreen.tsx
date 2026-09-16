'use client';

import React, { useState } from 'react';
import { ZoomIn, MapPin } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '@/data/clinic-data';

interface GalleryScreenProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export function GalleryScreen({ onOpenLightbox }: GalleryScreenProps) {
  const [filter, setFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Gabinetes', 'Acolhimento', 'Tecnologia', 'Esterilização'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (filter === 'Todos') return true;
    return item.category === filter;
  });

  return (
    <div className="w-full bg-[#f8f9ff] py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eff4ff] text-[#006a61] text-xs font-semibold uppercase tracking-wider border border-[#dce9ff]">
            Galeria Fotográfica
          </span>
          <h1 className="font-['Manrope'] text-3xl sm:text-5xl font-extrabold text-[#00162d]">
            Conheça as Nossas Instalações
          </h1>
          <p className="text-sm text-[#43474d] leading-relaxed">
            Fotografias reais dos nossos gabinetes cirúrgicos, receção, central de esterilização e tecnologia digital no Funchal, Ilha da Madeira.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isSelected = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0f2b48] text-white shadow-sm'
                    : 'bg-white text-[#43474d] hover:bg-[#eff4ff] border border-[#e5eeff]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#e5eeff] cursor-pointer group flex flex-col"
            >
              <div className="aspect-4/3 overflow-hidden bg-slate-100 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#00162d]/80 backdrop-blur-xs text-white text-[10px] font-semibold uppercase px-2.5 py-1 rounded-full">
                  {item.category}
                </div>
                <div className="absolute inset-0 bg-[#00162d]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#00162d] flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-1.5">
                <h3 className="font-['Manrope'] font-bold text-base text-[#00162d] group-hover:text-[#006a61] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#43474d] leading-relaxed">
                  {item.subtitle}
                </p>
                <div className="pt-2 flex items-center gap-1 text-[11px] text-[#74777e]">
                  <MapPin className="w-3.5 h-3.5 text-[#006a61]" />
                  <span>Estrada Monumental, Funchal</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-xs text-[#74777e] pt-4">
          Todas as fotografias correspondem fielmente às instalações reais da Clínica Dentária dos Piornais no Edifício Monumental Palace I.
        </div>
      </div>
    </div>
  );
}
