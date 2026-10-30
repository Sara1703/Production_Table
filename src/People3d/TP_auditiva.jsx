import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


const TP_auditiva = (props) => {
  const { nodes, materials } = useGLTF('models-3d/people3d/P_auditiva.glb')
  return (
    <group {...props} dispose={null}>
      <group>
        <group>
          <mesh
            geometry={nodes.asiento.geometry}
            material={materials['material_#242a31']}
            position={[0, 0.52, 0]}
          />
          <mesh
            geometry={nodes.respaldo.geometry}
            material={materials['material_#242a31']}
            position={[0, 0.84, -0.24]}
          />
          <mesh
            geometry={nodes.pata_silla.geometry}
            material={materials['material_#89949f']}
            position={[-0.2, 0.26, -0.18]}
          />
          <mesh
            geometry={nodes.pata_silla_1.geometry}
            material={materials['material_#89949f']}
            position={[-0.2, 0.26, 0.18]}
          />
          <mesh
            geometry={nodes.pata_silla_2.geometry}
            material={materials['material_#89949f']}
            position={[0.2, 0.26, -0.18]}
          />
          <mesh
            geometry={nodes.pata_silla_3.geometry}
            material={materials['material_#89949f']}
            position={[0.2, 0.26, 0.18]}
          />
          <mesh
            geometry={nodes.torso.geometry}
            material={materials['material_#b30819']}
            position={[0, -0.03, 0]}
            scale={[1, 1, 0.72]}
          />
          <mesh
            geometry={nodes.cuello.geometry}
            material={materials['material_#b87950']}
            position={[0, 1.22, 0]}
          />
          <mesh
            geometry={nodes.cabeza.geometry}
            material={materials['material_#b87950']}
            position={[0, 1.49, 0.025]}
            scale={[0.9, 1.02, 0.86]}
          />
          <mesh
            geometry={nodes.oreja.geometry}
            material={materials['material_#b87950']}
            position={[-0.24, 1.47, 0.025]}
            scale={[0.55, 1, 0.7]}
          />
          <mesh
            geometry={nodes.oreja_1.geometry}
            material={materials['material_#b87950']}
            position={[0.24, 1.47, 0.025]}
            scale={[0.55, 1, 0.7]}
          />
          <mesh
            geometry={nodes.cabello.geometry}
            material={materials['material_#3e2822']}
            position={[0, 1.52, -0.005]}
            rotation={[-0.14, 0, 0]}
            scale={[0.94, 1, 0.88]}
          />
          <mesh
            geometry={nodes.mechon_largo.geometry}
            material={materials['material_#3e2822']}
            position={[-0.2, 1.32, -0.09]}
            scale={[0.6, 1.9, 0.8]}
          />
          <mesh
            geometry={nodes.onda_cabello.geometry}
            material={materials['material_#624438']}
            position={[0, -0.03, 0]}
          />
          <mesh
            geometry={nodes.mechon_largo_1.geometry}
            material={materials['material_#3e2822']}
            position={[0.2, 1.32, -0.09]}
            scale={[0.6, 1.9, 0.8]}
          />
          <mesh
            geometry={nodes.onda_cabello_1.geometry}
            material={materials['material_#624438']}
            position={[0, -0.03, 0]}
          />
          <mesh
            geometry={nodes.blanco_ojo.geometry}
            material={materials['material_#f9fafb']}
            position={[-0.09, 1.5, 0.229]}
            scale={[1, 1.15, 0.28]}
          />
          <mesh
            geometry={nodes.iris.geometry}
            material={materials['material_#432b22']}
            position={[-0.09, 1.496, 0.244]}
            scale={[0.85, 1, 0.3]}
          />
          <mesh
            geometry={nodes.pupila.geometry}
            material={materials['material_#11151c']}
            position={[-0.09, 1.496, 0.253]}
            scale={[0.8, 1, 0.3]}
          />
          <mesh
            geometry={nodes.brillo_ojo.geometry}
            material={materials['material_#f9fafb']}
            position={[-0.099, 1.51, 0.259]}
          />
          <mesh
            geometry={nodes.ceja.geometry}
            material={materials['material_#3e2822']}
            position={[0, -0.03, 0]}
          />
          <mesh
            geometry={nodes.blanco_ojo_1.geometry}
            material={materials['material_#f9fafb']}
            position={[0.09, 1.5, 0.229]}
            scale={[1, 1.15, 0.28]}
          />
          <mesh
            geometry={nodes.iris_1.geometry}
            material={materials['material_#432b22']}
            position={[0.09, 1.496, 0.244]}
            scale={[0.85, 1, 0.3]}
          />
          <mesh
            geometry={nodes.pupila_1.geometry}
            material={materials['material_#11151c']}
            position={[0.09, 1.496, 0.253]}
            scale={[0.8, 1, 0.3]}
          />
          <mesh
            geometry={nodes.brillo_ojo_1.geometry}
            material={materials['material_#f9fafb']}
            position={[0.081, 1.51, 0.259]}
          />
          <mesh
            geometry={nodes.ceja_1.geometry}
            material={materials['material_#3e2822']}
            position={[0, -0.03, 0]}
          />
          <mesh
            geometry={nodes.nariz.geometry}
            material={materials['material_#b87950']}
            position={[0, 1.435, 0.258]}
            scale={[0.8, 0.85, 1.1]}
          />
          <mesh
            geometry={nodes.sonrisa.geometry}
            material={materials['material_#723e35']}
            position={[0, -0.03, 0]}
          />
          <mesh
            geometry={nodes.muslo.geometry}
            material={materials['material_#36536e']}
            position={[-0.13, 0.555, 0.27]}
            rotation={[1.871, 0, 0]}
          />
          <mesh
            geometry={nodes.pierna.geometry}
            material={materials['material_#36536e']}
            position={[-0.13, 0.325, 0.46]}
            rotation={[2.989, 0, 0]}
          />
          <mesh
            geometry={nodes.zapato.geometry}
            material={materials['material_#11151c']}
            position={[-0.13, 0.07, 0.56]}
          />
          <mesh
            geometry={nodes.suela.geometry}
            material={materials['material_#f9fafb']}
            position={[-0.13, 0.015, 0.56]}
          />
          <mesh
            geometry={nodes.muslo_1.geometry}
            material={materials['material_#36536e']}
            position={[0.13, 0.555, 0.27]}
            rotation={[1.871, 0, 0]}
          />
          <mesh
            geometry={nodes.pierna_1.geometry}
            material={materials['material_#36536e']}
            position={[0.13, 0.325, 0.46]}
            rotation={[2.989, 0, 0]}
          />
          <mesh
            geometry={nodes.zapato_1.geometry}
            material={materials['material_#11151c']}
            position={[0.13, 0.07, 0.56]}
          />
          <mesh
            geometry={nodes.suela_1.geometry}
            material={materials['material_#f9fafb']}
            position={[0.13, 0.015, 0.56]}
          />
          <mesh
            geometry={nodes.manga.geometry}
            material={materials['material_#b30819']}
            position={[-0.31, 0.98, 0.09]}
            rotation={[2.214, 0.704, 0.364]}
          />
          <mesh
            geometry={nodes.codo.geometry}
            material={materials['material_#b87950']}
            position={[-0.35, 0.87, 0.18]}
          />
          <mesh
            geometry={nodes.antebrazo.geometry}
            material={materials['material_#b87950']}
            position={[-0.31, 1.04, 0.265]}
            rotation={[0.454, -0.048, -0.208]}
          />
          <mesh
            geometry={nodes.mano.geometry}
            material={materials['material_#b87950']}
            position={[-0.27, 1.21, 0.35]}
            scale={[0.8, 1, 0.65]}
          />
          <mesh
            geometry={nodes.manga_1.geometry}
            material={materials['material_#b30819']}
            position={[0.31, 0.98, 0.09]}
            rotation={[2.214, -0.704, -0.364]}
          />
          <mesh
            geometry={nodes.codo_1.geometry}
            material={materials['material_#b87950']}
            position={[0.35, 0.87, 0.18]}
          />
          <mesh
            geometry={nodes.antebrazo_1.geometry}
            material={materials['material_#b87950']}
            position={[0.335, 1.09, 0.225]}
            rotation={[0.201, 0.007, 0.067]}
          />
          <mesh
            geometry={nodes.mano_1.geometry}
            material={materials['material_#b87950']}
            position={[0.32, 1.31, 0.27]}
            scale={[0.8, 1, 0.65]}
          />
          <mesh
            geometry={nodes.dedo.geometry}
            material={materials['material_#b87950']}
            position={[-0.315, 1.27, 0.355]}
            rotation={[0.083, 0, 0]}
          />
          <mesh
            geometry={nodes.dedo_1.geometry}
            material={materials['material_#b87950']}
            position={[-0.285, 1.27, 0.355]}
            rotation={[0.083, 0, 0]}
          />
          <mesh
            geometry={nodes.dedo_2.geometry}
            material={materials['material_#b87950']}
            position={[-0.255, 1.27, 0.355]}
            rotation={[0.083, 0, 0]}
          />
          <mesh
            geometry={nodes.dedo_3.geometry}
            material={materials['material_#b87950']}
            position={[-0.225, 1.27, 0.355]}
            rotation={[0.083, 0, 0]}
          />
          <mesh
            geometry={nodes.dedo_4.geometry}
            material={materials['material_#b87950']}
            position={[0.275, 1.37, 0.275]}
            rotation={[0.083, 0, 0]}
          />
          <mesh
            geometry={nodes.dedo_5.geometry}
            material={materials['material_#b87950']}
            position={[0.305, 1.37, 0.275]}
            rotation={[0.083, 0, 0]}
          />
          <mesh
            geometry={nodes.dedo_6.geometry}
            material={materials['material_#b87950']}
            position={[0.335, 1.37, 0.275]}
            rotation={[0.083, 0, 0]}
          />
          <mesh
            geometry={nodes.dedo_7.geometry}
            material={materials['material_#b87950']}
            position={[0.365, 1.37, 0.275]}
            rotation={[0.083, 0, 0]}
          />
        </group>
      </group>
    </group>
  )
}

export default TP_auditiva;

useGLTF.preload('models-3d/people3d/P_auditiva.glb');


