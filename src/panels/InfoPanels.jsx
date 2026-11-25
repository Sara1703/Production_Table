import { useEffect, useRef } from "react";
import "./InfoPanels.css"

const InfoPanels = ({datos, onClose, onAbrirVideo, videoAbierto}) => {
    const closeBtnRef = useRef(null);

    useEffect(() => {
        if(!datos) return;
        
        if(closeBtnRef.current) {
            closeBtnRef.current.focus({ preventScroll: true});
        }

        const handleKeyDown = (e) => {
            if(e.key === "Escape" && !videoAbierto) onClose();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [datos, onClose, videoAbierto]);

    if (!datos) return null;

    return (
        <div 
            className="modal-overlay" 
            onClick={onClose} 
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="panel-titulo"
        >
            <div className="modal-card" 
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
            >
                <header className="modal-header">
                    <h2 id="panel-titulo" className="modal-titulo">{datos.titulo}</h2>
                    <button ref={closeBtnRef} className="btn-cerrar" onClick={onClose}>
                        Cerrar
                    </button>
                </header>

                <div className="modal-body">
                    {datos.consiste && (
                        <section className="modal-seccion">
                            <h3>¿En qué consiste?</h3>
                            <p>{datos.consiste}</p>
                        </section>
                    )}

                    {datos.itemsLista && datos.itemsLista.length > 0 && (
                        <section className="modal-seccion">
                            <h3>{datos.subtituloLista}</h3>
                            
                            {datos.titulo === "Recursos" ? (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                                    
                                    {datos.itemsLista.map((item, index) => (
                                        <div key={index} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}>
                                            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.05rem', color: '#111827' }}>
                                                {item.negrita}
                                            </h4>
                                            <p style={{ margin: '0 0 0.5rem 0', color: '#374151', fontSize: '0.95rem' }}>
                                                {item.texto}
                                            </p>
                                            <a href={item.url} download style={{ color: '#b30819', textDecoration: 'underline', fontSize: '0.95rem' }}>
                                                {item.textoEnlace}
                                            </a>
                                        </div>
                                    ))}

                                    {datos.lineamientos && (
                                        <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}>
                                            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.05rem', color: '#111827' }}>
                                                {datos.lineamientos.titulo || "Lineamientos de accesibilidad"}
                                            </h4>
                                            <p style={{ margin: '0 0 0.5rem 0', color: '#374151', fontSize: '0.95rem' }}>
                                                {datos.lineamientos.texto}
                                            </p>
                                            {datos.lineamientos.disponible ? (
                                                <a href={datos.lineamientos.url} target="_blank" rel="noreferrer" style={{ color: '#b30819', textDecoration: 'underline', fontSize: '0.95rem' }}>
                                                    Ver lineamientos (PDF)
                                                </a>
                                            ) : (
                                                <span style={{ color: '#6b7280', fontSize: '0.92rem' }}>Enlace pendiente</span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <ul className="lista-roles" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                    {datos.itemsLista.map((item, index) => {
                                        
                                        if (item.nota) {
                                            return (
                                                <div key={index} className="modal-nota" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                                                    <p>{item.nota}</p>
                                                </div>
                                            );
                                        }

                                        if (item.email) {
                                            return (
                                                <li key={index} style={{ 
                                                    marginBottom: '1.5rem', 
                                                    listStyleType: 'disc',
                                                    borderBottom: index !== datos.itemsLista.length - 1 ? '1px solid #e5e7eb' : 'none',
                                                    paddingBottom: '1rem'
                                                }}>
                                                    <strong style={{ color: '#111827', fontSize: '1rem' }}>{item.negrita}</strong>
                                                    <div style={{ marginTop: '0.3rem', color: '#374151', fontSize: '0.95rem' }}>{item.texto}</div>
                                                    <a href={`mailto:${item.email}`} style={{ color: '#b30819', textDecoration: 'underline', fontSize: '0.95rem', display: 'inline-block', marginTop: '0.2rem' }}>
                                                        {item.email}
                                                    </a>
                                                </li>
                                            );
                                        }

                                        if (item.negrita && !item.url && !item.texto) {
                                            return (
                                                <li key={index} style={{ marginTop: '1.5rem', listStyleType: 'none' }}>
                                                    <strong style={{ fontSize: '1rem', color: '#111827' }}>{item.negrita}</strong>
                                                </li>
                                            );
                                        }

                                        if (item.url) {
                                            return (
                                                <li key={index} style={{ marginTop: '0.3rem', listStyleType: 'none' }}>
                                                    <a href={item.url} download className="enlace-descarga" style={{ color: '#b30819', textDecoration: 'underline' }}>
                                                        {item.textoEnlace ? item.textoEnlace : `Descargar ${item.texto} (PDF)`}
                                                    </a>
                                                </li>
                                            );
                                        }

                                        return (
                                            <li key={index} style={{ marginBottom: '1rem', listStyleType: 'disc' }}>
                                                {item.negrita && <strong>{item.negrita} </strong>}
                                                {item.texto}
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </section>
                    )}

                    {datos.nota && !datos.itemsLista?.some(item => item.nota) && (
                        <div className="modal-nota" style={{ marginTop: '1rem' }}>
                            <p>{datos.nota}</p>
                        </div>
                    )}

                    {datos.entrevistas && datos.entrevistas.length > 0 && (
    <section className="modal-seccion">
        <h3>Entrevistas relacionadas</h3>
        <div className="entrevistas-grid">
            {datos.entrevistas.map((ent, index) => (
                <div key={index} className="entrevista-card">
                    <h4>{ent.titulo}</h4>

                    {ent.descripcion && (
                        <p className="texto-descripcion-entrevista">
                            {ent.descripcion}
                        </p>
                    )}

                    {ent.disponible ? (
                        <button className="btn-entrevista"
                            onPointerDown={(e) => e.stopPropagation()}
                            onClick={(e) => {
                                e.stopPropagation();
                                onAbrirVideo(ent.videoId, `Entrevista: ${ent.titulo}`);
                            }}>
                            {ent.textoBoton}
                        </button>
                    ) : (
                        <span className="texto-pendiente">Enlace pendiente</span>
                    )}

                    {ent.botones && ent.botones.length > 0 && (

                        <div className="entrevista-botones-extra">
                            {ent.botones.map((btn, i) => (
                                <button
                                    key={i}
                                    className="btn-entrevista"
                                    onPointerDown={(e) => e.stopPropagation()}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onAbrirVideo(btn.videoId, btn.titulo || `Entrevista: ${ent.titulo}`);
                                    }}
                                >
                                    {btn.etiqueta}
                                    
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    </section>
)}


                    {datos.lineamientos && datos.titulo !== "Recursos" && (
                        <section className="modal-seccion"
                        onClick={(e) => e.stopPropagation()}>
                            <h3>Lineamientos</h3>
                            <p className="texto-lineamientos">
                                {datos.lineamientos.texto} ·{" "}
                                {datos.lineamientos.disponible ? (
                                    <a href={datos.lineamientos.url} target="_blank" rel="noreferrer" className="dColor">
                                        Ver documento
                                    </a>
                                ) : (
                                    <span className="texto-pendiente">Enlace pendiente</span>
                                )}
                            </p>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InfoPanels;