import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TableModel from "./TableModel";

const PTable = () => {
    return(
        <>
        <div className="container">
            <Canvas shadows = {true} camera={{position: [-8, 12, -0.7], fov: 50}} >
                <OrbitControls/>
                <ambientLight/>
                <directionalLight position={[5, 0.1, 4]} intensity={5}/>
                <Environment files = "/environment/FilmEnv.hdr" background/>
                <TableModel scale={0.5} position={[5, -40, -13]}/>

            </Canvas>
        </div>
        </>
    );
};

export default PTable;