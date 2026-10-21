import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Tcamera = (props) => {
    const { nodes, materials } = useGLTF('models-3d/camera.glb')

    useEffect(() => {
      materials.main_body.color.set('black')
    }, [materials])

    return (
      <group {...props} dispose={null}>
        <group rotation={[Math.PI /-32, -1.6, 0]}>
          <group position={[-0.002, -10, 0]} rotation={[0, Math.PI ,0 ]} scale={0.01} />
          <mesh
            geometry={nodes.main_body_Cube001.geometry}
            material={materials.main_body}
            position={[-9.06, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.451}
          />
          <mesh
            geometry={nodes.rills_Cylinder001.geometry}
            material={materials.rill}
            position={[-9.06, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.451}
          />
          <mesh
            geometry={nodes.lense_Cylinder002.geometry}
            material={materials.main_body}
            position={[-9.06, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.451}
          />
          <mesh
            geometry={nodes.Cylinder013.geometry}
            material={materials.buttons}
            position={[-9.06, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.451}
          />
          <mesh
            geometry={nodes.Cylinder015.geometry}
            material={materials.buttons}
            position={[-9.06, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.451}
          />
          <mesh
            geometry={nodes.Cube003_Cube004.geometry}
            material={materials.main_body}
            position={[-9.06, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.451}
          />
          <mesh
            geometry={nodes.screws_Cube005.geometry}
            material={materials.screws}
            position={[-9.06, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.451}
          />
          <mesh
            geometry={nodes.Cube005_Cube006.geometry}
            material={materials.main_body}
            position={[-9.06, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.451}
          />
          <mesh
            geometry={nodes.nuts_Cylinder030.geometry}
            material={materials.main_body}
            position={[-9.06, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.451}
          />
          <mesh
            geometry={nodes.buttons_Cylinder047.geometry}
            material={materials.buttons}
            position={[-9.06, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.451}
          />
        </group>
      </group>
  )
}

export default Tcamera;
useGLTF.preload('models-3d/camera.glb');

