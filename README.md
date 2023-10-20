# Real_Time_Chat
**Chat en Tiempo Real con Express.js, MongoDB y JavaScript**

Este proyecto es una aplicación de chat en tiempo real que utiliza Express.js como backend, MongoDB como base de datos y JavaScript para el frontend. Permite a los usuarios enviar mensajes en tiempo real, que se almacenan en una base de datos y se muestran instantáneamente en la interfaz del usuario.

### Funcionalidades

- **Envío y Recepción de Mensajes:** Los usuarios pueden enviar mensajes ingresando su nombre y el mensaje en la interfaz de usuario. Los mensajes se envían al servidor y se muestran instantáneamente en la ventana del chat de todos los usuarios conectados.

- **Almacenamiento en Base de Datos:** Todos los mensajes enviados se almacenan en una base de datos MongoDB, lo que permite recuperar el historial de mensajes incluso después de recargar la página.

- **Notificación de Nuevos Mensajes:** Cuando se recibe un nuevo mensaje, se muestra una notificación visual en la interfaz de usuario y se reproduce un sonido de alerta para alertar al usuario sobre la llegada de un nuevo mensaje.

### Tecnologías Utilizadas

- **Express.js:** Para el backend del servidor y manejar las solicitudes HTTP.
- **MongoDB:** Como base de datos para almacenar los mensajes de chat.
- **JavaScript (con jQuery):** Para el frontend y la interactividad del usuario.
- **HTML/CSS:** Para la estructura y el estilo de la interfaz de usuario.

### Instrucciones de Uso

1. **Instalación de Dependencias:**
   - Ejecuta `npm install` en el directorio del proyecto para instalar todas las dependencias necesarias.

2. **Configuración de la Base de Datos:**
   - Configura la URL de conexión a MongoDB en el archivo `server.mjs`.

3. **Iniciar el Servidor:**
   - Ejecuta `npm start` para iniciar el servidor. La aplicación estará disponible en `http://localhost:3000`.

4. **Uso de la Aplicación:**
   - Abre el navegador y visita `http://localhost:3000` para acceder a la interfaz de chat.
   - Ingresa tu nombre y el mensaje que deseas enviar, luego presiona el botón "Enviar". Los mensajes se mostrarán en tiempo real para todos los usuarios conectados.

### Notas Adicionales

- Este proyecto utiliza CORS para permitir solicitudes desde cualquier origen, por lo que es importante tener en cuenta la seguridad al implementar en un entorno de producción.

- La funcionalidad de notificación de nuevos mensajes puede variar según el navegador y su configuración de permisos para mostrar notificaciones.

¡Disfruta de tu experiencia de chat en tiempo real! Si tienes alguna pregunta o problema, no dudes en consultar la documentación o contactar a los desarrolladores. ¡Feliz chateo!