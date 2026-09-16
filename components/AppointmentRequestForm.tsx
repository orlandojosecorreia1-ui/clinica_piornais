'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Calendar, Phone, Mail, User, Clock, FileText } from 'lucide-react';
import { TREATMENTS } from '@/data/clinic-data';
import { saveAppointment } from '@/lib/appointmentStore';
import { SavedAppointment } from '@/components/BookingModal';

interface AppointmentRequestFormProps {
  onSuccess?: (appointment: SavedAppointment) => void;
  className?: string;
  defaultTreatmentTitle?: string;
}

export function AppointmentRequestForm({
  onSuccess,
  className = '',
  defaultTreatmentTitle = '',
}: AppointmentRequestFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [treatment, setTreatment] = useState(defaultTreatmentTitle || '');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Manhã (09:00 – 13:00)');
  const [notes, setNotes] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedRef, setSubmittedRef] = useState('');

  const todayStr = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !treatment || !consent) {
      return;
    }

    setIsSubmitting(true);

    const refCode = `CDP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const newAppointment: SavedAppointment = {
      id: String(Date.now()),
      referenceCode: refCode,
      patientName: name.trim(),
      patientPhone: phone.trim(),
      patientEmail: email.trim(),
      treatmentTitle: treatment,
      doctorName: 'Primeiro Especialista Disponível',
      preferredDate: preferredDate || todayStr,
      preferredTime,
      notes: notes.trim(),
      createdAt: new Date().toLocaleDateString('pt-PT'),
      status: 'Pendente de Confirmação',
    };

    saveAppointment(newAppointment);
    if (onSuccess) {
      onSuccess(newAppointment);
    }

    setSubmittedRef(refCode);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setTreatment(defaultTreatmentTitle || '');
    setPreferredDate('');
    setPreferredTime('Manhã (09:00 – 13:00)');
    setNotes('');
    setConsent(false);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div
        className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-[#e5eeff] text-center space-y-5 ${className}`}
      >
        <div className="w-16 h-16 rounded-full bg-[#86f2e4]/30 text-[#006a61] flex items-center justify-center mx-auto ring-8 ring-[#86f2e4]/10">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="inline-block px-3 py-1 rounded-full bg-[#eff4ff] text-[#006a61] text-xs font-bold uppercase tracking-wider">
            Pedido Registado com Sucesso
          </span>
          <h3 className="font-['Manrope'] text-2xl sm:text-3xl font-bold text-[#00162d]">
            Solicitação de Agendamento Enviada
          </h3>
          <p className="text-xs sm:text-sm text-[#43474d] max-w-md mx-auto leading-relaxed">
            Preencha os seus dados. A nossa equipa entrará em contacto para confirmar o seu horário ideal.
          </p>
        </div>

        <div className="bg-[#f8f9ff] rounded-2xl p-4 sm:p-5 border border-[#e5eeff] text-left max-w-md mx-auto space-y-2 text-xs">
          <div className="flex justify-between items-center pb-2 border-b border-[#e5eeff]">
            <span className="text-[#74777e]">Código de Referência:</span>
            <span className="font-mono font-bold text-[#006a61] text-sm">{submittedRef}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#74777e]">Utente:</span>
            <span className="font-semibold text-[#00162d]">{name}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#74777e]">Contacto:</span>
            <span className="font-semibold text-[#00162d]">{phone}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#74777e]">Especialidade:</span>
            <span className="font-semibold text-[#00162d]">{treatment}</span>
          </div>
          {preferredDate && (
            <div className="flex justify-between items-center">
              <span className="text-[#74777e]">Data pretendida:</span>
              <span className="font-semibold text-[#00162d]">{preferredDate}</span>
            </div>
          )}
          <div className="flex justify-between items-center">
            <span className="text-[#74777e]">Horário:</span>
            <span className="font-semibold text-[#00162d]">{preferredTime}</span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0f2b48] hover:bg-[#006a61] text-white text-xs font-semibold transition-colors shadow-sm cursor-pointer"
          >
            Solicitar novo agendamento
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-[#dce9ff] ${className}`}
    >
      <div className="space-y-2 mb-6">
        <h3 className="font-['Manrope'] font-extrabold text-2xl sm:text-3xl text-[#00162d] tracking-tight">
          Solicitar Agendamento
        </h3>
        <p className="text-xs sm:text-sm text-[#43474d] leading-relaxed">
          Preencha os seus dados. A nossa equipa entrará em contacto para confirmar o seu horário ideal.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nome Completo */}
        <div>
          <label className="block text-xs font-semibold text-[#00162d] mb-1.5 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#006a61]" />
            <span>Nome Completo *</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: Maria João Silva"
            required
            className="w-full h-11 px-3.5 rounded-xl border border-[#c4c6ce] text-xs sm:text-sm bg-[#f8f9ff] text-[#00162d] focus:outline-none focus:ring-2 focus:ring-[#006a61] focus:bg-white transition-all placeholder:text-[#94a3b8]"
          />
        </div>

        {/* Telefone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#00162d] mb-1.5 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#006a61]" />
              <span>Telefone / Telemóvel *</span>
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ex: +351 912 345 678"
              required
              className="w-full h-11 px-3.5 rounded-xl border border-[#c4c6ce] text-xs sm:text-sm bg-[#f8f9ff] text-[#00162d] focus:outline-none focus:ring-2 focus:ring-[#006a61] focus:bg-white transition-all placeholder:text-[#94a3b8]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#00162d] mb-1.5 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#006a61]" />
              <span>Email</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ex: maria.silva@exemplo.pt"
              className="w-full h-11 px-3.5 rounded-xl border border-[#c4c6ce] text-xs sm:text-sm bg-[#f8f9ff] text-[#00162d] focus:outline-none focus:ring-2 focus:ring-[#006a61] focus:bg-white transition-all placeholder:text-[#94a3b8]"
            />
          </div>
        </div>

        {/* Motivo da Consulta */}
        <div>
          <label className="block text-xs font-semibold text-[#00162d] mb-1.5 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-[#006a61]" />
            <span>Motivo da Consulta *</span>
          </label>
          <select
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
            required
            className="w-full h-11 px-3.5 rounded-xl border border-[#c4c6ce] text-xs sm:text-sm bg-[#f8f9ff] text-[#00162d] focus:outline-none focus:ring-2 focus:ring-[#006a61] focus:bg-white transition-all cursor-pointer"
          >
            <option value="" disabled>
              Selecione a especialidade
            </option>
            <option value="Primeira Consulta / Avaliação Geral">
              Primeira Consulta / Avaliação Geral
            </option>
            {TREATMENTS.map((t) => (
              <option key={t.id} value={t.title}>
                {t.title}
              </option>
            ))}
            <option value="Dor Aguda / Urgência Dentária">
              Dor Aguda / Urgência Dentária
            </option>
            <option value="Outro Motivo / Esclarecimento Clínico">
              Outro Motivo / Esclarecimento Clínico
            </option>
          </select>
        </div>

        {/* Data & Horário Preferencial */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#00162d] mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#006a61]" />
              <span>Preferência de Data</span>
            </label>
            <input
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              min={todayStr}
              placeholder="dd/mm/aaaa"
              className="w-full h-11 px-3.5 rounded-xl border border-[#c4c6ce] text-xs sm:text-sm bg-[#f8f9ff] text-[#00162d] focus:outline-none focus:ring-2 focus:ring-[#006a61] focus:bg-white transition-all cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#00162d] mb-1.5 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#006a61]" />
              <span>Horário Preferencial</span>
            </label>
            <select
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl border border-[#c4c6ce] text-xs sm:text-sm bg-[#f8f9ff] text-[#00162d] focus:outline-none focus:ring-2 focus:ring-[#006a61] focus:bg-white transition-all cursor-pointer"
            >
              <option value="Manhã (09:00 – 13:00)">Manhã (09:00 – 13:00)</option>
              <option value="Tarde (14:00 – 19:00)">Tarde (14:00 – 19:00)</option>
              <option value="Indiferente / Primeiro horário disponível">
                Indiferente / Primeiro horário disponível
              </option>
            </select>
          </div>
        </div>

        {/* Mensagem adicional */}
        <div>
          <label className="block text-xs font-semibold text-[#00162d] mb-1.5">
            Mensagem adicional (Opcional)
          </label>
          <textarea
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Indique eventuais sintomas, preferências de médico ou observações..."
            className="w-full p-3.5 rounded-xl border border-[#c4c6ce] text-xs sm:text-sm bg-[#f8f9ff] text-[#00162d] focus:outline-none focus:ring-2 focus:ring-[#006a61] focus:bg-white transition-all placeholder:text-[#94a3b8] resize-none"
          />
        </div>

        {/* Consentimento */}
        <div className="flex items-start gap-2.5 pt-1">
          <input
            type="checkbox"
            id="privacyConsent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
            className="mt-1 w-4 h-4 accent-[#006a61] rounded cursor-pointer shrink-0"
          />
          <label
            htmlFor="privacyConsent"
            className="text-xs text-[#43474d] leading-relaxed cursor-pointer select-none"
          >
            Li e aceito a política de privacidade e autorizo a Clínica Dentária dos Piornais a
            contactar-me para confirmação e acompanhamento desta consulta.
          </label>
        </div>

        {/* Botão de Envio */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting || !consent || !treatment || !name.trim() || !phone.trim()}
            className="w-full h-12 rounded-xl bg-[#0f2b48] hover:bg-[#006a61] disabled:opacity-50 text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed group"
          >
            <Send className="w-4 h-4 text-[#89f5e7] group-hover:translate-x-0.5 transition-transform" />
            <span>Solicitar marcação de consulta</span>
          </button>
        </div>
      </form>
    </div>
  );
}
