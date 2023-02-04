import * as THREE from 'three';
import { useRef, useState } from 'react';
import { useFrame, ThreeElements } from '@react-three/fiber';

export default function SampleBox(props: ThreeElements['mesh']) {
  // This refrence will give us direct access to the mesh
  const mesh = useRef<THREE.Mesh>(null!);

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += delta));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'gray' : 'orange'} />
    </mesh>
  );
}
