import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TableModel from "./TableModel";
import Tcamera from "./Tcamera";
import TFolder from "./TFolder";
import TScreen from "./TScreen";

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
                <Tcamera scale={8.5} position={[1, -65, 78]} />
                <TFolder scale={4.5} position={[14, -38, 20]}/>
                <TScreen scale={6.8} position={[34, -39, 17]} rotation={[Math.PI /-80, -1.6, 0]}/>
            </Canvas >
        </div>
        </>
    );
};

export default PTable;