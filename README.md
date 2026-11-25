# CONTRAPLANO

CONTRAPLANO es una aplicación web interactiva que presenta de forma visual e inclusiva el proceso de producción audiovisual. El proyecto representa una mesa de producción con etapas, roles, personajes participantes y recursos de accesibilidad para promover una producción cinematográfica más diversa y accesible.

Desarrollado como iniciativa conjunta de la Universidad del Valle y la Universidad Autónoma de Occidente.

## Características

- Escena tridimensional construida con React Three Fiber y Three.js.
- Representación interactiva de las etapas de producción audiovisual:
  - Desarrollo y preproducción.
  - Rodaje.
  - Posproducción.
  - Distribución y exhibición.
- Fichas informativas sobre roles habituales, barreras y apoyos propuestos.
- Representaciones de personas con discapacidad visual, auditiva y motriz, así como personas que usan comunicación aumentativa y alternativa.
- Entrevistas relacionadas disponibles en ventanas modales.
- Descarga de la caracterización de la población participante y de los lineamientos de accesibilidad.
- Navegación por teclado, controles con etiquetas y anuncios accesibles.
- Diseño basado en React, Vite y componentes web interactivos.

## Tecnologías

- React 19
- Vite 8
- React Three Fiber
- Drei
- Three.js
- React Router
- React Three A11y
- GSAP y React Spring
- Oxlint

## Requisitos

- Node.js 18 o superior.
- npm.

## Instalación y ejecución

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Sara1703/Production_Table.git
   cd Production_Table
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre la dirección mostrada por Vite, normalmente:

   ```text
   http://localhost:5173
   ```

## Comandos disponibles

```bash
npm run dev      # Ejecuta el entorno de desarrollo.
npm run build    # Genera la versión de producción.
npm run preview  # Previsualiza el resultado de la compilación.
npm run lint     # Ejecuta Oxlint sobre el proyecto.
```

## Estructura del proyecto

```text
public/
  environment/       Entornos HDR utilizados en la escena.
  models-3d/         Modelos GLB y recursos gráficos.
  pdf/               Caracterización y lineamientos descargables.

src/
  Objects/           Modelos y objetos tridimensionales.
  People3d/          Representaciones tridimensionales de participantes.
  ProductionTable/   Componente principal de la experiencia.
  lights/            Configuración de iluminación.
  panels/            Fichas informativas y reproductor de video.
  route/             Configuración de rutas.
  main.jsx           Punto de entrada de React.
```

## Accesibilidad

La interfaz incorpora textos alternativos, controles accesibles mediante teclado, estados anunciados con regiones live y diálogos con gestión de enfoque. Las etiquetas de los elementos tridimensionales permiten reconocer y seleccionar las etapas y los personajes participantes.

## Recursos incluidos

- Caracterización completa de la población participante.
- Lineamientos de accesibilidad para la producción audiovisual.
- Entrevistas relacionadas con guion, dirección, producción, fotografía y dirección artística.

## Autores

### Universidad del Valle

- Paola J. Rodríguez C., Escuela de Ingeniería de Sistemas y Computación.
- Javier M. Reyes V., Departamento de Diseño.
- John A. Sanabria O., Escuela de Ingeniería de Sistemas y Computación.

### Universidad Autónoma de Occidente

- Natalia Campo Castro, Escuela de Cine y Comunicación Digital.

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para conocer los términos completos.
