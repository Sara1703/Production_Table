import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TPosp from "./TPosp";
import Tclapperboard from "./Tclapperboard";
import TCinemaScreen from "./TCinemaScreen";
import Tscript from "./Tscript";
import TableModel from "./TableModel";

const PTable = () => {
    return(
        <>
        <div className="container">
            <Canvas shadows = {true} camera={{position: [-0.1, 2 , 0], fov: 50}} >
                <OrbitControls/>
                <ambientLight/>
                <directionalLight position={[5, 0.1, 4]} intensity={5}/>
                <Environment files = "/environment/env.hdr" background/>
    
                <Tscript scale={8.5} position={[-0.5, -65, 72]} />
                <Tclapperboard scale={4.5} position={[14, -38, 20]} rotation={[Math.PI /-80, -1.6, 0]}/>
                <TPosp scale={6.8} position={[34, -39, 18]} rotation={[Math.PI /-80, -1.6, 0]}/>
                <TableModel scale={3.5} position={[2.5, -40, 0]}/>
                <TCinemaScreen scale={3} position={[10, -40, -17]} rotation={[Math.PI /-80, -1.6, 0]}/>
            </Canvas >
        </div>
        </>
    );
};

export default PTable;