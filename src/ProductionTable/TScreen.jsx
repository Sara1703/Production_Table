import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TScreen = (props) => {
  const { nodes, materials } = useGLTF('models-3d/screen.glb')
  return (
    <group {...props} dispose={null}>
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group position={[0, 1.275, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[2.992, 1, 1]}>
                <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Object_5.geometry} material={materials['Material.002']} />
                <mesh geometry={nodes.Object_6.geometry} material={materials['Material.003']} />
              </group>
              <group
                position={[0, 0.069, 0.121]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[2.992, 0.565, 0.565]}>
                <mesh geometry={nodes.Object_8.geometry} material={materials['Material.001']} />
              </group>
              <group position={[0.004, 0.197, -0.358]} scale={[0.144, 0.151, 0.026]}>
                <mesh geometry={nodes.Object_10.geometry} material={materials['Material.001']} />
              </group>
              <group
                position={[0, 0.588, -0.416]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[2.992, 1, 1]}>
                <mesh geometry={nodes.Object_12.geometry} material={materials['Material.012']} />
              </group>
              <group position={[0.004, 2.394, -0.324]}>
                <mesh geometry={nodes.Object_14.geometry} material={materials['Material.001']} />
              </group>
              <group position={[0.004, 2.397, -0.298]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes.Object_16.geometry} material={materials['Material.013']} />
              </group>
              <group
                position={[0.004, 2.396, -0.286]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.073, 0.008, 0.073]}>
                <mesh geometry={nodes.Object_18.geometry} material={materials['Material.001']} />
              </group>
              <group position={[0.004, 2.396, -0.31]} scale={0.051}>
                <mesh geometry={nodes.Object_20.geometry} material={materials['Material.015']} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default TScreen;
useGLTF.preload('models-3d/screen.glb')
