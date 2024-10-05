---
title: Versiones beta de NVDA 2024.4
permalink: "/nvda-2024-4beta/"
layout: post
giscus: true
author: Noelia
---

<footer>Miércoles, 28 de agosto de 2024 (actualizado el 5 de octubre)</footer>

[Se ha publicado NVDA 2024.4beta1](https://www.nvaccess.org/post/nvda-2024-4beta1).

### Enlaces

- [Descargar NVDA 2024.4beta5](https://www.nvaccess.org/files/nvda/releases/2024.5beta5/nvda_2024.4beta5.exe)
  - SHA256: e3b862a2137a45ef1ca0e7b71edaca2697c725f4f9f50ef36e5043f326c76b57
- [Novedades](https://www.nvaccess.org/files/nvda/releases/2024.4beta5/documentation/es/changes.html)
- [Incidencias en GitHub](https://github.com/nvaccess/nvda/issues)

### [Actualización 2 de octubre de 2024](https://www.nvaccess.org/post/nvda-2024-4beta5)

Se ha publicado NVDA 2024.4beta5 con los siguientes cambios:

- Corregido un error por el que no se respetaba el tiempo de espera personalizado al pulsar repetidamente la tecla NVDA.
- Actualización de traducciones.


### [Actualización 17 de septiembre de 2024](https://www.nvaccess.org/post/nvda-2024-4beta4)

Se ha publicado NVDA 2024.4beta4 con los siguientes cambios:

- Corregido el diseño visual de la pestaña de opciones de braille.
- Corregido un error por el que aparecía texto no relacionado con teclas rápidas en la refereencia rápida de comandos.
- Actualización de traducciones.

### [Actualización 9 de septiembre de 2024](https://www.nvaccess.org/post/nvda-2024-4beta3)

Se ha publicado NVDA 2024.4beta3 con los siguientes cambios:

- Actualizado el transcriptor braille LibLouis a [3.31.0](https://github.com/liblouis/liblouis/releases/tag/v3.31.0):
  - se ha corregido un error en los números para braille en español;
  - nuevas tablas braille: tailandés grado 1; griego internacional (letras acentuadas de una sola celda);
  - cambiado el nombre de algunas tablas: tailandés de 6 puntos pasa a llamarse tailandés grado 0 por motivos de consistencia; la tabla existente "griego internacional" se llama griego internacional (letras acentuadas de dos celdas), para aclarar la diferencia entre los dos sistemas de griego.
- Actualización de traducciones.

### [Actualización 3 de septiembre de 2024](https://www.nvaccess.org/post/nvda-2024-4beta2)

Se ha publicado NVDA 2024.4beta2 con los siguientes cambios:

- La estabilidad de NVDA con Poedit se ha mejorado, y ahora la versión mínima de Poedit requerida es 3.5.
- NVDA ya no es tan lento al desplazarse arriba y abajo en ficheros grandes de VS Code.
- NVDA ya no se congela al buscar actualizaciones de complementos.
- Actualización de traducciones.

Al usar la versión beta, estarás eligiendo el canal beta y solo recibirás notificaciones sobre actualizaciones disponibles para versiones beta y rc. La última versión rc publicada antes de una versión estable será idéntica a esa versión estable.

Para volver al canal estable, actualiza manualmente NVDA a la última versión estable.

### Aspectos destacados

Esta versión incorpora mejoras para Microsoft Office, braille y formateado de documentos.

En Word o Excel, es posible pulsar dos veces la combinación de teclas de comentarios para leer el comentario o nota en modo exploración. Ahora puedes usar el comando de selección con el cursor de revisión para seleccionar texto en PowerPoint. Además, NVDA ya no muestra caracteres inservibles en braille al presentar texto de encabezados de fila o columna en tablas de Word al usar el "modelo de objetos".

Ahora NVDA se puede configurar para que indique atributos de caracteres mediante voz o braille de forma separada.

Se ha añadido una nueva opción para configurar el tiempo de espera en pulsaciones múltiples, tales como el comando para leer la hora y la fecha.

Ahora puedes configurar cómo se muestra el formato de texto en braille, y hacer que NVDA muestre el principio de párrafos en braille. Ahora NVDA puede verbalizar el carácter del cursor al ejecutar la acción de enrutamiento del cursor en braille. Se ha mejorado el enrutamiento del cursor, y las teclas de enrutamiento funcionan en PowerPoint. Ahora se usan todas las celdas de líneas al utilizar dispositivos braille mediante braille HID. NVDA ya no es inestable después de reiniciarse durante el escaneo automático de Bluetooth para braille.

La versión mínima de Poedit requerida es 3.5.

Se ha actualizado eSpeak NG, con soporte para los idiomas feroés y Xextan.

Se ha actualizado LibLouis, con nuevas tablas para tailandés y griego internacional con letras acentuadas de una sola celda.

También hay mejoras para el seguimiento del ratón en Firefox y el modo de voz "A petición".
