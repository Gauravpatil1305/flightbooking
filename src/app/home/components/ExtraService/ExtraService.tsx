import React from 'react';
import { extraServices } from '@/data/extraServicesData';
import { Icon } from '@iconify/react';

const ExtraService: React.FC = () => {
  return (
    <div className="extra-service container">
      {extraServices.map((service) => (
        <div key={service.id} className="extra-service-card">
          <Icon icon={service.icon} className="extra-service-icon" />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ExtraService;
