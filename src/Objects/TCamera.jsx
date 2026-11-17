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
   
      <group name="Tinkercad_GLTF_Scene">
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            name="Mesh_Mesh_head_geo001_lambert2SG001"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_Mesh_head_geo001_lambert2SG001.geometry}
            material={materials['lambert2SG.001']}
            material-color= "gray"
            scale={0.05}
          />
        </group>
      </group>
    </group>
  )
}

export default TCamera;

useGLTF.preload('models-3d/camera.glb');


