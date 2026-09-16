'use client';

import React, { useState, useSyncExternalStore } from 'react';
import { Navbar, ScreenTab } from '@/components/Navbar';
import { HomeScreen } from '@/components/screens/HomeScreen';
import { ClinicScreen } from '@/components/screens/ClinicScreen';
import { TreatmentsScreen } from '@/components/screens/TreatmentsScreen';
import { TeamScreen } from '@/components/screens/TeamScreen';
import { GalleryScreen } from '@/components/screens/GalleryScreen';
import { FaqScreen } from '@/components/screens/FaqScreen';
import { ContactsScreen } from '@/components/screens/ContactsScreen';
import { BookingModal } from '@/components/BookingModal';
import { TreatmentModal } from '@/components/TreatmentModal';
import { LightboxModal } from '@/components/LightboxModal';
import { PatientAppointmentsModal } from '@/components/PatientAppointmentsModal';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';
import { Treatment, GalleryItem, CLINIC_INFO } from '@/data/clinic-data';
import {
  subscribeAppointments,
  getAppointmentsSnapshot,
  getServerSnapshot,
  saveAppointment,
  removeAppointment,
} from '@/lib/appointmentStore';

export default function Page() {
  const [activeScreen, setActiveScreen] = useState<ScreenTab>('inicio');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedTreatmentId, setPreselectedTreatmentId] = useState<string | undefined>();
  const [selectedTreatmentForModal, setSelectedTreatmentForModal] = useState<Treatment | null>(null);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [isMyAppointmentsOpen, setIsMyAppointmentsOpen] = useState(false);

  const savedAppointments = useSyncExternalStore(
    subscribeAppointments,
    getAppointmentsSnapshot,
    getServerSnapshot
  );

  const handleOpenBooking = (treatmentId?: string) => {
    setPreselectedTreatmentId(treatmentId);
    setIsBookingOpen(true);
  };

  const handleScreenChange = (screen: ScreenTab) => {
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] text-[#0b1c30]">
      {/* Schema.org Local Business Structured Data for Dental Clinic */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Dentist',
            name: CLINIC_INFO.name,
            image:
              'https://lh3.googleusercontent.com/aida-public/AB6AXuC4Qlkt8OIxcKVBnti7ZX33Rt1Tl-3BWXID6U3ppCTWcSSNw-4MHYGScHG9WSEKVlhusCk0Mvk-D908PNx4CaA5wHrrJwgS-7H66O52JU0EiH7z1d3HOyz7Mnp7sJQheReDIzwZ75CvEXSVkXvo9k-_29jq7VNRRCUjxAR24G8y_IPgW_dHp0wQKUOg734Rr97PHe4TJBbZeIAYtNgiUqMbsJdt17G86Qh-dk5lUeoic-aeKMwsvtXR',
            address: {
              '@type': 'PostalAddress',
              streetAddress: CLINIC_INFO.address,
              addressLocality: 'Funchal',
              addressRegion: 'Madeira',
              postalCode: '9000-250',
              addressCountry: 'PT',
            },
            telephone: CLINIC_INFO.phoneMobile,
            email: CLINIC_INFO.email,
            openingHours: ['Mo-Fr 09:00-19:00', 'Sa 09:00-13:00'],
            priceRange: '€€',
            url: 'https://piornaisdentaria.pt',
          }),
        }}
      />

      {/* Sticky Header with Screen Switching & Contact Details */}
      <Navbar
        activeScreen={activeScreen}
        onSelectScreen={handleScreenChange}
        onOpenBooking={handleOpenBooking}
        onOpenMyAppointments={() => setIsMyAppointmentsOpen(true)}
        appointmentsCount={savedAppointments.length}
      />

      {/* Main Content View with top offset for fixed navbar */}
      <main className="flex-1 w-full pt-20 md:pt-28 pb-16 sm:pb-0">
        {activeScreen === 'inicio' && (
          <HomeScreen
            onOpenBooking={handleOpenBooking}
            onOpenTreatmentModal={(t) => setSelectedTreatmentForModal(t)}
            onOpenLightbox={(item) => setLightboxItem(item)}
            onNavigateToScreen={handleScreenChange}
          />
        )}

        {activeScreen === 'a-clinica' && (
          <ClinicScreen
            onOpenBooking={() => handleOpenBooking()}
            onOpenLightbox={(item) => setLightboxItem(item)}
          />
        )}

        {activeScreen === 'tratamentos' && (
          <TreatmentsScreen
            onOpenBooking={(id) => handleOpenBooking(id)}
            onOpenTreatmentModal={(t) => setSelectedTreatmentForModal(t)}
          />
        )}

        {activeScreen === 'equipa' && (
          <TeamScreen onOpenBooking={() => handleOpenBooking()} />
        )}

        {activeScreen === 'galeria' && (
          <GalleryScreen onOpenLightbox={(item) => setLightboxItem(item)} />
        )}

        {activeScreen === 'perguntas-frequentes' && (
          <FaqScreen onOpenBooking={() => handleOpenBooking()} />
        )}

        {activeScreen === 'contactos' && (
          <ContactsScreen onAppointmentCreated={saveAppointment} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigateToScreen={handleScreenChange} />

      {/* Floating WhatsApp and Mobile Action Bar */}
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Modal */}
      {isBookingOpen && (
        <BookingModal
          key={`${isBookingOpen}-${preselectedTreatmentId || 'none'}`}
          isOpen={isBookingOpen}
          onClose={() => {
            setIsBookingOpen(false);
            setPreselectedTreatmentId(undefined);
          }}
          preselectedTreatmentId={preselectedTreatmentId}
          onAppointmentCreated={saveAppointment}
        />
      )}

      {/* Treatment Detail Modal */}
      <TreatmentModal
        treatment={selectedTreatmentForModal}
        onClose={() => setSelectedTreatmentForModal(null)}
        onBookTreatment={(id) => handleOpenBooking(id)}
      />

      {/* Photo Lightbox Modal */}
      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
      />

      {/* Patient Saved Appointments Modal */}
      <PatientAppointmentsModal
        isOpen={isMyAppointmentsOpen}
        onClose={() => setIsMyAppointmentsOpen(false)}
        appointments={savedAppointments}
        onRemoveAppointment={removeAppointment}
        onNewBookingClick={() => handleOpenBooking()}
      />
    </div>
  );
}
