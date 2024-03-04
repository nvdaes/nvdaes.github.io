---
title: Versiones beta de NVDA 2024.1
permalink: "/nvda-2024-1beta/"
layout: post
giscus: true
author: Noelia
---

<footer>Lunes, 18 de diciembre de 2023, actualizado el 4 de marzo de 2024</footer>

[Se ha publicado NVDA 2024.1beta1](https://www.nvaccess.org/post/nvda-2024-1beta1), para probar características que se incluirán en la próxima versión estable (2024.1).

Al usar la versión beta, estarás eligiendo el canal beta y solo recibirás notificaciones sobre actualizaciones disponibles para versiones beta y rc. La última versión rc publicada antes de una versión estable será idéntica a esa versión estable.

Para volver al canal estable, actualiza manualmente NVDA a la última versión estable.

### Aspectos destacados

Se ha añadido un nuevo Modo de voz bajo demanda. En este modo de voz, NVDA no hablará automáticamente, por ejemplo, al mover el cursor; pero lo hará al ejecutar comandos cuyo propósito específico es informar de algo, porejemplo, indicar el título de la ventana. En la categoría Opciones de voz, es posible excluir modos de voz no deseados en el comando Cambio cíclico de modos de voz (`NVDA+s`).

Un nuevo modo de selección nativa, que se activa y desactiva con `NVDA+shift+f10`, está disponible para Firefox en modo exploración. Cuando esté activado, alseleccionar texto en modo exploración también se manejarála propia selección nativa de Firefox. La copia de texto con `control+c` será realizada porFirefox, con lo  cual se copiará el contenido enriquecido, en lugar de la representación en texto simple de NVDA.

Ahora la tienda de complementos admite acciones para múltiples elementos, como instalar y habilitar, cuando se seleccionan varios complementos. Hay una nueva acción para abrir una página web de revisiones para el complemento seleccionado.

Las opciones de dispositivo de salida y atenuación de audio se han eliminado del diálogo de selección desintetizador. Están disponibles en el panel de opciones de audio, que se puede abrir con `NVDA+control+u`.

Se han actualizado eSpeak-NG, el traductor de braille LibLouis y CLDR Unicode. Hay disponibles nuevas tablas braille para tailandés, filipino y rumano.

Se han corregido muchos errores, concretamente sobre la tienda de complementos, braille, Libre Office, Microsoft Office y audio.

Nota importante:

- Esta versión no es compatible con complementos creados para NVDA 2023.3 o versiones anteriores.
- Windows 8.1 es la mínima versión requerida. Windows 7 y 8 ya no se podrán usar a partir de esta versión de NVDA.

### [Actualización 4 de marzo de 2024](https://www.nvaccess.org/post/nvda-2024-1beta11)

Se ha publicado NVDA 2024.1beta 11 con los siguientes cambios:

- Corrección de seguridad introducida en NVDA 2023.3.4.
- Corrección para actualizar complementos incompatibles, garantizando que no desaparecen de la lista de la tienda al descargarlos.
- Se ha restablecido la numeración de encabezados en las guías de usuario y de desarrollo.
- Se ha añadido una tabla de contenido a la guía de comandos.
- Corrección para usar dispositivos braille BAUM.
- Actualización de traducciones.

### [Actualización 26 de febrero de 2024](https://www.nvaccess.org/post/nvda-2024-1beta10)


Se ha publicado NVDA 2024.1beta10. Estos son los cambios introducidos en Beta 8-10:

- Corrección de un error por el que los emojis en terminales de Windows podían producir un cuelgue.
- Corrección de un error en el modo de selección nativa en Word.
- Corrección deerrores en el proceso del instalador, garantizando que se sale de NVDA de forma segura.
- Mejoras en la documentación.
- Actualización de traducciones.

### [Actualización 6 de febrero de 2024](https://www.nvaccess.org/post/nvda-2024-1beta7)

Se ha publicado NVDA 2024.1beta7 con los siguientes cambios:

- Al copiar texto con `control+c` en Microsoft Word con el modo exploración activado, también se incluye el formato.
- Mejoras en la documentación.
- Varias correcciones en el modo de selección nativa.
- Corregido un error ocasional cuando se bloquea o desbloquea la sesión.
- Actualización de traducciones.


### [Actualización 29 de enero de 2024](https://www.nvaccess.org/post/nvda-2024-1beta6)

Se ha publicado NVDA 2024.1beta6 con los siguientes cambios:

- Corrección de seguridad de NVDA 2023.3.3.
- Mejoras en la documentación.
- Actualización de traducciones.

### [Actualización 22 de enero de 2024](https://www.nvaccess.org/post/nvda-2024-1beta5)

Se ha publicado NVDA 2024.1beta5 con los siguientes cambios:

- Corrección de seguridad de NVDA 2023.3.2.
- Mejoras en la documentación.
- Corrección relativa al registro de información.
- Actualización de traducciones.

### [Actualización 15 de enero de 2024](https://www.nvaccess.org/post/nvda-2024-1beta4)

Se ha publicado NVDA 2024.1beta4 con los siguientes cambios:

- Corrección de seguridad de NVDA 2023.3.1.
- NVDA ya no debería fallar intermitentemente al reiniciarse tras haber abierto y cerrado la tienda de complementos.
- Corrección para la interacción en cuadros combinados de iTunes y navegadores web.
- Cambios en la estructura de la documentación.
- Actualización de traducciones.

### [Actualización 8 de enero de 2024](https://www.nvaccess.org/post/nvda-2024-1beta3)

Se ha publicado NVDA 2024.1beta3 con los siguientes cambios:

- Correcciones en la opción Excluir modos de voz del comando que cambia cíclicamente el modo de voz de NVDA.
- Mejora del mensaje que informa sobre el tiempo de batería para que los plurales de horas y minutos se indiquen correctamente.
- Actualización de traducciones.

### [Actualización 27 de diciembre de 2023](https://www.nvaccess.org/post/nvda-2024-1beta2)

Se ha publicado NVDA 2024.1beta2 con los siguientes cambios:

- Corrección de fallos para la instalación y desinstalación de complementos.
- El texto verbalizado ya no se actualiza cuando se mueve el ratón en el visualizador de voz.
- Correcciones de sintaxis en la documentación.
- Actualización de traducciones.

### Enlaces

- [Descargar NVDA 2024.1beta11](https://www.nvaccess.org/files/nvda/releases/2024.1beta11/nvda_2024.1beta11.exe).
	- SHA256: 0613d78320476d37c2fff41728a0676bbbe217146d5b03a8b82b706678917dc2
- [Novedades](https://www.nvaccess.org/files/nvda/releases/2024.1beta11/documentation/es/changes.html).
- Informar sobre errores mediante [incidencias en GitHub](https://github.com/nvaccess/nvda/issues).
