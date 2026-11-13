
export const DataPanels = {
  desarrollo: {
    titulo: "1. Desarrollo y preproducción",
    consiste: "En el desarrollo se define qué historia se quiere contar, se escribe el guion y se buscan recursos para producirla. En la preproducción se organiza cómo filmarla: se conforma el equipo, se elige el elenco y las locaciones, y se prepara el plan de rodaje.",
    subtituloLista: "Roles habituales",
    itemsLista: [
      { negrita: "Guion:", texto: "desarrolla la historia y escribe o adapta el guion." },
      { negrita: "Producción:", texto: "gestiona la financiación, el presupuesto y la contratación." },
      { negrita: "Dirección:", texto: "define el enfoque creativo y prepara la puesta en escena." },
      { negrita: "Asistencia de dirección:", texto: "organiza el plan de rodaje con el equipo de producción." },
      { negrita: "Casting y locaciones:", texto: "coordinan la selección del elenco y la búsqueda de lugares de filmación." },
      { negrita: "Fotografía, arte y sonido:", texto: "planifican las necesidades de imagen, ambientación y registro sonoro." }
    ],
    nota: "Los roles pueden variar según la obra y el tamaño del equipo. Una persona puede asumir varias funciones.",
    entrevistas: [
      { titulo: "Guion", disponible: false },
      { titulo: "Dirección general", disponible: false },
      { titulo: "Dirección artística", disponible: true, textoBoton: "Ver entrevista: Dirección artística", url: "#entrevista-arte" },
      { titulo: "Dirección de fotografía", disponible: false }
    ],
    lineamientos: {
      texto: "Lineamientos de accesibilidad",
      disponible: false
    }
  },

  rodaje: {
    titulo: "2. Rodaje",
    consiste: "Es la etapa en la que se filman las escenas y se registra el sonido en el set o la locación. El equipo realiza las tomas según el plan de rodaje y adapta el trabajo cuando cambian las condiciones de filmación.",
    subtituloLista: "Roles habituales",
    itemsLista: [
      { negrita: "Dirección y elenco:", texto: "Trabajan la puesta en escena y las interpretaciones." },
      { negrita: "Asistencia de dirección y producción de rodaje:", texto: "Coordinan tiempos, convocatorias y logística del set." },
      { negrita: "Fotografía, cámara e iluminación: ", texto: "Preparan y registran la imagen de cada toma." },
      { negrita: "Sonido directo:", texto: "Registra diálogos, ambientes y otros sonidos en la locación." },
      { negrita: "Arte, vestuario y maquillaje:", texto: "Preparan los espacios, los objetos y la apariencia de los personajes." },
      { negrita: "Continuidad:", texto: "Registra detalles de las tomas para facilitar su unión en el montaje.." }
    ],
    nota: "Los roles pueden variar según la obra y el tamaño del equipo. Una persona puede asumir varias funciones.",
    entrevistas: [
      { titulo: "Dirección general", disponible: false },
      { titulo: "Dirección artística", disponible: true, textoBoton: "Ver entrevista: Dirección artística", url: "#entrevista-arte" },
      { titulo: "Dirección de fotografía", disponible: false }
    ],
    lineamientos: {
      texto: "Lineamientos de accesibilidad",
      disponible: false
    }
  },

  posproduccion: {
    titulo: "3. Posproducción",
    consiste: "En esta etapa se seleccionan y ensamblan las tomas, se trabaja el sonido y se ajusta la imagen. El equipo prepara la versión final de la obra y, cuando se han previsto, integra y revisa recursos de accesibilidad.",
    subtituloLista: "Roles habituales",
    itemsLista: [
      { negrita: "Montaje:", texto: "Selecciona y ordena las tomas para construir la narración y su ritmo." },
      { negrita: "Dirección y coordinación de posproducción:", texto: "Revisan las decisiones creativas y organizan las entregas." },
      { negrita: "Edición, diseño y mezcla de sonido:", texto: "Trabajan los diálogos, los ambientes, los efectos y su equilibrio con la música." },
      { negrita: "Color:", texto: "Ajusta el color y el contraste para dar coherencia a la imagen." },
      { negrita: "Música y efectos visuales:", texto: "Aportan música y efectos de imagen cuando la obra los requiere." },
      { negrita: "Accesibilidad audiovisual:", texto: "Prepara y revisa recursos como subtítulos accesibles y audiodescripción, según lo previsto." }
    ],
    nota: "Los roles pueden variar según la obra y el tamaño del equipo. Una persona puede asumir varias funciones.",
    lineamientos: {
      texto: "Lineamientos de accesibilidad",
      disponible: false
    }
  },

  distribucion: {
    titulo: "4. Distribución y exhibición",
    consiste: "La distribución organiza cómo llega la obra a salas, festivales, plataformas y otros circuitos. La exhibición la presenta al público en funciones o servicios digitales y pone a disposición las versiones y los recursos de acceso preparados.",
    subtituloLista: "Roles habituales",
    itemsLista: [
      { negrita: "Producción y distribución:", texto: "Definen la estrategia de circulación y negocian acuerdos de exhibición." },
      { negrita: "Comunicación y difusión:", texto: "Preparan materiales promocionales y anuncian dónde y cuándo ver la obra." },
      { negrita: "Programación y exhibición:", texto: "Seleccionan las obras y organizan las funciones en salas, festivales o espacios comunitarios." },
      { negrita: "Proyección y operación de plataformas:", texto: "Comprueban las copias y las condiciones de reproducción." },
      { negrita: "Accesibilidad y atención al público:", texto: "Informan qué apoyos están disponibles y verifican que puedan usarse en la función o plataforma." },
    ],
    nota: "Los roles pueden variar según la obra y el tamaño del equipo. Una persona puede asumir varias funciones.",
    lineamientos: {
      texto: "Lineamientos de accesibilidad",
      disponible: false
    }
  },
  
  auditiva: {
    titulo: "Personas con discapacidad auditiva",
    consiste: "La distribución organiza cómo llega la obra a salas, festivales, plataformas y otros circuitos. La exhibición la presenta al público en funciones o servicios digitales y pone a disposición las versiones y los recursos de acceso preparados.",
    subtituloLista: "Roles habituales",
    itemsLista: [
      { negrita: "Formas de acceso y participación:", texto: "Las preferencias de comunicación varían: algunas personas usan el habla o el texto y otras se comunican en Lengua de Señas Colombiana (LSC). El ruido y las conversaciones con varias voces pueden dificultar la comprensión del habla." },
      { negrita: "Barreras:", texto: "En una producción, las indicaciones que solo se dan de viva voz y la edición que depende únicamente de la escucha pueden limitar la participación. Como público, los subtítulos incompletos pueden dificultar reconocer quién habla o entender el papel de la música y los efectos." },
      { negrita: "Apoyos propuestos:", texto: "Acordar con cada persona el uso de texto, señales visuales o interpretación en LSC. Facilitar la revisión del audio con transcripciones e indicadores visuales. En la obra final, ofrecer subtítulos sincronizados que identifiquen a quien habla e incluyan los sonidos relevantes." },
      { negrita: "Documento relacionado"},
      { textoEnlace:"Descargar caracterización completa (PDF).", url: "/pdf/Dis_auditiva.pdf"},
    ],
    
  },
};
