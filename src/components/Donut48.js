/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/donut48.gltf')
  useFrame(() => {
    group.current.rotation.x += 0.01
    group.current.rotation.y += 0.01
  }); 
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Donut.geometry}
        material={materials["Material.002"]}
        position={[0, 0.03, 0]}
      >
        <mesh
          geometry={nodes.Icing.geometry}
          material={materials["Material.001"]}
        />
      </mesh>
      <mesh
        geometry={nodes.SurfSphere001.geometry}
        material={nodes.SurfSphere001.material}
        position={[0.06, 0.05, -0.01]}
        rotation={[0.89, -0.85, 2.07]}
        scale={[0.23, 0.26, 0.25]}
      />
      <mesh
        geometry={nodes.SurfSphere002.geometry}
        material={nodes.SurfSphere002.material}
        position={[0.05, 0.05, -0.05]}
        rotation={[1.24, -0.84, 0.28]}
        scale={[0.23, 0.26, 0.25]}
      />
      <mesh
        geometry={nodes.SurfSphere003.geometry}
        material={nodes.SurfSphere003.material}
        position={[-0.04, 0.06, 0]}
        rotation={[1.54, 0.09, -1.67]}
        scale={[0.23, 0.26, 0.25]}
      />
      <mesh
        geometry={nodes.SurfSphere004.geometry}
        material={nodes.SurfSphere004.material}
        position={[-0.02, 0.04, 0.02]}
        rotation={[0.48, -0.66, -2.68]}
        scale={[0.23, 0.26, 0.25]}
      />
      <mesh
        geometry={nodes.SurfSphere005.geometry}
        material={nodes.SurfSphere005.material}
        position={[0.01, 0.05, 0.06]}
        rotation={[2.17, -0.33, 2.66]}
        scale={[0.23, 0.26, 0.25]}
      />
      <mesh
        geometry={nodes.SurfSphere006.geometry}
        material={nodes.SurfSphere006.material}
        position={[0.05, 0.05, 0.02]}
        rotation={[1.56, 0.08, 1.63]}
        scale={[0.23, 0.26, 0.25]}
      />
      <mesh
        geometry={nodes.SurfSphere007.geometry}
        material={nodes.SurfSphere007.material}
        position={[0.03, 0.05, 0]}
        rotation={[2.14, 1, -0.71]}
        scale={[0.23, 0.26, 0.25]}
      />
      <mesh
        geometry={nodes.SurfSphere008.geometry}
        material={nodes.SurfSphere008.material}
        position={[0.06, 0.05, 0]}
        rotation={[1.8, -0.36, 1.89]}
        scale={[0.23, 0.26, 0.25]}
      />
      <mesh
        geometry={nodes.SurfSphere009.geometry}
        material={nodes.SurfSphere009.material}
        position={[0.05, 0.05, 0.02]}
        rotation={[1.61, -0.11, -0.96]}
        scale={[0.23, 0.26, 0.25]}
      />
      <mesh
        geometry={nodes.SurfSphere010.geometry}
        material={nodes.SurfSphere010.material}
        position={[0, 0.06, 0.04]}
        rotation={[1.43, 0.37, -0.36]}
        scale={[0.23, 0.26, 0.25]}
      />
      <mesh
        geometry={nodes.SurfSphere011.geometry}
        material={nodes.SurfSphere011.material}
        position={[-0.03, 0.05, 0.02]}
        rotation={[1.27, -0.53, -3.06]}
        scale={[0.23, 0.26, 0.25]}
      />
      <mesh
        geometry={nodes.SurfSphere012.geometry}
        material={nodes.SurfSphere012.material}
        position={[-0.03, 0.05, 0.02]}
        rotation={[1.15, -1.01, 2.1]}
        scale={[0.23, 0.26, 0.25]}
      />
      <mesh
        geometry={nodes.SurfSphere013.geometry}
        material={nodes.SurfSphere013.material}
        position={[-0.06, 0.04, 0.03]}
        rotation={[2.04, 1.13, 0.17]}
        scale={[0.23, 0.26, 0.25]}
      />
      <mesh
        geometry={nodes.SurfSphere014.geometry}
        material={nodes.SurfSphere014.material}
        position={[-0.06, 0.05, 0.01]}
        rotation={[1.44, 0.48, 3]}
        scale={[0.23, 0.26, 0.25]}
      />
      <mesh
        geometry={nodes.SurfSphere015.geometry}
        material={nodes.SurfSphere015.material}
        position={[-0.04, 0.06, -0.02]}
        rotation={[1.69, -0.14, -1.91]}
        scale={[0.23, 0.26, 0.25]}
      />
      <mesh
        geometry={nodes.SurfSphere016.geometry}
        material={nodes.SurfSphere016.material}
        position={[-0.04, 0.06, -0.02]}
        rotation={[1.7, 0.28, -0.86]}
        scale={[0.23, 0.26, 0.25]}
      />
      <mesh
        geometry={nodes.SurfSphere017.geometry}
        material={nodes.SurfSphere017.material}
        position={[-0.02, 0.06, -0.02]}
        rotation={[2.42, -0.43, -2.46]}
        scale={[0.23, 0.26, 0.25]}
      />
      <mesh
        geometry={nodes.SurfSphere018.geometry}
        material={nodes.SurfSphere018.material}
        position={[-0.04, 0.05, -0.04]}
        rotation={[0.64, 0.98, -0.16]}
        scale={[0.23, 0.26, 0.25]}
      />
      <mesh
        geometry={nodes.SurfSphere019.geometry}
        material={nodes.SurfSphere019.material}
        position={[-0.01, 0.06, -0.04]}
        rotation={[1.27, -0.65, -0.11]}
        scale={[0.23, 0.26, 0.25]}
      />
      <mesh
        geometry={nodes.SurfSphere020.geometry}
        material={nodes.SurfSphere020.material}
        position={[0.02, 0.05, -0.06]}
        rotation={[1.23, -0.08, 1.67]}
        scale={[0.23, 0.26, 0.25]}
      />
      <mesh
        geometry={nodes.SurfSphere021.geometry}
        material={nodes.SurfSphere021.material}
        position={[0.04, 0.05, -0.05]}
        rotation={[0.79, -0.19, 0.72]}
        scale={[0.23, 0.26, 0.25]}
      />
      <mesh
        geometry={nodes.Sphere006.geometry}
        material={nodes.Sphere006.material}
        position={[0.02, 0.05, -0.06]}
        rotation={[0.76, 0.11, -2.65]}
        scale={[0.05, 0.1, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere008.geometry}
        material={nodes.Sphere008.material}
        position={[-0.04, 0.05, -0.05]}
        rotation={[0.39, 0.32, 0.23]}
        scale={[0.05, 0.1, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere009.geometry}
        material={nodes.Sphere009.material}
        position={[-0.05, 0.05, -0.03]}
        rotation={[1.53, 0.9, 2.26]}
        scale={[0.05, 0.1, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere015.geometry}
        material={nodes.Sphere015.material}
        position={[0.03, 0.05, 0.05]}
        rotation={[1.35, -0.27, 0.08]}
        scale={[0.05, 0.1, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere016.geometry}
        material={nodes.Sphere016.material}
        position={[0.01, 0.06, 0.04]}
        rotation={[1.61, -0.05, 1.91]}
        scale={[0.05, 0.1, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere021.geometry}
        material={nodes.Sphere021.material}
        position={[-0.03, 0.06, 0.04]}
        rotation={[1.26, -0.04, 1.91]}
        scale={[0.05, 0.1, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere022.geometry}
        material={nodes.Sphere022.material}
        position={[-0.05, 0.05, 0.02]}
        rotation={[1.73, 0.41, -1.57]}
        scale={[0.05, 0.1, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere023.geometry}
        material={nodes.Sphere023.material}
        position={[-0.06, 0.05, -0.01]}
        rotation={[2.07, 0.86, 2.39]}
        scale={[0.05, 0.1, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere025.geometry}
        material={nodes.Sphere025.material}
        position={[-0.02, 0.05, -0.06]}
        rotation={[0.71, 0.84, -2.16]}
        scale={[0.05, 0.1, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere030.geometry}
        material={nodes.Sphere030.material}
        position={[0.05, 0.06, -0.03]}
        rotation={[1.87, -0.33, -0.21]}
        scale={[0.05, 0.1, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere031.geometry}
        material={nodes.Sphere031.material}
        position={[0.04, 0.06, -0.03]}
        rotation={[1.69, 0, -0.7]}
        scale={[0.05, 0.1, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere007.geometry}
        material={nodes.Sphere007.material}
        position={[0, 0.06, -0.04]}
        rotation={[1.94, -0.23, -1.26]}
        scale={[0.05, 0.07, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere011.geometry}
        material={nodes.Sphere011.material}
        position={[0.04, 0.05, 0.05]}
        rotation={[2.63, -0.23, -0.04]}
        scale={[0.05, 0.07, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere012.geometry}
        material={nodes.Sphere012.material}
        position={[0.04, 0.05, 0.01]}
        rotation={[0.94, -0.29, -1.64]}
        scale={[0.05, 0.07, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere018.geometry}
        material={nodes.Sphere018.material}
        position={[0, 0.06, 0.05]}
        rotation={[1.93, 0.59, 1.56]}
        scale={[0.05, 0.07, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere019.geometry}
        material={nodes.Sphere019.material}
        position={[-0.01, 0.05, 0.03]}
        rotation={[1.32, -0.53, -0.61]}
        scale={[0.05, 0.07, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere024.geometry}
        material={nodes.Sphere024.material}
        position={[-0.03, 0.06, -0.05]}
        rotation={[1.27, 0.36, 1.52]}
        scale={[0.05, 0.07, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere028.geometry}
        material={nodes.Sphere028.material}
        position={[0.02, 0.06, -0.05]}
        rotation={[1.73, 0.05, -1.05]}
        scale={[0.05, 0.07, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere013.geometry}
        material={nodes.Sphere013.material}
        position={[0.03, 0.06, 0.03]}
        rotation={[1.48, -0.41, -1.44]}
        scale={[0.04, 0.06, 0.04]}
      />
      <mesh
        geometry={nodes.Sphere026.geometry}
        material={nodes.Sphere026.material}
        position={[-0.01, 0.05, -0.06]}
        rotation={[1.2, -0.11, 0.56]}
        scale={[0.04, 0.06, 0.04]}
      />
      <mesh
        geometry={nodes.Sphere014.geometry}
        material={nodes.Sphere014.material}
        position={[0.01, 0.05, 0.02]}
        rotation={[0.93, -0.08, 1.04]}
        scale={[0.05, 0.09, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere017.geometry}
        material={nodes.Sphere017.material}
        position={[0, 0.05, 0.03]}
        rotation={[1.27, 0.22, 0.08]}
        scale={[0.05, 0.09, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere029.geometry}
        material={nodes.Sphere029.material}
        position={[0.02, 0.06, -0.03]}
        rotation={[1.5, 0.77, -2.2]}
        scale={[0.05, 0.09, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere010.geometry}
        material={nodes.Sphere010.material}
        position={[-0.04, 0.06, 0.03]}
        rotation={[1.68, -0.09, 0.55]}
        scale={[0.05, 0.1, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere020.geometry}
        material={nodes.Sphere020.material}
        position={[-0.02, 0.05, 0.06]}
        rotation={[2.15, 0.13, -0.9]}
        scale={[0.05, 0.1, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere027.geometry}
        material={nodes.Sphere027.material}
        position={[0, 0.05, -0.06]}
        rotation={[0.67, 0.28, -2.1]}
        scale={[0.05, 0.1, 0.05]}
      />
      <mesh
        geometry={nodes.Sphere032.geometry}
        material={nodes.Sphere032.material}
        position={[0.04, 0.05, -0.01]}
        rotation={[1.23, -0.02, -2.18]}
        scale={[0.05, 0.1, 0.05]}
      />
    </group>
  );
}

useGLTF.preload('/donut48.gltf')
