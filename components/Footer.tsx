'use client';

import React, { useState } from 'react';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, ShieldCheck, ChevronRight, X } from 'lucide-react';
import { CLINIC_INFO } from '@/data/clinic-data';
import { ScreenTab } from './Navbar';

interface FooterProps {
  onNavigateToScreen: (screen: ScreenTab) => void;
}

export function Footer({ onNavigateToScreen }: FooterProps) {
  const [legalModalContent, setLegalModalContent] = useState<{
    title: string;
    text: string;
  } | null>(null);

  const openLegalModal = (title: string, text: string) => {
    setLegalModalContent({ title, text });
  };

  return (
    <>
      <footer className="w-full bg-[#00162d] text-white pt-16 pb-12 border-t border-[#0f2b48]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Column 1: Brand & Credibility */}
            <div className="space-y-4">
              <Logo variant="white" size="md" />
              <p className="text-xs text-[#afc8ed] leading-relaxed">
                Excelência clínica e tranquilidade atlântica no coração da Ilha da Madeira. Cuidado médico-dentário personalizado de elevada precisão.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f2b48] text-[#89f5e7] text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>{CLINIC_INFO.ersNumber}</span>
              </div>
            </div>

            {/* Column 2: Location & Contacts */}
            <div className="space-y-3">
              <h3 className="font-['Manrope'] font-bold text-sm uppercase tracking-wider text-white">
                Localização & Contactos
              </h3>
              <div className="flex items-start gap-2.5 text-xs text-[#afc8ed]">
                <MapPin className="w-4 h-4 text-[#89f5e7] shrink-0 mt-0.5" />
                <span>
                  {CLINIC_INFO.address}
                  <br />
                  {CLINIC_INFO.postalCode}
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#afc8ed] pt-1">
                <Phone className="w-4 h-4 text-[#89f5e7] shrink-0" />
                <a
                  href={`tel:${CLINIC_INFO.phoneMobile.replace(/\s/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {CLINIC_INFO.phoneMobile}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#afc8ed]">
                <Mail className="w-4 h-4 text-[#89f5e7] shrink-0" />
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="hover:text-white transition-colors truncate"
                >
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>

            {/* Column 3: Hours */}
            <div className="space-y-3">
              <h3 className="font-['Manrope'] font-bold text-sm uppercase tracking-wider text-white">
                Horário de Atendimento
              </h3>
              <ul className="space-y-2 text-xs text-[#afc8ed]">
                <li>
                  <span className="text-white font-medium block">Segunda a Sexta:</span>
                  09:00 – 19:00
                </li>
                <li>
                  <span className="text-white font-medium block">Sábado:</span>
                  09:00 – 13:00
                </li>
                <li>
                  <span className="text-white font-medium block">Domingos e Feriados:</span>
                  Encerrado (Urgências sob chamada prévia)
                </li>
              </ul>
            </div>

            {/* Column 4: Clinical Navigation */}
            <div className="space-y-3">
              <h3 className="font-['Manrope'] font-bold text-sm uppercase tracking-wider text-white">
                Navegação Clínica
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToScreen('a-clinica')}
                    className="text-[#afc8ed] hover:text-[#89f5e7] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#89f5e7]" />
                    <span>A Clínica & Filosofia</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToScreen('tratamentos')}
                    className="text-[#afc8ed] hover:text-[#89f5e7] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#89f5e7]" />
                    <span>Tratamentos & Especialidades</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToScreen('equipa')}
                    className="text-[#afc8ed] hover:text-[#89f5e7] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#89f5e7]" />
                    <span>Corpo Clínico Certificado</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToScreen('galeria')}
                    className="text-[#afc8ed] hover:text-[#89f5e7] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#89f5e7]" />
                    <span>Galeria das Instalações</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToScreen('perguntas-frequentes')}
                    className="text-[#afc8ed] hover:text-[#89f5e7] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#89f5e7]" />
                    <span>Apoio ao Paciente & FAQ</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateToScreen('contactos')}
                    className="text-[#afc8ed] hover:text-[#89f5e7] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#89f5e7]" />
                    <span>Contactos & Agendamento</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#0f2b48] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#7a93b5]">
            <div className="flex flex-wrap items-center gap-3">
              <span>© {new Date().getFullYear()} Clínica Dentária dos Piornais. Todos os direitos reservados.</span>
              <span>•</span>
              <span>{CLINIC_INFO.ersNumber}</span>
              <span>•</span>
              <span>OMD Portugal</span>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() =>
                  openLegalModal(
                    'Política de Privacidade & Proteção de Dados',
                    'A Clínica Dentária dos Piornais cumpre rigorosamente as normas do Regulamento Geral de Proteção de Dados (RGPD). Os dados pessoais e clínicos recolhidos destinam-se exclusivamente à gestão de consultas, histórico de atos médico-dentários e faturação legal, não sendo transmitidos a terceiros sem consentimento expresso.'
                  )
                }
                className="hover:text-white transition-colors cursor-pointer"
              >
                Política de Privacidade
              </button>
              <button
                type="button"
                onClick={() =>
                  openLegalModal(
                    'Termos de Utilização',
                    'As informações disponibilizadas neste portal possuem teor meramente informativo sobre os serviços e equipa da Clínica Dentária dos Piornais. O agendamento online constitui uma pré-reserva sujeita a confirmação definitiva pela receção da clínica.'
                  )
                }
                className="hover:text-white transition-colors cursor-pointer"
              >
                Termos de Utilização
              </button>
              <a
                href="https://www.livroreclamacoes.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Livro de Reclamações
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Info Modal */}
      {legalModalContent && (
        <div
          className="fixed inset-0 z-50 bg-[#00162d]/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLegalModalContent(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 text-[#00162d] shadow-2xl border border-[#dce9ff]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#e5eeff]">
              <h4 className="font-['Manrope'] font-bold text-base text-[#00162d]">
                {legalModalContent.title}
              </h4>
              <button
                type="button"
                onClick={() => setLegalModalContent(null)}
                className="p-1 text-slate-400 hover:text-[#00162d] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs sm:text-sm text-[#43474d] leading-relaxed pt-4">
              {legalModalContent.text}
            </p>
            <div className="pt-4 mt-4 border-t border-[#e5eeff] text-right">
              <button
                type="button"
                onClick={() => setLegalModalContent(null)}
                className="px-4 py-2 rounded-xl bg-[#0f2b48] text-white text-xs font-semibold cursor-pointer"
              >
                Compreendi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
