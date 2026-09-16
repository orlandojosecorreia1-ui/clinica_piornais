import { SavedAppointment } from '@/components/BookingModal';

let cachedRaw: string | null = null;
let cachedList: SavedAppointment[] = [];

export function getAppointmentsSnapshot(): SavedAppointment[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem('cdp_appointments');
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      cachedList = raw ? JSON.parse(raw) : [];
    }
    return cachedList;
  } catch {
    return [];
  }
}

const emptyList: SavedAppointment[] = [];
export function getServerSnapshot(): SavedAppointment[] {
  return emptyList;
}

const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((l) => l());
}

export function subscribeAppointments(callback: () => void) {
  listeners.add(callback);
  const handleStorage = (e: StorageEvent) => {
    if (e.key === 'cdp_appointments') {
      cachedRaw = null;
      callback();
    }
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', handleStorage);
  }
  return () => {
    listeners.delete(callback);
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', handleStorage);
    }
  };
}

export function saveAppointment(newApt: SavedAppointment) {
  const current = getAppointmentsSnapshot();
  const updated = [newApt, ...current];
  try {
    localStorage.setItem('cdp_appointments', JSON.stringify(updated));
    cachedRaw = JSON.stringify(updated);
    cachedList = updated;
    notify();
  } catch (err) {
    console.error('Error saving appointment:', err);
  }
}

export function removeAppointment(id: string) {
  const current = getAppointmentsSnapshot();
  const updated = current.filter((a) => a.id !== id);
  try {
    localStorage.setItem('cdp_appointments', JSON.stringify(updated));
    cachedRaw = JSON.stringify(updated);
    cachedList = updated;
    notify();
  } catch (err) {
    console.error('Error removing appointment:', err);
  }
}
