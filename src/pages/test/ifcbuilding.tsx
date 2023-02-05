import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import Experience from '@/components/ThreeDimFeatures/Experience';

export default function IfcBuilding() {
  return (
    <Canvas
      style={{
        width: '100vw',
        height: '100vh',
        background: '#f0f8ff',
      }}
      camera={{
        fov: 75,
        near: 0.1,
        far: 200,
        position: [10, 4, 10],
      }}
    >
      <Experience />
      <mesh>
        <sphereGeometry />
        <meshNormalMaterial wireframe />
      </mesh>
    </Canvas>
  );
}
