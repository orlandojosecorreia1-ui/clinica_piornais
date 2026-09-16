'use client';

import React from 'react';
import { X, Calendar, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { Treatment } from '@/data/clinic-data';

interface TreatmentModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBookTreatment: (treatmentId: string) => void;
}

export function TreatmentModal({
  treatment,
  onClose,
  onBookTreatment,
}: TreatmentModalProps) {
  if (!treatment) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#00162d]/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-[#dce9ff] my-auto animate-in fade-in-50 zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with teal badge */}
        <div className="bg-[#0f2b48] text-white p-5 sm:p-6 relative shrink-0">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00162d] text-[#89f5e7] text-xs font-semibold uppercase tracking-wider">
              {treatment.category}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <h3 className="font-['Manrope'] text-2xl font-bold mt-2 text-white">
            {treatment.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-[#afc8ed]">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#89f5e7]" />
              Duração: {treatment.duration}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#89f5e7]" />
              {treatment.recommendedFrequency}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-sm text-[#0b1c30]">
          <div>
            <h4 className="font-['Manrope'] font-bold text-[#00162d] text-base mb-1.5">
              Sobre o Procedimento
            </h4>
            <p className="text-[#43474d] leading-relaxed">{treatment.fullDesc}</p>
          </div>

          <div>
            <h4 className="font-['Manrope'] font-bold text-[#00162d] text-base mb-2">
              Principais Benefícios
            </h4>
            <div className="space-y-2">
              {treatment.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#006a61] shrink-0 mt-0.5" />
                  <span className="text-[#43474d] text-xs sm:text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-['Manrope'] font-bold text-[#00162d] text-base mb-2">
              Quando é Recomendado
            </h4>
            <div className="space-y-2">
              {treatment.indications.map((ind, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-[#7a93b5] shrink-0 mt-0.5" />
                  <span className="text-[#43474d] text-xs sm:text-sm">{ind}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-3 border-t border-[#e5eeff] flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookTreatment(treatment.id);
              }}
              className="flex-1 py-3 px-4 rounded-xl bg-[#0f2b48] hover:bg-[#006a61] text-white font-semibold text-sm transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#89f5e7]" />
              <span>Agendar {treatment.title}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="py-3 px-4 rounded-xl bg-[#f8f9ff] hover:bg-[#eff4ff] text-[#00162d] text-sm font-medium transition-colors border border-[#dce9ff] cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
