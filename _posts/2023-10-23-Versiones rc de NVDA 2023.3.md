---
title: Versiones rc de NVDA 2023.3
permalink: "/nvda-2023-3rc/"
layout: post
giscus: true
author: Noelia
---

<footer>Lunes, 23 de octubre de 2023</footer>

Se ha publicado NVDA 2023.3rc1, para probar características que se incluirán en la próxima versión estable (2023.3). Se recomienda a todo el mundo descargar esta versión y enviar comentarios. Si no se encuentran errores críticos, esta versión será idéntica a NVDA 2023.3.

Al usar la versión rc, estarás eligiendo el canal beta/rc y solo recibirás notificaciones sobre actualizaciones disponibles para estos tipos de versiones.

Para volver al canal estable, actualiza manualmente NVDA a la última versión estable.

### Aspectos destacados

Esta versión incluye mejoras en el rendimiento, la respuesta y estabilidad de la salida de audio.

Se ha creado un nuevo panel Opciones de audio, con opciones para establecer el volumen de los sonidos de NVDA o pitidos, o para que se ajusten al volumen de la voz que estés usando.

Ahora NVDA puede refrescar periódicamente los resultados del OCR, y el nuevo texto se irá leyendo a medida que aparece. Esto se puede configurar desde el menú NVDA (NVDA+n), submenú Preferencias, Opciones, categoría OCR de Windows.

Hay varias correcciones para braille y se ha mejorado la detección de dispositivos y el movimiento del cursor. Ahora es posible excluir controladores de la detección automática para mejorar el rendimiento de esta detección. También hay nuevos comandos para BRLTTY.

También se han corregido errores en la tienda de complementos, Microsoft Office, menús contextuales de Microsoft Edge y la calculadora de Windows.

[Descarga NVDA 2023.3rc1](https://www.nvaccess.org/files/nvda/releases/2023.3rc1/nvda_2023.3rc1.exe)

SHA256: e5a2380fc7b9dfd37deab5781e62f7bacfaa5a951a494ada5a6936213f53a5e1

Para comprobar que el fichero descargado no ha sido modificado, es decir, para verificar su integridad, puedes confirmar que el SHA256 coincide con el anterior. Desde el símbolo del sistema de Windows, puedes averiguar el SHA256 de un archivo descargado mediante el siguiente comando:

```cmd
certutil -hashfile <RutaAlArchivoDescargado> SHA256
```

### Referencias ###

* [Post de NV Access sobre NVDA 2023.3rc1](https://www.nvaccess.org/post/nvda-2023-3rc1)
* [Novedades de NVDA 2023.3rc1](https://www.nvaccess.org/files/nvda/releases/2023.3rc1/documentation/es/changes.html)
* [Explicación sobre SHA256](https://criptomundo.com/que-es-sha-256)
