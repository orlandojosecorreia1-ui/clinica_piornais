'use client';

import React, { useState } from 'react';
import { Search, Calendar, Clock, CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react';
import { TREATMENTS, Treatment } from '@/data/clinic-data';
import { TreatmentIcon } from '@/components/TreatmentIcon';

interface TreatmentsScreenProps {
  onOpenBooking: (treatmentId: string) => void;
  onOpenTreatmentModal: (treatment: Treatment) => void;
}

export function TreatmentsScreen({
  onOpenBooking,
  onOpenTreatmentModal,
}: TreatmentsScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['Todos', 'Geral', 'Prevenção', 'Ortodontia', 'Cirurgia', 'Estética'];

  const filteredTreatments = TREATMENTS.filter((t) => {
    const matchesCategory =
      selectedCategory === 'Todos' || t.category === selectedCategory;
    const matchesSearch =
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.indications.some((ind) => ind.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#f8f9ff] py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eff4ff] text-[#006a61] text-xs font-semibold uppercase tracking-wider border border-[#dce9ff]">
            Áreas de Intervenção
          </span>
          <h1 className="font-['Manrope'] text-3xl sm:text-5xl font-extrabold text-[#00162d]">
            Tratamentos & Especialidades
          </h1>
          <p className="text-sm text-[#43474d] leading-relaxed">
            Soluções completas e interdisciplinares de medicina dentária para todas as idades, com recurso a tecnologias biomiméticas e protocolos minimamente invasivos.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#e5eeff] flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
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
                      : 'bg-[#eff4ff] text-[#43474d] hover:text-[#00162d] hover:bg-[#e5eeff]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Pesquisar sintoma ou tratamento..."
              className="w-full h-10 pl-9 pr-3 rounded-xl border border-[#c4c6ce] text-xs bg-[#f8f9ff] text-[#00162d] focus:outline-none focus:ring-2 focus:ring-[#006a61]"
            />
            <Search className="w-4 h-4 text-[#74777e] absolute left-3 top-3" />
          </div>
        </div>

        {/* Treatments List */}
        {filteredTreatments.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#e5eeff] p-8 space-y-3">
            <AlertCircle className="w-10 h-10 text-[#74777e] mx-auto" />
            <h3 className="font-['Manrope'] font-bold text-base text-[#00162d]">
              Nenhum tratamento encontrado
            </h3>
            <p className="text-xs text-[#43474d]">
              Tente pesquisar por outro termo ou selecione a categoria &quot;Todos&quot;.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredTreatments.map((treatment) => (
              <div
                key={treatment.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5eeff] hover:border-[#86f2e4] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#86f2e4]/30 text-[#006a61] flex items-center justify-center shrink-0">
                        <TreatmentIcon
                          id={treatment.id}
                          iconName={treatment.iconName}
                          category={treatment.category}
                          className="w-6 h-6 text-[#006a61]"
                        />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-[#006a61] uppercase tracking-wider block">
                          {treatment.category}
                        </span>
                        <h3 className="font-['Manrope'] font-bold text-lg text-[#00162d]">
                          {treatment.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#43474d] leading-relaxed">
                    {treatment.fullDesc}
                  </p>

                  <div className="bg-[#f8f9ff] p-3 rounded-xl border border-[#e5eeff] space-y-1.5 text-xs">
                    <span className="font-bold text-[#00162d] block text-[11px] uppercase tracking-wider">
                      Indicações Clínicas:
                    </span>
                    <ul className="space-y-1 text-[#43474d]">
                      {treatment.indications.map((ind, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#006a61] shrink-0 mt-0.5" />
                          <span>{ind}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-[#74777e]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#006a61]" />
                      {treatment.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#006a61]" />
                      {treatment.recommendedFrequency}
                    </span>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-[#f1f5f9] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenTreatmentModal(treatment)}
                    className="text-xs font-semibold text-[#006a61] hover:text-[#00162d] inline-flex items-center gap-1 cursor-pointer py-1"
                  >
                    <span>Ver detalhes completos</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(treatment.id)}
                    className="w-full sm:w-auto justify-center px-5 py-2.5 rounded-xl bg-[#0f2b48] hover:bg-[#006a61] text-white text-xs font-semibold transition-colors shadow-sm flex items-center gap-1.5 cursor-pointer min-h-[40px]"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#89f5e7]" />
                    <span>Marcar Consulta</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
