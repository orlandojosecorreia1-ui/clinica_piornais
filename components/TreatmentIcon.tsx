import React from 'react';
import {
  Smile,
  ShieldCheck,
  Sparkles,
  Crown,
  HeartPulse,
  Activity,
  Scan,
  Baby,
  Stethoscope,
} from 'lucide-react';

interface TreatmentIconProps {
  id?: string;
  iconName?: string;
  category?: string;
  className?: string;
}

export function TreatmentIcon({
  id,
  iconName,
  category,
  className = 'w-6 h-6',
}: TreatmentIconProps) {
  // Map by treatment ID
  switch (id) {
    case 'dentaria-geral':
      return <Smile className={className} />;
    case 'higiene-oral':
      return <ShieldCheck className={className} />;
    case 'ortodontia':
      return <Sparkles className={className} />;
    case 'implantologia':
      return <Crown className={className} />;
    case 'endodontia':
      return <HeartPulse className={className} />;
    case 'periodontologia':
      return <Activity className={className} />;
    case 'oclusao-dtm':
      return <Scan className={className} />;
    case 'odontopediatria':
      return <Baby className={className} />;
  }

  // Fallback by iconName string
  switch (iconName) {
    case 'dentistry':
      return <Smile className={className} />;
    case 'clean_hands':
      return <ShieldCheck className={className} />;
    case 'architecture':
      return <Sparkles className={className} />;
    case 'hardware':
      return <Crown className={className} />;
    case 'medical_services':
      return <HeartPulse className={className} />;
    case 'bloodtype':
      return <Activity className={className} />;
    case 'vital_signs':
      return <Scan className={className} />;
    case 'sentiment_satisfied':
      return <Baby className={className} />;
  }

  // Fallback by category
  if (category === 'Ortodontia') return <Sparkles className={className} />;
  if (category === 'Cirurgia') return <Crown className={className} />;
  if (category === 'Prevenção') return <ShieldCheck className={className} />;
  if (category === 'Estética') return <Sparkles className={className} />;

  return <Stethoscope className={className} />;
}
