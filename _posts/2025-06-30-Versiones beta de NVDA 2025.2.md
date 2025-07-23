---
title: Versiones beta de NVDA 2025.2
permalink: "/nvda-2025-2beta/"
layout: post
giscus: true
author: Noelia
---

<footer>Lunes, 30 de junio de 2025 (actualizado el 16 de julio)</footer>

[Se ha publicado NVDA 2025.2beta1](https://www.nvaccess.org/post/nvda-2025-2beta1).

## [Actualización 23 de julio de 2025](https://groups.google.com/a/nvaccess.org/g/nvda-users/c/q7IIY8eMBpg/m/abzsxV5uCwAJ)

Se ha publicado NVDA 2025.2beta4 con los siguientes cambios:

- Eliminados cambios en la forma en que NVDA recupera ciertos textos, ya que causaban problemas con el cursor de revisión y en la revisión de objetos.
- Añadido un aviso al instalar NVDA en un ordenador controlado mediante conexión de acceso remoto.
- Eliminados cambios en el manejo de certificados, ya que causaban problemas en el acceso remoto y a algunos complementos.
- Actualización de traducciones.

### [Actualización 16 de julio de 2025](https://mailchi.mp/1bd1b3a81f2a/nvda-20252-beta-3-now-available?e=4f535ed214)


Se ha publicado NVDA 2025.2beta3 con los siguientes cambios:
  
- Añadida la posibilidad de activar o desactivar WASAPI para SAPI5.
- Añadido un diálogo de confirmación para actualizar certificados al descargar complementos.
- Al usar el acceso remoto de NVDA, la salida de voz desde pantallas del control de cuenta de usuario en el ordenador remoto funciona correctamente.
- Actualización de traducciones.

### [Actualización 8 de julio de 2025](https://groups.google.com/a/nvaccess.org/g/nvda-users/c/uxgQTcfsPE0)

Se ha publicado NVDA 2025.2beta2 con los siguientes cambios:

- Al escribir en una celda de Microsoft Excel, el dispositivo braille se actualiza correctamente para mostrar el nuevo contenido.
- Corregido un error por el que el dispositivo braille NLS eReader Zoomax no funcionaba en todos los equipos.
- Corregidos errores en la navegación de objetos con braille en controles de texto estático XAML.
- Corregidos problemas con certificados en la tienda de complementos.
- Corregido el comando que informa sobre el idioma del texto en la posición del cursor para que proporcione la misma información independientemente de la configuración de NVDA.
- Actualización de traducciones.

Al usar la versión beta, estarás eligiendo el canal beta/rc y solo recibirás notificaciones sobre actualizaciones disponibles para estos tipos de versiones.

Para volver al canal estable, actualiza manualmente NVDA a la última versión estable.

### Enlaces

- [Descargar NVDA 2025.2beta3](https://download.nvaccess.org/releases/2025.2beta4/nvda_2025.2beta4.exe)
  - SHA256: 649a715f9d7416e97a8cc631c506136cfe1beb5d97cdc98c8c5ac95d3c2a674c
- [Novedades](https://download.nvaccess.org/documentation/es/changes.html)
- [Incidencias en GitHub](https://github.com/nvaccess/nvda/issues)

### Aspectos destacados


Esta versión incluye mejoras para Windows 11, el modo exploración y Microsoft Word.

En modo exploración, se han añadido teclas de navegación rápida para encabezados 7 a 9. La lista de elementos y el diálogo buscar ya no hacen que se desactiven los perfiles de aplicación. En Microsoft Edge, notificaciones como "carga completada" ya no interrumpen la lectura continua.


En Microsoft Word, ahora se indica la nueva vista al usar los atajos de teclado para pasar a vista de página o vista de esquema. Cuando UIA está activado, ya no se muestran en braille marcadores finales de tabla redundantes cuando el cursor está en una celda de tabla. 


En Windows 11, NVDA ya no lee dos veces elementos del panel de emojis al explorarlos. Se ha mejorado el rendimiento y la fiabilidad en el menú Inicio de Windows 11 24H2. En Windows 11 24H2 o posterior, se indicará el estado de la ventana al cambiar su tamaño con las teclas Windows + flechas. También se ha añadido soporte al acceso por voz en Windows 11.


Se han añadido opciones para indicar el idioma del texto que se está leyendo, y si el idioma del texto no es admitido por el sintetizador actual.

Se ha añadido soporte para el dispositivo braille NLS eReader Zoomax , y para el enrutamiento del cursor en Monarch Humanware 
mediante la acción "señalar y activar".


Se ha actualizado LibLouis, con nuevas tablas braille para hebreo bíblico, ruso de seis puntos computerizado y tailandés grado 2. Se ha actualizado eSpeak NG, que ahora admite los idiomas arrumano, tártaro de Crimea, mongol y pastún.


Hay otras correcciones y mejoras, como las relativas al ratón y a la interacción táctil, el bloc de notas en Windows 11 y Google Chrome.

