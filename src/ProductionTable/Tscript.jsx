import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Tscript = (props) => {
    const { nodes, materials } = useGLTF('models-3d/preproduccion.glb')

    return (
    <group {...props} dispose={null}>
      <group>
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cubierta_inferior.geometry}
            material={materials['material_#b30819']}
            position={[0, 0.055, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.paginas.geometry}
            material={materials['material_#ffffff']}
            position={[0.025, 0.16, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.borde_pagina.geometry}
            material={materials['material_#c9cdd2']}
            position={[0.025, 0.105, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.borde_pagina_1.geometry}
            material={materials['material_#c9cdd2']}
            position={[0.025, 0.133, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.borde_pagina_2.geometry}
            material={materials['material_#c9cdd2']}
            position={[0.025, 0.161, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.borde_pagina_3.geometry}
            material={materials['material_#c9cdd2']}
            position={[0.025, 0.189, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.borde_pagina_4.geometry}
            material={materials['material_#c9cdd2']}
            position={[0.025, 0.217, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cubierta_superior.geometry}
            material={materials['material_#b30819']}
            position={[0, 0.27, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lomo.geometry}
            material={materials['material_#830711']}
            position={[-0.79, 0.15, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rotulo_GUION.geometry}
            material={materials['material_#f9fafb']}
            position={[0, 0.31, -0.32]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.linea_portada.geometry}
            material={materials['material_#f9fafb']}
            position={[0, 0.308, 0.05]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.linea_portada_1.geometry}
            material={materials['material_#f9fafb']}
            position={[0, 0.308, 0.17]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.linea_portada_2.geometry}
            material={materials['material_#f9fafb']}
            position={[0, 0.308, 0.29]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.hoja_suelta.geometry}
            material={materials['material_#f4f4ef']}
            position={[0.08, 0.236, 0.04]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.costura.geometry}
            material={materials['material_#d34d57']}
            position={[-0.7, 0.305, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.costura_1.geometry}
            material={materials['material_#d34d57']}
            position={[0.7, 0.305, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.separador.geometry}
            material={materials['material_#242a31']}
            position={[0.84, 0.14, -0.55]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.separador_1.geometry}
            material={materials['material_#242a31']}
            position={[0.84, 0.14, -0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.separador_2.geometry}
            material={materials['material_#242a31']}
            position={[0.84, 0.14, 0.49]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lapiz.geometry}
            material={materials['material_#242a31']}
            position={[1.04, 0.08, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.punta_lapiz.geometry}
            material={materials['material_#89949f']}
            position={[1.04, 0.08, 0.83]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.clip_lapiz.geometry}
            material={materials['material_#89949f']}
            position={[1.06, 0.114, -0.445]}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  )
}

export default Tscript;
useGLTF.preload('models-3d/preproduccion.glb');

