
import React, {Suspense} from 'react';
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"

function Model() {
  const { scene } = useGLTF("/donut48.glb")
  return <primitive object={scene} />;
}

export function ShowDonut(props: any) {
  return (
    <div style = {{height:"auto", backgroundColor:"transparent"}}>
      <Canvas camera={{position: [10, 18, 23], fov: 0.5 }}>
        <pointLight position={[10, 10, 10]} intensity={1.3} />
        <Suspense fallback={null}>
          <Model/>
        </Suspense>
      </Canvas>
    </div>
  );
}
