'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LaptopAnimation({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Start opening animation after component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4" style={{ perspective: '1500px' }}>
      {/* Laptop Container */}
      <div className="relative w-full" style={{ transformStyle: 'preserve-3d' }}>
        
        {/* Laptop Base (static) - rendered first so lid appears on top */}
        <div className="relative w-full bg-gray-900 rounded-b-lg shadow-2xl" style={{ height: '30px', zIndex: 1 }}>
          {/* Base top surface with keyboard hint */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-900 rounded-b-lg">
            {/* Trackpad */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-gray-600 rounded"></div>
          </div>
        </div>

        {/* Screen/Lid (animated) - positioned on top of base when closed */}
        <motion.div
          className="absolute left-0 right-0 top-0"
          initial={{ 
            rotateX: -90
          }}
          animate={{ 
            rotateX: isOpen ? 0 : -90
          }}
          transition={{
            duration: 1.2,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 0.2
          }}
          style={{
            transformStyle: 'preserve-3d',
            transformOrigin: 'bottom center',
            zIndex: 2
          }}
        >
          {/* Back of lid (top surface when closed) */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-400 rounded-lg shadow-lg"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateX(180deg)',
              height: '12px'
            }}
          >
            {/* Apple logo or brand mark */}
            <div className="flex items-center justify-center h-full">
              <div className="w-8 h-8 rounded-full bg-gray-500 opacity-30"></div>
            </div>
          </div>

          {/* Screen Frame (inner surface) */}
          <div className="relative bg-gray-900 rounded-t-lg p-3 shadow-2xl" style={{ backfaceVisibility: 'hidden' }}>
            {/* Camera Notch */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full z-10"></div>
            
            {/* Screen Display */}
            <div className="bg-white rounded-lg overflow-hidden" style={{ minHeight: '450px' }}>
              <motion.div 
                className="p-12 h-full flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                {children}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}