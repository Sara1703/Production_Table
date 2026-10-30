import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TCinemaScreen = (props) => {
  const { nodes, materials } = useGLTF('models-3d/CinemaScreen.glb')
  return (
    <group {...props} dispose={null}>
      <group>
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.plataforma.geometry}
            material={materials['material_#242a31']}
            position={[0, 0.04, 0.15]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.marco.geometry}
            material={materials['material_#242a31']}
            position={[0, 1.05, -0.65]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pantalla.geometry}
            material={nodes.pantalla.material}
            position={[0, 1.05, -0.572]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cielo.geometry}
            material={nodes.cielo.material}
            position={[0, 1.05, -0.568]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cordillera.geometry}
            material={nodes.cordillera.material}
            position={[0, 1.05, -0.566]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cordillera_1.geometry}
            material={nodes.cordillera_1.material}
            position={[0, 1.05, -0.564]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.parque.geometry}
            material={nodes.parque.material}
            position={[0, 0.584, -0.562]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.edificio.geometry}
            material={nodes.edificio.material}
            position={[-0.972, 0.789, -0.56]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.edificio_1.geometry}
            material={nodes.edificio_1.material}
            position={[-0.782, 0.812, -0.56]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana.geometry}
            material={nodes.ventana.material}
            position={[-0.811, 0.75, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_1.geometry}
            material={nodes.ventana_1.material}
            position={[-0.753, 0.75, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_2.geometry}
            material={nodes.ventana_2.material}
            position={[-0.811, 0.802, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_3.geometry}
            material={nodes.ventana_3.material}
            position={[-0.753, 0.802, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_4.geometry}
            material={nodes.ventana_4.material}
            position={[-0.811, 0.855, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_5.geometry}
            material={nodes.ventana_5.material}
            position={[-0.753, 0.855, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.edificio_2.geometry}
            material={nodes.edificio_2.material}
            position={[-0.592, 0.836, -0.56]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_6.geometry}
            material={nodes.ventana_6.material}
            position={[-0.621, 0.75, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_7.geometry}
            material={nodes.ventana_7.material}
            position={[-0.563, 0.75, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_8.geometry}
            material={nodes.ventana_8.material}
            position={[-0.621, 0.802, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_9.geometry}
            material={nodes.ventana_9.material}
            position={[-0.563, 0.802, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_10.geometry}
            material={nodes.ventana_10.material}
            position={[-0.621, 0.855, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_11.geometry}
            material={nodes.ventana_11.material}
            position={[-0.563, 0.855, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.edificio_3.geometry}
            material={nodes.edificio_3.material}
            position={[-0.402, 0.859, -0.56]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.edificio_4.geometry}
            material={nodes.edificio_4.material}
            position={[-0.212, 0.789, -0.56]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_12.geometry}
            material={nodes.ventana_12.material}
            position={[-0.242, 0.75, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_13.geometry}
            material={nodes.ventana_13.material}
            position={[-0.183, 0.75, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_14.geometry}
            material={nodes.ventana_14.material}
            position={[-0.242, 0.802, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_15.geometry}
            material={nodes.ventana_15.material}
            position={[-0.183, 0.802, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_16.geometry}
            material={nodes.ventana_16.material}
            position={[-0.242, 0.855, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_17.geometry}
            material={nodes.ventana_17.material}
            position={[-0.183, 0.855, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.edificio_5.geometry}
            material={nodes.edificio_5.material}
            position={[-0.023, 0.812, -0.56]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_18.geometry}
            material={nodes.ventana_18.material}
            position={[-0.052, 0.75, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_19.geometry}
            material={nodes.ventana_19.material}
            position={[0.007, 0.75, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_20.geometry}
            material={nodes.ventana_20.material}
            position={[-0.052, 0.802, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_21.geometry}
            material={nodes.ventana_21.material}
            position={[0.007, 0.802, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_22.geometry}
            material={nodes.ventana_22.material}
            position={[-0.052, 0.855, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_23.geometry}
            material={nodes.ventana_23.material}
            position={[0.007, 0.855, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.edificio_6.geometry}
            material={nodes.edificio_6.material}
            position={[0.167, 0.836, -0.56]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.edificio_7.geometry}
            material={nodes.edificio_7.material}
            position={[0.357, 0.859, -0.56]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_24.geometry}
            material={nodes.ventana_24.material}
            position={[0.328, 0.75, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_25.geometry}
            material={nodes.ventana_25.material}
            position={[0.386, 0.75, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_26.geometry}
            material={nodes.ventana_26.material}
            position={[0.328, 0.802, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_27.geometry}
            material={nodes.ventana_27.material}
            position={[0.386, 0.802, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_28.geometry}
            material={nodes.ventana_28.material}
            position={[0.328, 0.855, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_29.geometry}
            material={nodes.ventana_29.material}
            position={[0.386, 0.855, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.edificio_8.geometry}
            material={nodes.edificio_8.material}
            position={[0.547, 0.789, -0.56]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_30.geometry}
            material={nodes.ventana_30.material}
            position={[0.518, 0.75, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_31.geometry}
            material={nodes.ventana_31.material}
            position={[0.576, 0.75, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_32.geometry}
            material={nodes.ventana_32.material}
            position={[0.518, 0.802, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_33.geometry}
            material={nodes.ventana_33.material}
            position={[0.576, 0.802, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_34.geometry}
            material={nodes.ventana_34.material}
            position={[0.518, 0.855, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_35.geometry}
            material={nodes.ventana_35.material}
            position={[0.576, 0.855, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.edificio_9.geometry}
            material={nodes.edificio_9.material}
            position={[0.737, 0.812, -0.56]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.edificio_10.geometry}
            material={nodes.edificio_10.material}
            position={[0.927, 0.836, -0.56]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_36.geometry}
            material={nodes.ventana_36.material}
            position={[0.897, 0.75, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_37.geometry}
            material={nodes.ventana_37.material}
            position={[0.956, 0.75, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_38.geometry}
            material={nodes.ventana_38.material}
            position={[0.897, 0.802, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_39.geometry}
            material={nodes.ventana_39.material}
            position={[0.956, 0.802, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_40.geometry}
            material={nodes.ventana_40.material}
            position={[0.897, 0.855, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ventana_41.geometry}
            material={nodes.ventana_41.material}
            position={[0.956, 0.855, -0.558]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.piloto.geometry}
            material={materials['material_#b30819']}
            position={[0.96, 0.475, -0.568]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.truss_vertical.geometry}
            material={materials['material_#242a31']}
            position={[-1.25, 0.915, -0.73]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.truss_vertical_1.geometry}
            material={materials['material_#242a31']}
            position={[-1.25, 0.915, -0.57]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.diagonal_truss.geometry}
            material={materials['material_#89949f']}
            position={[-1.25, 0.28, -0.65]}
            rotation={[0.49, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.diagonal_truss_1.geometry}
            material={materials['material_#89949f']}
            position={[-1.25, 0.59, -0.65]}
            rotation={[0.49, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.diagonal_truss_2.geometry}
            material={materials['material_#89949f']}
            position={[-1.25, 0.9, -0.65]}
            rotation={[0.49, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.diagonal_truss_3.geometry}
            material={materials['material_#89949f']}
            position={[-1.25, 1.21, -0.65]}
            rotation={[0.49, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.diagonal_truss_4.geometry}
            material={materials['material_#89949f']}
            position={[-1.25, 1.52, -0.65]}
            rotation={[0.49, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.truss_vertical_2.geometry}
            material={materials['material_#242a31']}
            position={[1.25, 0.915, -0.73]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.truss_vertical_3.geometry}
            material={materials['material_#242a31']}
            position={[1.25, 0.915, -0.57]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.diagonal_truss_5.geometry}
            material={materials['material_#89949f']}
            position={[1.25, 0.28, -0.65]}
            rotation={[0.49, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.diagonal_truss_6.geometry}
            material={materials['material_#89949f']}
            position={[1.25, 0.59, -0.65]}
            rotation={[0.49, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.diagonal_truss_7.geometry}
            material={materials['material_#89949f']}
            position={[1.25, 0.9, -0.65]}
            rotation={[0.49, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.diagonal_truss_8.geometry}
            material={materials['material_#89949f']}
            position={[1.25, 1.21, -0.65]}
            rotation={[0.49, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.diagonal_truss_9.geometry}
            material={materials['material_#89949f']}
            position={[1.25, 1.52, -0.65]}
            rotation={[0.49, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.travesano.geometry}
            material={materials['material_#242a31']}
            position={[0, 1.73, -0.65]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.asiento.geometry}
            material={materials['material_#b30819']}
            position={[-0.84, 0.28, 0.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.respaldo.geometry}
            material={materials['material_#11151c']}
            position={[-0.84, 0.49, 0.28]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.acolchado.geometry}
            material={materials['material_#3d3034']}
            position={[-0.84, 0.5, 0.181]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.apoyabrazos.geometry}
            material={materials['material_#242a31']}
            position={[-1.09, 0.37, 0.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.apoyabrazos_1.geometry}
            material={materials['material_#242a31']}
            position={[-0.59, 0.37, 0.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pie_butaca.geometry}
            material={materials['material_#89949f']}
            position={[-0.84, 0.13, 0.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.asiento_1.geometry}
            material={materials['material_#b30819']}
            position={[-0.28, 0.28, 0.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.respaldo_1.geometry}
            material={materials['material_#11151c']}
            position={[-0.28, 0.49, 0.28]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.acolchado_1.geometry}
            material={materials['material_#3d3034']}
            position={[-0.28, 0.5, 0.181]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.apoyabrazos_2.geometry}
            material={materials['material_#242a31']}
            position={[-0.53, 0.37, 0.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.apoyabrazos_3.geometry}
            material={materials['material_#242a31']}
            position={[-0.03, 0.37, 0.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pie_butaca_1.geometry}
            material={materials['material_#89949f']}
            position={[-0.28, 0.13, 0.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.asiento_2.geometry}
            material={materials['material_#b30819']}
            position={[0.28, 0.28, 0.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.respaldo_2.geometry}
            material={materials['material_#11151c']}
            position={[0.28, 0.49, 0.28]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.acolchado_2.geometry}
            material={materials['material_#3d3034']}
            position={[0.28, 0.5, 0.181]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.apoyabrazos_4.geometry}
            material={materials['material_#242a31']}
            position={[0.03, 0.37, 0.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.apoyabrazos_5.geometry}
            material={materials['material_#242a31']}
            position={[0.53, 0.37, 0.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pie_butaca_2.geometry}
            material={materials['material_#89949f']}
            position={[0.28, 0.13, 0.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.asiento_3.geometry}
            material={materials['material_#b30819']}
            position={[0.84, 0.28, 0.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.respaldo_3.geometry}
            material={materials['material_#11151c']}
            position={[0.84, 0.49, 0.28]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.acolchado_3.geometry}
            material={materials['material_#3d3034']}
            position={[0.84, 0.5, 0.181]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.apoyabrazos_6.geometry}
            material={materials['material_#242a31']}
            position={[0.59, 0.37, 0.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.apoyabrazos_7.geometry}
            material={materials['material_#242a31']}
            position={[1.09, 0.37, 0.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pie_butaca_3.geometry}
            material={materials['material_#89949f']}
            position={[0.84, 0.13, 0.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.asiento_4.geometry}
            material={materials['material_#b30819']}
            position={[-0.84, 0.28, 0.74]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.respaldo_4.geometry}
            material={materials['material_#11151c']}
            position={[-0.84, 0.49, 0.92]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.acolchado_4.geometry}
            material={materials['material_#3d3034']}
            position={[-0.84, 0.5, 0.821]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.apoyabrazos_8.geometry}
            material={materials['material_#242a31']}
            position={[-1.09, 0.37, 0.74]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.apoyabrazos_9.geometry}
            material={materials['material_#242a31']}
            position={[-0.59, 0.37, 0.74]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pie_butaca_4.geometry}
            material={materials['material_#89949f']}
            position={[-0.84, 0.13, 0.74]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.asiento_5.geometry}
            material={materials['material_#b30819']}
            position={[-0.28, 0.28, 0.74]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.respaldo_5.geometry}
            material={materials['material_#11151c']}
            position={[-0.28, 0.49, 0.92]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.acolchado_5.geometry}
            material={materials['material_#3d3034']}
            position={[-0.28, 0.5, 0.821]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.apoyabrazos_10.geometry}
            material={materials['material_#242a31']}
            position={[-0.53, 0.37, 0.74]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.apoyabrazos_11.geometry}
            material={materials['material_#242a31']}
            position={[-0.03, 0.37, 0.74]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pie_butaca_5.geometry}
            material={materials['material_#89949f']}
            position={[-0.28, 0.13, 0.74]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.asiento_6.geometry}
            material={materials['material_#b30819']}
            position={[0.28, 0.28, 0.74]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.respaldo_6.geometry}
            material={materials['material_#11151c']}
            position={[0.28, 0.49, 0.92]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.acolchado_6.geometry}
            material={materials['material_#3d3034']}
            position={[0.28, 0.5, 0.821]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.apoyabrazos_12.geometry}
            material={materials['material_#242a31']}
            position={[0.03, 0.37, 0.74]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.apoyabrazos_13.geometry}
            material={materials['material_#242a31']}
            position={[0.53, 0.37, 0.74]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pie_butaca_6.geometry}
            material={materials['material_#89949f']}
            position={[0.28, 0.13, 0.74]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.asiento_7.geometry}
            material={materials['material_#b30819']}
            position={[0.84, 0.28, 0.74]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.respaldo_7.geometry}
            material={materials['material_#11151c']}
            position={[0.84, 0.49, 0.92]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.acolchado_7.geometry}
            material={materials['material_#3d3034']}
            position={[0.84, 0.5, 0.821]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.apoyabrazos_14.geometry}
            material={materials['material_#242a31']}
            position={[0.59, 0.37, 0.74]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.apoyabrazos_15.geometry}
            material={materials['material_#242a31']}
            position={[1.09, 0.37, 0.74]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pie_butaca_7.geometry}
            material={materials['material_#89949f']}
            position={[0.84, 0.13, 0.74]}
          />
        </group>
      </group>
    </group>
  )
}

export default TCinemaScreen;
useGLTF.preload('models-3d/CinemaScreen.glb');
 