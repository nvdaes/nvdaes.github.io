---
title: Versiones beta de NVDA 2024.1
permalink: "/nvda-2024-1beta/"
layout: post
giscus: true
author: Noelia
---

<footer>Lunes, 18 de diciembre de 2023, actualizado el 27 de diciembre</footer>

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


### [Actualización 27 de diciembre de 2023](https://www.nvaccess.org/post/nvda-2024-1beta2)

Se ha publicado NVDA 2024.1beta2 con los siguientes cambios:

- Corrección de fallos para la instalación y desinstalación de complementos.
- El texto verbalizado ya no se actualiza cuando se mueve el ratón en el visualizador de voz.
- Correcciones de sintaxis en la documentación.
- Actualización de traducciones.

### Enlaces

- [Descargar NVDA 2024.1beta2](https://www.nvaccess.org/files/nvda/releases/2024.1beta2/nvda_2024.1beta2.exe).
	- SHA256: 14401ce3e5022c1cb90730125f0f99d369a09e421178dc7fd9f9f756b71c58f1
- [Novedades](https://www.nvaccess.org/files/nvda/releases/2024.1beta2/documentation/es/changes.html).
- Informar sobre errores mediante [incidencias en GitHub](https://github.com/nvaccess/nvda/issues).
