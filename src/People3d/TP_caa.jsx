import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TP_caa = (props) => {
  const { nodes, materials } = useGLTF('models-3d/people3d/P_caa.glb')
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
            material={materials['material_#36536e']}
            position={[0, -0.03, 0]}
            scale={[1, 1, 0.72]}
          />
          <mesh
            geometry={nodes.cuello.geometry}
            material={materials['material_#75452e']}
            position={[0, 1.22, 0]}
          />
          <mesh
            geometry={nodes.cabeza.geometry}
            material={materials['material_#75452e']}
            position={[0, 1.49, 0.025]}
            scale={[0.9, 1.02, 0.86]}
          />
          <mesh
            geometry={nodes.oreja.geometry}
            material={materials['material_#75452e']}
            position={[-0.24, 1.47, 0.025]}
            scale={[0.55, 1, 0.7]}
          />
          <mesh
            geometry={nodes.oreja_1.geometry}
            material={materials['material_#75452e']}
            position={[0.24, 1.47, 0.025]}
            scale={[0.55, 1, 0.7]}
          />
          <mesh
            geometry={nodes.cabello.geometry}
            material={materials['material_#11151c']}
            position={[0, 1.52, -0.005]}
            rotation={[-0.14, 0, 0]}
            scale={[0.94, 1, 0.88]}
          />
          <mesh
            geometry={nodes.rizo.geometry}
            material={materials['material_#11151c']}
            position={[0.096, 1.76, -0.035]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_1.geometry}
            material={materials['material_#11151c']}
            position={[0.068, 1.76, 0.033]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_2.geometry}
            material={materials['material_#11151c']}
            position={[0, 1.76, 0.061]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_3.geometry}
            material={materials['material_#11151c']}
            position={[-0.068, 1.76, 0.033]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_4.geometry}
            material={materials['material_#11151c']}
            position={[-0.096, 1.76, -0.035]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_5.geometry}
            material={materials['material_#11151c']}
            position={[-0.068, 1.76, -0.103]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_6.geometry}
            material={materials['material_#11151c']}
            position={[0, 1.76, -0.131]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_7.geometry}
            material={materials['material_#11151c']}
            position={[0.068, 1.76, -0.103]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_8.geometry}
            material={materials['material_#11151c']}
            position={[0.157, 1.695, -0.035]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_9.geometry}
            material={materials['material_#11151c']}
            position={[0.111, 1.695, 0.076]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_10.geometry}
            material={materials['material_#11151c']}
            position={[0, 1.695, 0.122]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_11.geometry}
            material={materials['material_#11151c']}
            position={[-0.111, 1.695, 0.076]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_12.geometry}
            material={materials['material_#11151c']}
            position={[-0.157, 1.695, -0.035]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_13.geometry}
            material={materials['material_#11151c']}
            position={[-0.111, 1.695, -0.146]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_14.geometry}
            material={materials['material_#11151c']}
            position={[0, 1.695, -0.192]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_15.geometry}
            material={materials['material_#11151c']}
            position={[0.111, 1.695, -0.146]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_16.geometry}
            material={materials['material_#11151c']}
            position={[0.193, 1.63, -0.035]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_17.geometry}
            material={materials['material_#11151c']}
            position={[0.136, 1.63, 0.101]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_18.geometry}
            material={materials['material_#11151c']}
            position={[0, 1.63, 0.158]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_19.geometry}
            material={materials['material_#11151c']}
            position={[-0.136, 1.63, 0.101]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_20.geometry}
            material={materials['material_#11151c']}
            position={[-0.193, 1.63, -0.035]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_21.geometry}
            material={materials['material_#11151c']}
            position={[-0.136, 1.63, -0.171]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_22.geometry}
            material={materials['material_#11151c']}
            position={[0, 1.63, -0.228]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            geometry={nodes.rizo_23.geometry}
            material={materials['material_#11151c']}
            position={[0.136, 1.63, -0.171]}
            scale={[1, 1, 0.95]}
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
            material={materials['material_#11151c']}
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
            material={materials['material_#11151c']}
            position={[0, -0.03, 0]}
          />
          <mesh
            geometry={nodes.nariz.geometry}
            material={materials['material_#75452e']}
            position={[0, 1.435, 0.258]}
            scale={[0.8, 0.85, 1.1]}
          />
          <mesh
            geometry={nodes.sonrisa.geometry}
            material={materials['material_#723e35']}
            position={[0, -0.03, 0]}
          />
          <mesh
            geometry={nodes.pieza.geometry}
            material={materials['material_#242a31']}
            position={[-0.09, 1.5, 0.268]}
            scale={[1, 0.83, 1]}
          />
          <mesh
            geometry={nodes.pieza_1.geometry}
            material={materials['material_#242a31']}
            position={[0.09, 1.5, 0.268]}
            scale={[1, 0.83, 1]}
          />
          <mesh
            geometry={nodes.puente_gafas.geometry}
            material={materials['material_#242a31']}
            position={[0, 1.5, 0.268]}
            rotation={[0, 0, -Math.PI / 2]}
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
            material={materials['material_#36536e']}
            position={[-0.31, 0.98, 0.09]}
            rotation={[2.214, 0.704, 0.364]}
          />
          <mesh
            geometry={nodes.codo.geometry}
            material={materials['material_#75452e']}
            position={[-0.35, 0.87, 0.18]}
          />
          <mesh
            geometry={nodes.antebrazo.geometry}
            material={materials['material_#75452e']}
            position={[-0.285, 0.93, 0.28]}
            rotation={[0.885, -0.254, -0.527]}
          />
          <mesh
            geometry={nodes.mano.geometry}
            material={materials['material_#75452e']}
            position={[-0.22, 0.99, 0.38]}
            scale={[0.8, 1, 0.65]}
          />
          <mesh
            geometry={nodes.manga_1.geometry}
            material={materials['material_#36536e']}
            position={[0.31, 0.98, 0.09]}
            rotation={[2.214, -0.704, -0.364]}
          />
          <mesh
            geometry={nodes.codo_1.geometry}
            material={materials['material_#75452e']}
            position={[0.35, 0.87, 0.18]}
          />
          <mesh
            geometry={nodes.antebrazo_1.geometry}
            material={materials['material_#75452e']}
            position={[0.215, 0.965, 0.37]}
            rotation={[0.91, 0.298, 0.596]}
          />
          <mesh
            geometry={nodes.mano_1.geometry}
            material={materials['material_#75452e']}
            position={[0.08, 1.06, 0.56]}
            scale={[0.8, 1, 0.65]}
          />
          <group position={[0, 1.01, 0.55]} rotation={[-0.6, 0, 0]}>
            <mesh geometry={nodes.carcasa.geometry} material={materials['material_#11151c']} />
            <mesh
              geometry={nodes.camara_tablet.geometry}
              material={materials['material_#89949f']}
              position={[0, 0.18, 0.03]}
            />
            <mesh
              geometry={nodes.interfaz.geometry}
              material={materials['material_#f9fafb']}
              position={[0, 0, 0.028]}
            />
            <mesh
              geometry={nodes.celda_CAA.geometry}
              material={materials['material_#b30819']}
              position={[-0.16, 0.07, 0.038]}
            />
            <mesh
              geometry={nodes.pieza_2.geometry}
              material={materials['material_#f9fafb']}
              position={[-0.16, 0.07, 0.055]}
            />
            <mesh
              geometry={nodes.dialogo.geometry}
              material={materials['material_#f9fafb']}
              position={[-0.14, 0.039, 0.055]}
              rotation={[0, 0, -2.304]}
            />
            <mesh
              geometry={nodes.celda_CAA_1.geometry}
              material={materials['material_#36536e']}
              position={[0, 0.07, 0.038]}
            />
            <mesh
              geometry={nodes.cabeza_pictograma.geometry}
              material={materials['material_#f9fafb']}
              position={[0, 0.088, 0.055]}
            />
            <mesh
              geometry={nodes.cuerpo_pictograma.geometry}
              material={materials['material_#f9fafb']}
              position={[0, 0.055, 0.055]}
            />
            <mesh
              geometry={nodes.celda_CAA_2.geometry}
              material={materials['material_#778c81']}
              position={[0.16, 0.07, 0.038]}
            />
            <mesh
              geometry={nodes.casa.geometry}
              material={materials['material_#f9fafb']}
              position={[0.16, 0.06, 0.055]}
            />
            <mesh
              geometry={nodes.techo.geometry}
              material={materials['material_#f9fafb']}
              position={[0.16, 0.096, 0.055]}
            />
            <mesh
              geometry={nodes.celda_CAA_3.geometry}
              material={materials['material_#36536e']}
              position={[-0.16, -0.05, 0.038]}
            />
            <mesh
              geometry={nodes.pieza_3.geometry}
              material={materials['material_#f9fafb']}
              position={[-0.16, -0.05, 0.055]}
            />
            <mesh
              geometry={nodes.dialogo_1.geometry}
              material={materials['material_#f9fafb']}
              position={[-0.14, -0.081, 0.055]}
              rotation={[0, 0, -2.304]}
            />
            <mesh
              geometry={nodes.celda_CAA_4.geometry}
              material={materials['material_#778c81']}
              position={[0, -0.05, 0.038]}
            />
            <mesh
              geometry={nodes.cabeza_pictograma_1.geometry}
              material={materials['material_#f9fafb']}
              position={[0, -0.032, 0.055]}
            />
            <mesh
              geometry={nodes.cuerpo_pictograma_1.geometry}
              material={materials['material_#f9fafb']}
              position={[0, -0.065, 0.055]}
            />
            <mesh
              geometry={nodes.celda_CAA_5.geometry}
              material={materials['material_#b30819']}
              position={[0.16, -0.05, 0.038]}
            />
            <mesh
              geometry={nodes.casa_1.geometry}
              material={materials['material_#f9fafb']}
              position={[0.16, -0.06, 0.055]}
            />
            <mesh
              geometry={nodes.techo_1.geometry}
              material={materials['material_#f9fafb']}
              position={[0.16, -0.024, 0.055]}
            />
            <mesh
              geometry={nodes.barra_mensaje.geometry}
              material={materials['material_#242a31']}
              position={[0, -0.14, 0.04]}
            />
          </group>
          <mesh
            geometry={nodes.soporte_tablet.geometry}
            material={materials['material_#89949f']}
            position={[0.28, 0.77, 0.315]}
            rotation={[0.774, 0, 0]}
          />
        </group>
      </group>
    </group>
  )
}

export default TP_caa;
useGLTF.preload('models-3d/people3d/P_caa.glb');