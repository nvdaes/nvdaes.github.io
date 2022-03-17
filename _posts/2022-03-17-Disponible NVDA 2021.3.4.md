---
title: Disponible NVDA 2021.3.4
permalink: "/nvda-2021-3-4/"
layout: post
author: Noelia
commentsId: 38
---

<footer>Jueves, 17 de marzo de 2022</footer>

Como se explica en esta [noticia de NV Access sobre NVDA 2021.3.4](https://www.nvaccess.org/post/nvda-2021-3-4/) (en inglés), se ha publicado esta nueva versión estable de NVDA.

Setrata de una actualización que resuelve tres problemas de seguridad presentes en versiones anteriores del lector de pantalla. Se recomienda actualizarlo a esta nueva versión estable. Para aprovecharse de estos fallos de seguridad se requiere acceso físico al PC.

NV Access recuerda que es buena idea reiniciar el PC después de actualizar cualquier software, ya que las actualizaciones pueden modificar archivos en uso y esto puede ocasionar problemas que se resuelven al reiniciar.

Si ya usas NVDA, puedes configurarlo para *buscar las actualizaciones automáticamente* desde el diálogo *Opciones generales* (`NVDA+control+g`) o usar la opción *Buscar actualización* desde el menú *Ayuda* (`NVDA+n, a`).

### Cambios desde 2021.3.3
- Al llevar a cabo una acción administrativa que requiere una pantalla segura, se podía abrir la consola Python con privilegios del sistema. Para evitarlo, la herramienta para inspección de wx GUI está desactivada en pantallas seguras.
- Al usar NVDA con acceso administrativo, podía capturarse el registro en nivel de depuración desde pantallas seguras. Para evitarlo, ya no es posible reiniciar NVDA con -–debug-logging (ni actualizarlo) en modo seguro.
- El perfil del sistema público de NVDA podía alterarse con gestos de entrada inesperados o reemplazos en el diccionario. Para evitarlo, los diálogos Gestos de entrada, Diccionario predeterminado, Diccionario por voces y Diccionario temporal están desactivados en modo seguro.

### Más información sobre seguridad
- Para saber más, puedes ponerte en contacto con NV Access escribiendo a info@nvaccess.org
- Aquí se publican [errores de seguridad resueltos en NVDA](https://github.com/nvaccess/nvda/security/advisories)

Si encuentras algún fallo de seguridad en NVDA, en alguno de sus complementos o en otras aplicaciones, informa en privado a las personas responsables para que haya tiempo de debatir sobre el problema y solucionarlo sin dar pistas públicas. Una vez resuelto, podrá publicarse el error, como se menciona en la [documentación sobre seguridad en GitHub](https://docs.github.com/es/code-security/repository-security-advisories/about-github-security-advisories-for-repositories)

Puedes consultar:

- [qué hay de nuevo](https://nvdaes.github.io/changes.html)
- [guía de NVDA](https://nvdaes.github.io/userGuide.html)
- [procedimiento de descarga preferido por NV Access](https://groups.io/g/nvda-devel/message/45172) (en inglés)

[Descarga directa de NVDA 2021.3.4 desde el servidor de NV Access](http://www.nvaccess.org/download/nvda/releases/2021.3.4/nvda_2021.3.4.exe)

Salud
