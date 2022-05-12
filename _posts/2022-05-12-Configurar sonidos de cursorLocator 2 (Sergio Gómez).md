---
title: Audiotutorial con transcripción: cursorLocator 2.0 (Sergio Gómez)
permalink: "/cursorLocator2/"
layout: post
author: Noelia
commentsId: 41
---

<footer>Jueves, 12 de mayo de 2022</footer>

Sergio Gómez, coautor de este complemento, ha grabado un audiotutorial sobre cursorLocator 2.0, que pronto publicaré y enviaré para que se incluya en la `[web de complementos de NVDA](https://addons.nvda-project.org).

<audio controls src="https://drive.google.com/uc?export=download&id=1rFxCtjzey90IKZeAxZzle66nS_0hApKe">Tu navegador no admite audio</audio>

[Descarga directa de mp3](https://drive.google.com/uc?export=download&id=1rFxCtjzey90IKZeAxZzle66nS_0hApKe)

[Descargar transcripción en .txt](https://drive.google.com/uc?export=download&id=1rKCH02tuFtyBFHX4XXmC2qKHsQiIxoar)

### Transcripción

Audiotutorial transcrito a texto por: Noelia Ruiz Martínez; revisado por: Sergio Gómez Codina.
Fecha de la transcripción: 11 de mayo de 2022.

Hola:

Este es un audiotutorial de CursorLocator.
En primer lugar, disculpad si se oyen sonidos de fondo.
Y... Bueno. Deciros que primeramente os voy a enseñar, más o menos, cómo funcionan las novedades. Y después os quiero explicar unas cosillas.
Bueno, empecemos.
Primero, decir que NVDA lo he dejado en modo “reproducir pitidos”; no voz.

( pitidos de NVDA )

Estoy en las opciones, configuración de cursorLocator.
Al principio, “Report line length”. O sea... Sí: sería reportar la longitud de línea. Esto, por defecto está en 80, tal y como lo tengo.
Doy a tabulador, y “Maximum number of beeps for start of line notification”. O sea, os traduzco: Número máximo de pitidos para inicio... O sea, para notificación de inicio de línea, sería, más bien. No traducción exacta, sino lo que pillo así, de primeras.
Esto, por defecto está en 0. Y esto es para el inicio de línea, o sea, para cuando reproduce el pitido de inicio de línea. Sería el “start of line”. Y bueno. Pulso tabulador.
Aquí estaría el “Maximum number of beeps for end of line notification”. O sea, número máximo de pitidos para notificación de final de línea, ¿no? Sería, más o menos. Esto también está en 0 por defecto.
Esto antes, para desactivarlo, que ya... Cuando alcanzas la máxima..., la longitud establecida, o sea... Por ejemplo, por defecto está en 80, pues, cuando llega al carácter 80, él reproducía un pitido, pues, para desactivar eso, evidentemente tenías que deshabilitar el complemento, en el caso de que no quisieras eso.
Pues ahora puedes desactivar el complemento prácticamente desde las opciones. No desactivar, así como así. No se llama desactivar, el ajuste, pero semejante. Simplemente lo bajas a 0, todos los parámetros, que son dos, y ya está. Ya todo bien calladito.
Y bueno. Pulso tabulador...
Ahí, esto sería “Sound for start of line”, y sería el “Pitch of sound for start of line”. O sea, esto sería sonido para inicio de línea. Tono para sonido de inicio de línea. Estaría a 400.
Esto sería... Pues para... Bueno. El tono del sonido: si se quiere más agudo, pues más arriba; y, si se quiere más bajo, pues más abajo.
Después: “Length of sound for start of line”. O sea, longitud de sonido para inicio de línea. Está a 50.
Por ejemplo, lo siguiente es un botón llamado “Test sound”... Bueno. “Test sound for start of line”. Y sería así el sonido.

( pitido de cursorLocator para inicio de línea )

Lo reproduzco otra vez.

( pitido de cursorLocator para inicio de línea )

Sería así, un pitidito corto.
Lo siguiente (pulso tabulador otra vez): “Sound for end of line”. Este sería el pitch, o sea, el tono: “Pitch for”... O sea, “Pitch of sound for end of line”. Esto está a 1000 por defecto, y lo siguiente sería la longitud, el “Length of sound for end of line”, que estaría a 50.
Y lo siguiente, el botón para el test. O sea, el sonido sonaría así.

( pitido de cursorLocator para final de línea )

Reproduzco otra vez.

( pitido de cursorLocator para final de línea )

Sería también un pitidito corto, pero un poquillo más agudo.
Y bueno.
Vamos a probar.

( pitidos de NVDA )

Un momentillo...

( pitidos de NVDA )

Ahí lo pongo: que me avise a los 10 caracteres, que me avise una vez al inicio de la línea y me avise una vez al final de la línea.
Aceptamos...
Abro el Bloc de notas...
Ahora, por ejemplo, yo pulso una tecla...

( pitido de CursorLocator para inicio de línea )

Ahí sonaría el pitido de inicio.
Sigo escribiendo...

( pitidos de NVDA )

( pitido de cursorLocator para final de línea )

Ahí ya, ahí me ha indicado el final de la línea.
Esto puede ajustarse (el número de avisos). Y ¿cómo? Bueno. Simplemente, vamos a la configuración de cursorLocator, vamos a “Maximum of number for beeps for start of line notification”. Que... Bueno. Esto, pues lo que se refiere, a número de notificaciones para el inicio de la línea.
No sé. Subimos a 2.
Luego, la misma cantidad para indicar el final: 2. Aceptamos.
Entonces...

( 2 pitidos de cursorLocator para inicio de línea )

Ahí ha dado dos pitidos de inicio.
Sigo escribiendo...

( pitidos de NVDA )

( 2 pitidos de cursorLocator para final de línea )

Ahí ha indicado, también, en el carácter número 10 y en el 11.
Incluso, si queremos que nos notifique, pero hasta donde lo permite, en el final de línea, vamos a la configuración de cursorLocator... Vale. El máximo de notificaciones para el final de la línea... lo subimos a 600, que es lo máximo que deja.
O sea...

( 2 pitidos de cursorLocator para inicio de línea )

Ahí, dos pitidos para el inicio...

( pitidos de NVDA )

( 12 pitidos de cursorLocator para final de línea )

O sea, si superamos la longitud, pues él reproduce pitidos hasta que dejemos de escribir. O sea, reproduce pitidos por cada carácter escrito.
Esto, la autora lo incluyó, más que nada para las personas con ayuda auditiva o, simplemente, personas que sean algo despistadas, que se les pase el pitido por alto. De esta manera se puede configurar cuántas veces quieres que te avise del inicio de línea o del final. Aparte de que, ya desde la versión anterior, se podía configurar el tono del pitido y la longitud.
Y bueno. Lo que quería explicar: este complemento no iba bien con el Bloc de notas de Windows 11 y Microsoft Office, al menos, el 365. Y, con no ir bien, no lo estoy definiendo... O sea, no me estoy acercando al qué. Directamente no iba, por así decirlo. No... No iba bien. No, no, no, no iba.
Pero ayer yo se lo reporté a Noelia, y ella me pidió que le enviase cierta información pulsando ciertas teclas, yo se lo envié, aproveché para enviarle el del Bloc de notas y de Microsoft Office. Yo le reporté solamente el de Microsoft Office; pero ya, de paso, le envié el del Bloc de notas. Y ella ha conseguido hacer que el complemento funcione.
Para quien entiende esto, el problema era que el complemento no iba con controlTypes, o algo así me ha dicho Noelia antes.
Y bueno, ya va correctamente, en el Bloc de notas como en Word, al menos.
Y bueno. Esta versión que he probado ahora, para hacer la muestra, es el test que me ha enviado esta mañana con el pequeño arreglo. Esta versión será publicada... Pues no sé si ya la ha publicado o si está pendiente de publicación; pero, tarde o temprano, se publicará.
Y bueno. Nada más.
Este audiotutorial se ha grabado el 10 de mayo de 2022.
Eso, para que la fecha quede señalada.
Y nada. Hasta pronto.

