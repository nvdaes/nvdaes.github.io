---
title: Versiones rc de NVDA 2025.1
permalink: "/nvda-2025-1rc/"
layout: post
giscus: true
author: Noelia
---

<footer>Martes, 10 de junio de 2025</footer>

[Se ha publicado NVDA 2025.1rc1](https://nvda.groups.io/g/nvda/message/125197), para probar características que se incluirán en la próxima versión estable (2025.1). Se recomienda a todo el mundo descargar esta versión y enviar comentarios. Si no se encuentran errores críticos, esta versión será idéntica a NVDA 2025.1.

Al usar la versión rc, estarás eligiendo el canal beta/rc y solo recibirás notificaciones sobre actualizaciones disponibles para estos tipos de versiones.

Para volver al canal estable, actualiza manualmente NVDA a la última versión estable.

### Enlaces

- [Descargar NVDA 2025.1rc1](https://download.nvaccess.org/releases/2025.1rc1/nvda_2025.1rc1.exe)
  - SHA256: 7314b4670385224dbbe36c8b0065cdc448638c5601dc8a2e0d4bca3ee73164a5
- [Novedades](https://www.nvaccess.org/files/nvda/releases/2025.1rc1/documentation/es/changes.html)
- [Incidencias en GitHub](https://github.com/nvaccess/nvda/issues)

### Notas

- Los desarrolladores de complementos deberían actualizarlos para garantizar que son compatibles con NVDA 2025.1.
- El instalador de NVDA ya no reproduce un sonido al ejecutarse.

### Aspectos destacados

En esta versión se introduce Acceso Remoto, que ofrece la posibilidad de controlar un ordenador en el que se ejecute NVDA desde otro dispositivo en el que NVDA también se esté ejecutando.

Hay muchas mejoras en la salida por voz, en concreto, en la respuesta de SAPI 4, SAPI 5 y voces OneCore. Ahora en SAPI 5 se admite el alzado brusco y el cambio automático de idioma. Ahora las voces SAPI 4 admiten atenuación de audio, eliminación de silencio inicial, y pueden mantener activo el dispositivo de sonido.

Se ha mejorado el sistema de actualización automática de la tienda de complementos, con la posibilidad de elegir canales para actualizaciones automáticas y de ejecutar actualizaciones automáticas en segundo plano.

Ahora es más fácil refrescar manualmente la ventana del OCR y activar o desactivar su actualización automática, gracias a nuevos comandos.

La selección nativa está disponible en Chrome y Edge.

Se ha mejorado el soporte para Microsoft Office y LibreOffice, especialmente con información al pulsar nuevos atajos de teclado.

Las tablas braille de entrada y salida por defecto ahora pueden estar definidas dependiendo del idioma. Se ha añadido soporte nativo para el dispositivo braille multilínea gráfico táctil de Dot Inc. Hay otras correcciones menores para dispositivos braille, en particular relativas a la conectividad.

Se han actualizado el transcriptor braille LibLouis, eSpeak-NG y Unicode CLDR. Hay disponibles nuevas tablas braille: tabla copta, cuneiforme compacta y computerizada portuguesa de seis puntos.
