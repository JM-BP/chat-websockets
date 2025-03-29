# Chat en Tiempo Real con WebSockets

Un proyecto de chat en tiempo real construido con WebSockets en JavaScript. Este repositorio está diseñado para aprender cómo funcionan los WebSockets, permitiendo comunicación bidireccional entre un servidor y múltiples clientes de manera sencilla y práctica.



## Características
- **Mensajes en tiempo real**: Envía y recibe mensajes instantáneamente entre múltiples usuarios.
- **Identificación de usuarios**: Cada usuario ingresa un nombre al conectarse.
- **Interfaz simple**: Mensajes diferenciados por color (azul para enviados, negro para recibidos).
- **Soporte multiplataforma**: Funciona en cualquier navegador moderno con soporte para WebSockets.
- **Notificaciones**: Muestra mensajes cuando los usuarios se conectan o desconectan.



## Objetivo
Este proyecto fue creado como una herramienta de aprendizaje para entender los fundamentos de WebSockets, incluyendo la configuración de un servidor, la conexión de clientes y el manejo de mensajes en tiempo real.



## Tecnologías utilizadas
- **Frontend**: HTML, CSS, JavaScript (WebSocket API)
- **Backend**: Node.js con la librería `ws` para WebSockets.
  


## Requisitos previos
- [Node.js](https://nodejs.org/) (versión 14 o superior recomendada)
- Un navegador moderno (Chrome, Firefox, Safari, etc.)
- Opcional: Una extensión como `Live Server` para VSCode para servir el frontend

  

## Instalación
Sigue estos pasos para configurar y ejecutar el proyecto localmente:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/[tu-usuario]/chat-websockets.git
   cd chat-websockets

2. **Instala las dependencias del servidor**:
    ```bash
   npm install ws
    
3. **Instala las dependencias del servidor**:
    ```text
    chat-websockets/
    ├── server.js         # Código del servidor WebSocket
    ├── index.html        # Interfaz del cliente
    ├── README.md         # Este archivo
    └── package.json      # Dependencias del proyecto


## Uso
1. **Inicia el servidor**:
   ```bash
   node server.js

El servidor se ejecutará en ws://localhost:8080.
   
2. **Abre el cliente**:
- Usa una extensión como Live Server en VSCode para abrir index.html en el navegador, o sirve el archivo con cualquier servidor local (por ejemplo, npx http-server).
- Alternativamente, abre index.html directamente en el navegador, pero asegúrate de que el servidor esté corriendo.

3. **Prueba el chat**:
- Abre varias pestañas o navegadores con index.html.
- Ingresa un nombre en cada instancia.
- Envía mensajes y observa cómo se actualizan en tiempo real.
   
