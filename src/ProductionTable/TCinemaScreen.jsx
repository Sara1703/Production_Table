import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TCinemaScreen = (props) => {
  const { nodes, materials } = useGLTF('models-3d/CinemaScreen.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={25}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group>
              <group>
                <group position={[-29.273, 20.118, 1.024]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube__fonce_0.geometry}
                    material={materials.fonce}
                  />
                </group>
                <group position={[37.613, 17.431, 1.108]} rotation={[0.178, 0, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Peau_NURBS_1_noir_0.geometry}
                    material={materials.noir}
                  />
                </group>
                <group position={[37.382, 0, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Extrusion_contr��l��e_NURBS_1_noir_0'].geometry}
                    material={materials.noir}
                  />
                </group>
                <group position={[0, -0.107, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Extrusion_NURBS_1__fonce_0.geometry}
                    material={materials.fonce}
                  />
                  <group position={[0, 11.458, 1.336]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube_2__fonce_0.geometry}
                      material={materials.fonce}
                    />
                    <group position={[-7.646, -2.692, -0.188]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Peau_NURBS_2_noir_0.geometry}
                        material={materials.noir}
                      />
                    </group>
                    <group position={[7.481, -2.692, -0.188]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Peau_NURBS_1_2_noir_0.geometry}
                        material={materials.noir}
                      />
                    </group>
                    <group position={[7.481, 2.806, -0.188]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Peau_NURBS_noir_0.geometry}
                        material={materials.noir}
                      />
                    </group>
                    <group position={[-7.479, 2.806, -0.188]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Peau_NURBS_16_noir_0.geometry}
                        material={materials.noir}
                      />
                    </group>
                  </group>
                  <group position={[-2.471, 0.107, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Extrusion_NURBS_2__fonce_0.geometry}
                      material={materials.fonce}
                    />
                  </group>
                </group>
                <group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Peau_NURBS_1_3__fonce_0.geometry}
                    material={materials.fonce}
                  />
                </group>
                <group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.derriere__fonce_0.geometry}
                    material={materials.fonce}
                  />
                  <group position={[46.008, 10.044, 3.124]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Peau_NURBS_1_4_noir_0.geometry}
                      material={materials.noir}
                    />
                    <group position={[-59.036, 40.482, -1.935]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Peau_NURBS_16_2_noir_0.geometry}
                        material={materials.noir}
                      />
                    </group>
                    <group position={[-32.955, 40.482, -1.935]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Peau_NURBS_15_noir_0.geometry}
                        material={materials.noir}
                      />
                    </group>
                    <group position={[-8.467, 9.896, -0.63]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Peau_NURBS_14_noir_0.geometry}
                        material={materials.noir}
                      />
                    </group>
                    <group position={[-33.048, 15.459, -1.937]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Peau_NURBS_13_noir_0.geometry}
                        material={materials.noir}
                      />
                    </group>
                    <group position={[-59.107, 15.459, -1.937]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Peau_NURBS_12_noir_0.geometry}
                        material={materials.noir}
                      />
                    </group>
                    <group position={[-92.077, -0.036, 0]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Peau_NURBS_11_noir_0.geometry}
                        material={materials.noir}
                      />
                    </group>
                    <group position={[-92.077, 23.051, 0]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Peau_NURBS_10_noir_0.geometry}
                        material={materials.noir}
                      />
                    </group>
                    <group position={[-92.077, 45.912, 0]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Peau_NURBS_9_noir_0.geometry}
                        material={materials.noir}
                      />
                    </group>
                    <group position={[-87.395, 50.085, 0]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Peau_NURBS_8_noir_0.geometry}
                        material={materials.noir}
                      />
                    </group>
                    <group position={[-66.698, 50.085, 0]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Peau_NURBS_7_noir_0.geometry}
                        material={materials.noir}
                      />
                    </group>
                    <group position={[-45.83, 50.085, 0]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Peau_NURBS_6_noir_0.geometry}
                        material={materials.noir}
                      />
                    </group>
                    <group position={[-25.083, 50.085, 0]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Peau_NURBS_5_noir_0.geometry}
                        material={materials.noir}
                      />
                    </group>
                    <group position={[-4.465, 50.085, 0]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Peau_NURBS_4_noir_0.geometry}
                        material={materials.noir}
                      />
                    </group>
                    <group position={[0, 46.006, 0]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Peau_NURBS_3_noir_0.geometry}
                        material={materials.noir}
                      />
                    </group>
                    <group position={[0, 22.912, 0]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Peau_NURBS_2_2_noir_0.geometry}
                        material={materials.noir}
                      />
                    </group>
                  </group>
                </group>
                <group position={[49.236, 6.105, 7.373]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bouton_noir_0.geometry}
                    material={materials.noir}
                  />
                  <group position={[-0.04, -0.007, -0.257]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Extrusion_NURBS_2_2_noir_mat_avocat_0.geometry}
                      material={materials.noir_mat_avocat}
                    />
                  </group>
                  <group position={[-0.04, -0.007, 0.224]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Extrusion_NURBS_1_2_noir_mat_avocat_0.geometry}
                      material={materials.noir_mat_avocat}
                    />
                  </group>
                </group>
                <group position={[-10.021, 0, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Extrusion_NURBS_1_3_gris_0.geometry}
                    material={materials.gris}
                  />
                </group>
                <group position={[0, 6.106, 6.999]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1_noir_mat_avocat_0.geometry}
                    material={materials.noir_mat_avocat}
                  />
                </group>
                <group position={[0, 36.895, 6.94]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.frame_gris_0.geometry}
                    material={materials.gris}
                  />
                </group>
                <group position={[0, 36.895, 6.94]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.screen__fonce_0.geometry}
                    material={materials.fonce}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default TCinemaScreen;
useGLTF.preload('models-3d/CinemaScreen.glb');
 