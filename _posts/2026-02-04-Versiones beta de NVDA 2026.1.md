---
title: Versiones beta de NVDA 2026.1
permalink: "/nvda-2026-1beta/"
layout: post
giscus: true
author: Noelia
---

<footer>Miércoles, 4 de febrero de 2026 (actualizado el 23 de febrero)</footer>

[Se ha publicado NVDA 2026.3beta1](https://www.nvaccess.org/post/nvda-2026-1beta1/).

Al usar la versión beta, estarás eligiendo el canal beta/rc y solo recibirás notificaciones sobre actualizaciones disponibles para estos tipos de versiones.

Para volver al canal estable, actualiza manualmente NVDA a la última versión estable.

### Enlaces

- [Descargar NVDA 2026.1beta4](https://download.nvaccess.org/releases/2026.1beta4/nvda_2026.1beta4.exe)
  - SHA256: 867f83bac74d150f4c8e91c63a1aa909ce51aa43ba5dccceea9c338234eff096
- [Novedades](https://download.nvaccess.org/documentation/es/changes.html)
- [Incidencias en GitHub](https://github.com/nvaccess/nvda/issues)

### Aspectos destacados

Esta versión incorpora soporte para leer contenido matemático con MathCAT.

Hay varias mejoras para la salida de voz. Durante la lectura, los errores ortográficos se pueden indicar mediante un sonido en lugar de voz.

Ahora NVDA se puede configurar para leer automáticamente después de reconocer contenido, por ejemplo, con el OCR de Windows.

NVDA ya no indica que no se admite el idioma de lectura cuando el sintetizador admite el idioma, pero no el dialecto específico.

También se ha mejorado el soporte para braille.

Ahora sigue funcionando al pasar a una pantalla segura, como la pantalla de inicio de sesión o el diálogo de control de la cuenta de usuario.

Los mensajes de NVDA procedentes del ordenador local se muestran en braille al controlar un ordenador mediante acceso remoto.

Los errores ortográficos y el número de elementos de una lista en modo exploración se pueden mostrar en braille. También se han añadido otras correcciones de errores en braille, como las relativas a Microsoft Outlook y LibreOffice Writer.

Al usar navegadores web en modo exploración, NVDA ya no considera como invisibles los controles con anchura o altura 0. Esto puede facilitar el acceso a contenido disponible solo para lectores de pantalla en algunos sitios web.

Ciertos enlaces construidos incorrectamente ya no impiden a NVDA leer contenido en Google Chrome y otros navegadores basados en Chromium.

El resaltado para modo exploración ahora aparece en los resultados de reconocimiento de contenido, por ejemplo, al usar el OCR de Windows.

En Microsoft Word, se han añadido comandos sin asignar para desplazarse a referencias, que también se muestran en la lista de elementos.

Ahora es posible ver los resultados del análisis de antivirus para complementos desde la tienda.

Para complementos que dispongan de registro de cambios, será posible ver esta información.

Se ha mejorado el funcionamiento de la actualización de complementos en segundo plano.

Se ha añadido una nueva categoría "Privacidad y seguridad" al diálogo de opciones de NVDA. El "Nivel de mensajes guardados en el registro" y "Permitir a NV Access recopilar estadísticas sobre el uso de NVDA" se han trasladado aquí desde la categoría General. Las opciones de cortina de pantalla también se han trasladado aquí desde la categoría Visión. Además, las opciones de cortina de pantalla ya no dependen de perfiles de configuración.

La interfaz de NVDA está traducida a camboyano. 

Se han actualizado Liblouis, Unicode CLDR e eSpeak NG.

Se han añadido tablas para inglés grado 3, japonés (Rokuten Kanji) y braille macedonio no contraído. Se han mejorado las tablas de braille para hebreo bíblico, inglés unificado, griego internacional, húngaro, noruego, portugués de ocho puntos y eslovaco.

Se ha añadido traducción de emojis para luxemburgués. 

Además, hay otras muchas correcciones y mejoras.


### [Actualización 17 de febrero de 2026](https://www.nvaccess.org/post/nvda-2026-1beta4)

Se ha publicado NVDA 2026.1beta4 con los siguientes cambios:

- Corregido un error por el que eSpeak NG seguía hablando a velocidad reducida tras leer matemáticas si la velocidad relativa en opciones de matemáticas se había establecido como menor al 100 %.
- Corregida la imposibilidad de cambiar temporalmente las opciones de MathCAT  cuando el directorio de configuración es de solo lectura.
- La casilla de verificación "Usar NVDA durante el inicio de sesión" ya no está marcada por defecto en el instalador cuando se lleve a cabo una instalación limpia.
- Cuando se cree una copia portable, se mostrará una advertencia si, al hacerlo en el directorio elegido, NVDA se actualizará a una versión anterior.
- Traducciones actualizadas.

### [Actualización 17 de febrero de 2026](https://www.nvaccess.org/post/nvda-2026-1beta3)

Se ha publicado NVDA 2026.1beta3 con los siguientes cambios:

- Corregido un error ocasional por el que NVDA quedaba congelado con sintetizadores SAPI 4 y SAPI 5-32-bit.
- Corregido un error por el que NVDA permanecería en silencio si eSpeak NG se establecía como sintetizador predeterminado, y no se cargaría al iniciarse NVDA.
- Traducciones actualizadas.


### [Actualización 10 de febrero de 2026](https://www.nvaccess.org/post/nvda-2026-1beta2/)

Se ha publicado NVDA 2026.1beta2 con los siguientes cambios:

- Se ha corregido un error que impedía usar cadenas traducidas para controladores de sintetizadores SAPI 4 y SAPI 5 32-bit.
- Se ha solucionado una situación en la que NVDA podía ejecutarse como administrador de forma inesperada.
- Se ha mejorado la documentación sobre el soporte para SAPI 4 y SAPI 5 32-bit.
- Se incluyen traducciones actualizadas.