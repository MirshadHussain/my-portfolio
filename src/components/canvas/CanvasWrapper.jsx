import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';
import Scene from './Scene';
import Loader from './Loader';

export default function CanvasWrapper() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check immediately on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Conditionally render full 3D scene only on Tablet/Desktop for performance */}
      {!isMobile && (
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          dpr={[1, 1.5]} // Cap dpr tightly for glassmorphism perf
        >
          <Suspense fallback={<Loader />}>
            <Scene />
          </Suspense>
        </Canvas>
      )}
      
      {/* Ink wash vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ background: 'radial-gradient(circle at center, transparent 0%, #4A4A4A 120%)' }}
      />
    </div>
  );
}
