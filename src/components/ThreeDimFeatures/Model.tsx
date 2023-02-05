import { useEffect, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
// import { IFCLoader } from 'three/examples/jsm/loaders/IFCLoader';
import { IFCLoader } from 'web-ifc-three/IFCLoader';
import { IFCModel } from 'web-ifc-three/IFC/components/IFCModel';
import {
  acceleratedRaycast,
  computeBoundsTree,
  disposeBoundsTree,
} from 'three-mesh-bvh';

// export default function Model() {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     init();

//     function init() {
//       const ifcLoader = new IFCLoader();
//       ifcLoader.ifcManager.setWasmPath('../../../../');
//       ifcLoader.load('sample-model.ifc', (model) => {
//         const mesh = model.mesh;
//         model.geometry.center;
//       });
//     }
//     const localRef = mountRef.current ? mountRef.current : null;
//   }, []);

//   // return <primitive object={mountRef} />;
//   return <div ref={mountRef} />;
// }

export default function Model() {
  const model: IFCModel = useLoader(IFCLoader, 'sample-model.ifc', (loader) => {
    loader.ifcManager.setupThreeMeshBVH(
      computeBoundsTree,
      disposeBoundsTree,
      acceleratedRaycast,
    );
    loader.ifcManager.setWasmPath('../../../../../');
  });

  model.name = 'ifc';

  return <primitive object={model} />;
}
