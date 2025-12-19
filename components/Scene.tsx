"use client";

import React, {
  useRef,
  Suspense,
  Component,
  ErrorInfo,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  Sphere,
  Float,
  Environment,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

interface CoffeeBeanProps {
  modelPath?: string;
  mousePosition?: { x: number; y: number };
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ModelErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("3D Model loading error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const CoffeeBeanModel = ({
  modelPath,
  mousePosition = { x: 0.5, y: 0.5 },
}: {
  modelPath: string;
  mousePosition?: { x: number; y: number };
}) => {
  const { scene } = useGLTF(modelPath);
  const meshRef = useRef<THREE.Group>(null);
  const mousePosRef = useRef(mousePosition);

  // Update mouse position ref when prop changes
  React.useEffect(() => {
    mousePosRef.current = mousePosition;
  }, [mousePosition]);

  // Clone the scene to avoid sharing state between instances
  const clonedScene = React.useMemo(() => {
    const cloned = scene.clone();
    // Calculate bounding box to center and scale the model
    const box = new THREE.Box3().setFromObject(cloned);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);

    // Scale to fit in a reasonable space
    // For very small models, use a fixed scale factor instead of calculating from maxDim
    let scale: number;
    if (maxDim < 0.01) {
      // Very small model - use a larger fixed scale to make it visible
      // Increased scale for better visibility
      scale = 300;
    } else if (maxDim < 0.1) {
      // Small model - use moderate scale
      scale = 30;
    } else if (maxDim < 1) {
      // Medium model - use calculated scale
      scale = 2 / maxDim;
    } else {
      // Large model - use calculated scale
      scale = 2 / maxDim;
    }

    // Apply scale first
    cloned.scale.multiplyScalar(scale);

    // Center the model
    const scaledCenter = center.clone().multiplyScalar(scale);
    cloned.position.sub(scaledCenter);

    // Ensure model is at origin
    cloned.position.set(0, 0, 0);

    return cloned;
  }, [scene]);

  // Initialize position to be visible
  React.useEffect(() => {
    if (meshRef.current) {
      meshRef.current.position.set(0, 0, 0);
      meshRef.current.rotation.set(0, 0, 0);
      meshRef.current.scale.set(1, 1, 1);

      // Ensure all children are visible
      meshRef.current.traverse((child) => {
        child.visible = true;
      });
    }
  }, [clonedScene]);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Calculate scroll progress (0.0 to 1.0) with parallax effect
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const rawProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
    const progress = Math.min(Math.max(rawProgress, 0), 1);

    const time = state.clock.getElapsedTime();

    // Parallax effect: Add mouse position influence
    const parallaxX = (mousePosRef.current.x - 0.5) * 0.8;
    const parallaxY = (mousePosRef.current.y - 0.5) * 0.8;

    // Define keyframe positions for the bean based on scroll sections
    // FV: Start from right side, larger size
    let targetPos = new THREE.Vector3(0, 0, 0);
    let targetRot = new THREE.Vector3(0, 0, 0);
    let targetScale = 1;

    if (progress < 0.3) {
      const t = progress / 0.3;
      // Start from right side (larger), move to left with parallax
      targetPos.set(
        THREE.MathUtils.lerp(3, -2.5, t) + parallaxX, // Start from right (3) instead of center (0)
        THREE.MathUtils.lerp(0, -0.5, t) + parallaxY,
        THREE.MathUtils.lerp(0, 1, t)
      );
      targetRot.set(t * 1, t * 2, 0);
      // Make it larger at the start (FV)
      targetScale = THREE.MathUtils.lerp(1.8, 1, t); // Start at 1.8x scale, decrease to 1x
    } else if (progress < 0.6) {
      const t = (progress - 0.3) / 0.3;
      // Move from left to right with parallax
      targetPos.set(
        THREE.MathUtils.lerp(-2.5, 2.5, t) + parallaxX,
        THREE.MathUtils.lerp(-0.5, 0, t) + parallaxY,
        THREE.MathUtils.lerp(1, 0.5, t)
      );
      targetRot.set(1 + t * 2, 2 + t * 3, t);
    } else {
      const t = (progress - 0.6) / 0.4;
      // Move from right to center and zoom in with parallax
      targetPos.set(
        THREE.MathUtils.lerp(2.5, 0, t) + parallaxX * 0.5,
        THREE.MathUtils.lerp(0, 0.5, t) + parallaxY * 0.5,
        THREE.MathUtils.lerp(0.5, 3, t)
      );
      targetRot.set(3 + t * 1, 5 + t * 5, 1 + t);
      targetScale = THREE.MathUtils.lerp(1, 1.5, t);
    }

    // Smoother interpolation for parallax effect
    const lerpFactor = 0.12; // Increased for more responsive parallax
    meshRef.current.position.lerp(targetPos, lerpFactor);

    // Add continuous rotation with parallax influence
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetRot.x + time * 0.15 + parallaxY * 0.2,
      lerpFactor
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetRot.y + time * 0.25 + parallaxX * 0.3,
      lerpFactor
    );
    meshRef.current.rotation.z = THREE.MathUtils.lerp(
      meshRef.current.rotation.z,
      targetRot.z,
      lerpFactor
    );
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      lerpFactor
    );
  });

  // Ensure model is visible by traversing and checking materials
  React.useEffect(() => {
    if (clonedScene) {
      clonedScene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // Ensure material is visible
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((mat) => {
                if (mat instanceof THREE.Material) {
                  mat.visible = true;
                  mat.needsUpdate = true;
                }
              });
            } else if (child.material instanceof THREE.Material) {
              child.material.visible = true;
              child.material.needsUpdate = true;
            }
          }
        }
      });
    }
  }, [clonedScene]);

  return (
    <group ref={meshRef}>
      <Float
        speed={2}
        rotationIntensity={0.2}
        floatIntensity={0.5}
        floatingRange={[-0.1, 0.1]}
      >
        <primitive object={clonedScene} />
      </Float>
    </group>
  );
};

