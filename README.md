# ReactApp

Aplicacion de prueba
Se desarrolló una app sencilla compuesta back (Nodejs Express), front (reactjs) para consumir una api publica de JSON placeholder

## Características

- **Tecnologías utilizadas:**
  - React
  - TypeScript
  - Vite
  - Material UI (MUI)
  - Redux
  - Axios
  - NodeJs - Express
  - NGINX - Web Server

- **Funcionalidades principales:**
  - Interfaz de usuario para comentarios.
  - Manejo de estado global con Redux.
  - Comunicación con APIs usando Axios.
  - Paginación, búsqueda y filtrado de datos.
  - Diseño adaptativo con Material UI.

---

## Requisitos previos

Antes de empezar, asegúrate de tener instalados los siguientes programas:

- [Docker](https://www.docker.com/)
- [DockerCompose](https://docs.docker.com/compose/)

---

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local.

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Em1GH1n0/react-app.git

1. **Crear .env a nivel del docker-compose:**

   ```bash
   FRONT_PORT=
   BACK_PORT=

3. **Hacer el setup de la app**
    ```bash
    docker compose up --build

