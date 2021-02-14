---
title: Eclipse con NVDA
permalink: "/eclipse/"
layout: post
commentsId: 11
author: Ramón García
---

<footer>Domingo, 14 de febrero de 2021</footer>

Empiezo este primer post para la comunidad hispanohablante de NVDA agradeciendo a Noelia su trabajo para que este sea un sitio tan abierto y participativo. Compartir es algo propio del software libre, pero no mucha gente lo hace con tanta generosidad.

Entrando en materia, desde ya advierto al lector o lectora exigentes, que lo que sigue no es un manual exahustivo, sino más bien una serie de consejos y recursos para manejar el entorno de desarrollo [Eclipse](https://es.wikipedia.org/wiki/Eclipse_(software)) utilizando NVDA. Por más detalladas que sean las explicaciones, se trata de un software complejo que requiere un tiempo considerable de uso para alcanzar una funcionalidad básica. Si simplemente te interesa la programación y no sabes por dónde empezar, quédate con la idea de que Eclipse es accesible y lo vas a poder usar cuando quieras, pero tal vez al principio te gustaría usar algo más cómodo como [Notepad++](https://notepad-plus-plus.org/downloads/).

### Eclipse es accesible

Eclipse usa las Microsoft Active Accessibility (MSAA) APIs para hacer   accesibles los elementos de la interfaz gráfica  a los lectores de pantalla. . La información sobre sus  características de accesibilidad puede encontrarse en inglés en su [manual](https://rtist.hcldoc.com/help/topic/org.eclipse.platform.doc.user/concepts/accessibility/accessmain.htm). Pero como normalmente una afirmación así hay que matizarla, hay que decir que funciones básicas como el resaltado de código, no se interpretan correctamente con NVDA. Para solucionar esto, y algún otro problema, se puede usar un complemento llamado [Eclipse Enhance](https://github.com/albzan/eclipse-nvda). Sé que su última versión es compatible con  NVDA 2020.3, pero ignoro si está revisado por la comunidad. Si te decides a usarlo, es necesario que configures las preferencias de Eclipse como se indica en el *readme* del proyecto.

### Navegando por la interfaz de usuario

Para empezar tenemos la típica ventana principal con sus barras de menú y de herramientas, pero a partir de ahí todo es muy dinámico porque se pueden cargar distintas perspectivas y distintas vistas en cada una de ellas. Las perspectivas se corresponden con el tipo de tarea que estemos realizando: Java, Web, Git... y las vistas, con sus varias aproximaciones. Por ejemplo, dentro de la perspectiva de Java, se puede estar usando la vista de paquetes, de editor o de consola. Las perspectivas disponibles dependen de la versión instalada de Eclipse, pero se pueden añadir nuevas.

Para saltar entre controles se puede tabular. Para escapar de un editor donde "Tab" escribe un carácter, se usa "Ctrl + Tab". A la barra de menú se accede de la forma habitual, y sobre el menú de contexto, podemos decir que hay dos, el habitual, y otro que se saca con "Ctrl + F10".

Dentro del editor se salta entre errores de código con "Ctrl + .". Cuando un error está seleccionado, con "F2" se pueden consultar sugerencias para arreglarlo. Los bloques de código se contraen y expanden con "Ctrl más -" y "Ctrl más +", respectivamente. Una línea se elimina con "Ctrl + D", y se pueden subir o bajar líneas con "Alt + flechas". Para aceptar la sugerencia de código mientras se escribe, se pulsa "Tab".

### Algunos atajos de teclado

A continuación dejo una lista de atajos que a mí me son muy útiles, pero hay muchos más y se pueden personalizar.

- Ctrl + F8 cambia entre perspectivas.
- Ctrl + F7 cambia entre vistas.
- Ctrl + F6 cambia entre archivos en el editor.
- Ctrl + E  lista los archivos abiertos.
- Ctrl + W cierra el archivo.
- Ctrl + Sift + W cierra todos los archivos.
- Alt + flechas izquierda y derecha cambia entre los últimos archivos editados.
- Ctrl + L ir a la línea.
- Ctrl + Sift + O hace los imports automáticamente.
- F12 vuelve al editor.
- Ctrl + F11 corre el programa.
- Alt + Sift + Q menú Show View.

Cuéntanos si tú usas alguno que se me haya pasado, y en general, cualquier truco que te sea útil en Eclipse. Estamos aprendiendo siempre.
