import React from 'react';
import Image from 'next/image';

const partners = [
  { id: '1', name: 'Hikvision', logo: '/images/brands/hikvision.svg' },
  { id: '2', name: 'Dahua', logo: '/images/brands/dahua.svg' },
  { id: '3', name: 'EZVIZ', logo: '/images/brands/ezviz.svg' },
  { id: '4', name: 'Uniview', logo: '/images/brands/uniview.svg' },
  { id: '5', name: 'Axis', logo: '/images/brands/axis.svg' },
];

export const Partners: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
      {partners.map((partner) => (
        <div key={partner.id} className="flex items-center justify-center h-12 w-32 bg-white rounded-lg shadow-sm p-4">
          <Image
            src={partner.logo}
            alt={partner.name}
            width={120}
            height={40}
            className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  );
};
