import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TP_visual = (props) => {
  const { nodes, materials } = useGLTF('models-3d/people3d/P_visual.glb')
  return (
    <group {...props} dispose={null}>
      <group>
        <group>
          <mesh
            geometry={nodes.asiento.geometry}
            material={materials['material_#242a31']}
            position={[0, 0.548, 0]}
          />
          <mesh
            geometry={nodes.respaldo.geometry}
            material={materials['material_#242a31']}
            position={[0, 0.868, -0.24]}
          />
          <mesh
            geometry={nodes.pata_silla.geometry}
            material={materials['material_#89949f']}
            position={[-0.2, 0.288, -0.18]}
          />
          <mesh
            geometry={nodes.pata_silla_1.geometry}
            material={materials['material_#89949f']}
            position={[-0.2, 0.288, 0.18]}
          />
          <mesh
            geometry={nodes.pata_silla_2.geometry}
            material={materials['material_#89949f']}
            position={[0.2, 0.288, -0.18]}
          />
          <mesh
            geometry={nodes.pata_silla_3.geometry}
            material={materials['material_#89949f']}
            position={[0.2, 0.288, 0.18]}
          />
          <mesh
            geometry={nodes.torso.geometry}
            material={materials['material_#5d6b60']}
            position={[0, -0.002, 0]}
            scale={[1, 1, 0.72]}
          />
          <mesh
            geometry={nodes.cuello.geometry}
            material={materials['material_#e7b58d']}
            position={[0, 1.248, 0]}
          />
          <mesh
            geometry={nodes.cabeza.geometry}
            material={materials['material_#e7b58d']}
            position={[0, 1.518, 0.025]}
            scale={[0.9, 1.02, 0.86]}
          />
          <mesh
            geometry={nodes.oreja.geometry}
            material={materials['material_#e7b58d']}
            position={[-0.24, 1.498, 0.025]}
            scale={[0.55, 1, 0.7]}
          />
          <mesh
            geometry={nodes.oreja_1.geometry}
            material={materials['material_#e7b58d']}
            position={[0.24, 1.498, 0.025]}
            scale={[0.55, 1, 0.7]}
          />
          <mesh
            geometry={nodes.cabello.geometry}
            material={materials['material_#242a31']}
            position={[0, 1.548, -0.005]}
            rotation={[-0.14, 0, 0]}
            scale={[0.94, 1, 0.88]}
          />
          <mesh
            geometry={nodes.mechon.geometry}
            material={materials['material_#242a31']}
            position={[-0.16, 1.718, 0.1]}
            scale={[1, 0.6, 0.85]}
          />
          <mesh
            geometry={nodes.mechon_1.geometry}
            material={materials['material_#242a31']}
            position={[-0.09, 1.718, 0.1]}
            scale={[1, 0.6, 0.85]}
          />
          <mesh
            geometry={nodes.mechon_2.geometry}
            material={materials['material_#242a31']}
            position={[-0.02, 1.718, 0.1]}
            scale={[1, 0.6, 0.85]}
          />
          <mesh
            geometry={nodes.mechon_3.geometry}
            material={materials['material_#242a31']}
            position={[0.05, 1.718, 0.1]}
            scale={[1, 0.6, 0.85]}
          />
          <mesh
            geometry={nodes.mechon_4.geometry}
            material={materials['material_#242a31']}
            position={[0.12, 1.718, 0.1]}
            scale={[1, 0.6, 0.85]}
          />
          <mesh
            geometry={nodes.blanco_ojo.geometry}
            material={materials['material_#f9fafb']}
            position={[-0.09, 1.528, 0.229]}
            scale={[1, 1.15, 0.28]}
          />
          <mesh
            geometry={nodes.iris.geometry}
            material={materials['material_#432b22']}
            position={[-0.09, 1.524, 0.244]}
            scale={[0.85, 1, 0.3]}
          />
          <mesh
            geometry={nodes.pupila.geometry}
            material={materials['material_#11151c']}
            position={[-0.09, 1.524, 0.253]}
            scale={[0.8, 1, 0.3]}
          />
          <mesh
            geometry={nodes.brillo_ojo.geometry}
            material={materials['material_#f9fafb']}
            position={[-0.099, 1.538, 0.259]}
          />
          <mesh
            geometry={nodes.ceja.geometry}
            material={materials['material_#242a31']}
            position={[0, -0.002, 0]}
          />
          <mesh
            geometry={nodes.blanco_ojo_1.geometry}
            material={materials['material_#f9fafb']}
            position={[0.09, 1.528, 0.229]}
            scale={[1, 1.15, 0.28]}
          />
          <mesh
            geometry={nodes.iris_1.geometry}
            material={materials['material_#432b22']}
            position={[0.09, 1.524, 0.244]}
            scale={[0.85, 1, 0.3]}
          />
          <mesh
            geometry={nodes.pupila_1.geometry}
            material={materials['material_#11151c']}
            position={[0.09, 1.524, 0.253]}
            scale={[0.8, 1, 0.3]}
          />
          <mesh
            geometry={nodes.brillo_ojo_1.geometry}
            material={materials['material_#f9fafb']}
            position={[0.081, 1.538, 0.259]}
          />
          <mesh
            geometry={nodes.ceja_1.geometry}
            material={materials['material_#242a31']}
            position={[0, -0.002, 0]}
          />
          <mesh
            geometry={nodes.nariz.geometry}
            material={materials['material_#e7b58d']}
            position={[0, 1.463, 0.258]}
            scale={[0.8, 0.85, 1.1]}
          />
          <mesh
            geometry={nodes.sonrisa.geometry}
            material={materials['material_#723e35']}
            position={[0, -0.002, 0]}
          />
          <group position={[0, -0.002, 0]}>
            <mesh
              geometry={nodes.montura_oscura.geometry}
              material={materials['material_#11151c']}
              position={[-0.09, 1.53, 0.279]}
            />
            <mesh
              geometry={nodes.lente_oscura.geometry}
              material={materials['material_#26313f']}
              position={[-0.09, 1.53, 0.299]}
            />
            <mesh
              geometry={nodes.patilla.geometry}
              material={materials['material_#11151c']}
              position={[-0.2, 1.545, 0.148]}
              rotation={[-1.539, -0.259, 0.267]}
            />
            <mesh
              geometry={nodes.montura_oscura_1.geometry}
              material={materials['material_#11151c']}
              position={[0.09, 1.53, 0.279]}
            />
            <mesh
              geometry={nodes.lente_oscura_1.geometry}
              material={materials['material_#26313f']}
              position={[0.09, 1.53, 0.299]}
            />
            <mesh
              geometry={nodes.patilla_1.geometry}
              material={materials['material_#11151c']}
              position={[0.2, 1.545, 0.148]}
              rotation={[-1.539, 0.259, -0.267]}
            />
            <mesh
              geometry={nodes.puente_gafas_oscuras.geometry}
              material={materials['material_#11151c']}
              position={[0, 1.55, 0.285]}
              rotation={[0, 0, -Math.PI / 2]}
            />
          </group>
          <mesh
            geometry={nodes.muslo.geometry}
            material={materials['material_#36536e']}
            position={[-0.13, 0.583, 0.27]}
            rotation={[1.871, 0, 0]}
          />
          <mesh
            geometry={nodes.pierna.geometry}
            material={materials['material_#36536e']}
            position={[-0.13, 0.353, 0.46]}
            rotation={[2.989, 0, 0]}
          />
          <mesh
            geometry={nodes.zapato.geometry}
            material={materials['material_#11151c']}
            position={[-0.13, 0.098, 0.56]}
          />
          <mesh
            geometry={nodes.suela.geometry}
            material={materials['material_#f9fafb']}
            position={[-0.13, 0.043, 0.56]}
          />
          <mesh
            geometry={nodes.muslo_1.geometry}
            material={materials['material_#36536e']}
            position={[0.13, 0.583, 0.27]}
            rotation={[1.871, 0, 0]}
          />
          <mesh
            geometry={nodes.pierna_1.geometry}
            material={materials['material_#36536e']}
            position={[0.13, 0.353, 0.46]}
            rotation={[2.989, 0, 0]}
          />
          <mesh
            geometry={nodes.zapato_1.geometry}
            material={materials['material_#11151c']}
            position={[0.13, 0.098, 0.56]}
          />
          <mesh
            geometry={nodes.suela_1.geometry}
            material={materials['material_#f9fafb']}
            position={[0.13, 0.043, 0.56]}
          />
          <mesh
            geometry={nodes.manga.geometry}
            material={materials['material_#5d6b60']}
            position={[-0.31, 1.008, 0.09]}
            rotation={[2.214, 0.704, 0.364]}
          />
          <mesh
            geometry={nodes.codo.geometry}
            material={materials['material_#e7b58d']}
            position={[-0.35, 0.898, 0.18]}
          />
          <mesh
            geometry={nodes.antebrazo.geometry}
            material={materials['material_#e7b58d']}
            position={[-0.355, 0.863, 0.24]}
            rotation={[2.09, 0.125, 0.072]}
          />
          <mesh
            geometry={nodes.mano.geometry}
            material={materials['material_#e7b58d']}
            position={[-0.36, 0.828, 0.3]}
            scale={[0.8, 1, 0.65]}
          />
          <mesh
            geometry={nodes.manga_1.geometry}
            material={materials['material_#5d6b60']}
            position={[0.31, 1.008, 0.09]}
            rotation={[2.214, -0.704, -0.364]}
          />
          <mesh
            geometry={nodes.codo_1.geometry}
            material={materials['material_#e7b58d']}
            position={[0.35, 0.898, 0.18]}
          />
          <mesh
            geometry={nodes.antebrazo_1.geometry}
            material={materials['material_#e7b58d']}
            position={[0.3, 0.878, 0.29]}
            rotation={[1.531, 0.454, 0.471]}
          />
          <mesh
            geometry={nodes.mano_1.geometry}
            material={materials['material_#e7b58d']}
            position={[0.25, 0.858, 0.4]}
            scale={[0.8, 1, 0.65]}
          />
          <mesh
            geometry={nodes.baston_blanco.geometry}
            material={materials['material_#f9fafb']}
            position={[-0.455, 0.483, 0.54]}
            rotation={[2.386, 0.671, 0.275]}
          />
          <mesh
            geometry={nodes.punta_baston.geometry}
            material={materials['material_#b30819']}
            position={[-0.57, 0.068, 0.815]}
            rotation={[2.13, 0.873, 0.506]}
          />
        </group>
      </group>
    </group>
  )
}

export default TP_visual;
useGLTF.preload('models-3d/people3d/P_visual.glb');
