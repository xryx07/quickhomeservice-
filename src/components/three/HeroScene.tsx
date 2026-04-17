import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

const MorphingObject = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.3;
    meshRef.current.rotation.y = t * 0.12;
    meshRef.current.rotation.z = Math.cos(t * 0.1) * 0.15;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.1}>
      <mesh ref={meshRef} scale={1.6}>
        <icosahedronGeometry args={[1, 6]} />
        <MeshDistortMaterial
          color="#e25d27"
          roughness={0.18}
          metalness={0.45}
          distort={0.38}
          speed={1.4}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
};

const OrbitingShard = ({ radius, speed, offset, color }: { radius: number; speed: number; offset: number; color: string }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime() * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t * 1.3) * 0.4;
    ref.current.rotation.x = t * 0.7;
    ref.current.rotation.y = t * 0.5;
  });

  return (
    <mesh ref={ref} scale={0.18}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.85} />
    </mesh>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 -z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.45} />
        <directionalLight position={[4, 5, 3]} intensity={1.4} color="#fff4e8" />
        <pointLight position={[-3, -2, 2]} intensity={0.6} color="#e25d27" />
        <Suspense fallback={null}>
          <MorphingObject />
          <OrbitingShard radius={2.6} speed={0.4} offset={0} color="#1a1410" />
          <OrbitingShard radius={3.0} speed={0.3} offset={2.1} color="#e8a572" />
          <OrbitingShard radius={2.3} speed={0.55} offset={4.2} color="#1a1410" />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;
