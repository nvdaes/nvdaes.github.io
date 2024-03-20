---
title: Versiones rc de NVDA 2024.1
permalink: "/nvda-2024-1rc/"
layout: post
giscus: true
author: Noelia
---

<footer>Miércoles, 20 de marzo de 2024</footer>

Se ha publicado NVDA 2024.1rc1, para probar características que se incluirán en la próxima versión estable (2024.1). Se recomienda a todo el mundo descargar esta versión y enviar comentarios. Si no se encuentran errores críticos, esta versión será idéntica a NVDA 2024.1.

Al usar la versión rc, estarás eligiendo el canal beta/rc y solo recibirás notificaciones sobre actualizaciones disponibles para estos tipos de versiones.

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

[Descarga NVDA 2024.1rc1](https://www.nvaccess.org/files/nvda/releases/2024.1rc1/nvda_2024.1rc1.exe)
	- SHA256: 47380091cab8e817cfa37aadbbd077d15a38c4713ca888cf6f674783a3210987

Para comprobar que el fichero descargado no ha sido modificado, es decir, para verificar su integridad, puedes confirmar que el SHA256 coincide con el anterior. Desde el símbolo del sistema de Windows, puedes averiguar el SHA256 de un archivo descargado mediante el siguiente comando:

```cmd
certutil -hashfile <RutaAlArchivoDescargado> SHA256
```

### Referencias ###

* [Post de NV Access sobre NVDA 2024.1rc1](https://www.nvaccess.org/post/nvda-2024-1rc1)
* [Novedades de NVDA 2024.1rc1](https://www.nvaccess.org/files/nvda/releases/2024.1rc1/documentation/es/changes.html)
* [Incidencias en GitHub](https://github.com/nvaccess/nvda/issues)
* [Explicación sobre SHA256](https://criptomundo.com/que-es-sha-256)
