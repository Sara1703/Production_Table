import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TableModel from "./TableModel";

const PTable = () => {
    return(
        <>
        <div className="container">
            <Canvas shadows = {true} camera={{position: [0, 1, 2], fov: 75}}>
                <OrbitControls/>
                <ambientLight/>
                <directionalLight position={[10, 10, 10]} intensity={5}/>
                <Environment files = "/environment/FilmEnv.hdr" background/>
                <TableModel/>

            </Canvas>
        </div>
        </>
    );
};

export default PTable;