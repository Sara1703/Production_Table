import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TPosp = (props) => {

    const group = useRef()
    const { nodes, materials } = useGLTF('models-3d/posproduccion.glb')
    return (
    <group {...props} dispose={null}>
      <group>
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.base.geometry}
            material={materials['material_#242a31']}
            position={[0, 0.03, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.soporte.geometry}
            material={materials['material_#89949f']}
            position={[0, 0.28, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.marco.geometry}
            material={materials['material_#242a31']}
            position={[0, 1.05, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pantalla.geometry}
            material={nodes.pantalla.material}
            position={[0, 1.05, 0.078]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.barra_herramientas.geometry}
            material={nodes.barra_herramientas.material}
            position={[0, 1.526, 0.08]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cielo.geometry}
            material={nodes.cielo.material}
            position={[-0.26, 1.209, 0.084]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cordillera.geometry}
            material={nodes.cordillera.material}
            position={[-0.26, 1.209, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cordillera_1.geometry}
            material={nodes.cordillera_1.material}
            position={[-0.26, 1.209, 0.088]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.parque.geometry}
            material={nodes.parque.material}
            position={[-0.26, 0.999, 0.09]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.edificio.geometry}
            material={nodes.edificio.material}
            position={[-0.759, 1.091, 0.092]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.edificio_1.geometry}
            material={nodes.edificio_1.material}
            position={[-0.661, 1.102, 0.092]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana.geometry}
            material={nodes.ventana.material}
            position={[-0.676, 1.074, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_1.geometry}
            material={nodes.ventana_1.material}
            position={[-0.646, 1.074, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_2.geometry}
            material={nodes.ventana_2.material}
            position={[-0.676, 1.097, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_3.geometry}
            material={nodes.ventana_3.material}
            position={[-0.646, 1.097, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_4.geometry}
            material={nodes.ventana_4.material}
            position={[-0.676, 1.121, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_5.geometry}
            material={nodes.ventana_5.material}
            position={[-0.646, 1.121, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.edificio_2.geometry}
            material={nodes.edificio_2.material}
            position={[-0.564, 1.112, 0.092]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_6.geometry}
            material={nodes.ventana_6.material}
            position={[-0.579, 1.074, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_7.geometry}
            material={nodes.ventana_7.material}
            position={[-0.549, 1.074, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_8.geometry}
            material={nodes.ventana_8.material}
            position={[-0.579, 1.097, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_9.geometry}
            material={nodes.ventana_9.material}
            position={[-0.549, 1.097, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_10.geometry}
            material={nodes.ventana_10.material}
            position={[-0.579, 1.121, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_11.geometry}
            material={nodes.ventana_11.material}
            position={[-0.549, 1.121, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.edificio_3.geometry}
            material={nodes.edificio_3.material}
            position={[-0.466, 1.123, 0.092]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.edificio_4.geometry}
            material={nodes.edificio_4.material}
            position={[-0.369, 1.091, 0.092]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_12.geometry}
            material={nodes.ventana_12.material}
            position={[-0.384, 1.074, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_13.geometry}
            material={nodes.ventana_13.material}
            position={[-0.354, 1.074, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_14.geometry}
            material={nodes.ventana_14.material}
            position={[-0.384, 1.097, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_15.geometry}
            material={nodes.ventana_15.material}
            position={[-0.354, 1.097, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_16.geometry}
            material={nodes.ventana_16.material}
            position={[-0.384, 1.121, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_17.geometry}
            material={nodes.ventana_17.material}
            position={[-0.354, 1.121, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.edificio_5.geometry}
            material={nodes.edificio_5.material}
            position={[-0.272, 1.102, 0.092]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_18.geometry}
            material={nodes.ventana_18.material}
            position={[-0.287, 1.074, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_19.geometry}
            material={nodes.ventana_19.material}
            position={[-0.257, 1.074, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_20.geometry}
            material={nodes.ventana_20.material}
            position={[-0.287, 1.097, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_21.geometry}
            material={nodes.ventana_21.material}
            position={[-0.257, 1.097, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_22.geometry}
            material={nodes.ventana_22.material}
            position={[-0.287, 1.121, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_23.geometry}
            material={nodes.ventana_23.material}
            position={[-0.257, 1.121, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.edificio_6.geometry}
            material={nodes.edificio_6.material}
            position={[-0.174, 1.112, 0.092]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.edificio_7.geometry}
            material={nodes.edificio_7.material}
            position={[-0.077, 1.123, 0.092]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_24.geometry}
            material={nodes.ventana_24.material}
            position={[-0.092, 1.074, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_25.geometry}
            material={nodes.ventana_25.material}
            position={[-0.062, 1.074, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_26.geometry}
            material={nodes.ventana_26.material}
            position={[-0.092, 1.097, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_27.geometry}
            material={nodes.ventana_27.material}
            position={[-0.062, 1.097, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_28.geometry}
            material={nodes.ventana_28.material}
            position={[-0.092, 1.121, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_29.geometry}
            material={nodes.ventana_29.material}
            position={[-0.062, 1.121, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.edificio_8.geometry}
            material={nodes.edificio_8.material}
            position={[0.021, 1.091, 0.092]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_30.geometry}
            material={nodes.ventana_30.material}
            position={[0.006, 1.074, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_31.geometry}
            material={nodes.ventana_31.material}
            position={[0.036, 1.074, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_32.geometry}
            material={nodes.ventana_32.material}
            position={[0.006, 1.097, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_33.geometry}
            material={nodes.ventana_33.material}
            position={[0.036, 1.097, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_34.geometry}
            material={nodes.ventana_34.material}
            position={[0.006, 1.121, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_35.geometry}
            material={nodes.ventana_35.material}
            position={[0.036, 1.121, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.edificio_9.geometry}
            material={nodes.edificio_9.material}
            position={[0.118, 1.102, 0.092]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.edificio_10.geometry}
            material={nodes.edificio_10.material}
            position={[0.216, 1.112, 0.092]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_36.geometry}
            material={nodes.ventana_36.material}
            position={[0.201, 1.074, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_37.geometry}
            material={nodes.ventana_37.material}
            position={[0.231, 1.074, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_38.geometry}
            material={nodes.ventana_38.material}
            position={[0.201, 1.097, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_39.geometry}
            material={nodes.ventana_39.material}
            position={[0.231, 1.097, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_40.geometry}
            material={nodes.ventana_40.material}
            position={[0.201, 1.121, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_41.geometry}
            material={nodes.ventana_41.material}
            position={[0.231, 1.121, 0.094]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.panel_ajustes.geometry}
            material={nodes.panel_ajustes.material}
            position={[0.66, 1.379, 0.083]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.panel_ajustes_1.geometry}
            material={nodes.panel_ajustes_1.material}
            position={[0.66, 1.309, 0.083]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.panel_ajustes_2.geometry}
            material={nodes.panel_ajustes_2.material}
            position={[0.66, 1.239, 0.083]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.panel_ajustes_3.geometry}
            material={nodes.panel_ajustes_3.material}
            position={[0.66, 1.169, 0.083]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.panel_ajustes_4.geometry}
            material={nodes.panel_ajustes_4.material}
            position={[0.66, 1.099, 0.083]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pista.geometry}
            material={nodes.pista.material}
            position={[0, 0.891, 0.082]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.clip_timeline.geometry}
            material={nodes.clip_timeline.material}
            position={[-0.64, 0.83, 0.084]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio.geometry}
            material={nodes.onda_audio.material}
            position={[-0.84, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_1.geometry}
            material={nodes.onda_audio_1.material}
            position={[-0.79, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_2.geometry}
            material={nodes.onda_audio_2.material}
            position={[-0.74, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_3.geometry}
            material={nodes.onda_audio_3.material}
            position={[-0.69, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_4.geometry}
            material={nodes.onda_audio_4.material}
            position={[-0.64, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_5.geometry}
            material={nodes.onda_audio_5.material}
            position={[-0.59, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_6.geometry}
            material={nodes.onda_audio_6.material}
            position={[-0.54, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_7.geometry}
            material={nodes.onda_audio_7.material}
            position={[-0.49, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_8.geometry}
            material={nodes.onda_audio_8.material}
            position={[-0.44, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.clip_timeline_1.geometry}
            material={nodes.clip_timeline_1.material}
            position={[-0.04, 0.83, 0.084]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_9.geometry}
            material={nodes.onda_audio_9.material}
            position={[-0.216, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_10.geometry}
            material={nodes.onda_audio_10.material}
            position={[-0.172, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_11.geometry}
            material={nodes.onda_audio_11.material}
            position={[-0.128, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_12.geometry}
            material={nodes.onda_audio_12.material}
            position={[-0.084, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_13.geometry}
            material={nodes.onda_audio_13.material}
            position={[-0.04, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_14.geometry}
            material={nodes.onda_audio_14.material}
            position={[0.004, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_15.geometry}
            material={nodes.onda_audio_15.material}
            position={[0.048, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_16.geometry}
            material={nodes.onda_audio_16.material}
            position={[0.092, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_17.geometry}
            material={nodes.onda_audio_17.material}
            position={[0.136, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.clip_timeline_2.geometry}
            material={nodes.clip_timeline_2.material}
            position={[0.56, 0.83, 0.084]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_18.geometry}
            material={nodes.onda_audio_18.material}
            position={[0.36, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_19.geometry}
            material={nodes.onda_audio_19.material}
            position={[0.41, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_20.geometry}
            material={nodes.onda_audio_20.material}
            position={[0.46, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_21.geometry}
            material={nodes.onda_audio_21.material}
            position={[0.51, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_22.geometry}
            material={nodes.onda_audio_22.material}
            position={[0.56, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_23.geometry}
            material={nodes.onda_audio_23.material}
            position={[0.61, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_24.geometry}
            material={nodes.onda_audio_24.material}
            position={[0.66, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_25.geometry}
            material={nodes.onda_audio_25.material}
            position={[0.71, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_26.geometry}
            material={nodes.onda_audio_26.material}
            position={[0.76, 0.83, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pista_1.geometry}
            material={nodes.pista_1.material}
            position={[0, 0.791, 0.082]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.clip_timeline_3.geometry}
            material={nodes.clip_timeline_3.material}
            position={[-0.64, 0.73, 0.084]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_27.geometry}
            material={nodes.onda_audio_27.material}
            position={[-0.84, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_28.geometry}
            material={nodes.onda_audio_28.material}
            position={[-0.79, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_29.geometry}
            material={nodes.onda_audio_29.material}
            position={[-0.74, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_30.geometry}
            material={nodes.onda_audio_30.material}
            position={[-0.69, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_31.geometry}
            material={nodes.onda_audio_31.material}
            position={[-0.64, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_32.geometry}
            material={nodes.onda_audio_32.material}
            position={[-0.59, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_33.geometry}
            material={nodes.onda_audio_33.material}
            position={[-0.54, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_34.geometry}
            material={nodes.onda_audio_34.material}
            position={[-0.49, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_35.geometry}
            material={nodes.onda_audio_35.material}
            position={[-0.44, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.clip_timeline_4.geometry}
            material={nodes.clip_timeline_4.material}
            position={[-0.04, 0.73, 0.084]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_36.geometry}
            material={nodes.onda_audio_36.material}
            position={[-0.216, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_37.geometry}
            material={nodes.onda_audio_37.material}
            position={[-0.172, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_38.geometry}
            material={nodes.onda_audio_38.material}
            position={[-0.128, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_39.geometry}
            material={nodes.onda_audio_39.material}
            position={[-0.084, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_40.geometry}
            material={nodes.onda_audio_40.material}
            position={[-0.04, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_41.geometry}
            material={nodes.onda_audio_41.material}
            position={[0.004, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_42.geometry}
            material={nodes.onda_audio_42.material}
            position={[0.048, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_43.geometry}
            material={nodes.onda_audio_43.material}
            position={[0.092, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_44.geometry}
            material={nodes.onda_audio_44.material}
            position={[0.136, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.clip_timeline_5.geometry}
            material={nodes.clip_timeline_5.material}
            position={[0.56, 0.73, 0.084]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_45.geometry}
            material={nodes.onda_audio_45.material}
            position={[0.36, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_46.geometry}
            material={nodes.onda_audio_46.material}
            position={[0.41, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_47.geometry}
            material={nodes.onda_audio_47.material}
            position={[0.46, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_48.geometry}
            material={nodes.onda_audio_48.material}
            position={[0.51, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_49.geometry}
            material={nodes.onda_audio_49.material}
            position={[0.56, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_50.geometry}
            material={nodes.onda_audio_50.material}
            position={[0.61, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_51.geometry}
            material={nodes.onda_audio_51.material}
            position={[0.66, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_52.geometry}
            material={nodes.onda_audio_52.material}
            position={[0.71, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_53.geometry}
            material={nodes.onda_audio_53.material}
            position={[0.76, 0.73, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pista_2.geometry}
            material={nodes.pista_2.material}
            position={[0, 0.691, 0.082]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.clip_timeline_6.geometry}
            material={nodes.clip_timeline_6.material}
            position={[-0.64, 0.63, 0.084]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_54.geometry}
            material={nodes.onda_audio_54.material}
            position={[-0.84, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_55.geometry}
            material={nodes.onda_audio_55.material}
            position={[-0.79, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_56.geometry}
            material={nodes.onda_audio_56.material}
            position={[-0.74, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_57.geometry}
            material={nodes.onda_audio_57.material}
            position={[-0.69, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_58.geometry}
            material={nodes.onda_audio_58.material}
            position={[-0.64, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_59.geometry}
            material={nodes.onda_audio_59.material}
            position={[-0.59, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_60.geometry}
            material={nodes.onda_audio_60.material}
            position={[-0.54, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_61.geometry}
            material={nodes.onda_audio_61.material}
            position={[-0.49, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_62.geometry}
            material={nodes.onda_audio_62.material}
            position={[-0.44, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.clip_timeline_7.geometry}
            material={nodes.clip_timeline_7.material}
            position={[-0.04, 0.63, 0.084]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_63.geometry}
            material={nodes.onda_audio_63.material}
            position={[-0.216, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_64.geometry}
            material={nodes.onda_audio_64.material}
            position={[-0.172, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_65.geometry}
            material={nodes.onda_audio_65.material}
            position={[-0.128, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_66.geometry}
            material={nodes.onda_audio_66.material}
            position={[-0.084, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_67.geometry}
            material={nodes.onda_audio_67.material}
            position={[-0.04, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_68.geometry}
            material={nodes.onda_audio_68.material}
            position={[0.004, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_69.geometry}
            material={nodes.onda_audio_69.material}
            position={[0.048, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_70.geometry}
            material={nodes.onda_audio_70.material}
            position={[0.092, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_71.geometry}
            material={nodes.onda_audio_71.material}
            position={[0.136, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.clip_timeline_8.geometry}
            material={nodes.clip_timeline_8.material}
            position={[0.56, 0.63, 0.084]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_72.geometry}
            material={nodes.onda_audio_72.material}
            position={[0.36, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_73.geometry}
            material={nodes.onda_audio_73.material}
            position={[0.41, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_74.geometry}
            material={nodes.onda_audio_74.material}
            position={[0.46, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_75.geometry}
            material={nodes.onda_audio_75.material}
            position={[0.51, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_76.geometry}
            material={nodes.onda_audio_76.material}
            position={[0.56, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_77.geometry}
            material={nodes.onda_audio_77.material}
            position={[0.61, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_78.geometry}
            material={nodes.onda_audio_78.material}
            position={[0.66, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_79.geometry}
            material={nodes.onda_audio_79.material}
            position={[0.71, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_80.geometry}
            material={nodes.onda_audio_80.material}
            position={[0.76, 0.63, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pista_3.geometry}
            material={nodes.pista_3.material}
            position={[0, 0.591, 0.082]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.clip_timeline_9.geometry}
            material={nodes.clip_timeline_9.material}
            position={[-0.64, 0.53, 0.084]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_81.geometry}
            material={nodes.onda_audio_81.material}
            position={[-0.84, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_82.geometry}
            material={nodes.onda_audio_82.material}
            position={[-0.79, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_83.geometry}
            material={nodes.onda_audio_83.material}
            position={[-0.74, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_84.geometry}
            material={nodes.onda_audio_84.material}
            position={[-0.69, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_85.geometry}
            material={nodes.onda_audio_85.material}
            position={[-0.64, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_86.geometry}
            material={nodes.onda_audio_86.material}
            position={[-0.59, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_87.geometry}
            material={nodes.onda_audio_87.material}
            position={[-0.54, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_88.geometry}
            material={nodes.onda_audio_88.material}
            position={[-0.49, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_89.geometry}
            material={nodes.onda_audio_89.material}
            position={[-0.44, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.clip_timeline_10.geometry}
            material={nodes.clip_timeline_10.material}
            position={[-0.04, 0.53, 0.084]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_90.geometry}
            material={nodes.onda_audio_90.material}
            position={[-0.216, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_91.geometry}
            material={nodes.onda_audio_91.material}
            position={[-0.172, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_92.geometry}
            material={nodes.onda_audio_92.material}
            position={[-0.128, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_93.geometry}
            material={nodes.onda_audio_93.material}
            position={[-0.084, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_94.geometry}
            material={nodes.onda_audio_94.material}
            position={[-0.04, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_95.geometry}
            material={nodes.onda_audio_95.material}
            position={[0.004, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_96.geometry}
            material={nodes.onda_audio_96.material}
            position={[0.048, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_97.geometry}
            material={nodes.onda_audio_97.material}
            position={[0.092, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_98.geometry}
            material={nodes.onda_audio_98.material}
            position={[0.136, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.clip_timeline_11.geometry}
            material={nodes.clip_timeline_11.material}
            position={[0.56, 0.53, 0.084]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_99.geometry}
            material={nodes.onda_audio_99.material}
            position={[0.36, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_100.geometry}
            material={nodes.onda_audio_100.material}
            position={[0.41, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_101.geometry}
            material={nodes.onda_audio_101.material}
            position={[0.46, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_102.geometry}
            material={nodes.onda_audio_102.material}
            position={[0.51, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_103.geometry}
            material={nodes.onda_audio_103.material}
            position={[0.56, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_104.geometry}
            material={nodes.onda_audio_104.material}
            position={[0.61, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_105.geometry}
            material={nodes.onda_audio_105.material}
            position={[0.66, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_106.geometry}
            material={nodes.onda_audio_106.material}
            position={[0.71, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.onda_audio_107.geometry}
            material={nodes.onda_audio_107.material}
            position={[0.76, 0.53, 0.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cabezal_reproduccion.geometry}
            material={nodes.cabezal_reproduccion.material}
            position={[0.1, 0.952, 0.09]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.piloto.geometry}
            material={materials['material_#b30819']}
            position={[0.8, 0.489, 0.082]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.teclado.geometry}
            material={materials['material_#89949f']}
            position={[0, 0.035, 0.74]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla.geometry}
            material={materials['material_#242a31']}
            position={[-0.66, 0.067, 0.59]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_1.geometry}
            material={materials['material_#242a31']}
            position={[-0.514, 0.067, 0.59]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_2.geometry}
            material={materials['material_#242a31']}
            position={[-0.368, 0.067, 0.59]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_3.geometry}
            material={materials['material_#242a31']}
            position={[-0.222, 0.067, 0.59]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_4.geometry}
            material={materials['material_#242a31']}
            position={[-0.076, 0.067, 0.59]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_5.geometry}
            material={materials['material_#242a31']}
            position={[0.07, 0.067, 0.59]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_6.geometry}
            material={materials['material_#242a31']}
            position={[0.216, 0.067, 0.59]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_7.geometry}
            material={materials['material_#242a31']}
            position={[0.362, 0.067, 0.59]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_8.geometry}
            material={materials['material_#242a31']}
            position={[0.508, 0.067, 0.59]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_9.geometry}
            material={materials['material_#242a31']}
            position={[0.654, 0.067, 0.59]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_10.geometry}
            material={materials['material_#242a31']}
            position={[-0.66, 0.067, 0.72]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_11.geometry}
            material={materials['material_#242a31']}
            position={[-0.514, 0.067, 0.72]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_12.geometry}
            material={materials['material_#242a31']}
            position={[-0.368, 0.067, 0.72]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_13.geometry}
            material={materials['material_#242a31']}
            position={[-0.222, 0.067, 0.72]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_14.geometry}
            material={materials['material_#242a31']}
            position={[-0.076, 0.067, 0.72]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_15.geometry}
            material={materials['material_#242a31']}
            position={[0.07, 0.067, 0.72]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_16.geometry}
            material={materials['material_#242a31']}
            position={[0.216, 0.067, 0.72]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_17.geometry}
            material={materials['material_#242a31']}
            position={[0.362, 0.067, 0.72]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_18.geometry}
            material={materials['material_#242a31']}
            position={[0.508, 0.067, 0.72]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_19.geometry}
            material={materials['material_#242a31']}
            position={[0.654, 0.067, 0.72]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_20.geometry}
            material={materials['material_#242a31']}
            position={[-0.66, 0.067, 0.85]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_21.geometry}
            material={materials['material_#242a31']}
            position={[-0.514, 0.067, 0.85]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_22.geometry}
            material={materials['material_#242a31']}
            position={[-0.368, 0.067, 0.85]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_23.geometry}
            material={materials['material_#242a31']}
            position={[-0.222, 0.067, 0.85]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_24.geometry}
            material={materials['material_#242a31']}
            position={[-0.076, 0.067, 0.85]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_25.geometry}
            material={materials['material_#242a31']}
            position={[0.07, 0.067, 0.85]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_26.geometry}
            material={materials['material_#242a31']}
            position={[0.216, 0.067, 0.85]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_27.geometry}
            material={materials['material_#242a31']}
            position={[0.362, 0.067, 0.85]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_28.geometry}
            material={materials['material_#242a31']}
            position={[0.508, 0.067, 0.85]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tecla_29.geometry}
            material={materials['material_#242a31']}
            position={[0.654, 0.067, 0.85]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.raton.geometry}
            material={materials['material_#242a31']}
            position={[1.02, 0.08, 0.76]}
            scale={[0.65, 0.5, 1]}
          />
        </group>
      </group>
    </group>
  )
}

export default TPosp;

useGLTF.preload('models-3d/posproduccion.glb');
