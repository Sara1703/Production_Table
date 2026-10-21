import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TFolder = (props) => {

    const group = useRef()
    const { nodes, materials } = useGLTF('models-3d/folder.glb')
    return (
        <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
            <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="Folderabccleanermaterialmergergles">
                <group name="Object_2" rotation={[Math.PI / 2, 0, 0]}>
                <group name="Object_3">
                    <group name="Object_4" position={[0, 0.032, 0.06]}>
                    <group name="TimeframeMainGroup">
                        <group name="Object_6">
                        <mesh
                            name="A4_Page3Shape_2_0"
                            geometry={nodes.A4_Page3Shape_2_0.geometry}
                            material={materials.A4_Page3Shape}
                        />
                        </group>
                    </group>
                    </group>
                    <group name="Object_8" position={[0.2, 0.022, -0.24]} rotation={[0, -0.087, 0]}>
                    <group name="TimeframeMainGroup_1">
                        <group name="Object_10">
                        <mesh
                            name="A4_Page2Shape_4_0"
                            geometry={nodes.A4_Page2Shape_4_0.geometry}
                            material={materials.A4_Page2Shape}
                        />
                        </group>
                    </group>
                    </group>
                    <group name="Object_12" position={[0.05, 0.042, -0.3]} rotation={[0, 0.087, 0]}>
                    <group name="TimeframeMainGroup_2">
                        <group name="Object_14">
                        <mesh
                            name="A4_Page1Shape_6_0"
                            geometry={nodes.A4_Page1Shape_6_0.geometry}
                            material={materials.A4_Page1Shape}
                        />
                        </group>
                    </group>
                    </group>
                    <group name="Object_16" position={[0, -0.028, 0.06]}>
                    <group name="TimeframeMainGroup_3">
                        <group name="Object_18">
                        <mesh
                            name="A4_Paper_StackShape_8_0"
                            geometry={nodes.A4_Paper_StackShape_8_0.geometry}
                            material={materials.A4_Paper_StackShape}
                        />
                        </group>
                    </group>
                    </group>
                    <group name="Object_20" position={[0, -0.068, 0.06]}>
                    <group name="MorphMainGroup">
                        <mesh
                        name="Folder_1Shape"
                        geometry={nodes.Folder_1Shape.geometry}
                        material={materials.Folder_1Shape}
                        morphTargetDictionary={nodes.Folder_1Shape.morphTargetDictionary}
                        morphTargetInfluences={nodes.Folder_1Shape.morphTargetInfluences}
                        />
                    </group>
                    </group>
                </group>
                </group>
            </group>
            </group>
        </group>
        </group>
  )
}

export default TFolder;

useGLTF.preload('models-3d/folder.glb');
