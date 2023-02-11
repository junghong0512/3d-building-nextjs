import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon';

function Box() {
  const [ref] = useBox<THREE.Mesh>(() => ({ mass: 1, position: [0, 2, 0] }));

  return (
    <mesh ref={ref} position={[0, 2, 0]}>
      <boxBufferGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color='gray' />
    </mesh>
  );
}

function Plane() {
  const [ref, api] = usePlane<THREE.Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      ref={ref}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshLambertMaterial attach='material' color='lightblue' />
    </mesh>
  );
}

export default function Home() {
  return (
    <div className='h-screen bg-slate-900'>
      <Canvas>
        {/* Click and Drag 기능 추가 */}
        <OrbitControls />
        {/* 빛을 넣어주기 */}
        <ambientLight intensity={0.5} />
        {/* 각도에 따른 빛 영역 추가 => 3D 형채로 보이게 해줌 */}
        <spotLight position={[10, 15, 10]} angle={0.3} />

        <Stars />

        <Physics>
          <Box />
          <Plane />
        </Physics>
      </Canvas>
    </div>
  );
}
