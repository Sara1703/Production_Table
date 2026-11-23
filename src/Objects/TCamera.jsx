import React, { useState } from 'react'
import { Html, useGLTF, useCursor } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'

const TCamera = (props) => {
  const { nodes, materials } = useGLTF('models-3d/camera.glb')

  const [hovered, setHovered] =useState(false);
    
      useCursor(hovered);
    
      const {escala} = useSpring ({
        escala: props.seleccionado ? 3 : hovered ? 1.15 : 1,
        config: {tension: 300, friction:18}
      })
      return (
    
        <group {...props} dispose={null}
        
        onPointerOver={(e) =>{
          e.stopPropagation()
          props.anunciar?.(props.clave)
          setHovered(true)
        }}
        onPointerOut={(e) => {
          e.stopPropagation()
          props.anunciar?.(null)
          setHovered(false)
        
        }}
        
        onClick={(e) => {
          e.stopPropagation()
          props.openPanel?.(props.clave)
        }}
        >
        
      <animated.group name="Tinkercad_GLTF_Scene" scale={escala}>
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
      </animated.group>
    </group>
  )
}

export default TCamera;

useGLTF.preload('models-3d/camera.glb');


