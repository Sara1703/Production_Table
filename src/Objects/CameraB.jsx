import React, { useState } from 'react'
import { Html, useGLTF, useCursor } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'

const CameraB = (props) => {
  const { nodes, materials } = useGLTF('models-3d/cameraB.glb')
  
    const activo = props.seleccionado;
    
    
    const {escala} = useSpring ({
      escala: activo ? 1.12 : 1,
      config: {tension: 300, friction:18}
    })
  return (
    
    <group {...props} dispose={null}
    onPointerOver={(e) =>{
      e.stopPropagation()
      setHovered(true)
      

    }}
    onPointerOut={(e) => {
      e.stopPropagation()
      setHovered(false)
    
    }}
    
    >
      <animated.group name="Scene" scale={escala} position={[4.086, 0, 0]} >
        <group
          name="blueberry_pot_1"
          position={[-0.002, 0, 0]}
          rotation={[Math.PI / 2, 0, 1.374]}
          scale={0.01}
        />
        <mesh
          name="main_body_Cube001"
          castShadow
          receiveShadow
          geometry={nodes.main_body_Cube001.geometry}
          material={materials.main_body}
          position={[-9.06, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.451}
        />
        <mesh
          name="rills_Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.rills_Cylinder001.geometry}
          material={materials.rill}
          position={[-9.06, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.451}
        />
        <mesh
          name="lense_Cylinder002"
          castShadow
          receiveShadow
          geometry={nodes.lense_Cylinder002.geometry}
          material={materials.main_body}
          position={[-9.06, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.451}
        />
        <mesh
          name="Cylinder013"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013.geometry}
          material={materials.buttons}
          position={[-9.06, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.451}
        />
        <mesh
          name="Cylinder015"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={materials.buttons}
          position={[-9.06, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.451}
        />
        <mesh
          name="Cube003_Cube004"
          castShadow
          receiveShadow
          geometry={nodes.Cube003_Cube004.geometry}
          material={materials.main_body}
          position={[-9.06, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.451}
        />
        <mesh
          name="screws_Cube005"
          castShadow
          receiveShadow
          geometry={nodes.screws_Cube005.geometry}
          material={materials.screws}
          position={[-9.06, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.451}
        />
        <mesh
          name="Cube005_Cube006"
          castShadow
          receiveShadow
          geometry={nodes.Cube005_Cube006.geometry}
          material={materials.main_body}
          position={[-9.06, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.451}
        />
        <mesh
          name="nuts_Cylinder030"
          castShadow
          receiveShadow
          geometry={nodes.nuts_Cylinder030.geometry}
          material={materials.main_body}
          position={[-9.06, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.451}
        />
        <mesh
          name="buttons_Cylinder047"
          castShadow
          receiveShadow
          geometry={nodes.buttons_Cylinder047.geometry}
          material={materials.buttons}
          position={[-9.06, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.451}
        />
      </animated.group>
    </group>
  )
}


export default CameraB;
useGLTF.preload('models-3d/cameraB.glb')

