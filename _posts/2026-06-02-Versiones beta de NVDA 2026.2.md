---
title: Versiones beta de NVDA 2026.2
permalink: "/nvda-2026-2beta/"
layout: post
giscus: true
excerpt: "Martes, 2 de junio de 2026 (actualizado el 14 de julio)"

author: Noelia
---

<footer>Martes, 2 de junio de 2026 (actualizado el 14 de julio)</footer>

[Se ha publicado NVDA 2026.2beta1](https://www.nvaccess.org/post/nvda-2026-2beta1).

Al usar la versión beta, estarás eligiendo el canal beta/rc y solo recibirás notificaciones sobre actualizaciones disponibles para estos tipos de versiones.

Para volver al canal estable, actualiza manualmente NVDA a la última versión estable.

### Enlaces

- [Descargar NVDA 2026.2beta7](https://download.nvaccess.org/releases/2026.2beta7/nvda_2026.2beta7.exe)
  - SHA256: d57817664b7468924671485e4ef637e9435a2e63901bd64024b42d3e7bcb4d7f
- [Novedades](https://download.nvaccess.org/documentation/es/changes.html)
- [Incidencias en GitHub](https://github.com/nvaccess/nvda/issues)

### Aspectos destacados

Esta versión incluye una nueva lupa integrada, mejoras en los gestos y la navegación táctil, y amplía las capacidades de la salida por voz y el braille.

La lupa proporciona opciones de zum y filtrado de colores para asistir a usuarios con discapacidad visual. Actualmente, la lupa solo admite modo de pantalla completa; se prevé incorporar modos de acoplamiento en una futura versión.

El soporte táctil se ha ampliado significativamente, con gestos de pellizco y navegación táctil en modo exploración para contenido web. Ahora puedes navegar por enlaces, encabezados, campos de formulario y otros elementos con gestos táctiles de deslizamiento.

Las funciones de salida de voz se han mejorado con soporte para diccionarios de voz personalizados que se pueden proporcionar mediante complementos, y nuevos tipos de entrada de diccionarios para un control más refinado. Se ha añadido una nueva opción para voces OneCore, para controlar las pausas después de la puntuación. Un nuevo comando permite repetir la última información leída mediante voz, con la posibilidad de mostrarla en modo exploración. El gesto predeterminado para repetir esta información es `NVDA+x`, y se puede cambiar desde el diálogo Gestos de entrada.

Ahora las pantallas braille pueden avanzar automáticamente, y los dispositivos DotPad admiten combinaciones "multibotón". Liblouis se ha actualizado, con nuevas tablas braille para italiano y estonio.

Cuando NVDA se reinicia a los valores predeterminados, hay disponible un nuevo botón Deshacer para restablecer la configuración anterior.


### [Actualización 14 de julio de 2026](https://www.nvaccess.org/post/nvda-2026-2beta7)

Se ha publicado NVDA 2026.2beta7 con los siguientes cambios:

- Actualización de traducciones.
- Corregido el mensaje sobre reinicio al actualizar, en vez de cerrar sesión.
- Revertida la corrección para SAPI5 de beta6, que ocasionaba fallos en la carga de sintetizadores.
- Corregida la lectura de contenido PDF con el editor Foxit en modo exploración.

### [Actualización 8 de julio de 2026](https://www.nvaccess.org/post/nvda-2026-2beta6)

Nota: En esta beta hay errores conocidos al usar voces SAPI5, que se corregirán en la próxima beta.

Se ha publicado NVDA 2026.2beta6 con los siguientes cambios:

- Actualización de traducciones.
- Se muestra el diálogo para reiniciar tras actualizar desde el propio NVDA, garantizando que se ofrece la posibilidad de guardar el trabajo en curso.
- Corrección de error con SAPI5: se omiten las voces que no sean válidas, en vez de hacer que falle todo el controlador.
- Corrección de error con SAPI4 para 32 bits: compatibilidad con voces que no admiten tono o velocidad.
- Mejora en el manejo de conflictos entre la lupa y la cortina de pantalla.
- Restablecimiento de la capacidad de los complementos para registrar modos táctiles personalizados en "availableTouchModes" (modos táctiles disponibles).


### [Actualización 30 de junio de 2026](https://www.nvaccess.org/post/nvda-2026-2beta5)

Se ha publicado NVDA 2026.2beta5 con los siguientes cambios:

- Actualización de traducciones.
- Se usa la categoría navegación por matemáticas en un comando más.
- Se evita la congelación de NVDA al mostrar matemáticas en braille con ciertos caracteres unicode.
- Se mejoran ciertos mensajes y nombres de opciones para la lupa.

### [Actualización 23 de junio de 2026](https://www.nvaccess.org/post/nvda-2026-2beta4)

Se ha publicado NVDA 2026.2beta4 con los siguientes cambios:


- La disposición del botón en el diálogo Añadir entrada de diccionario se ha cambiado a vertical.
- El seguimiento de la lupa se ha cambiado del centro de los objetos al principio de ellos, por ejemplo, desde arriba a la izquierda en idiomas con dirección de izquierda a derecha.
- Se ha corregido el guardado de comentarios en diccionarios del habla.
- Se ha añadido una categoría "registro de depuración" para la lupa.
- Mejoras en los nombres y diseño de las opciones de la lupa.
- Actualización de traducciones.


### [Actualización 16 de junio de 2026](https://www.nvaccess.org/post/nvda-2026-2beta3)

Se ha publicado NVDA 2026.2beta3 con los siguientes cambios:

- Al pulsar `NVDA+control+w` en pantallas seguras, las opciones de configuración de la lupa se abren de la forma esperada.
- En Excel, ahora el resaltado visual y la lupa siguen a la celda con el foco.
- Mejoras en los nombres y el diseño de las opciones de configuración de la lupa.

### [Actualización 10 de junio de 2026](https://www.nvaccess.org/post/nvda-2026-2beta2/)

Se ha publicado NVDA 2026.2beta2 con los siguientes cambios:

- Eliminada la opción de la lupa "Mantener centrado el ratón".
- Mejoras en el nombre y la disposición de las opciones de configuración de la lupa.
- Actualización de traducciones.


