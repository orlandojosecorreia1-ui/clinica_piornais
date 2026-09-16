'use client';

import React from 'react';
import { X, Calendar, User, Phone, Trash2, Download, MessageSquare } from 'lucide-react';
import { SavedAppointment } from './BookingModal';
import { CLINIC_INFO } from '@/data/clinic-data';

interface PatientAppointmentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointments: SavedAppointment[];
  onRemoveAppointment: (id: string) => void;
  onNewBookingClick: () => void;
}

export function PatientAppointmentsModal({
  isOpen,
  onClose,
  appointments,
  onRemoveAppointment,
  onNewBookingClick,
}: PatientAppointmentsModalProps) {
  if (!isOpen) return null;

  const handleDownloadIcs = (apt: SavedAppointment) => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Clinica Dentaria dos Piornais//Agendamento//PT
BEGIN:VEVENT
SUMMARY:Consulta Dentária - ${apt.treatmentTitle}
DESCRIPTION:Pedido de agendamento na Clínica Dentária dos Piornais (${CLINIC_INFO.address}). Paciente: ${apt.patientName}. Ref: ${apt.referenceCode}.
LOCATION:${CLINIC_INFO.address}, Funchal
DTSTART:${apt.preferredDate.replace(/-/g, '')}T${apt.preferredTime.replace(':', '')}00
DTEND:${apt.preferredDate.replace(/-/g, '')}T${apt.preferredTime.replace(':', '')}00
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `consulta-piornais-${apt.referenceCode}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#00162d]/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-[#dce9ff] my-auto animate-in fade-in-50 zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0f2b48] text-white p-5 sm:p-6 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#89f5e7] font-semibold block">
              Portal do Paciente
            </span>
            <h3 className="font-['Manrope'] text-xl sm:text-2xl font-bold">
              Os Meus Agendamentos
            </h3>
            <p className="text-xs text-[#afc8ed] mt-0.5">
              Consultas solicitadas para a Clínica Dentária dos Piornais
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          {appointments.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#eff4ff] text-[#0f2b48] flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8 text-[#006a61]" />
              </div>
              <h4 className="font-['Manrope'] font-bold text-lg text-[#00162d]">
                Ainda não tem agendamentos registados
              </h4>
              <p className="text-sm text-[#43474d] max-w-sm mx-auto">
                Quando solicitar uma marcação de consulta no nosso portal, os detalhes ficarão guardados aqui para sua comodidade.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onNewBookingClick();
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#0f2b48] hover:bg-[#006a61] text-white text-sm font-semibold transition-colors shadow-sm cursor-pointer"
                >
                  Marcar Primeira Consulta
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-[#43474d] px-1">
                <span>Total: {appointments.length} pedido(s)</span>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onNewBookingClick();
                  }}
                  className="text-[#006a61] hover:underline font-semibold cursor-pointer"
                >
                  + Solicitar Nova Consulta
                </button>
              </div>

              {appointments.map((apt) => (
                <div
                  key={apt.id}
                  className="bg-[#f8f9ff] border border-[#dce9ff] rounded-xl p-4 space-y-3 relative hover:border-[#86f2e4] transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 border-b border-[#e5eeff] pb-2.5">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#00162d] bg-[#dce9ff] px-2 py-0.5 rounded">
                          {apt.referenceCode}
                        </span>
                        <span className="text-[11px] text-[#006f66] bg-[#86f2e4]/30 px-2 py-0.5 rounded font-medium">
                          {apt.status}
                        </span>
                      </div>
                      <h4 className="font-['Manrope'] font-bold text-base text-[#00162d] mt-1.5">
                        {apt.treatmentTitle}
                      </h4>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemoveAppointment(apt.id)}
                      title="Remover agendamento"
                      className="text-slate-400 hover:text-red-600 p-1 rounded hover:bg-red-50 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#43474d]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#006a61]" />
                      <span>
                        Data: <strong className="text-[#00162d]">{apt.preferredDate}</strong> às{' '}
                        <strong className="text-[#00162d]">{apt.preferredTime}</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-[#006a61]" />
                      <span>
                        Médico: <strong className="text-[#00162d]">{apt.doctorName}</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#006a61]" />
                      <span>Contacto: {apt.patientPhone}</span>
                    </div>
                    <div className="text-[11px] text-[#74777e]">
                      Registado em: {apt.createdAt}
                    </div>
                  </div>

                  {apt.notes && (
                    <div className="text-xs text-[#43474d] bg-white p-2 rounded border border-[#e5eeff]">
                      <span className="font-semibold text-[#00162d]">Observações: </span>
                      {apt.notes}
                    </div>
                  )}

                  <div className="pt-2 border-t border-[#e5eeff] flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleDownloadIcs(apt)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#c4c6ce] text-[#00162d] text-xs font-medium hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <Download className="w-3 h-3 text-[#006a61]" />
                      <span>Guardar no Calendário</span>
                    </button>

                    <a
                      href={`https://wa.me/351927032235?text=Ol%C3%A1%2C%20pretendo%20confirmar%20o%20meu%20agendamento%20Ref%3A%20${apt.referenceCode}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#006a61] text-white text-xs font-medium hover:bg-[#0f2b48] transition-colors"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>Contactar Receção</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#f8f9ff] border-t border-[#e5eeff] flex items-center justify-between">
          <span className="text-xs text-[#74777e]">
            Dúvidas? Ligue para <a href="tel:+351927032235" className="text-[#006a61] font-medium">+351 927 032 235</a>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#0f2b48] text-white text-xs font-semibold hover:bg-[#006a61] transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
