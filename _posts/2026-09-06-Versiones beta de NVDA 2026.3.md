---
title: Versiones beta de NVDA 2026.3
permalink: "/nvda-2026-3beta/"
layout: post
giscus: true
excerpt: "Lunes, 7 de septiembre de 2026 (actualizado el 14 de septiembre)"
author: Noelia
---


<footer>Lunes, 7 de septiembre de 2026 (actualizado el 14 de septiembre)</footer>

[Se ha publicado NVDA 2026.3beta1](https://www.nvaccess.org/post/nvda-2026-3beta1).

Al usar la versión beta, estarás eligiendo el canal beta/rc y solo recibirás notificaciones sobre actualizaciones disponibles para estos tipos de versiones.

Para volver al canal estable, actualiza manualmente NVDA a la última versión estable.

### Enlaces

- [Descargar NVDA 2026.3beta3](https://download.nvaccess.org/releases/2026.3beta3/nvda_2026.3beta3.exe)
  - SHA256: ca17ceb9cd3a8ed7b9732d2a6856c2c3979fbfd86fde1dad91a8a7170dcec612
- [Novedades](https://download.nvaccess.org/documentation/es/changes.html)
- [Incidencias en GitHub](https://github.com/nvaccess/nvda/issues)

### Aspectos destacados

Esta versión incluye mejoras significativas en el rendimiento, mejoras en los diálogos de NVDA, y amplía la capacidad en cuanto a gestos en pantalla táctil.

Se han realizado varias mejoras en cuanto al rendimiento para reducir demoras y mejorar la capacidad de respuesta. Ahora, NVDA recupera y almacena en caché más información sobre controles en segundo plano, de modo que se mejora el rendimiento en controles como cuadros combinados y el explorador de archivos. NVDA ya no produce cuelgues en el explorador de archivos ni en otras aplicaciones al reiniciar o salir del lector de pantalla. Ahora, NVDA se recupera de forma más rápida cuando una aplicación deja de responder, y ya no se quedará congelado ni saturará el registro con errores de aplicaciones que no responden.
En regiones dinámicas de texto, tales como terminales, NVDA ya no se queda congelado cuando grandes cantidades de texto se envían a la pantalla.

Se han añadido menús contextuales y atajos de teclado a los perfiles de configuración, gestos de entrada y diálogos de diccionarios, de modo que estos diálogos sean más fáciles de usar con el teclado. Ahora también es posible cambiar un gesto existente desde el propio diálogo Gestos de entrada.

El diálogo de mensajes en modo exploración se ha modernizado,, y ahora admite mejor el cambio de tamaño, maximizar y minimizar.

Los gestos de entrada en pantalla táctil se han ampliado significativamente. Dos deslizamientos secuenciales en sucesión rápida se combinan en un solo gesto, incrementando en gran medida el número de gestos táctiles que se pueden asignar. Ahora también se admiten gestos en los márgenes, de modo que los gestos realizados a menos de 15 milímetros de cualquier borde de la pantalla se pueden asignar independientemente de los mismos gestos realizados en el centro.

Se ha añadido un nuevo gesto para llevar el ratón al centro de la vista de la lupa. El OCR de Windows se puede usar mientras la cortina de pantalla o la lupa de NVDA están activas.

Liblouis se ha actualizado con soporte para elfdaliano, sami, maorí, braille inglés unificado de Nueva Zelanda y criollo haitiano, una tabla noruega para texto en español, y variantes adicionales de seis y ocho puntos para sueco.

eSpeak NG se ha actualizado con soporte para ligur y abjasio.


### [Actualización 30 de septiembre de 2026](https://www.nvaccess.org/post/nvda-2026-3beta3)

Se ha publicado NVDA 2026.3beta3 con los siguientes cambios:

- Actualización de traducciones.
- Se ha revertido una corrección relativa a terminales, con lo cual NVDA puede volver a quedar congelado si se vuelcan grandes cantidades de texto a la pantalla. La corrección no funcionaba correctamente y se han deshecho los cambios.
- Se evita la reactivación automática  cuando la lupa queda inutilizada para que no parpadee y así reducir el riesgo de convulsiones.

### [Actualización 14 de septiembre de 2026](https://www.nvaccess.org/post/nvda-2026-3beta2)

Se ha publicado NVDA 2026.3beta2 con los siguientes cambios:

- Actualización de traducciones.
- Corrección en la función "vista general de pantalla" de la lupa al usar seguimiento relativo.
- Actualizado eSpeak.
- Ahora, en modo exploración, `alt+flecha arriba` y `alt+flecha abajo` colapsan o expanden los cuadros combinados en más situaciones.
- Se evita el parpadeo al cambiar el filtro de color de la lupa para reducir el riesgo de convulsiones.
- Actualización de la biblioteca cppjieba para la segmentación de palabras en chino, para evitar cuelgues al iniciar desde rutas con símbolos en ese idioma.

