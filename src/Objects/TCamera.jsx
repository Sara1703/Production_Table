import React, {  useState } from 'react'
import { useGLTF } from '@react-three/drei'

const TCamera = (props) => {
  const { nodes, materials } = useGLTF('models-3d/camera.glb')

  return (
    <group {...props} dispose={null}

    onPointerOver={(e) =>{
      e.stopPropagation()
      props.anunciar?.(props.clave)
    }}
    onPointerOut={(e) => {
      e.stopPropagation()
      props.anunciar?.(null)
    }}
    onClick={(e) => {
      e.stopPropagation()
      props.openPanel?.(props.clave)
    }}>    
   
      <group >
        <group position={[-0.002, 0, 0]} rotation={[Math.PI / 2, 0, 1.374]} scale={0.01}         />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.main_body_Cube001.geometry}
          material={materials.main_body}
          position={[-9.06, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.451}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rills_Cylinder001.geometry}
          material={materials.rill}
          position={[-9.06, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.451}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lense_Cylinder002.geometry}
          material={materials.main_body}
          position={[-9.06, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.451}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013.geometry}
          material={materials.buttons}
          position={[-9.06, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.451}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={materials.buttons}
          position={[-9.06, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.451}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_Cube004.geometry}
          material={materials.main_body}
          position={[-9.06, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.451}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.screws_Cube005.geometry}
          material={materials.screws}
          position={[-9.06, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.451}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_Cube006.geometry}
          material={materials.main_body}
          position={[-9.06, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.451}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.nuts_Cylinder030.geometry}
          material={materials.main_body}
          position={[-9.06, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.451}
        />
        <mesh
          castShadow
          receiveShadow
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

export default TCamera;

useGLTF.preload('models-3d/camera.glb');


