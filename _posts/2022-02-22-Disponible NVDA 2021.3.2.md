---
title: Disponible NVDA 2021.3.2
permalink: "/nvda-2021-3-2/"
layout: post
author: Noelia
commentsId: 37
---

<footer>Martes, 22 de febrero de 2022</footer>

Como se explica en esta [noticia de NV Access sobre NVDA 2021.3.2](https://www.nvaccess.org/post/nvda-2021-3-2/) (en inglés), se ha publicado esta nueva versión estable de NVDA.

Setrata de una actualización que resuelve dos problemas de seguridad presentes en versiones anteriores del lector de pantalla. Se recomienda actualizarlo a esta nueva versión estable.

NV Access recuerda que es buena idea reiniciar el PC después de actualizar cualquier software, ya que las actualizaciones pueden modificar archivos en uso y esto puede ocasionar problemas que se resuelven al reiniciar.

Si ya usas NVDA, puedes configurarlo para *buscar las actualizaciones automáticamente* desde el diálogo *Opciones generales* (`NVDA+control+g`) o usar la opción *Buscar actualización* desde el menú *Ayuda* (`NVDA+n, a`).

### Cambios desde 2021.3.1
- Se evita la ampliación de privilegios a partir de pantallas seguras. Al llevar a cabo una acción administrativa que requiere una pantalla segura usando NVDA, es posible acceder a la línea de comandos con privilegios del sistema.
- Se evita que, debido a una incidencia en Windows, se pueda utilizar la navegación de objetos para leer contenido del escritorio desde la pantalla de bloqueo. Esto afecta a Windows 10 y Windows 11.
  - [Cambios en NVDA para evitar la navegación de objetos fuera de la pantalla de bloqueo](https://github.com/nvaccess/nvda/pull/13328) (en inglés).
  - [Debate técnico en GitHub](https://github.com/nvaccess/nvda/discussions/13361).

Para saber más, puedes ponerte enn contacto con NV Access escribiendo a info@nvaccess.org

En el post sobre esta versión comparten este [artículo sobre cómo informar de modo responsable acerca de problemas de seguridad](https://en.wikipedia.org/wiki/Coordinated_vulnerability_disclosure) (en inglés).

Puedes consultar:

- [qué hay de nuevo](https://nvdaes.github.io/changes.html)
- [guía de NVDA](https://nvdaes.github.io/userGuide.html)
- [procedimiento de descarga preferido por NV Access](https://groups.io/g/nvda-devel/message/45172) (en inglés)

[Descarga directa de NVDA 2021.3.2 desde el servidor de NV Access](http://www.nvaccess.org/download/nvda/releases/2021.3.2/nvda_2021.3.2.exe)

Salud
