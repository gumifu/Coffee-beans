import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

const CoffeeBean = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Calculate scroll progress (0.0 to 1.0)
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const rawProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
    const progress = Math.min(Math.max(rawProgress, 0), 1);

    const time = state.clock.getElapsedTime();

    // Define keyframe positions for the bean based on scroll sections
    // Position vector: [x, y, z]
    // 0.0 (Hero): Right side
    // 0.3 (What is Coffee): Left side
    // 0.6 (History): Right side
    // 1.0 (End): Center, Close up
    
    let targetPos = new THREE.Vector3(2, 0, 0); 
    let targetRot = new THREE.Vector3(0, 0, 0);

    if (progress < 0.3) {
      // Hero -> What is Coffee (Right to Left)
      const t = progress / 0.3; // normalized 0-1 for this segment
      // Interpolate from [2.2, 0.5, 0] to [-2.5, -0.5, 1]
      targetPos.set(
        THREE.MathUtils.lerp(2.2, -2.5, t),
        THREE.MathUtils.lerp(0.5, -0.5, t),
        THREE.MathUtils.lerp(0, 1, t)
      );
      targetRot.set(t * 1, t * 2, 0);
    } else if (progress < 0.6) {
      // What is Coffee -> History (Left to Right)
      const t = (progress - 0.3) / 0.3;
      // Interpolate from [-2.5, -0.5, 1] to [2.5, 0, 0.5]
      targetPos.set(
        THREE.MathUtils.lerp(-2.5, 2.5, t),
        THREE.MathUtils.lerp(-0.5, 0, t),
        THREE.MathUtils.lerp(1, 0.5, t)
      );
      targetRot.set(1 + t * 2, 2 + t * 3, t);
    } else {
      // History -> Footer (Right to Center/Close)
      const t = (progress - 0.6) / 0.4;
      // Interpolate from [2.5, 0, 0.5] to [0, 0, 3]
      targetPos.set(
        THREE.MathUtils.lerp(2.5, 0, t),
        THREE.MathUtils.lerp(0, 0.5, t),
        THREE.MathUtils.lerp(0.5, 3, t)
      );
      targetRot.set(3 + t * 1, 5 + t * 5, 1 + t);
    }

    // Smoothly interpolate current position/rotation to target
    const lerpFactor = 0.08;
    meshRef.current.position.lerp(targetPos, lerpFactor);
    
    // Add continuous rotation on top of scroll rotation
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRot.x + time * 0.15, lerpFactor);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRot.y + time * 0.25, lerpFactor);
    meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, targetRot.z, lerpFactor);
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
      <Sphere args={[1, 64, 64]} scale={[0.85, 1.3, 0.7]} ref={meshRef}>
        <MeshDistortMaterial
          color="#4a3227"
          attach="material"
          distort={0.15}
          speed={1.5}
          roughness={0.4}
          metalness={0.1}
          clearcoat={0.1}
        />
      </Sphere>
    </Float>
  );
};

const Scene: React.FC = () => {
  return (
    // Changed z-index from 0 to 40 to ensure it floats above content (z-10) but below navbar (z-50)
    <div className="fixed inset-0 z-40 h-full w-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* @ts-ignore */}
        <ambientLight intensity={0.6} />
        {/* @ts-ignore */}
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1.2} />
        {/* @ts-ignore */}
        <pointLight position={[-10, -5, -10]} intensity={0.5} color="#d4bbad" />
        <Environment preset="city" />
        <CoffeeBean />
      </Canvas>
    </div>
  );
};

export default Scene;