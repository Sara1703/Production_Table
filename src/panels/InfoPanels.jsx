import { useEffect, useRef } from "react";
import "./InfoPanels.css"


const InfoPanels = ({datos, onClose}) => {
    const closeBtnRef = useRef(null);

    useEffect(() => {
        if(!datos) return;
        
        if(closeBtnRef.current) {
            closeBtnRef.current.focus();
        }

        const handleKeyDown = (e) => {
            if(e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [datos, onClose]);

    if (!datos) return null;

    return (
        <div 
      className="modal-overlay" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="panel-titulo"
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
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
              <ul className="lista-roles">
                {datos.itemsLista.map((item, index) => (
                  <li key={index} style={{ marginBottom: '1rem', listStyleType: item.url ? 'none' : 'disc'}}>
                    
                    {/* Si el item tiene una URL, lo mostramos como enlace de descarga */}
                    {item.url ? (
                      <a 
                        href={item.url} 
                        download 
                        className="enlace-descarga" // Este estilo ya lo tienes en tu CSS (color rojo)
                      >
                        {item.textoEnlace ? item.textoEnlace : `Descargar ${item.texto} (PDF)`}
                      </a>
                    ) : (
                      
                      <span>
                        {item.negrita && <strong>{item.negrita} </strong>}
                        {item.texto}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              
            </section>
          )}

          {datos.nota && (
            <div className="modal-nota">
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
                    {ent.disponible ? (
                      <a href={ent.url} className="btn-entrevista" target="_blank" rel="noreferrer">
                        {ent.textoBoton}
                      </a>
                    ) : (
                      <span className="texto-pendiente">Enlace pendiente</span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {datos.lineamientos && (
            <section className="modal-seccion">
              <h3>Lineamientos</h3>
              <p className="texto-lineamientos">
                {datos.lineamientos.texto} ·{" "}
                {datos.lineamientos.disponible ? (
                  <a href={datos.lineamientos.url} target="_blank" rel="noreferrer">
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




    

        