const CoffeeBeanFallback = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const rawProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
    const progress = Math.min(Math.max(rawProgress, 0), 1);

    const time = state.clock.getElapsedTime();

    let targetPos = new THREE.Vector3(2, 0, 0);
    let targetRot = new THREE.Vector3(0, 0, 0);

    if (progress < 0.3) {
      const t = progress / 0.3;
      targetPos.set(
        THREE.MathUtils.lerp(2.2, -2.5, t),
        THREE.MathUtils.lerp(0.5, -0.5, t),
        THREE.MathUtils.lerp(0, 1, t)
      );
      targetRot.set(t * 1, t * 2, 0);
    } else if (progress < 0.6) {
      const t = (progress - 0.3) / 0.3;
      targetPos.set(
        THREE.MathUtils.lerp(-2.5, 2.5, t),
        THREE.MathUtils.lerp(-0.5, 0, t),
        THREE.MathUtils.lerp(1, 0.5, t)
      );
      targetRot.set(1 + t * 2, 2 + t * 3, t);
    } else {
      const t = (progress - 0.6) / 0.4;
      targetPos.set(
        THREE.MathUtils.lerp(2.5, 0, t),
        THREE.MathUtils.lerp(0, 0.5, t),
        THREE.MathUtils.lerp(0.5, 3, t)
      );
      targetRot.set(3 + t * 1, 5 + t * 5, 1 + t);
    }

    const lerpFactor = 0.08;
    meshRef.current.position.lerp(targetPos, lerpFactor);
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetRot.x + time * 0.15,
      lerpFactor
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetRot.y + time * 0.25,
      lerpFactor
    );
    meshRef.current.rotation.z = THREE.MathUtils.lerp(
      meshRef.current.rotation.z,
      targetRot.z,
      lerpFactor
    );
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.2}
      floatIntensity={0.5}
      floatingRange={[-0.1, 0.1]}
    >
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

const CoffeeBean: React.FC<CoffeeBeanProps> = ({
  modelPath,
  mousePosition,
}) => {
  if (modelPath) {
    return (
      <ModelErrorBoundary fallback={<CoffeeBeanFallback />}>
        <Suspense fallback={<CoffeeBeanFallback />}>
          <CoffeeBeanModel
            modelPath={modelPath}
            mousePosition={mousePosition}
          />
        </Suspense>
      </ModelErrorBoundary>
    );
  }
  return <CoffeeBeanFallback />;
};

interface SceneProps {
  modelPath?: string;
}

const Scene: React.FC<SceneProps> = ({ modelPath }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true);

    // Track mouse position for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [modelPath]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] h-full w-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* @ts-ignore */}
        <ambientLight intensity={0.6} />
        {/* @ts-ignore */}
        <spotLight
          position={[10, 10, 10]}
          angle={0.2}
          penumbra={1}
          intensity={1.2}
        />
        {/* @ts-ignore */}
        <pointLight position={[-10, -5, -10]} intensity={0.5} color="#d4bbad" />
        <Environment preset="city" />
        <CoffeeBean modelPath={modelPath} mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};

export default Scene;
