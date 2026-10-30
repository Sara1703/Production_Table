import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TP_motriz = (props) => {
  const { nodes, materials } = useGLTF('models-3d/people3d/P_motriz.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.asiento.geometry}
        material={materials['material_#242a31']}
        position={[0, 0.565, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.respaldo.geometry}
        material={materials['material_#242a31']}
        position={[0, 0.885, -0.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rueda.geometry}
        material={materials['material_#11151c']}
        position={[-0.38, 0.445, -0.02]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.aro_impulsion.geometry}
        material={materials['material_#89949f']}
        position={[-0.41, 0.445, -0.02]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.radio.geometry}
        material={materials['material_#89949f']}
        position={[-0.38, 0.445, 0.165]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.radio_1.geometry}
        material={materials['material_#89949f']}
        position={[-0.38, 0.576, 0.111]}
        rotation={[Math.PI / 4, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.radio_2.geometry}
        material={materials['material_#89949f']}
        position={[-0.38, 0.63, -0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.radio_3.geometry}
        material={materials['material_#89949f']}
        position={[-0.38, 0.576, -0.151]}
        rotation={[-Math.PI / 4, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.radio_4.geometry}
        material={materials['material_#89949f']}
        position={[-0.38, 0.445, -0.205]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.radio_5.geometry}
        material={materials['material_#89949f']}
        position={[-0.38, 0.314, -0.151]}
        rotation={[-2.356, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.radio_6.geometry}
        material={materials['material_#89949f']}
        position={[-0.38, 0.26, -0.02]}
        rotation={[0, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.radio_7.geometry}
        material={materials['material_#89949f']}
        position={[-0.38, 0.314, 0.111]}
        rotation={[2.356, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chasis.geometry}
        material={materials['material_#89949f']}
        position={[-0.38, 0.28, 0.24]}
        rotation={[2.051, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rueda_delantera.geometry}
        material={materials['material_#11151c']}
        position={[-0.38, 0.135, 0.5]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.estructura.geometry}
        material={materials['material_#89949f']}
        position={[-0.38, 0.715, -0.25]}
        rotation={[0, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.apoyabrazos.geometry}
        material={materials['material_#242a31']}
        position={[-0.38, 0.865, -0.045]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rueda_1.geometry}
        material={materials['material_#11151c']}
        position={[0.38, 0.445, -0.02]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.aro_impulsion_1.geometry}
        material={materials['material_#89949f']}
        position={[0.41, 0.445, -0.02]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.radio_8.geometry}
        material={materials['material_#89949f']}
        position={[0.38, 0.445, 0.165]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.radio_9.geometry}
        material={materials['material_#89949f']}
        position={[0.38, 0.576, 0.111]}
        rotation={[Math.PI / 4, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.radio_10.geometry}
        material={materials['material_#89949f']}
        position={[0.38, 0.63, -0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.radio_11.geometry}
        material={materials['material_#89949f']}
        position={[0.38, 0.576, -0.151]}
        rotation={[-Math.PI / 4, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.radio_12.geometry}
        material={materials['material_#89949f']}
        position={[0.38, 0.445, -0.205]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.radio_13.geometry}
        material={materials['material_#89949f']}
        position={[0.38, 0.314, -0.151]}
        rotation={[-2.356, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.radio_14.geometry}
        material={materials['material_#89949f']}
        position={[0.38, 0.26, -0.02]}
        rotation={[0, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.radio_15.geometry}
        material={materials['material_#89949f']}
        position={[0.38, 0.314, 0.111]}
        rotation={[2.356, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chasis_1.geometry}
        material={materials['material_#89949f']}
        position={[0.38, 0.28, 0.24]}
        rotation={[2.051, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rueda_delantera_1.geometry}
        material={materials['material_#11151c']}
        position={[0.38, 0.135, 0.5]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.estructura_1.geometry}
        material={materials['material_#89949f']}
        position={[0.38, 0.715, -0.25]}
        rotation={[0, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.apoyabrazos_1.geometry}
        material={materials['material_#242a31']}
        position={[0.38, 0.865, -0.045]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.reposapies.geometry}
        material={materials['material_#242a31']}
        position={[0, 0.155, 0.55]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.torso.geometry}
        material={materials['material_#7e4148']}
        position={[0, 0.015, 0]}
        scale={[1, 1, 0.72]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cuello.geometry}
        material={materials['material_#e7b58d']}
        position={[0, 1.265, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cabeza.geometry}
        material={materials['material_#e7b58d']}
        position={[0, 1.535, 0.025]}
        scale={[0.9, 1.02, 0.86]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.oreja.geometry}
        material={materials['material_#e7b58d']}
        position={[-0.24, 1.515, 0.025]}
        scale={[0.55, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.oreja_1.geometry}
        material={materials['material_#e7b58d']}
        position={[0.24, 1.515, 0.025]}
        scale={[0.55, 1, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cabello.geometry}
        material={materials['material_#48382d']}
        position={[0, 1.565, -0.005]}
        rotation={[-0.14, 0, 0]}
        scale={[0.94, 1, 0.88]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo.geometry}
        material={materials['material_#48382d']}
        position={[0.096, 1.805, -0.035]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_1.geometry}
        material={materials['material_#48382d']}
        position={[0.068, 1.805, 0.033]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_2.geometry}
        material={materials['material_#48382d']}
        position={[0, 1.805, 0.061]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_3.geometry}
        material={materials['material_#48382d']}
        position={[-0.068, 1.805, 0.033]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_4.geometry}
        material={materials['material_#48382d']}
        position={[-0.096, 1.805, -0.035]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_5.geometry}
        material={materials['material_#48382d']}
        position={[-0.068, 1.805, -0.103]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_6.geometry}
        material={materials['material_#48382d']}
        position={[0, 1.805, -0.131]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_7.geometry}
        material={materials['material_#48382d']}
        position={[0.068, 1.805, -0.103]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_8.geometry}
        material={materials['material_#48382d']}
        position={[0.157, 1.74, -0.035]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_9.geometry}
        material={materials['material_#48382d']}
        position={[0.111, 1.74, 0.076]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_10.geometry}
        material={materials['material_#48382d']}
        position={[0, 1.74, 0.122]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_11.geometry}
        material={materials['material_#48382d']}
        position={[-0.111, 1.74, 0.076]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_12.geometry}
        material={materials['material_#48382d']}
        position={[-0.157, 1.74, -0.035]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_13.geometry}
        material={materials['material_#48382d']}
        position={[-0.111, 1.74, -0.146]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_14.geometry}
        material={materials['material_#48382d']}
        position={[0, 1.74, -0.192]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_15.geometry}
        material={materials['material_#48382d']}
        position={[0.111, 1.74, -0.146]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_16.geometry}
        material={materials['material_#48382d']}
        position={[0.193, 1.675, -0.035]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_17.geometry}
        material={materials['material_#48382d']}
        position={[0.136, 1.675, 0.101]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_18.geometry}
        material={materials['material_#48382d']}
        position={[0, 1.675, 0.158]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_19.geometry}
        material={materials['material_#48382d']}
        position={[-0.136, 1.675, 0.101]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_20.geometry}
        material={materials['material_#48382d']}
        position={[-0.193, 1.675, -0.035]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_21.geometry}
        material={materials['material_#48382d']}
        position={[-0.136, 1.675, -0.171]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_22.geometry}
        material={materials['material_#48382d']}
        position={[0, 1.675, -0.228]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rizo_23.geometry}
        material={materials['material_#48382d']}
        position={[0.136, 1.675, -0.171]}
        scale={[1, 1, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.moño.geometry}
        material={materials['material_#48382d']}
        position={[0, 1.685, -0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.blanco_ojo.geometry}
        material={materials['material_#f9fafb']}
        position={[-0.09, 1.545, 0.229]}
        scale={[1, 1.15, 0.28]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.iris.geometry}
        material={materials['material_#432b22']}
        position={[-0.09, 1.541, 0.244]}
        scale={[0.85, 1, 0.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pupila.geometry}
        material={materials['material_#11151c']}
        position={[-0.09, 1.541, 0.253]}
        scale={[0.8, 1, 0.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brillo_ojo.geometry}
        material={materials['material_#f9fafb']}
        position={[-0.099, 1.555, 0.259]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ceja.geometry}
        material={materials['material_#48382d']}
        position={[0, 0.015, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.blanco_ojo_1.geometry}
        material={materials['material_#f9fafb']}
        position={[0.09, 1.545, 0.229]}
        scale={[1, 1.15, 0.28]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.iris_1.geometry}
        material={materials['material_#432b22']}
        position={[0.09, 1.541, 0.244]}
        scale={[0.85, 1, 0.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pupila_1.geometry}
        material={materials['material_#11151c']}
        position={[0.09, 1.541, 0.253]}
        scale={[0.8, 1, 0.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brillo_ojo_1.geometry}
        material={materials['material_#f9fafb']}
        position={[0.081, 1.555, 0.259]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ceja_1.geometry}
        material={materials['material_#48382d']}
        position={[0, 0.015, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.nariz.geometry}
        material={materials['material_#e7b58d']}
        position={[0, 1.48, 0.258]}
        scale={[0.8, 0.85, 1.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sonrisa.geometry}
        material={materials['material_#723e35']}
        position={[0, 0.015, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.muslo.geometry}
        material={materials['material_#36536e']}
        position={[-0.13, 0.6, 0.27]}
        rotation={[1.871, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pierna.geometry}
        material={materials['material_#36536e']}
        position={[-0.13, 0.37, 0.46]}
        rotation={[2.989, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.zapato.geometry}
        material={materials['material_#11151c']}
        position={[-0.13, 0.115, 0.56]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.suela.geometry}
        material={materials['material_#f9fafb']}
        position={[-0.13, 0.06, 0.56]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.muslo_1.geometry}
        material={materials['material_#36536e']}
        position={[0.13, 0.6, 0.27]}
        rotation={[1.871, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pierna_1.geometry}
        material={materials['material_#36536e']}
        position={[0.13, 0.37, 0.46]}
        rotation={[2.989, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.zapato_1.geometry}
        material={materials['material_#11151c']}
        position={[0.13, 0.115, 0.56]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.suela_1.geometry}
        material={materials['material_#f9fafb']}
        position={[0.13, 0.06, 0.56]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.manga.geometry}
        material={materials['material_#7e4148']}
        position={[-0.31, 1.025, 0.09]}
        rotation={[2.214, 0.704, 0.364]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.codo.geometry}
        material={materials['material_#e7b58d']}
        position={[-0.35, 0.915, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.antebrazo.geometry}
        material={materials['material_#e7b58d']}
        position={[-0.355, 0.88, 0.24]}
        rotation={[2.09, 0.125, 0.072]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mano.geometry}
        material={materials['material_#e7b58d']}
        position={[-0.36, 0.845, 0.3]}
        scale={[0.8, 1, 0.65]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.manga_1.geometry}
        material={materials['material_#7e4148']}
        position={[0.31, 1.025, 0.09]}
        rotation={[2.214, -0.704, -0.364]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.codo_1.geometry}
        material={materials['material_#e7b58d']}
        position={[0.35, 0.915, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.antebrazo_1.geometry}
        material={materials['material_#e7b58d']}
        position={[0.3, 0.895, 0.29]}
        rotation={[1.531, 0.454, 0.471]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mano_1.geometry}
        material={materials['material_#e7b58d']}
        position={[0.25, 0.875, 0.4]}
        scale={[0.8, 1, 0.65]}
      />
    </group>
  )
}


export default TP_motriz;
useGLTF.preload('models-3d/people3d/P_motriz.glb');


