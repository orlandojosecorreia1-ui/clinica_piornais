'use client';

import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  AlertTriangle,
  Car,
  Bus,
  Accessibility,
  Map,
  Smile,
} from 'lucide-react';
import { CLINIC_INFO } from '@/data/clinic-data';
import { SavedAppointment } from '../BookingModal';
import { AppointmentRequestForm } from '@/components/AppointmentRequestForm';

interface ContactsScreenProps {
  onAppointmentCreated: (appointment: SavedAppointment) => void;
}

export function ContactsScreen({ onAppointmentCreated }: ContactsScreenProps) {
  return (
    <div className="w-full bg-[#f8f9ff] py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eff4ff] text-[#006a61] text-xs font-semibold uppercase tracking-wider border border-[#dce9ff]">
            Estamos Próximos de Si
          </span>
          <h1 className="font-['Manrope'] text-3xl sm:text-5xl font-extrabold text-[#00162d]">
            Contactos & Localização
          </h1>
          <p className="text-sm text-[#43474d] leading-relaxed">
            Visite-nos na Estrada Monumental em São Martinho, Funchal, ou utilize os nossos canais digitais para agendamento de consultas e esclarecimentos.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5eeff] space-y-5">
              <h3 className="font-['Manrope'] font-bold text-lg text-[#00162d] border-b border-[#f1f5f9] pb-3">
                Canais de Atendimento
              </h3>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#86f2e4]/30 text-[#006a61] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-xs min-w-0">
                  <span className="font-bold text-[#00162d] text-xs">Morada</span>
                  <p className="text-[#43474d] mt-1 leading-relaxed">
                    Estrada Monumental, Edifício Monumental Palace I, n.º 456 M
                    <br />
                    9000-250 Funchal, Madeira
                  </p>
                  <span className="text-[#006a61] font-semibold mt-1.5 block">
                    São Martinho · Funchal
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#86f2e4]/30 text-[#006a61] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-xs min-w-0">
                  <span className="font-bold text-[#00162d] text-xs">Telefone e WhatsApp</span>
                  <a
                    href="tel:+351927032235"
                    className="text-xs font-semibold text-[#00162d] hover:text-[#006a61] block mt-1 transition-colors"
                  >
                    +351 927 032 235 <span className="font-normal text-[#74777e]">(Móvel / WhatsApp)</span>
                  </a>
                  <a
                    href="tel:+351291764755"
                    className="text-xs text-[#43474d] hover:text-[#006a61] block mt-1 transition-colors"
                  >
                    +351 291 764 755 <span className="font-normal text-[#74777e]">(Rede Fixa Nacional)</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#86f2e4]/30 text-[#006a61] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-xs min-w-0">
                  <span className="font-bold text-[#00162d] text-xs">Correio Eletrónico</span>
                  <a
                    href="mailto:clinicadentariadospiornais@gmail.com"
                    className="text-xs font-semibold text-[#00162d] hover:text-[#006a61] block mt-1 break-all transition-colors"
                  >
                    clinicadentariadospiornais@gmail.com
                  </a>
                  <a
                    href="mailto:geral@piornaisdentaria.pt"
                    className="text-xs text-[#43474d] hover:text-[#006a61] block mt-1 break-all transition-colors"
                  >
                    geral@piornaisdentaria.pt
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#86f2e4]/30 text-[#006a61] flex items-center justify-center shrink-0">
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

            {/* Urgent Dental Care Note */}
            <div className="bg-[#eff4ff] p-5 rounded-2xl border border-[#dce9ff] flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs text-[#43474d] space-y-1">
                <span className="font-bold text-[#00162d] block">
                  Urgência ou Dor Dentária Aguda?
                </span>
                <p>
                  Contacte-nos prioritariamente pelo número móvel{' '}
                  <a href="tel:+351927032235" className="font-bold text-[#006a61] underline">
                    +351 927 032 235
                  </a>{' '}
                  para procedermos à triagem imediata e marcação prioritária no mesmo dia.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <AppointmentRequestForm onSuccess={onAppointmentCreated} />
          </div>
        </div>

        {/* Guia de Como Encontrar-nos & Localização Privilegiada */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-[#dce9ff] space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#f1f5f9] pb-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#006a61] uppercase tracking-wider block">
                Como Encontrar-nos
              </span>
              <h2 className="font-['Manrope'] text-xl sm:text-2xl font-bold text-[#00162d]">
                Localização Privilegiada
              </h2>
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
                <h3 className="font-['Manrope'] font-bold text-sm text-[#00162d]">
                  Clínica Dentária dos Piornais
                </h3>
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
    </div>
  );
}
