import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, Preload, Sparkles, SpotLight, useScroll } from '@react-three/drei';
import { Suspense, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

function Bottle() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // A simplistic representation of a luxury perfume bottle using primitives
  // In a real scenario, this would be a loaded glTF model
  return (
    <Float
      speed={2} 
      rotationIntensity={0.5} 
      floatIntensity={1}
      floatingRange={[-0.1, 0.1]}
    >
      <group position={[0, -1, 0]}>
        {/* Bottle Body */}
        <mesh ref={meshRef} castShadow receiveShadow>
          <boxGeometry args={[2, 3, 1]} />
          <meshPhysicalMaterial 
            color="#000000"
            transmission={0.9}
            opacity={1}
            metalness={0.1}
            roughness={0.1}
            ior={1.5}
            thickness={2}
            specularIntensity={1}
            envMapIntensity={2}
          />
        </mesh>
        
        {/* Perfume Liquid */}
        <mesh position={[0, -0.2, 0]}>
          <boxGeometry args={[1.8, 2.5, 0.8]} />
          <meshPhysicalMaterial 
            color="#D4AF37"
            transmission={0.5}
            opacity={0.8}
            metalness={0.2}
            roughness={0.2}
            ior={1.3}
            thickness={1}
          />
        </mesh>

        {/* Bottle Neck */}
        <mesh position={[0, 1.7, 0]} castShadow>
          <cylinderGeometry args={[0.3, 0.4, 0.4, 32]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Bottle Cap */}
        <mesh position={[0, 2.2, 0]} castShadow>
          <boxGeometry args={[0.8, 0.6, 0.8]} />
          <meshPhysicalMaterial 
            color="#111"
            metalness={0.9}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
}

function SceneSetup() {
  const { camera } = useThree();
  
  useEffect(() => {
    // Initial camera setup
    camera.position.set(0, 0, 8);
  }, [camera]);

  useFrame(() => {
    // We can tie camera rotation or position to the scroll via scroll listener
    // Here we'll just do a very slow idle rotation
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = scrollY / maxScroll || 0;

    // Rotate camera around bottle based on scroll
    const angle = scrollProgress * Math.PI * 2;
    const radius = 8 + Math.sin(scrollProgress * Math.PI) * 2;
    
    // Smoothly interpolate camera position
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, Math.sin(angle) * radius, 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, Math.cos(angle) * radius, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, scrollProgress * -5, 0.05);
    
    camera.lookAt(0, -scrollProgress * 5, 0);
  });

  return null;
}

export function Scene3D() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
    >
      <color attach="background" args={['#080808']} />
      <fog attach="fog" args={['#080808', 5, 15]} />
      
      <SceneSetup />

      <ambientLight intensity={0.2} />
      <SpotLight
        position={[5, 10, 5]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        color="#D4AF37"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      
      <SpotLight
        position={[-5, 5, -5]}
        angle={0.5}
        penumbra={1}
        intensity={1}
        color="#ffffff"
      />

      <Suspense fallback={null}>
        <Bottle />
        <Environment preset="city" />
        
        {/* Floating golden dust particles */}
        <Sparkles 
          count={300} 
          scale={12} 
          size={1.5} 
          speed={0.2} 
          opacity={0.3} 
          color="#D4AF37" 
        />
        
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
