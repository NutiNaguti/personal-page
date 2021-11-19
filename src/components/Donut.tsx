import React, { Suspense, useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import * as THREE from 'three'

import Model from "./Donut48"

export function ShowDonut(props: any) {
  return (
    <div style={{ height: "15%" }}>
      <Canvas camera={{ position: [10, 18, 23], fov: 0.5 }}>
        <pointLight position={[10, 10, 10]} intensity={1.3} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}
