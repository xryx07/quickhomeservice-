import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const Shape = ({
  position,
  scale,
  geometry,
  color,
  speed,
  rotationAxis,
}: {
  position: [number, number, number];
  scale: number;
  geometry: 'torus' | 'octa' | 'icosa' | 'box';
  color: string;
  speed: number;
  rotationAxis: 'x' | 'y' | 'z';
}) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime() * speed;
    ref.current.rotation[rotationAxis] = t * 0.4;
    if (rotationAxis !== 'y') ref.current.rotation.y = t * 0.2;
  });

  const geo = (() => {
    switch (geometry) {
      case 'torus':
        return <torusGeometry args={[1, 0.32, 16, 64]} />;
      case 'octa':
        return <octahedronGeometry args={[1, 0]} />;
      case 'icosa':
        return <icosahedronGeometry args={[1, 0]} />;
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
    }
  })();

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={ref} position={position} scale={scale}>
        {geo}
        <meshStandardMaterial
          color={color}
          roughness={0.35}
          metalness={0.7}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
};

const AmbientShapes = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.35] dark:opacity-25">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 4, 3]} intensity={1.1} color="#fff4e8" />
        <pointLight position={[-4, -2, 3]} intensity={0.5} color="#e25d27" />
        <Suspense fallback={null}>
          <Shape position={[-6.5, 2.5, -1]} scale={0.5} geometry="torus" color="#e25d27" speed={0.4} rotationAxis="x" />
          <Shape position={[6.5, -2, -0.5]} scale={0.4} geometry="icosa" color="#1a1410" speed={0.5} rotationAxis="y" />
          <Shape position={[-5.5, -2.8, 0.5]} scale={0.3} geometry="octa" color="#e8a572" speed={0.6} rotationAxis="z" />
          <Shape position={[5.8, 2.8, -1.5]} scale={0.35} geometry="box" color="#e25d27" speed={0.35} rotationAxis="y" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AmbientShapes;
