
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
    itemsLista: [
      { negrita: "Formas de acceso y participación:", texto: "Las preferencias de comunicación varían: algunas personas usan el habla o el texto y otras se comunican en Lengua de Señas Colombiana (LSC). El ruido y las conversaciones con varias voces pueden dificultar la comprensión del habla." },
      { negrita: "Barreras:", texto: "En una producción, las indicaciones que solo se dan de viva voz y la edición que depende únicamente de la escucha pueden limitar la participación. Como público, los subtítulos incompletos pueden dificultar reconocer quién habla o entender el papel de la música y los efectos." },
      { negrita: "Apoyos propuestos:", texto: "Acordar con cada persona el uso de texto, señales visuales o interpretación en LSC. Facilitar la revisión del audio con transcripciones e indicadores visuales. En la obra final, ofrecer subtítulos sincronizados que identifiquen a quien habla e incluyan los sonidos relevantes." },
      { negrita: "Documento relacionado"},
      { textoEnlace:"Descargar caracterización completa (PDF).", url: "/pdf/Caracterizacion_poblacion_CONTRAPLANO.pdf"},
    ],    
  },

  visual: {
    titulo: "Personas con ceguera total",

    itemsLista: [
      { negrita: "Formas de acceso y participación:", texto: "En los talleres, las personas con ceguera total accedieron a la información principalmente por el sonido, con apoyo del tacto y de referencias espaciales. Los lectores de pantalla facilitan el uso de documentos y herramientas digitales cuando estos son accesibles." },
      { negrita: "Barreras:", texto: "Al editar un video, los controles sin etiquetas y las líneas de tiempo que dependen de imágenes dificultan localizar escenas y revisar el montaje. Como público, la información que solo aparece en pantalla puede quedar fuera de su alcance." },
      { negrita: "Apoyos propuestos:", texto: "Usar guiones y herramientas compatibles con lectores de pantalla, describir los elementos visuales durante la producción y planear la audiodescripción desde el guion. Al colaborar, acordar cómo brindar apoyo para que la persona conserve el control sobre sus decisiones creativas." },
      { negrita: "Documento relacionado"},
      { textoEnlace:"Descargar caracterización completa (PDF).", url: "/pdf/Caracterizacion_poblacion_CONTRAPLANO.pdf"},
    ],    
  },

  motriz: {
    titulo: "Personas con movilidad reducida",

    itemsLista: [
      { negrita: "Formas de acceso y participación:", texto: "Las necesidades pueden variar al desplazarse, alcanzar equipos, manejar controles o permanecer en una postura. Algunas personas requieren rutas despejadas; otras necesitan pausas o ajustes en la altura y el manejo de los equipos." },
      { negrita: "Barreras:", texto: "En rodaje, los cables, los pasos estrechos y las jornadas sin pausas pueden dificultar el trabajo. En exhibición, una persona puede entrar a la sala y aun así encontrar que las ubicaciones disponibles ofrecen mala visibilidad o la separan de sus acompañantes." },
      { negrita: "Apoyos propuestos:", texto: "Revisar los recorridos antes del rodaje y cuando cambie la distribución del set. Acordar pausas y adaptar los equipos a las tareas de cada persona. En exhibición, ofrecer ubicaciones con buena visibilidad y espacio para compartir la función con acompañantes." },
      { negrita: "Documento relacionado"},
      { textoEnlace:"Descargar caracterización completa (PDF).", url: "/pdf/Caracterizacion_poblacion_CONTRAPLANO.pdf"},
    ],    
  },

  dispositivos: {
    titulo: "Personas que se comunican mediante dispositivos",
    
    itemsLista: [
      { negrita: "Formas de acceso y participación:", texto: "Una tableta u otro dispositivo de comunicación aumentativa y alternativa (CAA) puede complementar o sustituir el habla. Usar un dispositivo para expresarse no indica dificultad para comprender una película o tomar decisiones." },
      { negrita: "Barreras:", texto: "Si el equipo cambia de tema antes de que la persona termine de preparar su mensaje, su propuesta puede quedar sin escuchar. Lo mismo puede ocurrir al hacer una pregunta o comentar la obra en un cineforo." },
      { negrita: "Apoyos propuestos:", texto: "Dirigirse directamente a la persona, acordar cómo puede pedir el turno y darle tiempo para completar su mensaje. Compartir con anticipación los temas y las preguntas, y facilitar el uso de su dispositivo durante las actividades." },
      {nota: "Los roles pueden variar según la obra y el tamaño del equipo. Una persona puede asumir varias funciones."},
      { negrita: "Documento relacionado"},
      { textoEnlace:"Descargar caracterización completa (PDF).", url: "/pdf/Caracterizacion_poblacion_CONTRAPLANO.pdf"},
    ],           
  },

  univalle: {
    titulo: "Universidad del Valle",
    subtituloLista: "Autores",
    itemsLista: [
      { 
        negrita: "Profesora: Paola J. Rodríguez C. Ph.D.", 
        texto: "Escuela de Ingeniería de Sistemas y Computación", 
        email: "paola.rodriguez@correounivalle.edu.co"
      },
      { 
        negrita: "Profesor: Javier M. Reyes V. Ph.D.", 
        texto: "Departamento de Diseño", 
        email: "javier.reyes@correounivalle.edu.co"
      },
      { 
        negrita: "Profesor: John A. Sanabria O. Ph.D.", 
        texto: "Escuela de Ingeniería de Sistemas y Computación", 
        email: "john.sanabria@correounivalle.edu.co"
      },
    ],
  },
  uao: {
    titulo: "Universidad Autónoma de Occidente",
    subtituloLista: "Autora",
    itemsLista: [
      { 
        negrita: "Profesora: Natalia Campo Castro Ph.D.", 
        texto: "Escuela de Cine y Comunicación Digital", 
        email: "ncampo@uao.edu.co"
      },]
  },

    recurso: {
    titulo: "Recursos",
    subtituloLista: "Documentos del proyecto",
    itemsLista: [
      { 
        negrita: "Caracterización de la población participante", 
        texto: "Documento completo del estudio de caracterización del proyecto.",
        textoEnlace: "Descargar caracterización completa (PDF)",
        url: "/pdf/Caracterizacion_poblacion_CONTRAPLANO.pdf" 
      }
    ],
    lineamientos: {
      titulo: "Lineamientos de accesibilidad", 
      texto: "Documento de lineamientos para la producción audiovisual inclusiva.",
      url: "/pdf/Lineamientos.pdf", 
      disponible: false 
    },
    entrevistas: [
      { titulo: "Guion", descripcion: "Desarrollo y preproducción", disponible: false },
      { titulo: "Dirección general", descripcion: "Desarrollo y preproducción · Rodaje", disponible: false },
      { titulo: "Dirección artística", disponible: true, textoBoton: "Ver entrevista: Dirección artística", url: "#entrevista-arte" },
      { titulo: "Dirección de fotografía", disponible: false }
]
  },
};
