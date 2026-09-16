'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', variant = 'full', size = 'md' }: LogoProps) {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const textClasses = {
    sm: {
      title: 'text-[14px] leading-none',
      subtitle: 'text-[10px] leading-tight mt-0.5',
    },
    md: {
      title: 'text-[17px] leading-none',
      subtitle: 'text-[11px] leading-tight mt-1',
    },
    lg: {
      title: 'text-[20px] leading-none',
      subtitle: 'text-[12px] leading-tight mt-1',
    },
  };

  // The custom brand badge icon
  const BrandBadge = (
    <div
      className={`${iconSizes[size]} shrink-0 rounded-[10px] bg-[#00162d] flex items-center justify-center p-1.5 shadow-sm`}
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer White Shield Contour */}
        <path
          d="M32 8C20 8 16 16 16 26C16 42 28 54 32 56C36 54 48 42 48 26C48 16 44 8 32 8Z"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Inner Teal Tooth and Dotted Ring */}
        <path
          d="M26 22C26 20 28.5 18 32 18C35.5 18 38 20 38 22C38 26 35 28 35 34C35 40 33.5 44 32 44C30.5 44 29 40 29 34C29 28 26 26 26 22Z"
          fill="#00a392"
        />
        {/* Vertical cleft highlight */}
        <line
          x1="32"
          y1="22"
          x2="32"
          y2="32"
          stroke="#00162d"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Orbital dental precision dots */}
        <circle cx="21" cy="24" r="1.5" fill="#4fdbc8" />
        <circle cx="19" cy="32" r="1.5" fill="#4fdbc8" />
        <circle cx="21" cy="40" r="1.5" fill="#4fdbc8" />
        <circle cx="43" cy="24" r="1.5" fill="#4fdbc8" />
        <circle cx="45" cy="32" r="1.5" fill="#4fdbc8" />
        <circle cx="43" cy="40" r="1.5" fill="#4fdbc8" />
      </svg>
    </div>
  );

  if (variant === 'mark') {
    return <div className={`inline-flex items-center ${className}`}>{BrandBadge}</div>;
  }

  const isWhite = variant === 'white';

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {BrandBadge}
      <div className="flex flex-col text-left">
        <span
          className={`font-['Manrope'] font-bold tracking-tight uppercase ${
            isWhite ? 'text-white' : 'text-[#00162d]'
          } ${textClasses[size].title}`}
        >
          Clínica Dentária
        </span>
        <span
          className={`font-['Inter'] font-semibold tracking-wider uppercase ${
            isWhite ? 'text-[#89f5e7]' : 'text-[#006a61]'
          } ${textClasses[size].subtitle}`}
        >
          dos Piornais · Funchal
        </span>
      </div>
    </div>
  );
}
