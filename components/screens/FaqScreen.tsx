'use client';

import React, { useState } from 'react';
import { Search, ChevronDown, Phone, MessageSquare, Calendar } from 'lucide-react';
import { FAQS, CLINIC_INFO } from '@/data/clinic-data';

interface FaqScreenProps {
  onOpenBooking: () => void;
}

export function FaqScreen({ onOpenBooking }: FaqScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [search, setSearch] = useState<string>('');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const categories = ['Todas', 'Marcações', 'Localização & Acessos', 'Tratamentos', 'Pagamentos & Acordos'];

  const filteredFaqs = FAQS.filter((f) => {
    const matchesCategory =
      selectedCategory === 'Todas' || f.category === selectedCategory;
    const matchesSearch =
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#f8f9ff] py-10 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eff4ff] text-[#006a61] text-xs font-semibold uppercase tracking-wider border border-[#dce9ff]">
            Apoio ao Paciente
          </span>
          <h1 className="font-['Manrope'] text-3xl sm:text-5xl font-extrabold text-[#00162d]">
            Perguntas Frequentes
          </h1>
          <p className="text-sm text-[#43474d] max-w-xl mx-auto">
            Reunimos as respostas às dúvidas mais frequentes sobre consultas, primeira avaliação, acessibilidade e modalidades de comparticipação.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Escreva a sua dúvida (ex: marcação, seguro, estacionamento)..."
            className="w-full h-12 pl-11 pr-4 rounded-2xl bg-white border border-[#c4c6ce] text-sm text-[#00162d] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#006a61]"
          />
          <Search className="w-5 h-5 text-[#74777e] absolute left-3.5 top-3.5" />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
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

        {/* FAQ Accordions */}
        <div className="space-y-3">
          {filteredFaqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#e5eeff] shadow-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="font-['Manrope'] font-bold text-sm sm:text-base text-[#00162d]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#006a61] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#43474d] leading-relaxed border-t border-[#f1f5f9] animate-in fade-in-50 duration-200">
                    <p>{item.answer}</p>
                    <div className="mt-3 pt-2 border-t border-[#f8f9ff] flex items-center justify-between text-xs text-[#74777e]">
                      <span className="bg-[#eff4ff] text-[#006a61] px-2 py-0.5 rounded text-[10px] font-semibold uppercase">
                        {item.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions block */}
        <div className="bg-[#0f2b48] text-white rounded-3xl p-6 sm:p-8 text-center space-y-4">
          <h3 className="font-['Manrope'] text-xl font-bold">
            Não encontrou a resposta que procurava?
          </h3>
          <p className="text-xs sm:text-sm text-[#afc8ed] max-w-md mx-auto">
            A nossa equipa da receção está inteiramente disponível para responder a qualquer questão clínica ou administrativa.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#86f2e4] hover:bg-[#86f2e4]/90 text-[#006f66] text-xs font-bold transition-colors cursor-pointer shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#006a61]" />
              <span>Marcar Consulta Online</span>
            </button>
            <a
              href="tel:+351927032235"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#00162d] text-xs font-semibold hover:bg-[#eff4ff] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#006a61]" />
              <span>Ligar: +351 927 032 235</span>
            </a>
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#006a61] hover:bg-[#86f2e4] hover:text-[#006f66] text-white text-xs font-semibold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Escrever no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
