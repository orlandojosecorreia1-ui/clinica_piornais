'use client';

import React from 'react';
import { ShieldCheck, Calendar } from 'lucide-react';
import { DOCTORS } from '@/data/clinic-data';

interface TeamScreenProps {
  onOpenBooking: () => void;
}

export function TeamScreen({ onOpenBooking }: TeamScreenProps) {
  return (
    <div className="w-full bg-[#f8f9ff] py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eff4ff] text-[#006a61] text-xs font-semibold uppercase tracking-wider border border-[#dce9ff]">
            Excelência Médica
          </span>
          <h1 className="font-['Manrope'] text-3xl sm:text-5xl font-extrabold text-[#00162d]">
            O Nosso Corpo Clínico
          </h1>
          <p className="text-sm text-[#43474d] leading-relaxed">
            Uma equipa multidisciplinar orientada pela ética médica, formação pós-graduada contínua e empatia no relacionamento com cada família no Funchal.
          </p>
        </div>

        {/* Doctor Detailed Cards */}
        <div className="space-y-8">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#e5eeff] hover:border-[#86f2e4] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Image & Badges */}
              <div className="lg:col-span-4 relative">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-4/3 sm:aspect-square bg-[#eff4ff] border border-[#dce9ff]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-3 left-3 bg-[#00162d]/85 text-white text-[10px] font-mono px-2.5 py-1 rounded-full backdrop-blur-xs">
                  {doc.omdNumber}
                </div>
              </div>

              {/* Bio & Details */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold text-[#006a61] uppercase tracking-wider block">
                      {doc.title}
                    </span>
                    <h2 className="font-['Manrope'] text-2xl sm:text-3xl font-bold text-[#00162d]">
                      {doc.name}
                    </h2>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eff4ff] text-[#00162d] text-xs font-medium border border-[#dce9ff]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#006a61]" />
                    <span>Inscrição OMD Verificada</span>
                  </div>
                </div>

                <p className="text-sm text-[#43474d] leading-relaxed">
                  {doc.bio}
                </p>

                {/* Specialties tags */}
                <div>
                  <span className="text-xs font-semibold text-[#00162d] uppercase tracking-wider block mb-2">
                    Especializações Principais:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {doc.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-[#eff4ff] text-[#0f2b48] text-xs font-medium border border-[#dce9ff]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quote block */}
                <div className="p-4 rounded-xl bg-[#f8f9ff] border-l-4 border-[#006a61] text-xs text-[#00162d] italic">
                  &quot;{doc.quote}&quot;
                </div>

                {/* Booking trigger & Schedule */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-[#74777e]">
                    Horário habitual: <strong className="text-[#00162d]">{doc.schedule}</strong>
                  </span>

                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="px-5 py-2.5 rounded-xl bg-[#0f2b48] hover:bg-[#006a61] text-white text-xs font-semibold transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#89f5e7]" />
                    <span>Agendar com {doc.name.split(' ')[0]} {doc.name.split(' ')[1]}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
