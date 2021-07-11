---
title: Sugerencias para crear complementos
permalink: "/crearcomplementos/"
layout: post
author: Noelia
commentsId: 15
---

<footer>Sábado, 19 de junio de 2021 (actualizado el 11 de julio)</footer>

Nuestro compañero Ramón, coautor de este blog, tuvo la estupenda idea de crear un post con sugerencias útiles para crear complementos, como se puede ver en este [mensaje enviado a nuestra lista de correo](https://nvdaes.groups.io/g/lista/message/2161).

Estas consideraciones se basan en mi experiencia personal, y en ellas reflejaré recomendaciones y ejemplos procedentes de personas que han colaborado con sus propios complementos, mediante contribuciones a NVDA, con documentación, etc., siempre que me hayan resultado útiles.

### ¿Por dónde empezar? ###

Para mí, los primeros documentos de referencia, que aportan una base sobre la que desarrollar complementos, y un punto de partida para buscar más información y mejorar nuestro trabajo, pueden ser los siguientes:
- Guía de NVDA, especialmente los apartados sobre "Developer Scratchpad", "Consola de Python", "Visualizador del registro" y "administrador de complementos".
- Tutoriales sobre expresiones regulares, como el que Chris compartió en este blog.
- [NVDA Developer Guide](https://www.nvaccess.org/files/nvda/documentation/developerGuide.html). Es importante no confundir este documento, de NV Access, con documentación creada por miembros de la comunidad, de la que NV Access no es responsable y que también puede ser útil.

### Recomendaciones sobre el código fuente ###

- Escribir el código fuente (comentarios, nombres de variables, funciones, clases, etc.) en inglés. Así será más fácil que otras personas puedan aprender de él, colaborar con aportes o revisarlo. Yo sigo las recomendaciones del documento [Contributing to NVDA](https://github.com/nvaccess/nvda/wiki/Contributing).
- En el mismo sentido, escribir documentación en inglés. Me convencieron de la necesidad de hacerlo en esta [incidencia sobre documentación de complementos](https://github.com/nvaccess/nvda/issues/2694). Precisamente en esa incidencia, James Teh, cofundador de NV Access, me pidió mi nombre completo para incluirlo entre las personas colaboradoras de NVDA (mi nombre de usuario era norrumar, y allí expliqué que mis complementos, en su mayoría, no tenían documentación en inglés).

Descarga y mira el código fuente de NVDA y de otros complementos para encontrar sugerencias que te ayudarán a desarrollar los tuyos.

- [repositorio de NVDA](https://github.com/nvaccess/nvda)

### Consejos básicos ###

En este apartado destaco aspectos que, tal vez porque aparentemente no requieren tanta creatividad o esfuerzo como encontrar alguna solución a retos que parecen más complejos, por ejemplo, hacer que NVDA lea correctamente un elemento que no identificamos, a veces pueden descuidarse o dejarse para más tarde, cuando probablemente nuestro complemento sería más atractivo para la gente y más fácil de mantener para nosotros si desde el principio los tuviéramos en cuenta:

- Consultar la referencia rápida de NVDA, para no asignar comandos que puedan dejar sin efecto los del lector de pantalla, a menos que la intención del complemento sea precisamente esa, como en el caso de [NoBeepsSpeechMode, de Alberto Buffolino](https://github.com/abuffEr/nobeepsspeechmode).
- Del mismo modo, comprobar que, si el complemento cambia el comportamiento de NVDA o del sistema operativo (en determinadas aplicaciones o de forma general), los cambios sean intencionados y no se estén produciendo efectos que no deseemos. Por ejemplo, en un complemento que dio lugar a placeMarkers, donde quise usar clases personalizadas en modo exploración, observé que NVDA respondía de forma más lenta, por lo que lo modifiqué utilizando solo scripts en la clase GlobalPlugin.
- Si un script debe tener asociado precisamente un gesto (combinación de teclas, gesto táctil, etc.) y no otro, evitar poner la descripción que normalmente está disponible en la ayuda de entrada (NVDA+1). Esta descripción puede especificarse en el argumento description usando @script(...), y no incluir ese argumento podría ser útil si, por ejemplo, queremos sobrescribir el comportamiento de la tecla Aplicaciones (menú contextual).
- Si los scripts tienen descripción, comprueba que la categoría en la que se mostrarán dentro del árbol Gestos de entrada es adecuada. Puedes crear una categoría específica para tu complemento o usar las disponibles en NVDA.
- Si un comando debe utilizarse solo para determinados elementos, pero por algún motivo no es posible usar una clase personalizada para ese elemento, podemos especificar condiciones (if, elif, else) y gesture.send(). Así, podremos enviar el gesto o combinación de teclas al sistema operativo, en vez de ejecutar otras instrucciones.
- Instalar el complemento para probarlo en nuestro ordenador antes de distribuirlo. Es aconsejable hacer pruebas específicas para asegurar que los cambios que hagamos no generen errores, y también se puede probar de forma inespecífica, usándolo del modo habitual, sin olvidar los datos en el administrador de complementos (nombre, versión, documentación, etc.).
- Otras sugerencias se encuentran en [guideLines](https://github.com/nvdaaddons/nvdaaddons.github.io/wiki/guideLines), documento creado inicialmente por Mesar Hameed.

Para mantener complementos y crear el archivo binario (.nvda-addon), se recomienda usar la herramienta addonTemplate, desarrollada por miembros de la comunidad.

- [addon template](https://github.com/nvdaaddons/addonTemplate)

### Mantenimiento en GitHub ##
 
GitHub es la plataforma donde se desarrolla NVDA y, si en un futuro este proyecto se pone en marcha, podría ser necesaria (o al menos estar recomendada) para publicar complementos en este [repositorio de NV Access para compartir complementos](https://github.com/nvaccess/addon-store-submission). Se puede encontrar más información en el apartado "Too Long; Didn't Read for Addon authors".
 
#### GitHub Actions 
 
Yo utilizo GitHub Actions para automatizar tareas como las siguientes:
 
- Usar Flake8 para comprobar que el código fuente (sintaxis, longitud de líneas, etc.) cumple los estándares del propio NVDA. Así puedo detectar algunos errores cuando alguien (y sobre todo yo misma) propone cambios en pull requests o en la rama principal.
- Generar un archivo binario (.nvda-addon) y un registro de NVDA cuando se inicia con el complemento descomprimido en la carpeta de configuración, y comprobar que todos los mensajes marcados con _() (para que se puedan traducir) tengan su correspondiente comentario, para facilitar el trabajo del equipo de traducción, requisito que también se comprueba en NVDA.
- Incluir periódicamente los archivos enviados por el equipo de traducción, y generar versiones de prueba con el código disponible en la rama principal una vez a la semana y cuando hago cambios en esta rama.
- Generar versiones estables o "prereleases" automáticamente (con su archivo .nvda-addon listo para ser descargado) cuando subo a GitHub etiquetas (tags).
 
Hace tiempo escribí este [Artículo sobre GitHub Actions](https://github.com/nvdaaddons/nvdaaddons.github.io/wiki/GitHubActions)] 

Agradezco a mesar Hameed y a Oleksandr Gryshchenko la ayuda que me han prestado, entre otras cosas, con esta herramienta de GitHub.
 
##### Mesar
 
Mesar creó un sistema de traducción para NVDA y sus complementos, y fue la persona que me invitó a colaborar en el equipo de complementos internacional cuando estaba alojado en Bitbucket. Colaboró en NVDA y en complementos como Emoticons (de Chris y otros autores), readFeeds y teamViewer. Creó una primera versión de documentos como guideLines, ya mencionado, y el primer documento sobre el proceso de revisión de complementos.
 
- [Mesar en GitHub](https://github.com/mhameed)
- [repositorio experimental con GitHub Actions](https://github.com/nvdaaddons/l10ntest/)
 
##### Oleksandr
 
Oleksandr es autor de complementos como NVDA Unmute, Check Input Gestures y Diccionario rápido, disponibles en la web internacional de complementos.
 
- [Oleksandr en GitHub](https://github.com/grisov)
- [pull request experimental con GitHub Actions](https://github.com/nvdaes/placemarkers/pull/26)
 
#### Ayuda para colaborar

Para mí es gratificante que mis proyectos públicos sean de interés y útiles, y trato de propiciar que la gente colabore en ellos de forma cómoda. Por otra parte, he cerrado alguna solicitud de cambios (pull request) porque no entendía el propósito de los cambios propuestos. Para facilitar la colaboración de otras personas, uso plantillas para incidencias (issues) y solicitudes (pull requests), y un documento donde doy algunas ideas sobre la forma de hacer aportes.

También es posible que nos encontremos personas con quienes no queramos o no seamos capaces de colaborar debido a actitudes contrarias a valores que nos parecen fundamentales. Negarse a colaborar con alguien por este motivo no requiere un documento escrito. No obstante, determinadas expectativas, valores y actitudes con las que no vayamos a transigir se pueden reflejar, como hizo NV Access, en un documento llamado "código de conducta". Este documento no va a motivar la aceptación o rechazo a nadie, sino que refleja una realidad que de hecho existe: los proyectos están al servicio de las personas, y no se debe ni hay obligación de colaborar con gente contraria a ciertos principios.

Expliqué por qué incluí estos documentos recomendados por GitHub en este [mensaje sobre documentos de ayuda a la comunidad](https://nvdaes.groups.io/g/lista/message/1747).

Estos son los [documentos de ayuda para mis proyectos](https://github.com/nvdaes/.github).

### Difundir nuestro trabajo

En la web de complementos de la comunidad internacional se explica cómo pedir la inclusión de un complemento.

Para ello, suscríbete a la [lista de correo de complementos](https://nvda-addons.groups.io/g/nvda-addons) y pide una revisión de los complementos que quieras compartir.

Allí también podrás:

- pedir ayuda para crear o mejorar tus complementos.
- Compartir tu experiencia sobre complementos de otras personas, especialmente cuando pidan que su trabajo sea revisado.

Puedes suscribirte enviando un correo a o mediante este formulario de suscripción

<div class="unstyledtemplate template" style="display: block;">
  <div id="groupsio_unstyled_embed_signup">
  <form action="https://nvda-addons.groups.io/g/nvda-addons/signup?u=5352868322104703671" method="post" id="groupsio-embedded-subscribe-form" name="groupsio-embedded-subscribe-form" target="_blank">
    <div id="groupsio_unstyled_embed_signup_scroll">
      <label for="email" id="unstyletemplateformtitle">Suscríbete a la lista internacional de complementos de NvDA</label><br>
      <input type="email" value="" name="email" class="email" id="email" placeholder="Tu dirección de correo electrónico" required="">
      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_5352868322104703671" tabindex="-1" value=""></div>
      <div id="templatearchives"></div>
      <input type="submit" value="Subscribe" name="subscribe" id="groupsio-embedded-subscribe" class="button">
    </div>
  </form>
  </div>
</div>


Cuando tu complemento haya sido aceptado, podrás crear una solicitud (pull request) en el [repositorio addonFiles](https://github.com/nvaccess/addonFiles) para que NV Access, previa revisión y aprobación por parte de Joseph Lee o mía, que en este momento estamos a cargo de esta tarea (llamada triaje), lo incluya en el sitio web de la comunidad.
Joseph Lee es el creador de la lista de correo internacional de complementos.

- [Joseph en GitHub](https://github.com/josephsl)

Para hacer pull requests, tanto a otros proyectos como a addonFiles, me resulta muy útil [GitHub CLI](https://github.com/cli/cli).

Frecuentemente uso el comando:

```
pr create -w
```

Así, desde el símbolo del sistema (cmd en Windows), se puede abrir la página específica de GitHub que se necesita para crear directamente la solicitud sin la complicación de buscarla con el navegador.

Espero que sea de utilidad. Como siempre, cualquier sugerencia para mejorar el post será bien recibida.
