---
title: Fase beta de NVDA 2019.3 (actualizado a 16 de enero de 2020)
permalink: "/nvda-2019-3-beta/"
layout: post
author: Noelia
---

<footer>Miércoles, 11 de diciembre de 2019</footer>

El lunes pasado (9 de diciembre) se publicó NVDA 2019.3beta1. Las versiones beta incluyen características que han superado tanto test automáticos como pruebas de personas que han descargado versiones previas (alpha) con las mismas características, por lo que las versiones beta pueden considerarse bastante estables y es importante probarlas, aunque no se recomiendan para "entornos de producción" como el puesto de trabajo o similares.

### Actualización ###

Ayer (miércoles, 15 de enero de 2020) se publicó NVDA 2019.2beta2 con los siguientes cambios respecto a la beta anterior:

- El uso de UI Automation para acceder a la consola de Windows cuando esté disponible se encuentra desactivado por defecto, ya que aún no está listo para entornos de producción, aunque esta opción se puede cambiar desde el menú de NVDA (<kbd>NVDA+n</kbd>), submenú Preferencias, diálogo Opciones, categoría Avanzadas.
- NVDA ya no se atasca en la nueva versión de Microsoft Edge, basada en Chromium.
- Se añade la opción de reproducir un sonido corto cuando se cambia el estado de la cortina de pantalla (al activarla o desactivarla).
- Se ha resuelto un problema al actualizar la configuración desde versiones alpha recientes.
- Se ha resuelto un problema con la navegación por listas mediante comandos de navegación de tablas (<kbd>control+alt+flechas</kbd>).

[Descarga NVDA 2019.3beta2](https://ci.appveyor.com/api/buildjobs/g1i3dmwdutrvxlk7/artifacts/output/nvda_2019.3beta2.exe)

Además, según se explica en el [post del blog In-Process (de NV Access) publicado hoy](https://www.nvaccess.org/post/in-process-16th-january/):

- Las versiones alpha y beta reproducen un sonido cuando NVDA registra errores para facilitar su detección. A menudo se producen errores, pero NVDA sigue funcionando y no se perciben problemas. Los sonidos de error pueden o no coincidir con problemas percibidos. Al informar sobre incidencias, hay que asegurarse de que se trata realmente de un fallo que afecta a los usuarios, y no solo de un sonido de error. Todos los errores deben resolverse, pero se priorizan los que afectan a los usuarios. Además, se debe comprobar si también se producen en la última versión estable para saber si la causa está en novedades de las versiones alpha o beta.
- Aunque se intenta que las versiones de desarrollo (alpha o beta) funcionen bien, los cambios en estas versiones pueden producir consecuencias imprevistas. Se recomienda usar estas versiones en modo temporal o portable y tener a mano la versión estable, por si acaso.
- La instalación sí está recomendada para versiones rc (release candidate), que son posteriores a la beta y previas a la estable o versión final.
- Reef (de NV Access) ayer propuso cambios (pull requests) para resolver la mayoría de los problemas de compatibilidad con NVDA 2019.3 del complemento [NVDA Remote](https://nvdaremote.com/).
- Aunque muchos complementos son compatibles con NVDA 2019.3, es conveniente probarlos en la versión beta, para pedir a los autores que los actualicen antes de que se publique la próxima versión estable de NVDA en caso de que se detecte que algún complemento no es compatible.


#### Para saber más ####

- [Artículo Lector de pantalla en Wikipedia, con información sobre UI Automation](https://es.wikipedia.org/wiki/Lector_de_pantalla)
- [Git - Participando en Proyectos, con información sobre pull requests](https://git-scm.com/book/es/v2/GitHub-Participando-en-Proyectos)

La próxima versión estable de NVDA, que posiblemente se publique a principios de 2020, tiene cambios importantes que mejoran su seguridad y lo preparan para su desarrollo futuro. Destacan:

- El cambio de versión del principal lenguaje de programación con el que se desarrolla el lector de pantalla. Lo mismo que los programas, documentos, etc., se actualizan y se publican en distintas versiones, también los lenguajes de programación, Python en este caso, tienen versiones diferentes, y NVDA ha pasado de Python 2 a Python 3.
- Un importante cambio en el subsistema responsable de la lectura en voz alta ("speech"). Por ejemplo, ahora es posible insertar comandos como la reproducción de tonos, cambios de parámetros de voz, etc., en secuencias de texto leído. Esto podría facilitar la incorporación de opciones como la indicación de ciertos elementos (por ejemplo, enlaces de una web) en un tono distinto, emitir un sonido para distinguir entre la palabra "coma" y el signo de puntuación correspondiente (,), etc.

Puesto que estos cambios requieren la actualización de complementos y de controladores para síntesis de voz, en esta ocasión la fase beta será más larga de lo habitual, para dar suficiente tiempo a que se prueben y actualicen los complementos.

Está previsto que se publiquen varias betas en este mes, y es importante probarlas con distintos complementos para ayudar a actualizarlos y que estén disponibles en la próxima versión estable de NVDA.

Otros cambios disponibles en NVDA 2019.3beta1, previstos para la próxima versión estable, son:

- Incluye Java Access Bridge, para proporcionar accesibilidad a Java sin necesidad de activar esta característica.
- Opciones para cambiar la apariencia visual: posibilidad de resaltar el foco, cortina de pantalla para facilitar la privacidad, etc.
- Visualizador braille, útil para mostrar a personas videntes o con resto visual cómo se presenta el braille en NVDA.
- Se admiten más dispositivos braille.
- Mejoras en la web.
- Y mucho más.

Desde hace tiempo disponemos de [Información de NV Access sobre versiones en desarrollo de NVDA 2019.3](https://groups.io/g/nvda-devel/message/44066).

También hay explicaciones útiles en este [Post de NV Access sobre NVDA 2019.3beta1](https://www.nvaccess.org/post/nvda-2019-3beta1-now-available-for-testing/).

Además, hoy Joseph Lee, revisor, autor y creador de la lista internacional de complementos, colaborador de NVDA que participó activamente en el cambio de Python 2 a Python 3, sugiere que, para que los complementos estén debidamente actualizados desde el momento en que se publique la próxima versión estable de NVDA:

- Nos centremos en la estabilidad y compatibilidad de los complementos con NVDA 2019.3 y, si es necesario, también con versiones anteriores.
- Informemos sobre errores (haciendo pruebas con betas de NVDA 2019.3) a las personas adecuadas, por ejemplo, autores de complementos.

Aquí está el [mensaje de Joseph publicado en la lista de desarrollo de NVDA](https://groups.io/g/nvda-devel/message/44632).

Joseph seguirá atento para actualizar la [lista de complementos compatibles con NVDA 2019.3](https://addons.nvda-project.org/addons/nvdapy3.es.html).


