---
title: Versiones beta de NVDA 2023.3
permalink: "/nvda-2023-3beta/"
layout: post
giscus: true
author: Noelia
---

<footer>Miércoles, 13 de septiembre de 2023, actualizado el 26 de septiembre</footer>

[Se ha publicado NVDA 2023.3beta1](https://www.nvaccess.org/post/nvda-2023-3beta1), para probar características que se incluirán en la próxima versión estable (2023.3).

Al usar la versión beta, estarás eligiendo el canal beta/rc y solo recibirás notificaciones sobre actualizaciones disponibles para estos tipos de versiones.

Para volver al canal estable, actualiza manualmente NVDA a la última versión estable.

### Aspectos destacados

Esta versión incluye mejoras en el rendimiento, la respuesta y estabilidad de la salida de audio.

Ahora NVDA puede refrescar periódicamente los resultados del OCR, y el nuevo texto se irá leyendo a medida que aparece. Esto se puede configurar desde el menú NVDA (NVDA+n), submenú Preferencias, Opciones, categoría OCR de Windows.

Hay varias correcciones para braille y se ha mejorado la detección de dispositivos y el movimiento del cursor. Ahora es posible excluir controladores de la detección automática para mejorar el rendimiento de esta detección. También hay nuevos comandos para BRLTTY.

También se han corregido errores en la tienda de complementos, Microsoft Office, menús contextuales de Microsoft Edge y la calculadora de Windows.

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

- [Descargar NVDA 2023.3beta3](https://www.nvaccess.org/files/nvda/releases/2023.3beta3/nvda_2023.3beta3.exe).
	- SHA256: dc2440ca370b253fb26a44c7fd126618c5ff887ca288e3d3f82473e7118b5508 
- [Novedades](https://www.nvaccess.org/files/nvda/releases/2023.3beta3/documentation/es/changes.html).
- Informar sobre errores mediante [incidencias en GitHub](https://github.com/nvaccess/nvda/issues).
