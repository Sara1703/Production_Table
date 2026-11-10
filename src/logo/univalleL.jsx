import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const UnivalleL = (props) => {
  const { nodes, materials } = useGLTF('models-3d/logo/uv3d.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve003.geometry}
        material={materials['SVGMat.003']}
        scale={20.628}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve004.geometry}
        material={materials['SVGMat.003']}
        scale={20.628}
      />
    </group>
  )
}

export default UnivalleL;
useGLTF.preload('models-3d/logo/uv3d.glb');