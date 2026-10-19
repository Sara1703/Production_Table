import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TableModel = (props) => {
  const { nodes, materials } = useGLTF('models-3d/table.glb')
  return (
    <group {...props} dispose={null}>
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group>
              <group position={[49, -30.5, 44.058]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_Material001_0.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group position={[-25, -1, 7.558]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube002_Material001_0.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group position={[-25, -1, 80.558]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube003_Material001_0.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group position={[-99, -30.5, 44.058]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube001_Material001_0.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group position={[-25, 0.75, 44.058]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.top_Material001_0.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group position={[50.011, -1.06, 7.554]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.bolt002_Material001_0.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group position={[50.011, -1.06, 80.554]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.bolt003_Material001_0.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                position={[-100.009, -1.06, 7.554]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.bolt001_Material001_0.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                position={[-100.009, -1.06, 80.554]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.bolt_Material001_0.geometry}
                  material={materials['Material.001']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default TableModel;

useGLTF.preload("models-3d/table.glb");
