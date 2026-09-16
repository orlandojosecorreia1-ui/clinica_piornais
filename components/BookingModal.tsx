'use client';

import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, CheckCircle2, Download, MessageSquare, AlertCircle } from 'lucide-react';
import { TREATMENTS, DOCTORS, CLINIC_INFO } from '@/data/clinic-data';

export interface SavedAppointment {
  id: string;
  referenceCode: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  treatmentTitle: string;
  doctorName: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  createdAt: string;
  status: 'Pendente de Confirmação' | 'Confirmada';
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTreatmentId?: string;
  onAppointmentCreated: (appointment: SavedAppointment) => void;
}

export function BookingModal({
  isOpen,
  onClose,
  preselectedTreatmentId,
  onAppointmentCreated,
}: BookingModalProps) {
  const getDefaultDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    if (tomorrow.getDay() === 0) {
      tomorrow.setDate(tomorrow.getDate() + 1);
    }
    return tomorrow.toISOString().split('T')[0];
  };

  const [selectedTreatment, setSelectedTreatment] = useState<string>(() => {
    if (preselectedTreatmentId) {
      const found = TREATMENTS.find((t) => t.id === preselectedTreatmentId);
      if (found) return found.title;
    }
    return TREATMENTS[0]?.title || '';
  });
  const [selectedDoctor, setSelectedDoctor] = useState<string>('indiferente');
  const [date, setDate] = useState<string>(getDefaultDate);
  const [timeSlot, setTimeSlot] = useState<string>('10:00');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [consent, setConsent] = useState<boolean>(true);
  const [submittedAppointment, setSubmittedAppointment] = useState<SavedAppointment | null>(null);

  if (!isOpen) return null;

  const timeSlots = [
    { time: '09:30', period: 'Manhã' },
    { time: '10:15', period: 'Manhã' },
    { time: '11:00', period: 'Manhã' },
    { time: '11:45', period: 'Manhã' },
    { time: '14:30', period: 'Tarde' },
    { time: '15:15', period: 'Tarde' },
    { time: '16:00', period: 'Tarde' },
    { time: '16:45', period: 'Tarde' },
    { time: '17:30', period: 'Tarde' },
    { time: '18:15', period: 'Tarde' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !selectedTreatment) return;

    const refCode = `CDP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const doctorObj = DOCTORS.find((d) => d.id === selectedDoctor);
    const doctorName = doctorObj ? doctorObj.name : 'Primeiro Especialista Disponível';

    const newAppointment: SavedAppointment = {
      id: String(Date.now()),
      referenceCode: refCode,
      patientName: name.trim(),
      patientPhone: phone.trim(),
      patientEmail: email.trim(),
      treatmentTitle: selectedTreatment,
      doctorName: doctorName,
      preferredDate: date,
      preferredTime: timeSlot,
      notes: notes.trim(),
      createdAt: new Date().toLocaleDateString('pt-PT'),
      status: 'Pendente de Confirmação',
    };

    onAppointmentCreated(newAppointment);
    setSubmittedAppointment(newAppointment);
  };

  // Generate .ics calendar download
  const handleDownloadIcs = () => {
    if (!submittedAppointment) return;
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Clinica Dentaria dos Piornais//Agendamento//PT
BEGIN:VEVENT
SUMMARY:Consulta Dentária - ${submittedAppointment.treatmentTitle}
DESCRIPTION:Pedido de agendamento na Clínica Dentária dos Piornais (${CLINIC_INFO.address}). Paciente: ${submittedAppointment.patientName}. Ref: ${submittedAppointment.referenceCode}.
LOCATION:${CLINIC_INFO.address}, Funchal
DTSTART:${submittedAppointment.preferredDate.replace(/-/g, '')}T${submittedAppointment.preferredTime.replace(':', '')}00
DTEND:${submittedAppointment.preferredDate.replace(/-/g, '')}T${submittedAppointment.preferredTime.replace(':', '')}00
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `consulta-piornais-${submittedAppointment.referenceCode}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // WhatsApp quick forward
  const getWhatsAppForwardUrl = () => {
    if (!submittedAppointment) return CLINIC_INFO.whatsappUrl;
    const text = encodeURIComponent(
      `Olá, acabei de solicitar um agendamento na Clínica Dentária dos Piornais!\n\n` +
        `• Ref: ${submittedAppointment.referenceCode}\n` +
        `• Paciente: ${submittedAppointment.patientName}\n` +
        `• Telefone: ${submittedAppointment.patientPhone}\n` +
        `• Especialidade: ${submittedAppointment.treatmentTitle}\n` +
        `• Data solicitada: ${submittedAppointment.preferredDate} às ${submittedAppointment.preferredTime}\n` +
        `• Médico: ${submittedAppointment.doctorName}\n\n` +
        `Agradeço confirmação de vaga pela receção.`
    );
    return `https://wa.me/351927032235?text=${text}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#00162d]/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-[#dce9ff] my-auto animate-in fade-in-50 zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0f2b48] text-white p-5 sm:p-6 flex items-center justify-between relative shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00162d] text-[#89f5e7] text-[11px] font-semibold uppercase tracking-wider mb-1">
              <Calendar className="w-3 h-3" />
              Agendamento Clínico
            </div>
            <h3 className="font-['Manrope'] text-xl sm:text-2xl font-bold tracking-tight">
              {submittedAppointment ? 'Confirmação do Pedido' : 'Marcar Consulta Dentária'}
            </h3>
            <p className="text-xs sm:text-sm text-[#afc8ed] mt-0.5">
              Clínica Dentária dos Piornais · São Martinho, Funchal
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-white/70 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {submittedAppointment ? (
            /* Success View */
            <div className="space-y-6">
              <div className="text-center py-3">
                <div className="w-16 h-16 rounded-full bg-[#86f2e4]/30 text-[#006a61] flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-['Manrope'] text-2xl font-bold text-[#00162d]">
                  Pedido Recebido com Sucesso!
                </h4>
                <p className="text-sm text-[#43474d] mt-1 max-w-md mx-auto">
                  A nossa equipa da receção entrará em contacto muito brevemente através do número{' '}
                  <span className="font-semibold text-[#00162d]">
                    {submittedAppointment.patientPhone}
                  </span>{' '}
                  para validar a vaga definitiva da sua consulta.
                </p>
              </div>

              {/* Appointment Card Preview */}
              <div className="bg-[#f8f9ff] border border-[#dce9ff] rounded-xl p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-[#e5eeff] pb-3">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#006a61] font-semibold block">
                      Código de Referência
                    </span>
                    <span className="font-mono text-base font-bold text-[#00162d]">
                      {submittedAppointment.referenceCode}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#86f2e4]/40 text-[#006f66] text-xs font-semibold">
                    {submittedAppointment.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-xs text-[#74777e] block">Especialidade / Tratamento</span>
                    <span className="font-medium text-[#00162d]">
                      {submittedAppointment.treatmentTitle}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-[#74777e] block">Especialista</span>
                    <span className="font-medium text-[#00162d]">
                      {submittedAppointment.doctorName}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-[#74777e] block">Data Solicitada</span>
                    <span className="font-medium text-[#00162d]">
                      {submittedAppointment.preferredDate} às {submittedAppointment.preferredTime}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-[#74777e] block">Paciente</span>
                    <span className="font-medium text-[#00162d]">
                      {submittedAppointment.patientName}
                    </span>
                  </div>
                </div>

                {submittedAppointment.notes && (
                  <div className="border-t border-[#e5eeff] pt-2 text-xs text-[#43474d]">
                    <span className="font-semibold">Notas: </span>
                    {submittedAppointment.notes}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={getWhatsAppForwardUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#006a61] hover:bg-[#0f2b48] text-white text-sm font-semibold transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar pelo WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={handleDownloadIcs}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#e5eeff] hover:bg-[#dce9ff] text-[#00162d] text-sm font-semibold transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#006a61]" />
                  <span>Adicionar ao Calendário (.ics)</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs text-[#43474d] hover:text-[#00162d] underline font-medium cursor-pointer"
                >
                  Concluir e voltar ao website
                </button>
              </div>
            </div>
          ) : (
            /* Form View */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Treatment Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#00162d] uppercase tracking-wider mb-1">
                  1. Selecione a Especialidade / Motivo *
                </label>
                <select
                  value={selectedTreatment}
                  onChange={(e) => setSelectedTreatment(e.target.value)}
                  required
                  className="w-full h-11 px-3 rounded-lg border border-[#c4c6ce] bg-white text-[#0b1c30] text-sm focus:outline-none focus:ring-2 focus:ring-[#006a61]"
                >
                  {TREATMENTS.map((t) => (
                    <option key={t.id} value={t.title}>
                      {t.title} ({t.category})
                    </option>
                  ))}
                  <option value="Primeira Consulta de Avaliação e Diagnóstico">
                    Primeira Consulta de Avaliação e Diagnóstico
                  </option>
                  <option value="Urgência / Dor Dentária Aguda">
                    Urgência / Dor Dentária Aguda
                  </option>
                </select>
              </div>

              {/* Doctor Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#00162d] uppercase tracking-wider mb-1">
                  2. Especialista Preferencial (Opcional)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedDoctor('indiferente')}
                    className={`p-2 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                      selectedDoctor === 'indiferente'
                        ? 'border-[#006a61] bg-[#eff4ff] text-[#00162d] font-semibold'
                        : 'border-[#c4c6ce]/60 hover:bg-slate-50 text-[#43474d]'
                    }`}
                  >
                    <span className="font-semibold block">Indiferente</span>
                    <span className="text-[10px] text-[#74777e]">Primeiro horário livre</span>
                  </button>
                  {DOCTORS.slice(0, 2).map((doc) => (
                    <button
                      key={doc.id}
                      type="button"
                      onClick={() => setSelectedDoctor(doc.id)}
                      className={`p-2 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                        selectedDoctor === doc.id
                          ? 'border-[#006a61] bg-[#eff4ff] text-[#00162d] font-semibold'
                          : 'border-[#c4c6ce]/60 hover:bg-slate-50 text-[#43474d]'
                      }`}
                    >
                      <span className="font-semibold block truncate">{doc.name}</span>
                      <span className="text-[10px] text-[#74777e] truncate block">
                        {doc.specialties[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-[#00162d] uppercase tracking-wider mb-1">
                    3. Data Preferencial *
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="w-full h-11 px-3 rounded-lg border border-[#c4c6ce] bg-white text-[#0b1c30] text-sm focus:outline-none focus:ring-2 focus:ring-[#006a61]"
                  />
                  <span className="text-[10px] text-[#74777e] block mt-1">
                    Atendimento de Segunda a Sábado
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#00162d] uppercase tracking-wider mb-1">
                    Horário Sugerido *
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full h-11 px-3 rounded-lg border border-[#c4c6ce] bg-white text-[#0b1c30] text-sm focus:outline-none focus:ring-2 focus:ring-[#006a61]"
                  >
                    <optgroup label="Manhã (09:00 - 13:00)">
                      {timeSlots
                        .filter((s) => s.period === 'Manhã')
                        .map((s) => (
                          <option key={s.time} value={s.time}>
                            {s.time} ({s.period})
                          </option>
                        ))}
                    </optgroup>
                    <optgroup label="Tarde (14:00 - 19:00)">
                      {timeSlots
                        .filter((s) => s.period === 'Tarde')
                        .map((s) => (
                          <option key={s.time} value={s.time}>
                            {s.time} ({s.period})
                          </option>
                        ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Patient Personal Data */}
              <div className="border-t border-[#e5eeff] pt-3 space-y-3">
                <span className="block text-xs font-semibold text-[#00162d] uppercase tracking-wider">
                  4. Os Seus Dados de Contacto
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-[#43474d] mb-1">Nome Completo *</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Ana Teresa Ramos"
                        required
                        className="w-full h-11 pl-9 pr-3 rounded-lg border border-[#c4c6ce] text-sm focus:outline-none focus:ring-2 focus:ring-[#006a61]"
                      />
                      <User className="w-4 h-4 text-[#74777e] absolute left-3 top-3.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#43474d] mb-1">
                      Telefone / Telemóvel *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+351 9XX XXX XXX"
                        required
                        className="w-full h-11 pl-9 pr-3 rounded-lg border border-[#c4c6ce] text-sm focus:outline-none focus:ring-2 focus:ring-[#006a61]"
                      />
                      <Phone className="w-4 h-4 text-[#74777e] absolute left-3 top-3.5" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#43474d] mb-1">Email (Opcional)</label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ana.ramos@exemplo.pt"
                      className="w-full h-11 pl-9 pr-3 rounded-lg border border-[#c4c6ce] text-sm focus:outline-none focus:ring-2 focus:ring-[#006a61]"
                    />
                    <Mail className="w-4 h-4 text-[#74777e] absolute left-3 top-3.5" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#43474d] mb-1">
                    Observações Clínicas ou Sintomas (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Descreva se sente dor localizada, necessidade de segunda opinião, etc."
                    className="w-full p-3 rounded-lg border border-[#c4c6ce] text-sm focus:outline-none focus:ring-2 focus:ring-[#006a61]"
                  />
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="modalConsent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-1 w-4 h-4 accent-[#006a61] rounded cursor-pointer"
                  />
                  <label htmlFor="modalConsent" className="text-xs text-[#43474d] cursor-pointer">
                    Autorizo a Clínica Dentária dos Piornais a contactar-me para confirmar a data e horário desta consulta, nos termos da política de privacidade.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!consent}
                  className="w-full h-12 rounded-xl bg-[#0f2b48] hover:bg-[#006a61] text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Calendar className="w-4 h-4 text-[#89f5e7]" />
                  <span>Confirmar Pedido de Agendamento</span>
                </button>
                <div className="flex items-center justify-center gap-2 text-[11px] text-[#74777e] mt-2">
                  <AlertCircle className="w-3.5 h-3.5 text-[#006a61]" />
                  <span>Sem qualquer encargo prévio. Confirmação telefónica atenta pela receção.</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
