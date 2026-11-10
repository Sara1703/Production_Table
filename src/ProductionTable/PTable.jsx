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
import Lights from "../lights/Lights";
import TCamera from "../Objects/TCamera";
import { useState } from "react";
import UnivalleL from "../logo/univalleL";

const info = {

    desarrollo: {
        titulo: "Desarrollo y preproducción",
        texto: "Carpeta de guion, hojas, separadores y lápiz. Acceso previsto a roles, participación y apoyos desde la planeación."
    },
    rodaje: {
        titulo: "Rodaje",
        texto: "Claqueta con barra superior agrupada en una bisagra editable. Acceso previsto a comunicación y ajustes durante el rodaje."
    },
    posproducción: {
        titulo: "Posproducción",
        texto: "Monitor con línea de tiempo geométrica, teclado y ratón. Acceso previsto a decisiones de accesibilidad durante la edición."
    },
    distribucion: {
        titulo: "Distribución y exhibición",
        texto: "Pantalla de cine, paisaje abstracto y ocho butacas. Acceso previsto a condiciones de distribución y exhibición accesibles."
    },


    people: {
        titulo: "Personas participantes",
        texto: "Representaciones ilustrativas: persona con bastón y gafas oscuras; persona con manos en pose comunicativa; persona de piel oscura con tableta CAA; persona usuaria de silla de ruedas. Selecciona cada personaje para abrir su ficha independiente. No representan la cantidad ni las identidades de participantes reales."
    },
    visual: {
        titulo: "Discapacidad visual",
        texto: "Personaje con bastón blanco y gafas oscuras. Aquí se incorporará la caracterización de las personas participantes con discapacidad visual."
    },
    auditiva: {
        titulo: "Discapacidad auditiva",
        texto: "Personaje con manos en pose comunicativa ilustrativa. Aquí se incorporará la caracterización de las personas participantes con discapacidad auditiva."
    },
    motriz: {
        titulo: "Discapacidad motriz",
        texto: "Personaje usuario de silla de ruedas, sin tableta. Aquí se incorporará la caracterización de las personas participantes con discapacidad motriz."
    },
    dispositivos: {
        titulo: "Comunicación mediante dispositivos",
        texto: "Personaje de piel oscura que utiliza una tableta de comunicación aumentativa y alternativa (CAA). Aquí se incorporará la caracterización de las personas participantes que se comunican mediante dispositivos."
    },
};


const PTable = () => {
    
    const[activo, setActivo] = useState(null);
    const ficha = activo ? info [activo]: null;

    const handleText = (clave) => {
        setActivo((actual) => (actual === clave ? null : clave));
    };
    return(
        <main className="page">
            <header className="main">
                <img src= "models-3d/logo/logounivalle.png" alt="Universidad del Valle" className="LogoU"/>
                <img src= "models-3d/logo/Logo-uao.png" alt="Universidad autónoma de occidente" className="LogoUAO"/>
                
                <h1 className="mainTitle">
                    CONTRA<span className="Mtitle">PLANO</span></h1>
                    
                <p className="subTitle">
                    Una Cali audiovisual, inclusiva y accesible.
                </p>
                <p className="thirdTittle">
                    Universidad del Valle · Universidad Autónoma de Occidente
                </p>
            </header>
            
            <div className="back">
                <p className="instruction">
                Selecciona una etapa o cada personaje para abrir su ficha. También puedes usar los botones.
                </p>
                <div className="square">
                    <Canvas shadows = {true} camera={{position: [ -1, 6.8 , 0], fov: 39}} >
                        <OrbitControls                    
                        enablePan={false}
                        minPolarAngle={Math.PI /6}
                        maxPolarAngle={Math.PI / 2.1}
                        minDistance={2}
                        maxDistance={8}
                        target={[0, 0.5, 0]}      
                        zoomSpeed={0.8}
                        />                

                        <ambientLight intensity={0.7}/>
                        <directionalLight position={[-5, 4, -3]} intensity={5} shadows={true} />
                        <Environment files = "/environment/env.hdr" background/>
                    

                        <Tscript scale={0.5} position={[1.2, -0.01, -1.5]} rotation={[Math.PI /-80, -1.6, 0]}/>
                        <Tclapperboard scale={0.5} position={[1.2, -0, 1.5]} rotation={[Math.PI /-80, -1.6, 0]}/>
                        <TPosp scale={0.5} position={[-1, -0, 1.5]} rotation={[Math.PI /-80, -1.6, 0]}/>
                        <TableModel scale={0.5} position={[0, 0, 0]}/>
                        <TCinemaScreen scale={0.42} position={[-1, 0, -1.6]} rotation={[Math.PI /-80, -1.6, 0]}/>
                        <PTable_redonde scale={0.5} position={[0, 0.04, 0]}/>
                        <TCamera scale={0.23} position={[-2.1, -0.33, -0.45]} rotation={[Math.PI /-80, 3.1, 0]}/>
                        <Lights/>

                        //people
                        <TP_auditiva scale={0.5} position={[0.7, -0, -0.6]} rotation={[Math.PI /-80, -1.6, 0]} />
                        <TP_caa scale={0.5} position={[0.7, -0, 0.6]} rotation={[Math.PI /-80, -1.6, 0]}/>
                        <TP_motriz scale={0.5} position={[-0.5, -0, 0.6]} rotation={[Math.PI /-80, -1.6, 0]}/>
                        <TP_visual scale={0.5} position={[-0.5, -0, -0.6]} rotation={[Math.PI /-80, -1.6, 0]}/>
                    
                    </Canvas >                  
                </div> 
                <p className="instructionB">Haz clic en una etapa o en cada personaje. También puedes usar los botones.</p>
                <div className="panel_buttons">
                    <button className={`one ${activo === "desarrollo" ? "one--active" : ""}`} onClick={() => handleText ("desarrollo")}>1. Desarrollo y preproducción</button>
                    <button className={`one ${activo === "rodaje" ? "one--active" : ""}`} onClick={() => handleText ("rodaje")}>2. Rodaje</button>
                    <button className={`one ${activo === "posproducción" ? "one--active" : ""}`} onClick={() => handleText ("posproducción")}>3. Posproducción</button>
                    <button className={`one ${activo === "distribucion" ? "one--active" : ""}`} onClick={() => handleText ("distribucion")}>4. Distribución y exhibición</button>
                </div>  
                <div className="panel_Pbuttons">
                    <button className={`two ${activo === "people" ? "one--active" : ""}`} onClick={() => handleText ("people")}>Personas participantes</button>
                    <button className={`two ${activo === "visual" ? "one--active" : ""}`} onClick={() => handleText ("visual")}>Persona con discapacidad visual</button>
                    <button className={`two ${activo === "auditiva" ? "one--active" : ""}`} onClick={() => handleText ("auditiva")}>Persona con discapacidad auditiva</button>
                    <button className={`two ${activo === "motriz" ? "one--active" : ""}`} onClick={() => handleText ("motriz")}>Persona con discapacidad motriz</button>
                    <button className={`two ${activo === "dispositivos" ? "one--active" : ""}`} onClick={() => handleText ("dispositivos")}>Comunicación mediante dispositivos</button>
                </div>
                {ficha && (
                    <div className="ficha">
                        <h3 className="ficha_titulo">{ficha.titulo}</h3>
                        <p className="ficha_texto">{ficha.texto}</p>
                    </div>

                )}
                    
            </div>
        </main>
    );
};

export default PTable;