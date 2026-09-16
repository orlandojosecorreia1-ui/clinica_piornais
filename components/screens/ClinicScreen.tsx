'use client';

import React from 'react';
import { Sparkles, Scan, ShieldCheck, HeartPulse } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '@/data/clinic-data';

interface ClinicScreenProps {
  onOpenBooking: () => void;
  onOpenLightbox: (item: GalleryItem) => void;
}

export function ClinicScreen({ onOpenBooking, onOpenLightbox }: ClinicScreenProps) {
  return (
    <div className="w-full bg-[#f8f9ff] py-10 lg:py-16 space-y-16">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0f2b48] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#006a61]/30 blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00162d] text-[#89f5e7] text-xs font-semibold uppercase tracking-wider">
              A Nossa Clínica · Funchal
            </span>
            <h1 className="font-['Manrope'] text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Excelência clínica, rigor ético e serenidade atlântica.
            </h1>
            <p className="text-sm sm:text-base text-[#afc8ed] leading-relaxed">
              Criámos um espaço de medicina dentária diferenciador em São Martinho, unindo profissionais experientes, biossegurança de nível hospitalar e uma atmosfera desenhada para dissipar qualquer ansiedade.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full bg-[#006a61] hover:bg-[#86f2e4] hover:text-[#006f66] text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
              >
                Marcar Consulta de Avaliação
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy & Approach */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold text-[#006a61] uppercase tracking-wider">
              Filosofia de Atendimento
            </span>
            <h2 className="font-['Manrope'] text-2xl sm:text-4xl font-bold text-[#00162d] leading-tight">
              Acreditamos numa medicina dentária humanizada, preventiva e duradoura.
            </h2>
            <p className="text-sm text-[#43474d] leading-relaxed">
              Desde a fundação da Clínica Dentária dos Piornais, assumimos o compromisso de nunca tratar apenas &quot;dentes&quot;, mas sim pessoas com histórias, necessidades e expectativas únicas.
            </p>
            <p className="text-sm text-[#43474d] leading-relaxed">
              Cada plano de tratamento é explicado em pormenor, com apoio de imagens intraorais digitais, para que o paciente participe ativamente nas decisões sobre a sua saúde oral e compreenda cada fase clínica com total transparência orçamental.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="p-4 rounded-xl bg-white border border-[#e5eeff] shadow-sm space-y-1">
                <span className="font-bold text-xs text-[#00162d] block">Transparência Total</span>
                <p className="text-[11px] text-[#74777e]">
                  Orçamentos sem surpresas, com indicação precisa dos atos clínicos necessários.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#e5eeff] shadow-sm space-y-1">
                <span className="font-bold text-xs text-[#00162d] block">Abordagem Conservadora</span>
                <p className="text-[11px] text-[#74777e]">
                  Preservamos a estrutura dentária biológica sempre que clinicamente viável.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#e5eeff] shadow-sm space-y-1">
                <span className="font-bold text-xs text-[#00162d] block">Sem Dor nem Pressa</span>
                <p className="text-[11px] text-[#74777e]">
                  Protocolos anestésicos modernos e tempo clínico reservado com generosidade.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#e5eeff] shadow-sm space-y-1">
                <span className="font-bold text-xs text-[#00162d] block">Rastreabilidade ERS</span>
                <p className="text-[11px] text-[#74777e]">
                  Conformidade com os padrões da Entidade Reguladora da Saúde e OMD.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-white border border-[#dce9ff] aspect-4/3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXPpVMeaF4XGYg8aP5OobmJ0TwS_bwanOweyYzHxfddeKkeLUhkN1SLgsF5oGy8kPdsm9CoNQOaUXxzht-1CFUl086eWZuY8GtKuZFBn3pzYf0foH9ibZ8wbHHDD0gZ8s05rRPKpdWtRhzb6u5GqXRzQRt4R4yOvAn0qw9SddrhqtZiE3YXIFfnZG5uQH-5z4nFFsE-5nhzAhphUctF5VNNDBtrLMTFMf2zpGa2XjZHUr5K303nyCC"
                alt="Receção da clínica com arquitetura de madeira clara"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-3 bg-white p-4 rounded-xl shadow-lg border border-[#e5eeff] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#86f2e4]/30 text-[#006a61] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#00162d] block">Design Biofílico</span>
                <span className="text-[11px] text-[#74777e]">Luz natural e tranquilidade comprovada</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Equipment & Standards Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#eff4ff] border border-[#dce9ff] rounded-3xl p-8 lg:p-12 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-[#006a61] uppercase tracking-wider">
              Tecnologia & Biossegurança
            </span>
            <h2 className="font-['Manrope'] text-2xl sm:text-3xl font-bold text-[#00162d]">
              Instalações preparadas para os mais altos padrões clínicos
            </h2>
            <p className="text-xs sm:text-sm text-[#43474d]">
              Investimos continuadamente em tecnologia de diagnóstico e normas rigorosas de desinfeção cirúrgica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5eeff] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0f2b48] text-white flex items-center justify-center">
                <Scan className="w-6 h-6 text-[#89f5e7]" />
              </div>
              <h3 className="font-['Manrope'] font-bold text-base text-[#00162d]">
                Scanner Intraoral 3D
              </h3>
              <p className="text-xs text-[#43474d] leading-relaxed">
                Substituição das moldagens tradicionais com pastas por captação ótica digital indolor e ultra-precisa em segundos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5eeff] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#006a61] text-white flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#89f5e7]" />
              </div>
              <h3 className="font-['Manrope'] font-bold text-base text-[#00162d]">
                Esterilização Hospitalar Classe B
              </h3>
              <p className="text-xs text-[#43474d] leading-relaxed">
                Central equipada com autoclaves de vácuo fracionado e selagem individual de instrumentos com controlo biológico periódico.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5eeff] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0f2b48] text-white flex items-center justify-center">
                <HeartPulse className="w-6 h-6 text-[#89f5e7]" />
              </div>
              <h3 className="font-['Manrope'] font-bold text-base text-[#00162d]">
                Cadeiras Ergonómicas Ultra-Comfort
              </h3>
              <p className="text-xs text-[#43474d] leading-relaxed">
                Equipamento concebido com estofos anatómicos com memória de forma e iluminação LED cirúrgica sem aquecimento.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Photos preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-[#006a61] uppercase tracking-wider">
              Tour Visual
            </span>
            <h2 className="font-['Manrope'] text-xl sm:text-2xl font-bold text-[#00162d]">
              Os nossos gabinetes clínicos
            </h2>
          </div>
          <span className="text-xs text-[#74777e] hidden sm:block">
            Clique numa fotografia para ampliar
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_ITEMS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative rounded-2xl overflow-hidden shadow-sm aspect-4/3 bg-slate-100 cursor-pointer border border-[#dce9ff]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00162d]/80 via-transparent to-transparent flex items-end p-4">
                <div>
                  <span className="text-[10px] font-bold text-[#89f5e7] uppercase">
                    {item.category}
                  </span>
                  <h4 className="font-['Manrope'] text-sm font-bold text-white">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
