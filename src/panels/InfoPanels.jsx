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
              
              {/* Quitamos la viñeta por defecto del <ul> para controlarla manualmente */}
              <ul className="lista-roles" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {datos.itemsLista.map((item, index) => {
                  
                  // 1. NOTA (La sacamos de la lista para que no tenga viñeta)
                  if (item.nota) {
                    return (
                      <div key={index} className="modal-nota" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                        <p>{item.nota}</p>
                      </div>
                    );
                  }

                  // 2. AUTORES (Correos de la universidad)
                  if (item.email) {
                    return (
                      <li key={index} style={{ marginBottom: '1.5rem', listStyleType: 'disc' }}>
                        <strong>{item.negrita}</strong>
                        <div style={{ marginTop: '0.2rem', color: '#374151' }}>{item.texto}</div>
                        <a href={`mailto:${item.email}`} style={{ color: '#b30819', textDecoration: 'underline' }}>
                          {item.email}
                        </a>
                      </li>
                    );
                  }

                  // 3. TÍTULO DEL DOCUMENTO (Ej: "Documento relacionado")
                  if (item.negrita && !item.url && !item.texto) {
                    return (
                      <li key={index} style={{ marginTop: '1.5rem', listStyleType: 'none' }}>
                        <strong style={{ fontSize: '1rem', color: '#111827' }}>{item.negrita}</strong>
                      </li>
                    );
                  }

                  // 4. ENLACE DEL DOCUMENTO (El PDF)
                  if (item.url) {
                    return (
                      <li key={index} style={{ marginTop: '0.3rem', listStyleType: 'none' }}>
                        <a href={item.url} download className="enlace-descarga" style={{ color: '#b30819', textDecoration: 'underline' }}>
                          {item.textoEnlace ? item.textoEnlace : `Descargar ${item.texto} (PDF)`}
                        </a>
                      </li>
                    );
                  }

                  // 5. ROLES NORMALES (Los que sí llevan viñeta)
                  return (
                    <li key={index} style={{ marginBottom: '1rem', listStyleType: 'disc' }}>
                      {item.negrita && <strong>{item.negrita} </strong>}
                      {item.texto}
                    </li>
                  );
                })}
              </ul>

              {/* 6. NOTA GENERAL (Para ventanas como Desarrollo que la tienen afuera) */}
              {datos.nota && (
                <div className="modal-nota" style={{ marginTop: '1.5rem' }}>
                  <p>{datos.nota}</p>
                </div>
              )}

            </section>
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