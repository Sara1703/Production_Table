import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TableModel = (props) => {
  const { nodes, materials } = useGLTF('models-3d/table.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tablero.geometry}
        material={materials['material_#d9dcdf']}
        position={[0, -0.11, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.borde_redondeado.geometry}
        material={materials['material_#d9dcdf']}
        position={[0, -0.08, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.superficie.geometry}
        material={materials['material_#d9dcdf']}
        position={[0, -0.009, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.guia_circular.geometry}
        material={materials['material_#a8afb6']}
        position={[0, 0.012, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pata.geometry}
        material={materials['material_#242a31']}
        position={[-3.2, -1.02, -2.9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pata_1.geometry}
        material={materials['material_#242a31']}
        position={[-3.2, -1.02, 2.9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pata_2.geometry}
        material={materials['material_#242a31']}
        position={[3.2, -1.02, -2.9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pata_3.geometry}
        material={materials['material_#242a31']}
        position={[3.2, -1.02, 2.9]}
      />
    </group>
  )
}


export default TableModel;

useGLTF.preload("models-3d/table.glb");
