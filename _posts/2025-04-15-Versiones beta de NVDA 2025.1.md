---
title: Versiones beta de NVDA 2025.1
permalink: "/nvda-2025-1beta/"
layout: post
giscus: true
author: Noelia
---

<footer>Martes, 15 de abril de 2025 (actualizado el 5 de junio)</footer>

[Se ha publicado NVDA 2025.1beta1](https://www.nvaccess.org/post/nvda-2025-1beta1).


### Enlaces

- [Descargar NVDA 2025.1beta10](https://download.nvaccess.org/releases/2025.1beta10/nvda_2025.1beta10.exe)
  - SHA256: 6d802bed91619845fef30740867885e2e1c3eb075ee2021542de83096404c3c8
- [Novedades](https://download.nvaccess.org/documentation/es/changes.html)
- [Incidencias en GitHub](https://github.com/nvaccess/nvda/issues)

### [Actualización 5 de junio de 2025](https://www.nvaccess.org/post/nvda-2025-1beta10)


La versión beta9 se ha omitido debido a una incidencia técnica durante el proceso de publicación.

Se ha publicado NVDA 2025.1beta10 con los siguientes cambios (introducidos en beta9/10):

- Actualización de traducciones.
- Corregida la navegación de ayuda contextual en diálogos de acceso remoto.


### [Actualización 26 de mayo de 2025](https://www.nvaccess.org/post/nvda-2025-1beta8)

Se ha publicado NVDA 2025.1beta8. La versión beta7 se ha omitido debido a un problema durante el proceso de publicación. Se han introducido los siguientes cambios:

- Actualización de traducciones.
- Correcciones para deshabilitar adecuadamente las opciones de configuración de acceso remoto y de la tienda de complementos en modo seguro.
- Correcciones para leer matemáticas en PDF cuando el texto alternativo incluya "&" o "<".
- Correcciones en el comando que cambia el anunciado de CLDR.
- Corrección de incidencias al conectarse a un servidor que no sea de confianza.
- Ahora la documentación incluye un fabicono.


### [Actualización 19 de mayo de 2025](https://www.nvaccess.org/post/nvda-2025-1beta6)

Se ha publicado NVDA 2025.1beta6 con los siguientes cambios:

- Actualización de traducciones.
- Corrección para la herramienta "COM registration fixing": no se ejecutará cuando se cancele con `alt+f4`.
- Pequeña corrección para voces SAPI 4.
- Corrección para detección de dispositivos braille.
- Pequeñas mejoras en la experiencia con el acceso remoto.

### [Actualización 12 de mayo de 2025](https://mailchi.mp/58d6d37363ea/nvda-20251-beta-5-now-available?e=4f535ed214)

Se ha publicado NVDA 2025.1beta5 con los siguientes cambios:

- Actualización de traducciones.
- Correcciones para leer atributos de matemáticas en PDF.
- Pequeñas mejoras en la experiencia con el uso de acceso remoto.
### [Actualización 5 de mayo de 2025](https://www.nvaccess.org/post/nvda-2025-1beta4)

Se ha publicado NVDA 2025.1beta4 con los siguientes cambios:

- Actualización de traducciones.
- Corregido un error de seguridad que permitía a un proceso arbitrario conectarse a una sesión de acceso remoto ejecutándose en una pantalla segura.
- Ahora quienes controlan sesiones de acceso remoto pueden recuperar el control después de que el último PC controlado se haya desconectado.
- Se ha mejorado el manejo del foco en el diálogo de conexión de acceso remoto.
- No se cambiará el estado de silencio de acceso remoto cuando no existen conexiones activas.

### [Actualización 28 de abril de 2025](https://www.nvaccess.org/post/nvda-2025-1beta3)

Se ha publicado NVDA 2025.1beta3 con los siguientes cambios:

- Actualización de traducciones.
- Se impide iniciar una nueva sesión de acceso remoto en modo seguro.
- Actualizaciones para la interfaz de acceso remoto.
- Añadido un nuevo comando (sin gesto de entrada asignado) para mostrar la configuración de acceso remoto.
- Correcciones menores para voces SAPI 4.




### [Actualización 22 de abril de 2025](https://www.nvaccess.org/post/nvda-2025-1beta2)

Se ha publicado NVDA 2025.1beta2 con los siguientes cambios:

- Actualización de traducciones.
- Corrección menor para voces SAPI 5 cuando se usa alzado brusco.

### Aspectos destacados

En esta versión se introduce Acceso Remoto, que ofrece la posibilidad de controlar un ordenador en el que se ejecute NVDA desde otro dispositivo en el que NVDA también se esté ejecutando.

Hay muchas mejoras en la salida por voz, en concreto, en la respuesta de SAPI 4, SAPI 5 y voces OneCore. Ahora en SAPI 5 se admite el alzado brusco y el cambio automático de idioma. Ahora las voces SAPI 4 admiten atenuación de audio, eliminación de silencio inicial, y pueden mantener activo el dispositivo de sonido.

Se ha mejorado el sistema de actualización automática de la tienda de complementos, con la posibilidad de elegir canales para actualizaciones automáticas y de ejecutar actualizaciones automáticas en segundo plano.

Ahora es más fácil refrescar manualmente la ventana del OCR y activar o desactivar su actualización automática, gracias a nuevos comandos.

La selección nativa está disponible en Chrome y Edge.

Se ha mejorado el soporte para Microsoft Office y LibreOffice, especialmente con información al pulsar nuevos atajos de teclado.

Las tablas braille de entrada y salida por defecto ahora pueden estar definidas dependiendo del idioma. Se ha añadido soporte nativo para el dispositivo braille multilínea gráfico táctil de Dot Inc. Hay otras correcciones menores para dispositivos braille, en particular relativas a la conectividad.

Se han actualizado el transcriptor braille LibLouis, eSpeak-NG y Unicode CLDR. Hay disponibles nuevas tablas braille: tabla copta, cuneiforme compacta y computerizada portuguesa de seis puntos.
