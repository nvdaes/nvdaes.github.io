---
title: Versiones beta de NVDA 2023.3
permalink: "/nvda-2023-3beta/"
layout: post
giscus: true
author: Noelia
---

<footer>Miércoles, 13 de septiembre de 2023, actualizado el 3 de octubre</footer>

[Se ha publicado NVDA 2023.3beta1](https://www.nvaccess.org/post/nvda-2023-3beta1), para probar características que se incluirán en la próxima versión estable (2023.3).

Al usar la versión beta, estarás eligiendo el canal beta/rc y solo recibirás notificaciones sobre actualizaciones disponibles para estos tipos de versiones.

Para volver al canal estable, actualiza manualmente NVDA a la última versión estable.

### Aspectos destacados

Esta versión incluye mejoras en el rendimiento, la respuesta y estabilidad de la salida de audio.

Ahora NVDA puede refrescar periódicamente los resultados del OCR, y el nuevo texto se irá leyendo a medida que aparece. Esto se puede configurar desde el menú NVDA (NVDA+n), submenú Preferencias, Opciones, categoría OCR de Windows.

Hay varias correcciones para braille y se ha mejorado la detección de dispositivos y el movimiento del cursor. Ahora es posible excluir controladores de la detección automática para mejorar el rendimiento de esta detección. También hay nuevos comandos para BRLTTY.

También se han corregido errores en la tienda de complementos, Microsoft Office, menús contextuales de Microsoft Edge y la calculadora de Windows.

### [Actualización 3 de octubre de 2023](https://www.nvaccess.org/post/nvda-2023-3beta4)

- Corregido un error al ejecutar el instalador de versiones anteriores de NVDA después de haber instalado NVDA 2023.3beta3.
- Se ha solucionado un problema de rendimiento del administrador de tareas de Windows y del monitor de confiabilidad.
- Corregidos los comandos de indicación de formato en Excel.
- Corregido un nuevo error que causaba problemas al trabajar con Windows 8 y versiones anteriores.
- Actualización de traducciones.

### [Actualización 26 de septiembre de 2023](https://www.nvaccess.org/post/nvda-2023-3beta3)

Se ha publicado NVDA 2023.3beta3 con los siguientes cambios:

- Nuevo panel para opciones de audio: las opciones para controlar el volumen de sonidos y pitidos de NVDA (y para que dependan del volumen de la voz) se encuentran en este panel, y no en el de opciones avanzadas.
- Correcciones a la tienda de complementos:
	- Corregido un error por el que NVDA podría no hablar hasta su reinicio después de la instalación de complementos.
	- Corregidos errores en la gestión de complementos incompatibles al actualizar NVDA a una versión posterior.
	- Corregido un error que impedía la instalación de complementos si una descarga anterior fallaba o se cancelaba.
- Corregidos problemas con el rendimiento en el administrador de tareas.
- NVDA ya no ignorará cambios del foco cuando una ventana anidada (ventana nieta) recibe el foco.
- Corregida una posible causa de cuelgue al iniciarse NVDA. 
- Traducciones actualizadas.

### [Actualización 19 de septiembre de 2023](https://www.nvaccess.org/post/nvda-2023-3beta2)

Se ha publicado NVDA 2023.3beta2 con los siguientes cambios:

- Corregido un error por el que no era posible utilizar algunos complementos instalados desde fuentes externas.
- Traducciones actualizadas.

### Enlaces

- [Descargar NVDA 2023.3beta3](https://www.nvaccess.org/files/nvda/releases/2023.3beta4/nvda_2023.3beta4.exe).
	- SHA256: ef50fd0afb0d2edef2d5af4ac67243e08d3318753aa15887a76bd9df74d50e8f
- [Novedades](https://www.nvaccess.org/files/nvda/releases/2023.3beta4/documentation/es/changes.html).
- Informar sobre errores mediante [incidencias en GitHub](https://github.com/nvaccess/nvda/issues).
