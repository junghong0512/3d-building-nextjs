import { OrbitControls } from '@react-three/drei';
import Model from './Model';

export default function Experience() {
  return (
    <>
      <Model />
      <ambientLight intensity={0.8} />
      <OrbitControls makeDefault />
    </>
  );
}
