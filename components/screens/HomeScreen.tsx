'use client';

import React, { useState } from 'react';
import {
  Calendar,
  Phone,
  Mail,
  Car,
  Bus,
  Accessibility,
  Map,
  Smile,
  ArrowRight,
  ShieldCheck,
  Star,
  Clock,
  MapPin,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  UserCheck,
  Building2,
  Sparkles,
} from 'lucide-react';
import { TreatmentIcon } from '@/components/TreatmentIcon';
import { AppointmentRequestForm } from '@/components/AppointmentRequestForm';
import {
  CLINIC_INFO,
  TREATMENTS,
  DOCTORS,
  GALLERY_ITEMS,
  REVIEWS,
  FAQS,
  Treatment,
  GalleryItem,
} from '@/data/clinic-data';
import { ScreenTab } from '../Navbar';

interface HomeScreenProps {
  onOpenBooking: (preselectedTreatment?: string) => void;
  onOpenTreatmentModal: (treatment: Treatment) => void;
  onOpenLightbox: (item: GalleryItem) => void;
  onNavigateToScreen: (screen: ScreenTab) => void;
}

export function HomeScreen({
  onOpenBooking,
  onOpenTreatmentModal,
  onOpenLightbox,
  onNavigateToScreen,
}: HomeScreenProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-[#f8f9ff] pt-8 pb-16 lg:py-20">
        {/* Ambient atmospheric glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#86f2e4]/20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-[#dce9ff]/40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Hero Text */}
            <div className="lg:col-span-6 space-y-5">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm border border-[#e5eeff] text-[#006a61]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006a61] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006a61]"></span>
                </span>
                <span className="font-['Inter'] text-xs font-semibold tracking-wider uppercase">
                  CLÍNICA DENTÁRIA • FUNCHAL
                </span>
              </div>

              <h1 className="font-['Manrope'] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#00162d] tracking-tight leading-[1.15]">
                Cuide do seu sorriso com confiança.
              </h1>

              <p className="font-['Inter'] text-base sm:text-lg text-[#43474d] max-w-xl leading-relaxed">
                Cuidados de medicina dentária pensados para a sua saúde, conforto e bem-estar. No coração de São Martinho, com dedicação médica personalizada e tecnologia de ponta.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0f2b48] hover:bg-[#006a61] text-white font-semibold text-sm transition-all duration-300 shadow-[0_4px_14px_rgba(15,43,72,0.18)] hover:shadow-[0_6px_20px_rgba(0,106,97,0.25)] cursor-pointer transform hover:-translate-y-0.5"
                >
                  <span>Marcar consulta</span>
                  <Calendar className="w-4 h-4 text-[#89f5e7]" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigateToScreen('a-clinica')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#00162d] font-semibold text-sm hover:bg-[#eff4ff] transition-all duration-300 shadow-sm border border-[#e5eeff] cursor-pointer"
                >
                  <span>Conhecer a clínica</span>
                  <ArrowRight className="w-4 h-4 text-[#006a61]" />
                </button>
              </div>

              {/* Subtle Trust Metrics */}
              <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-[#e5eeff]/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#006a61]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-['Inter'] font-semibold text-xs text-[#00162d] leading-tight">
                      OMD Inscrito
                    </span>
                    <span className="text-[11px] text-[#74777e]">
                      Rigor clínico certificado
                    </span>
                  </div>
                </div>

                <div className="h-8 w-px bg-slate-200 hidden sm:block" />

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#eff4ff] flex items-center justify-center text-amber-500">
                    <Star className="w-5 h-5 fill-amber-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-['Inter'] font-semibold text-xs text-[#00162d] leading-tight">
                      4.9 / 5.0 Google
                    </span>
                    <span className="text-[11px] text-[#74777e]">
                      Mais de 140 avaliações
                    </span>
                  </div>
                </div>

                <div className="h-8 w-px bg-slate-200 hidden sm:block" />

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#006a61]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-['Inter'] font-semibold text-xs text-[#00162d] leading-tight">
                      Funchal
                    </span>
                    <span className="text-[11px] text-[#74777e]">
                      Estrada Monumental
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Visual Media */}
            <div className="lg:col-span-6 relative mt-4 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#eff4ff] aspect-[4/3] sm:aspect-[16/11] border border-[#dce9ff]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4Qlkt8OIxcKVBnti7ZX33Rt1Tl-3BWXID6U3ppCTWcSSNw-4MHYGScHG9WSEKVlhusCk0Mvk-D908PNx4CaA5wHrrJwgS-7H66O52JU0EiH7z1d3HOyz7Mnp7sJQheReDIzwZ75CvEXSVkXvo9k-_29jq7VNRRCUjxAR24G8y_IPgW_dHp0wQKUOg734Rr97PHe4TJBbZeIAYtNgiUqMbsJdt17G86Qh-dk5lUeoic-aeKMwsvtXR"
                  alt="Gabinete de medicina dentária com vista panorâmica oceânica no Funchal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00162d]/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Glass Card 1: Location */}
              <div className="absolute -bottom-5 -left-3 sm:left-4 max-w-xs bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-lg border border-[#e5eeff] flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-full bg-[#86f2e4]/30 flex items-center justify-center shrink-0 text-[#006a61]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-bold text-[#006a61] uppercase tracking-wider">
                    Localização
                  </span>
                  <span className="font-['Manrope'] font-bold text-xs sm:text-sm text-[#00162d] truncate">
                    São Martinho, Funchal
                  </span>
                  <span className="text-[11px] text-[#43474d] truncate">
                    Edif. Monumental Palace I
                  </span>
                </div>
              </div>

              {/* Floating Glass Card 2: Hours */}
              <div className="absolute -top-4 -right-3 sm:right-4 max-w-xs bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-lg border border-[#e5eeff] hidden sm:flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-full bg-[#d2e4ff] flex items-center justify-center shrink-0 text-[#001c37]">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#0f2b48] uppercase tracking-wider">
                    Atendimento
                  </span>
                  <span className="font-['Manrope'] font-bold text-xs sm:text-sm text-[#00162d]">
                    Seg.–Sex. 09h–19h
                  </span>
                  <span className="text-[11px] text-[#43474d]">
                    Sábados 09h–13h
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="w-full bg-[#eff4ff] py-10 border-y border-[#dce9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#e5eeff] hover:shadow-md transition-shadow flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-[#86f2e4]/30 text-[#006a61] flex items-center justify-center shrink-0">
                <UserCheck className="w-5 h-5 text-[#006a61]" />
              </div>
              <div>
                <h3 className="font-['Inter'] font-semibold text-sm text-[#00162d]">
                  Atendimento personalizado
                </h3>
                <p className="text-xs text-[#43474d] mt-1 leading-relaxed">
                  Cuidados à medida com plano médico adaptado a cada paciente.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#e5eeff] hover:shadow-md transition-shadow flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-[#86f2e4]/30 text-[#006a61] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#006a61]" />
              </div>
              <div>
                <h3 className="font-['Inter'] font-semibold text-sm text-[#00162d]">
                  Medicina dentária
                </h3>
                <p className="text-xs text-[#43474d] mt-1 leading-relaxed">
                  Rigor clínico contínuo e foco em prevenção integral e estética.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#e5eeff] hover:shadow-md transition-shadow flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-[#86f2e4]/30 text-[#006a61] flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 text-[#006a61]" />
              </div>
              <div>
                <h3 className="font-['Inter'] font-semibold text-sm text-[#00162d]">
                  Localização no Funchal
                </h3>
                <p className="text-xs text-[#43474d] mt-1 leading-relaxed">
                  Estrada Monumental, Edifício Palace I, fácil acesso e parque.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#e5eeff] hover:shadow-md transition-shadow flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-[#86f2e4]/30 text-[#006a61] flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-[#006a61]" />
              </div>
              <div>
                <h3 className="font-['Inter'] font-semibold text-sm text-[#00162d]">
                  Horário alargado
                </h3>
                <p className="text-xs text-[#43474d] mt-1 leading-relaxed">
                  Aberto de 2ª a Sábado para conciliar comodamente com a sua rotina.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. A CLÍNICA (Philosophy & Space Preview) */}
      <section className="w-full bg-[#f8f9ff] py-16 lg:py-20" id="a-clinica">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Media */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-4/3 bg-white border border-[#dce9ff]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXPpVMeaF4XGYg8aP5OobmJ0TwS_bwanOweyYzHxfddeKkeLUhkN1SLgsF5oGy8kPdsm9CoNQOaUXxzht-1CFUl086eWZuY8GtKuZFBn3pzYf0foH9ibZ8wbHHDD0gZ8s05rRPKpdWtRhzb6u5GqXRzQRt4R4yOvAn0qw9SddrhqtZiE3YXIFfnZG5uQH-5z4nFFsE-5nhzAhphUctF5VNNDBtrLMTFMf2zpGa2XjZHUr5K303nyCC"
                  alt="Receção acolhedora com madeiras claras na Clínica Dentária dos Piornais"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 right-4 bg-[#0f2b48] text-white px-4 py-2.5 rounded-xl shadow-md flex items-center gap-2 border border-white/10">
                <Sparkles className="w-4 h-4 text-[#89f5e7]" />
                <span className="text-xs font-semibold">Espaço moderno & acolhedor</span>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#006a61] uppercase tracking-widest">
                <span>A NOSSA FILOSOFIA</span>
              </div>

              <h2 className="font-['Manrope'] text-2xl sm:text-4xl font-bold text-[#00162d] leading-tight">
                Uma clínica onde o seu sorriso está em boas mãos.
              </h2>

              <p className="font-['Inter'] text-base text-[#43474d] leading-relaxed">
                A Clínica Dentária dos Piornais dedica-se à prestação de cuidados de medicina dentária, com foco na saúde oral e no acompanhamento personalizado de cada paciente.
              </p>

              <p className="text-sm text-[#43474d] leading-relaxed">
                O nosso objetivo é proporcionar uma experiência profissional, confortável e próxima, desde a primeira consulta. Acreditamos que a confiança mútua e o rigor são a base de um tratamento eficaz e duradouro.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-start gap-2 p-2.5 rounded-lg bg-[#eff4ff] border border-[#dce9ff]/60">
                  <CheckCircle2 className="w-4 h-4 text-[#006a61] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#00162d] font-medium">
                    Ambiente esterilizado & seguro
                  </span>
                </div>
                <div className="flex items-start gap-2 p-2.5 rounded-lg bg-[#eff4ff] border border-[#dce9ff]/60">
                  <CheckCircle2 className="w-4 h-4 text-[#006a61] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#00162d] font-medium">
                    Escuta ativa e sem pressa
                  </span>
                </div>
                <div className="flex items-start gap-2 p-2.5 rounded-lg bg-[#eff4ff] border border-[#dce9ff]/60">
                  <CheckCircle2 className="w-4 h-4 text-[#006a61] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#00162d] font-medium">
                    Planos de tratamento transparentes
                  </span>
                </div>
                <div className="flex items-start gap-2 p-2.5 rounded-lg bg-[#eff4ff] border border-[#dce9ff]/60">
                  <CheckCircle2 className="w-4 h-4 text-[#006a61] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#00162d] font-medium">
                    Acompanhamento contínuo pós-consulta
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-3">
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#006a61] text-white font-semibold text-xs sm:text-sm hover:bg-[#0f2b48] transition-colors shadow-sm cursor-pointer"
                >
                  Marcar consulta
                </button>
                <a
                  href="tel:+351927032235"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#00162d] hover:text-[#006a61] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#006a61]" />
                  <span>Falar com a receção</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRATAMENTOS (Specialties Grid) */}
      <section className="w-full bg-[#eff4ff] py-16 lg:py-20" id="tratamentos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold text-[#006a61] uppercase tracking-wider">
              Especialidades Clínicas
            </span>
            <h2 className="font-['Manrope'] text-2xl sm:text-4xl font-bold text-[#00162d]">
              Cuidados dentários para diferentes necessidades
            </h2>
            <p className="text-sm text-[#43474d]">
              Encontre o acompanhamento adequado para cuidar da sua saúde oral com métodos comprovados e tecnologia de ponta.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {TREATMENTS.map((treatment) => (
              <div
                key={treatment.id}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-[#dce9ff] flex flex-col justify-between group hover:border-[#86f2e4]"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#86f2e4]/30 text-[#006a61] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <TreatmentIcon
                      id={treatment.id}
                      iconName={treatment.iconName}
                      category={treatment.category}
                      className="w-6 h-6 text-[#006a61]"
                    />
                  </div>

                  <span className="inline-block text-[11px] font-semibold text-[#006a61] uppercase tracking-wider">
                    {treatment.category}
                  </span>

                  <h3 className="font-['Inter'] font-bold text-base text-[#00162d] group-hover:text-[#006a61] transition-colors">
                    {treatment.title}
                  </h3>

                  <p className="text-xs text-[#43474d] leading-relaxed line-clamp-3">
                    {treatment.shortDesc}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-[#f1f5f9] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onOpenTreatmentModal(treatment)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#006a61] hover:text-[#00162d] transition-colors cursor-pointer"
                  >
                    <span>Saber mais</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(treatment.id)}
                    className="p-1.5 rounded-lg bg-[#eff4ff] hover:bg-[#006a61] text-[#006a61] hover:text-white transition-colors cursor-pointer"
                    title={`Agendar ${treatment.title}`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => onNavigateToScreen('tratamentos')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-[#dce9ff] text-xs font-semibold text-[#00162d] hover:bg-[#eff4ff] transition-colors cursor-pointer"
            >
              <span>Ver catálogo completo com indicações detalhadas</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#006a61]" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. DESTAQUE / PREVENÇÃO (High-Contrast Navy Section) */}
      <section className="w-full bg-[#0f2b48] text-white py-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#006a61]/20 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00162d] text-[#89f5e7] text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Prevenção & Longevidade Oral</span>
              </div>

              <h2 className="font-['Manrope'] text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Prevenir hoje é cuidar do seu sorriso amanhã.
              </h2>

              <p className="text-sm sm:text-base text-[#afc8ed] max-w-2xl leading-relaxed">
                A realização periódica de consultas de medicina dentária é essencial para manter uma saúde oral ótima e diagnosticar precocemente eventuais alterações, evitando tratamentos mais invasivos no futuro.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#006a61] hover:bg-[#86f2e4] hover:text-[#006f66] text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
                >
                  <span>Marcar consulta de avaliação</span>
                  <Calendar className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:flex justify-end">
              <div className="w-64 rounded-2xl bg-[#00162d]/70 p-6 flex flex-col justify-between backdrop-blur-sm border border-white/10 shadow-xl">
                <div className="w-12 h-12 rounded-full bg-[#006a61] flex items-center justify-center text-white mb-4">
                  <Clock className="w-6 h-6 text-[#89f5e7]" />
                </div>
                <div className="space-y-1">
                  <span className="font-['Manrope'] text-3xl font-extrabold text-white">
                    6 Meses
                  </span>
                  <p className="text-xs text-[#afc8ed] leading-relaxed">
                    Intervalo recomendado para check-up clínico preventivo, destartarização e profilaxia integral.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXPERIÊNCIA DO PACIENTE (4 Pillars) */}
      <section className="w-full bg-[#f8f9ff] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold text-[#006a61] uppercase tracking-wider">
              Cuidado Humanizado
            </span>
            <h2 className="font-['Manrope'] text-2xl sm:text-4xl font-bold text-[#00162d]">
              Uma experiência pensada para si
            </h2>
            <p className="text-sm text-[#43474d]">
              Colocamos a sua tranquilidade e conforto no centro de cada decisão médica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5eeff] hover:shadow-md transition-shadow">
              <span className="font-['Manrope'] text-3xl font-extrabold text-[#6bd8cb] block">
                01
              </span>
              <h3 className="font-['Inter'] font-bold text-base text-[#00162d] mt-2 mb-1">
                Atendimento personalizado
              </h3>
              <p className="text-xs text-[#43474d] leading-relaxed">
                Ouvimos as suas preocupações com tempo e dedicação, desenhando um plano terapêutico ajustado à sua realidade.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5eeff] hover:shadow-md transition-shadow">
              <span className="font-['Manrope'] text-3xl font-extrabold text-[#6bd8cb] block">
                02
              </span>
              <h3 className="font-['Inter'] font-bold text-base text-[#00162d] mt-2 mb-1">
                Ambiente confortável
              </h3>
              <p className="text-xs text-[#43474d] leading-relaxed">
                Instalações serenas concebidas com vista atlântica e climatização silenciosa para dissipar o receio de dentista.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5eeff] hover:shadow-md transition-shadow">
              <span className="font-['Manrope'] text-3xl font-extrabold text-[#6bd8cb] block">
                03
              </span>
              <h3 className="font-['Inter'] font-bold text-base text-[#00162d] mt-2 mb-1">
                Acompanhamento próximo
              </h3>
              <p className="text-xs text-[#43474d] leading-relaxed">
                Apoio contínuo e canal direto via telefone ou WhatsApp antes, durante e após a realização de qualquer procedimento.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5eeff] hover:shadow-md transition-shadow">
              <span className="font-['Manrope'] text-3xl font-extrabold text-[#6bd8cb] block">
                04
              </span>
              <h3 className="font-['Inter'] font-bold text-base text-[#00162d] mt-2 mb-1">
                Saúde oral prioritária
              </h3>
              <p className="text-xs text-[#43474d] leading-relaxed">
                Ética clínica inegociável: apenas propomos intervenções com real indicação médica e benefício comprovado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMO FUNCIONA (3 Steps) */}
      <section className="w-full bg-[#eff4ff] py-16 border-t border-[#dce9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold text-[#006a61] uppercase tracking-wider">
              Passo a Passo
            </span>
            <h2 className="font-['Manrope'] text-2xl sm:text-4xl font-bold text-[#00162d]">
              Começar é simples
            </h2>
            <p className="text-sm text-[#43474d]">
              Em apenas 3 passos terá a sua consulta marcada com toda a conveniência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5eeff] flex flex-col items-start space-y-3 relative">
              <div className="w-12 h-12 rounded-full bg-[#0f2b48] text-white flex items-center justify-center font-bold text-base">
                1
              </div>
              <span className="text-xs text-[#006a61] uppercase font-bold tracking-wider">
                Passo 01
              </span>
              <h3 className="font-['Inter'] font-bold text-base text-[#00162d]">
                Entre em contacto
              </h3>
              <p className="text-xs text-[#43474d] leading-relaxed">
                Fale connosco através do telefone (+351 927 032 235), WhatsApp ou preenchendo o formulário online neste website.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5eeff] flex flex-col items-start space-y-3 relative">
              <div className="w-12 h-12 rounded-full bg-[#006a61] text-white flex items-center justify-center font-bold text-base">
                2
              </div>
              <span className="text-xs text-[#006a61] uppercase font-bold tracking-wider">
                Passo 02
              </span>
              <h3 className="font-['Inter'] font-bold text-base text-[#00162d]">
                Agende a sua consulta
              </h3>
              <p className="text-xs text-[#43474d] leading-relaxed">
                A nossa equipa encontra consigo o melhor dia e hora de acordo com a sua disponibilidade, de segunda a sábado.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5eeff] flex flex-col items-start space-y-3 relative">
              <div className="w-12 h-12 rounded-full bg-[#0f2b48] text-white flex items-center justify-center font-bold text-base">
                3
              </div>
              <span className="text-xs text-[#006a61] uppercase font-bold tracking-wider">
                Passo 03
              </span>
              <h3 className="font-['Inter'] font-bold text-base text-[#00162d]">
                Cuide do seu sorriso
              </h3>
              <p className="text-xs text-[#43474d] leading-relaxed">
                Receba uma avaliação atenta, plano de cuidados detalhado e tratamento sem dor num ambiente acolhedor.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0f2b48] hover:bg-[#006a61] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm cursor-pointer"
            >
              <span>Agendar primeira consulta</span>
              <ArrowRight className="w-4 h-4 text-[#89f5e7]" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. EQUIPA CLÍNICA */}
      <section className="w-full bg-[#f8f9ff] py-16" id="equipa">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-semibold text-[#006a61] uppercase tracking-wider">
                Profissionais Qualificados
              </span>
              <h2 className="font-['Manrope'] text-2xl sm:text-4xl font-bold text-[#00162d]">
                A nossa equipa clínica
              </h2>
              <p className="text-sm text-[#43474d]">
                Médicos dentistas e profissionais dedicados à excelência técnica com registo ativo na Ordem dos Médicos Dentistas.
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eff4ff] text-[#00162d] text-xs font-medium border border-[#dce9ff]">
              <ShieldCheck className="w-4 h-4 text-[#006a61]" />
              <span>Registo OMD Portugal</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DOCTORS.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#dce9ff] flex flex-col"
              >
                <div className="aspect-4/3 overflow-hidden bg-[#eff4ff] relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#00162d]/80 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded font-mono">
                    {doc.omdNumber}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-bold text-[#006a61] uppercase tracking-wider block">
                      {doc.title}
                    </span>
                    <h3 className="font-['Manrope'] font-bold text-lg text-[#00162d] mt-1">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-[#43474d] mt-2 leading-relaxed">
                      {doc.bio}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#f1f5f9] flex items-center justify-between">
                    <p className="text-[11px] text-[#74777e] italic line-clamp-2">
                      &quot;{doc.quote}&quot;
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenBooking()}
                    className="w-full py-2.5 rounded-xl bg-[#eff4ff] hover:bg-[#006a61] text-[#00162d] hover:text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Marcar com este especialista</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => onNavigateToScreen('equipa')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#006a61] hover:text-[#00162d] cursor-pointer"
            >
              <span>Conhecer o perfil e currículo detalhado de cada médico</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 9. GALERIA BENTO GRID */}
      <section className="w-full bg-[#eff4ff] py-16 border-t border-[#dce9ff]" id="galeria">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold text-[#006a61] uppercase tracking-wider">
              Espaço & Tecnologia
            </span>
            <h2 className="font-['Manrope'] text-2xl sm:text-4xl font-bold text-[#00162d]">
              Conheça a nossa clínica
            </h2>
            <p className="text-sm text-[#43474d]">
              Um ambiente concebido para garantir conforto, higiene máxima e tecnologia de ponta ao serviço da sua saúde oral.
            </p>
          </div>

          {/* Bento-style Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Gallery 1: Large feature */}
            <div
              className="md:col-span-2 rounded-2xl overflow-hidden shadow-sm relative group bg-[#dce9ff] aspect-16/9 cursor-pointer border border-[#dce9ff]"
              onClick={() => onOpenLightbox(GALLERY_ITEMS[0])}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GALLERY_ITEMS[0].image}
                alt={GALLERY_ITEMS[0].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00162d]/80 via-[#00162d]/20 to-transparent flex items-end p-5">
                <div>
                  <span className="text-[11px] font-bold text-[#89f5e7] uppercase tracking-wider">
                    {GALLERY_ITEMS[0].category}
                  </span>
                  <h4 className="font-['Manrope'] font-bold text-base sm:text-lg text-white">
                    {GALLERY_ITEMS[0].title}
                  </h4>
                  <p className="text-xs text-[#afc8ed] line-clamp-1">
                    {GALLERY_ITEMS[0].subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery 2 */}
            <div
              className="rounded-2xl overflow-hidden shadow-sm relative group bg-[#dce9ff] aspect-square md:aspect-auto cursor-pointer border border-[#dce9ff]"
              onClick={() => onOpenLightbox(GALLERY_ITEMS[1])}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GALLERY_ITEMS[1].image}
                alt={GALLERY_ITEMS[1].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00162d]/80 via-transparent to-transparent flex items-end p-4">
                <div>
                  <span className="text-[10px] font-bold text-[#89f5e7] uppercase">
                    {GALLERY_ITEMS[1].category}
                  </span>
                  <h4 className="font-['Manrope'] font-bold text-sm text-white">
                    {GALLERY_ITEMS[1].title}
                  </h4>
                </div>
              </div>
            </div>

            {/* Gallery 3 */}
            <div
              className="rounded-2xl overflow-hidden shadow-sm relative group bg-[#dce9ff] aspect-square md:aspect-auto cursor-pointer border border-[#dce9ff]"
              onClick={() => onOpenLightbox(GALLERY_ITEMS[2])}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GALLERY_ITEMS[2].image}
                alt={GALLERY_ITEMS[2].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00162d]/80 via-transparent to-transparent flex items-end p-4">
                <div>
                  <span className="text-[10px] font-bold text-[#89f5e7] uppercase">
                    {GALLERY_ITEMS[2].category}
                  </span>
                  <h4 className="font-['Manrope'] font-bold text-sm text-white">
                    {GALLERY_ITEMS[2].title}
                  </h4>
                </div>
              </div>
            </div>

            {/* Gallery 4 */}
            <div
              className="rounded-2xl overflow-hidden shadow-sm relative group bg-[#dce9ff] aspect-square md:aspect-auto cursor-pointer border border-[#dce9ff]"
              onClick={() => onOpenLightbox(GALLERY_ITEMS[3])}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GALLERY_ITEMS[3].image}
                alt={GALLERY_ITEMS[3].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00162d]/80 via-transparent to-transparent flex items-end p-4">
                <div>
                  <span className="text-[10px] font-bold text-[#89f5e7] uppercase">
                    {GALLERY_ITEMS[3].category}
                  </span>
                  <h4 className="font-['Manrope'] font-bold text-sm text-white">
                    {GALLERY_ITEMS[3].title}
                  </h4>
                </div>
              </div>
            </div>

            {/* Gallery 5 */}
            <div
              className="rounded-2xl overflow-hidden shadow-sm relative group bg-[#dce9ff] aspect-square md:aspect-auto cursor-pointer border border-[#dce9ff]"
              onClick={() => onOpenLightbox(GALLERY_ITEMS[4])}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GALLERY_ITEMS[4].image}
                alt={GALLERY_ITEMS[4].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00162d]/80 via-transparent to-transparent flex items-end p-4">
                <div>
                  <span className="text-[10px] font-bold text-[#89f5e7] uppercase">
                    {GALLERY_ITEMS[4].category}
                  </span>
                  <h4 className="font-['Manrope'] font-bold text-sm text-white">
                    {GALLERY_ITEMS[4].title}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <span className="text-xs text-[#74777e]">
              Clique em qualquer fotografia para ampliar em detalhe.
            </span>
          </div>
        </div>
      </section>

      {/* 10. AVALIAÇÕES (Testemunhos de Pacientes) */}
      <section className="w-full bg-[#f8f9ff] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-[#006a61] uppercase tracking-wider">
                Testemunhos Reais
              </span>
              <h2 className="font-['Manrope'] text-2xl sm:text-4xl font-bold text-[#00162d]">
                A opinião dos nossos pacientes
              </h2>
              <p className="text-sm text-[#43474d]">
                A confiança de quem escolhe a nossa clínica no Funchal para cuidar da saúde do seu sorriso.
              </p>
            </div>

            {/* Google Rating Badge */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-[#e5eeff] flex items-center gap-4 shrink-0">
              <div className="flex flex-col items-center">
                <span className="font-['Manrope'] text-2xl font-extrabold text-[#00162d]">
                  4.9
                </span>
                <div className="flex text-amber-500 text-xs">
                  {'★'.repeat(5)}
                </div>
              </div>
              <div className="h-9 w-px bg-slate-200" />
              <div className="flex flex-col">
                <span className="font-['Inter'] font-semibold text-xs text-[#00162d]">
                  Google Reviews
                </span>
                <span className="text-[11px] text-[#74777e]">
                  Classificação de excelência
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5eeff] hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex text-amber-500 text-xs">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <p className="text-sm text-[#00162d] italic leading-relaxed">
                    &quot;{rev.comment}&quot;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#f1f5f9]">
                  <div className="w-10 h-10 rounded-full bg-[#86f2e4]/40 text-[#006a61] flex items-center justify-center font-bold text-xs">
                    {rev.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-xs text-[#00162d]">
                      {rev.author}
                    </span>
                    <span className="text-[11px] text-[#74777e]">
                      {rev.location} · {rev.treatment}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. HIGH CONVERSION BANNER */}
      <section className="w-full bg-[#00162d] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f2b48] text-[#89f5e7] text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            <span>Apoio ao Paciente</span>
          </div>

          <h2 className="font-['Manrope'] text-2xl sm:text-4xl font-bold max-w-2xl mx-auto">
            Está na hora de cuidar do seu sorriso?
          </h2>

          <p className="text-sm sm:text-base text-[#afc8ed] max-w-xl mx-auto">
            Entre em contacto com a Clínica Dentária dos Piornais e dê o primeiro passo para cuidar da sua saúde oral com total tranquilidade.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#006a61] hover:bg-[#86f2e4] hover:text-[#006f66] text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
            >
              <span>Marcar consulta</span>
            </button>

            <a
              href="tel:+351927032235"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#00162d] hover:bg-[#eff4ff] font-semibold text-xs sm:text-sm transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#006a61]" />
              <span>Ligar: +351 927 032 235</span>
            </a>
          </div>
        </div>
      </section>

      {/* 12. CONTACTOS & COMO CHEGAR PREVIEW */}
      <section className="w-full bg-[#eff4ff] py-16" id="contactos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-xs font-semibold text-[#006a61] uppercase tracking-wider">
                  Contactos Oficiais
                </span>
                <h2 className="font-['Manrope'] text-2xl sm:text-3xl font-bold text-[#00162d] mt-1">
                  Estamos ao seu dispor
                </h2>
                <p className="text-xs sm:text-sm text-[#43474d] mt-1">
                  Visite-nos em São Martinho ou entre em contacto direto através dos nossos canais de apoio.
                </p>
              </div>

              <div className="space-y-3">
                {/* 1. Morada */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-[#dce9ff] flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#86f2e4]/30 text-[#006a61] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-xs min-w-0">
                    <span className="font-bold text-[#00162d] text-xs">Morada</span>
                    <span className="text-[#43474d] mt-1 leading-relaxed">
                      Estrada Monumental, Edifício Monumental Palace I, n.º 456 M
                      <br />
                      9000-250 Funchal, Madeira
                    </span>
                    <span className="text-[#006a61] font-semibold mt-1.5 block">
                      São Martinho · Funchal
                    </span>
                  </div>
                </div>

                {/* 2. Telefone e WhatsApp */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-[#dce9ff] flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#86f2e4]/30 text-[#006a61] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-xs min-w-0">
                    <span className="font-bold text-[#00162d] text-xs">Telefone e WhatsApp</span>
                    <a
                      href="tel:+351927032235"
                      className="text-[#00162d] font-semibold hover:text-[#006a61] transition-colors mt-1 block"
                    >
                      +351 927 032 235 <span className="font-normal text-[#74777e]">(Móvel / WhatsApp)</span>
                    </a>
                    <a
                      href="tel:+351291764755"
                      className="text-[#43474d] hover:text-[#006a61] transition-colors mt-1 block"
                    >
                      +351 291 764 755 <span className="font-normal text-[#74777e]">(Rede Fixa Nacional)</span>
                    </a>
                  </div>
                </div>

                {/* 3. Correio Eletrónico */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-[#dce9ff] flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#86f2e4]/30 text-[#006a61] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-xs min-w-0">
                    <span className="font-bold text-[#00162d] text-xs">Correio Eletrónico</span>
                    <a
                      href="mailto:clinicadentariadospiornais@gmail.com"
                      className="text-[#00162d] font-semibold hover:text-[#006a61] transition-colors mt-1 block break-all"
                    >
                      clinicadentariadospiornais@gmail.com
                    </a>
                    <a
                      href="mailto:geral@piornaisdentaria.pt"
                      className="text-[#43474d] hover:text-[#006a61] transition-colors mt-1 block break-all"
                    >
                      geral@piornaisdentaria.pt
                    </a>
                  </div>
                </div>

                {/* 4. Horário de Funcionamento */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-[#dce9ff] flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#86f2e4]/30 text-[#006a61] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-xs w-full min-w-0 space-y-1.5">
                    <span className="font-bold text-[#00162d] text-xs">Horário de Funcionamento</span>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-[#43474d] pt-0.5">
                      <span className="text-[#74777e]">Segunda a Sexta:</span>
                      <strong className="text-[#00162d]">09:00 – 19:00</strong>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-[#43474d]">
                      <span className="text-[#74777e]">Sábados:</span>
                      <strong className="text-[#00162d]">09:00 – 13:00</strong>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-[#43474d]">
                      <span className="text-[#74777e]">Domingos e Feriados:</span>
                      <span className="text-red-600 font-semibold">Encerrado</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#0f2b48] hover:bg-[#006a61] text-white text-xs font-semibold transition-colors shadow-sm cursor-pointer"
                >
                  Solicitar Marcação
                </button>
                <a
                  href={CLINIC_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-white text-[#00162d] border border-[#dce9ff] text-xs font-semibold hover:bg-slate-50 transition-colors text-center inline-flex items-center justify-center gap-1.5"
                >
                  <span>Abrir no Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#006a61]" />
                </a>
              </div>
            </div>

            {/* Form de Solicitação de Agendamento */}
            <div className="lg:col-span-7">
              <AppointmentRequestForm />
            </div>
          </div>

          {/* Guia de Como Encontrar-nos & Localização Privilegiada */}
          <div className="mt-8 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-[#dce9ff] space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#f1f5f9] pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#006a61] uppercase tracking-wider block">
                  Como Encontrar-nos
                </span>
                <h3 className="font-['Manrope'] text-xl sm:text-2xl font-bold text-[#00162d]">
                  Localização Privilegiada
                </h3>
                <p className="text-xs sm:text-sm text-[#43474d] max-w-2xl leading-relaxed">
                  Estamos na Estrada Monumental, em São Martinho, uma das zonas mais nobres e de fácil circulação do Funchal.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={CLINIC_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-[#0f2b48] hover:bg-[#006a61] text-white text-xs font-semibold transition-colors shadow-sm inline-flex items-center gap-2 cursor-pointer"
                >
                  <Map className="w-4 h-4 text-[#89f5e7]" />
                  <span>Abrir direções no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 3 cards de acessos com ícones */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#f8f9ff] p-4 rounded-2xl border border-[#e5eeff] flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#86f2e4]/30 text-[#006a61] flex items-center justify-center shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs">
                  <span className="font-bold text-[#00162d] block">Estacionamento</span>
                  <p className="text-[#43474d] leading-relaxed">
                    Estacionamento disponível nas imediações e zonas adjacentes do Edifício Monumental Palace I.
                  </p>
                </div>
              </div>

              <div className="bg-[#f8f9ff] p-4 rounded-2xl border border-[#e5eeff] flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#86f2e4]/30 text-[#006a61] flex items-center justify-center shrink-0">
                  <Bus className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs">
                  <span className="font-bold text-[#00162d] block">Transportes HF</span>
                  <p className="text-[#43474d] leading-relaxed">
                    Paragens de autocarro HF (Horários do Funchal) a poucos metros da entrada da clínica.
                  </p>
                </div>
              </div>

              <div className="bg-[#f8f9ff] p-4 rounded-2xl border border-[#e5eeff] flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#86f2e4]/30 text-[#006a61] flex items-center justify-center shrink-0">
                  <Accessibility className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs">
                  <span className="font-bold text-[#00162d] block">Acessibilidade</span>
                  <p className="text-[#43474d] leading-relaxed">
                    Acesso facilitado para carrinhos de bebé e pacientes com mobilidade reduzida.
                  </p>
                </div>
              </div>
            </div>

            {/* Dentistry Card com Google Maps */}
            <div className="bg-[#f8f9ff] rounded-2xl border border-[#e5eeff] p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#0f2b48] text-[#89f5e7] flex items-center justify-center shrink-0 shadow-sm">
                  <Smile className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-['Manrope'] font-bold text-sm text-[#00162d]">
                    Clínica Dentária dos Piornais
                  </h4>
                  <p className="text-xs text-[#74777e] flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#006a61]" />
                    <span>Estrada Monumental 456 M • Funchal</span>
                  </p>
                </div>
              </div>

              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#00162d] border border-[#c4c6ce] text-xs font-semibold transition-colors shadow-sm cursor-pointer"
              >
                <Map className="w-4 h-4 text-[#006a61]" />
                <span>Abrir direções no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#74777e]" />
              </a>
            </div>

            {/* Google Maps Interactive Iframe */}
            <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#dce9ff] shadow-inner relative bg-[#eef2f6]">
              <iframe
                title="Localização da Clínica Dentária dos Piornais no Google Maps"
                src="https://maps.google.com/maps?q=Estrada+Monumental+456+M+Funchal&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 13. FAQ ACCORDION */}
      <section className="w-full bg-[#f8f9ff] py-16" id="perguntas-frequentes">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-semibold text-[#006a61] uppercase tracking-wider">
              Tire as suas Dúvidas
            </span>
            <h2 className="font-['Manrope'] text-2xl sm:text-4xl font-bold text-[#00162d]">
              Perguntas Frequentes
            </h2>
            <p className="text-sm text-[#43474d]">
              Respostas claras às questões mais comuns colocadas pelos nossos pacientes.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.slice(0, 6).map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-sm border border-[#e5eeff] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-['Inter'] font-semibold text-xs sm:text-sm text-[#00162d]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#006a61] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-[#43474d] leading-relaxed border-t border-[#f1f5f9] pt-3 animate-in fade-in-50 duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => onNavigateToScreen('perguntas-frequentes')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#006a61] hover:text-[#00162d] cursor-pointer"
            >
              <span>Ver todas as perguntas frequentes e informações de acordos</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
