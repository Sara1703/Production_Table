import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TPosp from "../Objects/TPosp";
import Tclapperboard from "../Objects/Tclapperboard";
import TCinemaScreen from "../Objects/TCinemaScreen";
import Tscript from "../Objects/Tscript";
import TableModel from "../Objects/TableModel";
import TP_auditiva from "../People3d/TP_auditiva";
import PTable_redonde from "../Objects/PTable_redonde";
import TP_caa from "../People3d/TP_caa";
import TP_motriz from "../People3d/TP_motriz";
import TP_visual from "../People3d/TP_visual";
import "./PTable.css";



const PTable = () => {
    return(
        <>
        <div style={{ display: "flex", justifyContent: "center", padding: "100px" }}>
            <div className="square"> 
                <Canvas shadows = {true} camera={{position: [ -1, 6.8 , 0], fov: 50}} >
                    <OrbitControls                    
                    enablePan={false}
                    minPolarAngle={Math.PI /6}
                    maxPolarAngle={Math.PI / 2.1}
                    minDistance={2}
                    maxDistance={8}
                    target={[0, 0, 0]}      
                    zoomSpeed={0.8}
                    />
                        <ambientLight/>
                        <directionalLight position={[-5, 4, -3]} intensity={5} shadows={true} />
                        <Environment files = "/environment/env.hdr" background/>
                    

                        <Tscript scale={0.5} position={[1.2, -0.01, -1.5]} rotation={[Math.PI /-80, -1.6, 0]}/>
                        <Tclapperboard scale={0.5} position={[1.2, -0, 1.5]} rotation={[Math.PI /-80, -1.6, 0]}/>
                        <TPosp scale={0.5} position={[-1, -0, 1.5]} rotation={[Math.PI /-80, -1.6, 0]}/>
                        <TableModel scale={0.5} position={[0, 0, 0]}/>
                        <TCinemaScreen scale={0.42} position={[-1, 0, -1.6]} rotation={[Math.PI /-80, -1.6, 0]}/>
                        <PTable_redonde scale={0.5} position={[0, 0.04, 0]}/>
                        //people

                        <TP_auditiva scale={0.5} position={[0.7, -0, -0.6]} rotation={[Math.PI /-80, -1.6, 0]} castShadow receiveShadow/>
                        <TP_caa scale={0.5} position={[0.7, -0, 0.6]} rotation={[Math.PI /-80, -1.6, 0]} castShadow receiveShadow/>
                        <TP_motriz scale={0.5} position={[-0.5, -0, 0.6]} rotation={[Math.PI /-80, -1.6, 0]} castShadow receiveShadow/>
                        <TP_visual scale={0.5} position={[-0.5, -0, -0.6]} rotation={[Math.PI /-80, -1.6, 0]} castShadow receiveShadow/>
                    
                </Canvas >
            </div>           
            </div>
        </>
    );
};

export default PTable;