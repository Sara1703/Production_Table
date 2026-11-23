import React, { useRef, useState } from 'react'
import { Html, useCursor, useGLTF } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'

const PTable_redonde = (props) =>{
  const { nodes, materials } = useGLTF('models-3d/table_ronde.glb')

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
      props.onResaltar?.(true);
    }}
    onPointerOut={(e) => {
      e.stopPropagation()
      props.anunciar?.(null)
      setHovered(false)
      props.onResaltar?.(false);
    
    }}
    
    onClick={(e) => {
      e.stopPropagation()
      props.openPanel?.(props.clave)
    }}>
      <animated.group scale={escala}>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table_RoundSmall2.geometry}
        material={materials.Wood}
        material-color= "#d1cdcd"
        />
      </animated.group>
      
    </group>
  )
}


export default PTable_redonde;
useGLTF.preload('models-3d/table_ronde.glb');