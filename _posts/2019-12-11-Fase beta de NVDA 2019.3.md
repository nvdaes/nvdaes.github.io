---
title: Fase beta de NVDA 2019.3
permalink: "/nvda-2019-3-beta/"
layout: post
author: Noelia
---

<footer>Miércoles, 11 de diciembre de 2019</footer>

El lunes pasado (9 de diciembre) se publicó NVDA 2019.3beta1. Las versiones beta incluyen características que han superado tanto test automáticos como pruebas de personas que han descargado versiones previas (alpha) con las mismas características, por lo que este tipo de versiones (beta) pueden considerarse bastante estables y es importante probarlas, aunque no se recomiendan para "entornos de producción" como el puesto de trabajo o similares.

[Descarga NVDA 2019.3beta1](https://ci.appveyor.com/api/buildjobs/ra7vb4b94dlutb9l/artifacts/output/nvda_2019.3beta1.exe)

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


