import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const RotatingSphere = () => {
  const sphereRef = useRef();

  // Rotate the sphere continuously
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.005;
    }
  });

  // Load a texture
  const texture = useLoader(THREE.TextureLoader, 'https://threejs.org/examples/textures/earth_atmos_2048.jpg');

  return (
    <mesh ref={sphereRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [5, 2, 5] }}>
      {/* Environment effects */}
      <Stars />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Render the rotating sphere */}
      <RotatingSphere />

      {/* Camera Controls */}
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
