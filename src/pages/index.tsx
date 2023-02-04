import { Canvas } from '@react-three/fiber';
import SampleBox from '@/components/ThreeDimFeatures/SampleBox';

export default function Home() {
  return (
    <div>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <SampleBox position={[-1.2, 0, 0]} />
        <SampleBox position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}
