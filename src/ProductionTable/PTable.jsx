import { Environment, Html, OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
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
import { useEffect, useRef, useState } from "react";
import InfoPanels from "../panels/InfoPanels";
import { DataPanels } from "../panels/DataPanels";
import VideoModal from "../panels/Video";
import { A11y, A11yAnnouncer } from "@react-three/a11y";


const info = {

    desarrollo: {
        titulo: "Desarrollo y preproducción",
        texto: "Carpeta de guion, hojas, separadores y lápiz. Acceso previsto a roles, participación y apoyos desde la planeación."
    },
    rodaje: {
        titulo: "Rodaje",
        texto: "Claqueta con barra superior agrupada en una bisagra editable. Acceso previsto a comunicación y ajustes durante el rodaje."
    },
    posproduccion: {
        titulo: "Posproducción",
        texto: "Monitor con línea de tiempo geométrica, teclado y ratón. Acceso previsto a decisiones de accesibilidad durante la edición."
    },
    distribucion: {
        titulo: "Distribución y exhibición",
        texto: "Pantalla de cine, paisaje abstracto y ocho butacas. Acceso previsto a condiciones de distribución y exhibición accesibles."
    },

    

    people: {
        titulo: "Personas participantes",
        texto: "Representaciones ilustrativas: persona con bastón y gafas oscuras; persona con manos en pose comunicativa; persona de piel oscura con tableta CAA; persona usuaria de silla de ruedas."
    },
    visual: {
        titulo: "Discapacidad visual",
        texto: "Personaje con bastón blanco y gafas oscuras."
    },
    auditiva: {
        titulo: "Discapacidad auditiva",
        texto: "Personaje con manos en pose comunicativa ilustrativa."
    },
    motriz: {
        titulo: "Discapacidad motriz",
        texto: "Personaje usuario de silla de ruedas, sin tableta."
    },
    dispositivos: {
        titulo: "Comunicación mediante dispositivos",
        texto: "Personaje que utiliza una tableta de comunicación aumentativa y alternativa."
    },
    recurso: {
        titulo: "Recursos",
        texto:""
    },
    autoriaUV: {
        titulo: "Ver autoría",
        texto:"Universidad del valle"
    },
    autoriaUAO: {
        titulo: "Ver autoría",
        texto:"Universidad autonoma de occidente"
    }
};


const PTable = () => {
    
    const[anuncio, setAnuncio] = useState("");
    
    const[tooltip, setTooltip] = useState(null);

    const[mousePos, setMousePos] = useState({x:0, y:0});

    const [hovered] = useState(null);

    const [panelActivo, setPanelActivo] = useState(null);

    const [modalAbierto, setModalAbierto] = useState(null);
    
    const[videoAbierto, setVideoAbierto] =useState(null);
    
    const lastFocusedElement = useRef(null);

    const [mesaActiva, setMesaActiva] = useState(false);
    const grupoActivo = mesaActiva;


    const abrirVideo = (id, titulo) => {
        setVideoAbierto({id, titulo});
    }

    const handleHover = (texto) => {
        setAnuncio(prev => (prev === texto ? prev : texto));
    };

    const openPanel = (clave) => {

        lastFocusedElement.current = document.activeElement;
        setPanelActivo(clave);
        setTooltip(null);
    };

    const closePanel = () => {

        setPanelActivo(null);

        if (lastFocusedElement.current) {
            lastFocusedElement.current.focus();
        }

    };

    const closeAll = () => {
        
        setPanelActivo(null);
        setModalAbierto(null);

        if (lastFocusedElement.current) {

            setTimeout(() => lastFocusedElement.current.focus(), 5);
        }

    }

    useEffect(() => {
    const handleGlobalMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleGlobalMouseMove);
    
    return () => {
        window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
    }, []);

    const anunciar = (clave) => {

        setTooltip(clave || null);

        if(!clave) return setAnuncio("")
            const dato = info[clave]
        if (dato) handleHover(`${dato.titulo}. ${dato.texto}`)
    };

    return(
        <main className="page">
            <header className="main">
                <div className="logos-header">
                    <button className="button_univalle"
                    aria-label="Ver autoria universidad del valle"
                    onMouseEnter={() => anunciar ("autoriaUV")}
                    onFocus={ () => anunciar ("autoriaUV")}
                    onMouseLeave={() => anunciar (null)}
                    onBlur={() => anunciar (null)}
                    onClick={() => { lastFocusedElement.current = document.activeElement; setModalAbierto("univalle");} }                   
                    >
                        <img src= "models-3d/logo/logounivalle.png" alt="Universidad del Valle" className="LogoU"/>
                        
                    </button>

                    <button className="button_uao"
                    aria-label="Ver autoria universidad autonoma de occidente"
                    onMouseEnter={() => anunciar("autoriaUAO")}
                    onFocus={ () => anunciar ("autoriaUAO")}
                    onMouseLeave={() => anunciar(null)}
                    onBlur={() => anunciar (null)}
                    onClick={() => { lastFocusedElement.current = document.activeElement; setModalAbierto("uao");} }             
                    >
                        <img src= "models-3d/logo/Logo-uao.png" alt="Universidad autónoma de occidente" className="LogoUAO"/>
                    </button>
                </div>
               
                
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
                    Pasa el cursor para ver su nombre. Selecciona una etapa o un personaje para abrir su ficha. Para consultar entrevistas y documentos, selecciona la camara de filmación.
                </p>
                <div className="square">
                    <div role="status" aria-live="polite" aria-atomic="true" className="srOnly">
                        {anuncio}
                    </div>
                    
                    <Canvas shadows = {true} camera={{position: [ -6, 5 , 0], fov: 40}} style={{cursor: hovered ? 'pointer' : 'auto'}}>
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
                        <Lights/>
                        <directionalLight position={[-5, 4, -3]} intensity={5} shadows={true} />
                        <Environment files = "/environment/env.hdr" background/>
         
                        <A11y
                        role="button" 
                        description={`${info.desarrollo.titulo}. ${info.desarrollo.texto}`}
                        actionCall={() => openPanel("desarrollo")}
                        focusCall={() => anunciar("desarrollo")}>

                            <Tscript scale={0.5} position={[1.2, -0.01, -1.5]} rotation={[Math.PI /-80, -1.6, 0]} anunciar={anunciar} clave= "desarrollo" openPanel={openPanel} />                       
                       
                        </A11y>

                        <A11y
                        role="button" 
                        description={`${info.rodaje.titulo}. ${info.rodaje.texto}`}
                        actionCall={() => openPanel("rodaje")}
                        focusCall={() => anunciar("rodaje")}>
                            
                            <Tclapperboard scale={0.5} position={[1.2, -0, 1.5]} rotation={[Math.PI /-80, -1.6, 0]} anunciar={anunciar} clave= "rodaje" openPanel={openPanel} />                   
                       
                        </A11y>

                        <A11y
                        role="button" 
                        description={`${info.posproduccion.titulo}. ${info.posproduccion.texto}`}
                        actionCall={() => openPanel("posproduccion")}
                        focusCall={() => anunciar("posproduccion")}>

                            <TPosp scale={0.5} position={[-1, -0, 1.5]} rotation={[Math.PI /-80, -1.6, 0]} anunciar={anunciar} clave= "posproduccion" openPanel={openPanel} />
                       
                       </A11y>   
                       
                        <A11y
                        role="button" 
                        description={`${info.people.titulo}. ${info.people.texto}`}
                        actionCall={() => openPanel("distribucion")}
                        focusCall={() => anunciar("distribucion")}>

                            <TCinemaScreen scale={0.42} position={[-1, 0, -1.6]} rotation={[Math.PI /-80, -1.6, 0]} anunciar={anunciar} clave= "distribucion" openPanel={openPanel} />
                        
                        </A11y>

                        <A11y
                        role="button" 
                        description={`${info.people.titulo}. ${info.people.texto}`}
                        actionCall={() => openPanel("people")}
                        focusCall={() => anunciar("people")}
                        >
                            <PTable_redonde scale={0.5} position={[0, 0.04, 0]} anunciar={anunciar} clave= "people" openPanel={openPanel} onResaltar={setMesaActiva}/>
                       
                        </A11y>
                        
                       <A11y
                        role="button" 
                        description={`${info.recurso.titulo}. ${info.recurso.texto}`}
                        actionCall={() => openPanel("recurso")}
                        focusCall={() => anunciar("recurso")} >
                            
                            <TCamera scale={0.3} position={[-1.5, 0, 0]} rotation={[Math.PI /-80, 4.7, 0]} anunciar={anunciar} clave= "recurso" openPanel={openPanel}/>
                                                
                       </A11y>

                       <A11y
                        role="button" 
                        description={`${info.auditiva.titulo}. ${info.auditiva.texto}`}
                        actionCall={() => openPanel("auditiva")}
                        focusCall={() => anunciar("auditiva")} >

                            <TP_auditiva scale={0.5} position={[0.7, -0, -0.6]} rotation={[Math.PI /-80, -1.6, 0]} anunciar={anunciar} clave= "auditiva" openPanel={openPanel} seleccionado={grupoActivo}/>
                        
                        </A11y>

                        <A11y
                        role="button" 
                        description={`${info.dispositivos.titulo}. ${info.dispositivos.texto}`}
                        actionCall={() => openPanel("dispositivos")}
                        focusCall={() => anunciar("dispositivos")} >

                            <TP_caa scale={0.5} position={[0.7, -0, 0.6]} rotation={[Math.PI /-80, -1.6, 0]} anunciar={anunciar} clave= "dispositivos" openPanel={openPanel} seleccionado={grupoActivo}/>
                        
                        </A11y>
                            
                        <A11y
                        role="button" 
                        description={`${info.motriz.titulo}. ${info.motriz.texto}`}
                        actionCall={() => openPanel("motriz")}
                        focusCall={() => anunciar("motriz")} >

                            <TP_motriz scale={0.5} position={[-0.5, -0, 0.6]} rotation={[Math.PI /-80, -1.6, 0]} anunciar={anunciar} clave= "motriz" openPanel={openPanel} seleccionado={grupoActivo}/>

                        </A11y>
                            
                        <A11y
                        role="button" 
                        description={`${info.visual.titulo}. ${info.visual.texto}`}
                        actionCall={() => openPanel("visual")}
                        focusCall={() => anunciar("visual")} >
                            
                            <TP_visual scale={0.5} position={[-0.5, -0, -0.6]} rotation={[Math.PI /-80, -1.6, 0]} anunciar={anunciar} clave= "visual" openPanel={openPanel} seleccionado={grupoActivo}/>
                        
                        </A11y>    
                        
                        <TableModel scale={0.5} position={[0, 0, 0]}/>
                    
                    </Canvas >   
                    <A11yAnnouncer/>
                    {tooltip && (
                        <div
                        className="tooltip-cursor"
                        style={{position: 'fixed', left: mousePos.x + 15, top: mousePos.y, transform:'translateY(-50%)', pointerEvents: 'none', zIndex: 1000}}
                        >
                        {info[tooltip].titulo}
                    </div>
                    )}
                </div>                     
            </div> 
            <InfoPanels 
            datos={panelActivo ? DataPanels[panelActivo] : null}
            onClose={closePanel}
            onAbrirVideo={abrirVideo}
            />
            {modalAbierto && (
                <InfoPanels
                datos={DataPanels[modalAbierto]}
                onClose={closeAll}
                onAbrirVideo={abrirVideo}
                />
            )}
            {videoAbierto && (
                <VideoModal
                videoId={videoAbierto.id}
                titulo={videoAbierto.titulo}
                onClose={() => setVideoAbierto(null)}
   
                />
            )}
        </main>
    );
};

export default PTable;