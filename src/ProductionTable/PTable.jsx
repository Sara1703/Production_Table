import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const PTable = () => {
    return(
        <>
        <div className="container">
            <Canvas>
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