import React, { useEffect, useRef } from 'react'
import { Html, useGLTF } from '@react-three/drei'

const PTable_redonde = (props) =>{
  const { nodes, materials } = useGLTF('models-3d/table_ronde.glb')

  
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table_RoundSmall2.geometry}
        material={materials.Wood}
        material-color= "#d1cdcd"
      />
    </group>
  )
}


export default PTable_redonde;
useGLTF.preload('models-3d/table_ronde.glb');