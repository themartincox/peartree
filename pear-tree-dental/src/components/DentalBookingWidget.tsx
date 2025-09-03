"use client"; // <-- This is essential for components using browser APIs

import React, { useEffect, useRef } from 'react';

const DentalBookingWidget = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Ensure this code only runs once and if the ref is available
    if (!containerRef.current || containerRef.current.querySelector('iframe')) {
      return;
    }

    const iframe = document.createElement('iframe');
    iframe.src = 'https://dentalcrm6179.builtwithrocket.new/embeddable-booking-widget?practiceId=practice-1&theme=%7B%22primaryColor%22%3A%22%230066cc%22%2C%22secondaryColor%22%3A%22%23004499%22%2C%22backgroundColor%22%3A%22%23ffffff%22%2C%22borderRadius%22%3A%228px%22%7D&services=consultation%2Ccleaning&autoResize=true&showHeader=true&analytics=true';
    iframe.style.width = '100%';
    iframe.style.minHeight = '400px';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '8px';
    iframe.setAttribute('allowtransparency', 'true');
    
    // Responsive height adjustment
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://dentalcrm6179.builtwithrocket.new') {
        // For security, only accept messages from the expected origin
        return;
      }
      if (event.data.type === 'widget:sizeChanged') {
        iframe.style.height = event.data.data.height + 'px';
      }
    };
    
    window.addEventListener('message', handleMessage);
    containerRef.current.appendChild(iframe);
    
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return <div ref={containerRef} className="dental-booking-widget" />;
};

export default DentalBookingWidget;