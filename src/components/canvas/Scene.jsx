import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere } from '@react-three/drei';

export default function Scene() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    // Extremely slow, subtle cinematic parallax
    const targetX = (state.pointer.x * 0.2);
    const targetY = (state.pointer.y * 0.2);
    
    if (groupRef.current) {
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * delta * 1;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * delta * 1;
      
      // Slow majestic rotation
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <>
      {/* Soft, non-harsh lighting */}
      <ambientLight intensity={0.6} color="#CBCBCB" />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#FFFEF3" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#6D8196" />
      
      <group ref={groupRef}>
        <Float 
          speed={1.2} 
          rotationIntensity={0.5} 
          floatIntensity={1} 
        >
          {/* Main Solid Data Sphere */}
          <Sphere args={[2, 64, 64]}>
            <meshStandardMaterial 
              color="#4A4A4A" 
              roughness={0.4}
              metalness={0.6}
              transparent
              opacity={0.8}
            />
          </Sphere>
          
          {/* Wireframe Data Mesh overlay */}
          <Sphere args={[2.05, 32, 32]}>
            <meshStandardMaterial 
              color="#6D8196" 
              wireframe={true} 
              transparent
              opacity={0.2}
            />
          </Sphere>
          
          {/* Glowing Inner Core */}
          <Sphere args={[0.8, 32, 32]}>
            <meshStandardMaterial 
              color="#FFFEF3"
              emissive="#6D8196"
              emissiveIntensity={0.5}
            />
          </Sphere>
        </Float>
      </group>
    </>
  );
}
