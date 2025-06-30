// src/pages/Loading.jsx
import React, { useState, useEffect } from 'react';
import Lanyard from '../components/Lanyard';

export default function Loading({ onLoadingComplete }) {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onLoadingComplete) {
              onLoadingComplete();
            }
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 50); // Increment every 50ms for smooth counter

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 w-full h-screen bg-black text-white overflow-hidden">
      {/* Lanyard Component - Perfectly centered and screen-fitted */}
      <div className="absolute inset-0 z-10">
        <Lanyard 
          position={[0, 0, 15]} 
          gravity={[0, -40, 0]} 
          fov={window.innerWidth < 768 ? 35 : 25} 
          transparent={true} 
        />
      </div>

      {/* Simple Corner Counter */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20">
        <div className="p-2 sm:p-3 bg-black/50 backdrop-blur-md rounded-lg border border-white/15 shadow-xl">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-white mb-1 font-mono tracking-wider">
              {loadingProgress}
            </div>
            <div className="text-xs text-gray-300 uppercase tracking-widest font-medium">
              Loading
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
