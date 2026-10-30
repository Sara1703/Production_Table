import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Tclapperboard = (props) => {
  const { nodes, materials } = useGLTF('models-3d/rodaje.glb')
  return (
    <group {...props} dispose={null}>
      <group>
        <group>
          <group position={[0, 0.47, 0]} rotation={[-0.28, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pizarra.geometry}
              material={materials['material_#242a31']}
              position={[0, 0.12, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rotulo_CONTRAPLANO.geometry}
              material={materials['material_#f9fafb']}
              position={[0, 0.43, 0.065]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rotulo_PRODUCCION.geometry}
              material={materials['material_#f9fafb']}
              position={[0, 0.21, 0.065]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rotulo_ESCENA.geometry}
              material={materials['material_#f9fafb']}
              position={[-0.59, 0.04, 0.065]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rotulo_PLANO.geometry}
              material={materials['material_#f9fafb']}
              position={[0, 0.04, 0.065]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rotulo_TOMA.geometry}
              material={materials['material_#f9fafb']}
              position={[0.59, 0.04, 0.065]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.linea.geometry}
              material={materials['material_#f9fafb']}
              position={[0, -0.05, 0.061]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.linea_1.geometry}
              material={materials['material_#f9fafb']}
              position={[0, 0.15, 0.061]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.linea_2.geometry}
              material={materials['material_#f9fafb']}
              position={[0, 0.34, 0.061]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.columna.geometry}
              material={materials['material_#f9fafb']}
              position={[-0.35, -0.03, 0.062]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.columna_1.geometry}
              material={materials['material_#f9fafb']}
              position={[0.35, -0.03, 0.062]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.barra_inferior.geometry}
              material={materials['material_#11151c']}
              position={[0, 0.72, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.franja.geometry}
              material={materials['material_#f9fafb']}
              position={[-0.82, 0.72, 0.071]}
              rotation={[0, 0, -0.3]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.franja_1.geometry}
              material={materials['material_#f9fafb']}
              position={[-0.5, 0.72, 0.071]}
              rotation={[0, 0, -0.3]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.franja_2.geometry}
              material={materials['material_#f9fafb']}
              position={[-0.18, 0.72, 0.071]}
              rotation={[0, 0, -0.3]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.franja_3.geometry}
              material={materials['material_#f9fafb']}
              position={[0.14, 0.72, 0.071]}
              rotation={[0, 0, -0.3]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.franja_4.geometry}
              material={materials['material_#f9fafb']}
              position={[0.46, 0.72, 0.071]}
              rotation={[0, 0, -0.3]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.franja_5.geometry}
              material={materials['material_#f9fafb']}
              position={[0.78, 0.72, 0.071]}
              rotation={[0, 0, -0.3]}
            />
            <group position={[-0.91, 0.82, 0]} rotation={[0, 0, 0.28]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.barra_movil.geometry}
                material={materials['material_#11151c']}
                position={[0.91, 0.09, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.franja_6.geometry}
                material={materials['material_#f9fafb']}
                position={[0.1, 0.09, 0.071]}
                rotation={[0, 0, -0.3]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.franja_7.geometry}
                material={materials['material_#f9fafb']}
                position={[0.42, 0.09, 0.071]}
                rotation={[0, 0, -0.3]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.franja_8.geometry}
                material={materials['material_#f9fafb']}
                position={[0.74, 0.09, 0.071]}
                rotation={[0, 0, -0.3]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.franja_9.geometry}
                material={materials['material_#f9fafb']}
                position={[1.06, 0.09, 0.071]}
                rotation={[0, 0, -0.3]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.franja_10.geometry}
                material={materials['material_#f9fafb']}
                position={[1.38, 0.09, 0.071]}
                rotation={[0, 0, -0.3]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.franja_11.geometry}
                material={materials['material_#f9fafb']}
                position={[1.7, 0.09, 0.071]}
                rotation={[0, 0, -0.3]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.eje.geometry}
              material={materials['material_#89949f']}
              position={[-0.9, 0.81, 0.04]}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.base.geometry}
            material={materials['material_#11151c']}
            position={[0, 0.025, 0]}
          />
        </group>
      </group>
    </group>
  )
}

export default Tclapperboard;
useGLTF.preload('models-3d/rodaje.glb')
