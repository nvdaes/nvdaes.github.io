---

title: GitHub CLI - cómo instalarlo y usarlo desde la línea de comandos
permalink: "/GitHub-CLI/"
layout: post
author: BlindHelp
---


<footer>Martes, 27 de julio de 2021</footer>

Hoy día, te presentamos una aplicación llamada GitHub CLI, esta aplicación es ideal para crear  Pull Requests e incluso para hacer  Forks ya que conociendo los comandos puede ser más fácil que manejar la interfaz web de GitHub.

# GitHub CLI (Command Line Interface)

GitHub CLI es una herramienta de línea de comandos que lleva pull requests, problemas, acciones de GitHub y otras características de GitHub a tu terminal para que puedas hacer todo tu trabajo en un solo lugar.

# Acerca de GitHub CLI.

GitHub CLI es una herramienta de código abierto para usar GitHub desde la línea de comandos de tu computadora. Cuando estás trabajando en la línea de comandos, puedes usar GitHub CLI para ahorrar tiempo y evitar cambiar el contexto.

GitHub CLI incluye características de GitHub, tales como:

* Visualizar, crear, clonar y bifurcar repositorios
* Crear, cerrar y enumerar problemas y pull requests
* Revisar, hacer diff y merge de pull requests
* Ejecutar, visualizar y enumerar  flujos de trabajo
* Crear, enumerar, visualizar y excluir versiones
* Crear, editar, enumerar, visualizar y excluir gists

Para obtener más información sobre lo que puedes hacer con GitHub CLI, consulta [GitHub CLI Manual (en inglés).](https://cli.github.com/manual)

# Instalar GitHub CLI.

Consulta las instrucciones de instalación de GitHub CLI para MacOS, Windows y Linux en la página en inglés [GitHub CLI.](https://cli.github.com/)

Funciona para ambas cuentas. ya sea para GitHub.com y la versión Enterprise Server. disponible para Linux, macOS yt Windows, se instala fácilmente, especialmente a través de diferentes administradores de paquetes. Es de código abierto , bajo la licencia MIT. Todos los detalles en inglés se dan [aquí.](https://github.com/cli/cli#installation)

# ¿Cómo instalarlo y usarlo desde la línea de comandos?

El procedimiento es simple y rápido. Por supuesto, para aprovechar toda la funcionalidad de la herramienta, será necesario que se instale y se configure GIT en tu máquina. Si tu eres un usuario de GitHub, es probable que sea tu caso.

Si aún no has instalado Git, puedes visitar la página En inglés más abajo para descargarlo.

# Descargar Git.

<https://git-scm.com/downloads>

En esta página en inglés, debes buscar el archivo apropiado para tu sistema usado, por ejemplo, para Linux, MacOS y Windows.

En mi caso, como tengo un Windows 64 bits, así que tengo que descargar y instalar Git para Windows. A continuación, les dejo el enlace GIT para este sistema operativo.

# Git para Windows.

La aplicación oficial para Windows está disponible para descargar en el sitio web de Git. Yendo a <http://git-scm.com/download/win> y la descarga se iniciará automáticamente.

Documentación para GitHub en español (formato .epub):

<https://github.com/progit/progit2-es/releases/download/2.1.22/progit.epub>

Fuente de la documentación en español:

<https://git-scm.com/book/es/v2>

Sí, como dije inicialmente GitHub CLI, requiere que Git sea instalado en tu computadora, por lo que tendrás que instalar Git antes de continuar. Utiliza Git internamente para todas las funciones que también se pueden hacer con Git, como por ejemplo, clonar, empujar, fusionar, etc. Consulta el enlace de descarga indicado anteriormente.

# Descargar GitHub CLI para Windows.

Durante la redacción de este post, el archivo disponible en su última versión es el siguiente:

[gh_1.13.1_windows_amd64.msi](https://github.com/cli/cli/releases/download/v1.13.1/gh_1.13.1_windows_amd64.msi)

# Instalación de GitHub CLI para Windows.

Una vez que hayas descargado el archivo, debes ejecutarlo y luego hacer clic en cada cuadro de diálogo que aparece durante la instalación. Tan fácil como poder pasar a la autentificación de GitHub CLI.

El primer cuadro de diálogo contiene el siguiente mensaje en inglés:

The Setup Wizard will install GitHub CLI on your computer. Click Next to continue or Cancel to exit the Setup Wizard.

Tienes que pulsar en el botón Next

Una vez pulsado en el botón Next, se te abrirá un segundo cuadro de diálogo, encontrarás una casilla de verificación donde debes marcarlo con la barra espaciadora.

I accept the terms in the License Agreement casilla de verificación sin marcar

Una vez marcado deberías hacer dos Tabulaciones hasta el botón Next

Una vez pulsado en el botón Next, se te abrirá un tercer cuadro de diálogo, aquí se mostrará la ruta donde se instalará el programa GitHub CLI de forma predeterminada.

Esto es para un Windows 10 64 bits:

`C:\Program Files (x86)\GitHub CLI\`    

Una vez pulsado en el botón Next, se te abrirá un cuarto cuadro de diálogo, donde deberás comprobar si todo es correcto antes de poder instalar GitHub CLI en tu computadora.

Si todo es correcto, debes hacer clic en el botón Install para iniciar la instalación de este programa en tu computadora.

Por favor, espera un momento.

Una vez se haya completado la instalación, debes hacer clic en el botón Finish para cerrar el asistente de instalación. Ahora puedes pasar a la autentificación de GitHub CLI. Ver explicaciones detalladas más abajo.

# Puesta en marcha de GitHub CLI para Windows.

## Una configuración rápida, una herramienta ya completa.

La herramienta se usa con el Ejecutable gh, un nombre voluntariamente corto como git. El primer paso a seguir es la conexión a tu cuenta de GitHub. Puede pasar por el intercambio de un token de seguridad colocado en la variable de entorno (GITHUB_TOKEN) o tu navegador. Optamos por el segundo método. Ver explicaciones detalladas más abajo.

Te insto a que veas el manual GitHub CLI (página en inglés) más abajo para obtener instrucciones para configurarlo y usarlo.

[See the manual for setup and usage instructions.](https://cli.github.com/manual/)

# Autentificación.

Después de instalar GitHub CLI, necesitamos conectarlo e instalarlo con nuestra cuenta GitHub.
 
Para hacer esto, deberás tener una cuenta GitHub, si aún no la tienes, puedes hacerlo desde la página En inglés más abajo para iniciar sesión en GitHub.

[Join GitHub](https://github.com/join)

Esto hecho, asegurate de estar conectado a tu cuenta GitHub en tu navegador.

<https://github.com/>

Bueno, por mi parte, ya tengo una cuenta en GitHub, ya instalé Git y acabo de instalar el programa GitHub CLI.

Como soy una persona ciega, usé el lector de pantalla [NVDA](https://www.nvaccess.org/) Creo que los videntes pueden seguir estas mismas instrucciones que encontrarás más abajo para autentificarte.

Pulsar la combinación de teclas Windows+R para abrir el cuadro de diálogo Ejecutar, introduciendo el siguiente comando:

`gh auth login`

luego pulsa Intro.

Tendremos una ventana en el terminal como mensaje:

`C:\Program Files (x86)\GitHub CLI\gh.exe terminal vacio`    

En primer lugar, tendrás una primera pantalla donde GitHub CLI te preguntará con un mensaje en inglés ¿En qué cuenta quieres iniciar sesión?

Usa las flechas para moverte, pulsa para filtrar.

`? What account do you want to log into? [Use arrows to move, type to filter]`    
`> GitHub.com`    
`> GitHub Enterprise Server`    

Por lo general, tendrás la primera opción elegida para conectarte a tu cuenta GitHub.com, pero si tu empresa tiene servidores configurados para almacenar el proyecto  GitHub, entonces tienes que elegir  GitHub Enterprise Server, pulsa Intro.

Luego, tendrás una segunda pantalla donde GitHub CLI te preguntará con un mensaje en inglés ¿Cómo te gustaría autentificarte en GitHub CLI?

Usa las flechas para moverte, pulsa para filtrar.

`? How would you like to authenticate GitHub CLI? [Use arrows to move, type to filter]`    
`Login with a web browser]`    
`First copy your one-time code:`    
`Press Enter to open github.com in your browser...`    

Luego, selecciona el código único que te dará, este es un código de dos veces cuatro caracteres alfanuméricos...    

Para las personas que tienen el lector de pantalla [NVDA](https://www.nvaccess.org/), si no estoy equivocado, pulsar Ctrl + M para mostrar el contenido de esta ventana para seleccionar y copiar al portapapeles este código único que se te da utilizando las órdenes específicas de teclado de  Windows.

Extracto de la Guía del Usuario de NVDA 2021.1

<blockquote>

<H3>11.9. Consola de Windows</H3>
<P>
NVDA proporciona compatibilidad para la consola de órdenes de Windows utilizada por el indicativo del sistema, PowerShell, y el  subsistema Windows para Linux.
La ventana de la consola es de tamaño fijo, normalmente mucho más pequeña que el búfer que contiene la salida.
A medida que se escribe un nuevo texto, el contenido se desplaza hacia arriba y el texto anterior ya no es visible.
El texto que no se muestra visiblemente en la ventana no es accesible con los comandos de revisión de texto de NVDA.
Por lo tanto, es necesario desplazarse por la ventana de la consola para leer el texto anterior.
Los siguientes métodos abreviados de teclado incorporados en la Consola de Windows pueden ser útiles al <A HREF="#ReviewingText">revisar texto</A> con NVDA:
</P>
<TABLE BORDER="1" CELLPADDING="4">
<TR>
<TH>Nombre</TH>
<TH>Tecla</TH>
<TH>Descripción</TH>
</TR>
<TR>
<TD>Desplazar arriba</TD>
<TD>control+flecha arriba</TD>
<TD>Desplaza la ventana de la consola hacia arriba, así se puede leer el texto anterior.</TD>
</TR>
<TR>
<TD>Desplazar abajo</TD>
<TD>control+flecha abajo</TD>
<TD>Desplaza la ventana de la consola hacia abajo, así se puede leer el texto posterior.</TD>
</TR>
<TR>
<TD>Desplazar al comienzo</TD>
<TD>control+inicio</TD>
<TD>Desplaza la ventana de la consola al comienzo del búfer.</TD>
</TR>
<TR>
<TD>Desplazar al final</TD>
<TD>control+fin</TD>
<TD>Desplaza la ventana de la consola al final del búfer.</TD>
</TR>
</TABLE>

</blockquote>

Una vez que hayas copiado el código de dos veces cuatro caracteres alfanuméricos al Portapapeles...    
Pulsar Intro para abrir github.com  en tu navegador...    
y pegarlo en la nueva pestaña que se abre en tu navegador.    
Se te abrirás una página en inglés como nombre:    

`Device Activation`    

Tendrás que ingresar el código para que la sesión se inicie en tu terminal. Para hacer esto, coloca el cursor en el primer campo de edición. Al pulsar Ctrl + V, esta acción pegará automáticamente el código de dos veces cuatro caracteres alfanuméricos en los dos primeros campos de edición.

Luego, deberás pulsar en el botón "Continue" después de los campos de edición.    
Si el código se introduce correctamente, se te abrirás otra página web en inglés. De lo contrario, recibirás un mensaje de error que el código es incorrecto.    
En la nueva página que se te abre, hacer clic en Authorize GitHub CLI e ingresa tu contraseña en la siguiente pantalla.    
Después de hacer esto, otra página web se te abrirá con el siguiente mensaje en inglés:    
`Congratulations, you're all set!`    
`Your device is now connected.`    

Ten en cuenta que el modo de autentificación predeterminado es un flujo de datos para el navegador web.    
De lo contrario, el segundo es pasar por un token a través de una entrada estándar, por lo que debes autentificarte en Git con tus credenciales GitHub, luego debes responder la siguiente pregunta en inglés:

`? Authenticate Git with your GitHub credentials?`    
`Yes`    
`No`    

Si has elegido Sí (Yes), tendrás un mensaje en inglés:

`Paste an authentication token`    

Pegar un token de autentificación

Nota: Como elegí la primera alternativa, no puedo saber qué hacer en esta parte, pero si lo deseas, puedes consultar la documentación en inglés desde el enlace más abajo. Gracias.

[Creating a personal access token - GitHub Docs](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)

Luego tendrás una tercera pantalla donde  GitHub CLI te preguntarás con un mensaje en inglés ¿Cuál es tu protocolo preferido para las operaciones con git?

Usa las flechas para moverte, pulsa para filtrar.

`? What is your preferred protocol for Git operations?  [Use arrows to move, type to filter]`    
`> HTTPS`    
`> SSH`    

GitHub, te pedirá que elijas un protocolo, vamos con HTTPS por la simplicidad.

Después de elegir el protocolo de conexión (HTTPS o SSH), GitHub CLI será explotable.

A través de GitHub CLI, puedes interactuar con diferentes secciones del sitio: issue, pull-requests (pr), release o todavía repo (los repositorios), así que crear un proyecto, clonarlo y bifurcarlo o simplemente mostrarlo. Algunas acciones por lo tanto serán redundantes con Git, pero funcionarán de forma simplificada.

# Obteniendo un recapitulativo de órdenes para GitHub CLI.

Considero que sabe cómo abrir un símbolo del sistema o PowerShell en Windows, es decir, debe estar en la ventana para la consola de órdenes de Windows.

Cuando ingresa el siguiente comando:

`gh help`    

Podrás obtener un recapitulativo de órdenes para GitHub CLI.

Esta ventana símbolo del sistema contiene texto, puedes leerla usando el procedimiento indicado arriba.

# ¿Cómo hacemos los Pull Requests (pr) con GitHub CLI?

Para crear un Pull Request, puedes seguir estos pasos. Supongo que has instalado y configurado Git y GitHub CLI en tu sistema como se explico anteriormente.

A saber, que los comandos utilizados a continuación hay una mezcla entre los comandos Git y GitHub CLI.

En resumen, si desea contribuir a un proyecto, la forma más sencilla es:    
1. Encuentra un proyecto en el que deseas contribuir en GitHub.    
2. Símbolo del sistema en Windows, utilizando el lector de pantalla NVDA, ingresas el siguiente comando:    
`gh repo fork https://github.com/usuario/repositorio.git --clone`    
luego pulsas Intro.    
Recuerda que debes cambiar la sintaxis de usuario / repositorio que se encuentra en el ejemplo de la URL por el nombre del usuario y el nombre del repositorio que aparece en la URL del proyecto al que deseas colaborar.    
Ten en cuenta que la opción `--clone` se agrega para forzar el repositorio remoto para que se clone localmente.    
Una vez que hayas ingresado este comando, tu cuenta de GitHub alojada a través de la nube incluirá un fork del repositorio original y se realizará una clonación en el sistema de archivos local. A partir de ahí, puedes hacer un commit, un push e incluso pull requests GitHub como se hubiera hecho con cualquier repositorio ordinario Git o GitHub.    
Y eso es lo fácil que es hacer un fork de un repositorio GitHub en línea  de comando con GitHub CLI.    
3. Símbolo del sistema en Windows, `cd NombreDelRepositorio`    
4. Para que en futuras ocasiones tengas sincronizada tu rama principal con la del repositorio que acabas de bifurcar, puedes proceder de la siguiente manera:    
`git remote add upstream https://github.com/usuario/repositorio.git`    
luego pulsas Intro.    
Nota: el nombre upstream es un nombre habitual  Para el repositorio que acabas  de bifurcar (fork). Puedes cambiar el nombre poniendo el nombre del usuario del repositorio o simplemente dejarlo así.    
Recuerda que debes cambiar la sintaxis de usuario / repositorio que se encuentra en el ejemplo de la URL por el nombre del usuario y el nombre del repositorio que aparece en la URL del proyecto al que deseas colaborar.    
5. Ahora descargas las referencias a todas las ramas del repositorio remoto añadido, para que git sepa las ramas que hay en el repositorio remoto, incluida la rama principal, para hacer esto ingresas el siguiente comando:    
`git fetch upstream`    
luego pulsas Intro.    
6. Conectas tu rama master, en la que estás justo después de haber clonado el repositorio, con la rama principal del repositorio remoto, para hacer esto ingresas el siguiente comando:    
`git branch -u upstream/master`    
luego pulsas Intro.    
Nota: `-u` puede significar que es un parámetro referido al upstream, el repositorio remoto principal, por así decirlo.    
Ahora cuando estés en la rama master de tu repositorio y ingresas el siguiente comando:    
`git pull`    
se descargarán los últimos cambios aportados por el administrador del repositorio que acabas de bifurcar. Antes de hacer un pull request es bueno asegurarte de que se tiene la rama master actualizada con los últimos cambios hechos en el repositorio upstream. Entonces tienes que hacer el comando:    
`git pull`    
luego pulsas Intro.    
7. Luego creas una nueva rama idéntica a la rama master del repositorio clonado y te vas a esa nueva rama para empezar a hacer cambios, ingresando el siguiente comando:    
`git checkout -b byNewBranch`    
luego pulsas Intro.    
Nota: El nombre byNewBranch es un simple nombre falso, puedes poner cualquier otro nombre en esta nueva rama en relación   con tus modificaciones, por ejemplo, si es una traducción en español la sintaxis es, podría ser el nombre de la nueva rama, aunque puedes poner otros nombres.    
8. Usando el Explorador de Windows, accedes a la carpeta del repositorio y modificas correctamente los archivos, por ejemplo, el readme.md, buildVars.py y así sucesivamente.    
9. Pruebas tus cambios y cuando ellos son convenientes para ti, ingresas el siguiente comando:    
`git add .`    
luego pulsas Intro.    
Te permite añadir cualquier archivo nuevo en la fila de los archivos seguidos.    
Tampoco hay daño para usarlo si la modificación es solo un archivo que ya estaba presente, y que no se ha añadido ningún archivo.    
Entonces, si queremos estar seguros de que funciona en todas las circunstancias, te recomiendo encarecidamente que siempre ingreses este comando, después de aber añadido o haber hecho algunos cambios.    
10. Luego haces un commit con un mensaje descriptivo ingresando el siguiente comando:    
`git commit -m "Mensaje descriptivo"`    
luego pulsas Intro.    
11. Será necesario enviar esto en la nueva rama origin es en tu  repositorio GitHub.    
Para hacer esto, ingresas el siguiente comando:    
`git push origin es`    
luego pulsas Intro.    
Así es como se ha creado una rama llamada es en tu repositorio.    
12. Símbolo del sistema en Windows, ingresas el siguiente comando:    
`gh pr create -w`    
luego pulsas Intro.    
Nota: `-w` significa que deseas abrir el navegador.    
Una vez que hayas ingresado este comando, se te abrirá la página web del repositorio para crear el Pull Request sin necesidad de buscarla entre los enlaces del  repositorio de GitHub. El foco seguramente se situará en el título. Pulsas  la tecla de Tabulación para ir al cuadro de edición multilínea, haces el comentario que quieras o rellenas el template (plantilla) que se proporcione si disponible (en inglés), por ejemplo, en el repositorio de Noelia esta plantilla tiene signos de almoadilla que indican la información que se pide.    

Exploras con el cursor y debajo de los encabezados, que comienzan con dos `##`, scribes los datos en inglés:    

`Link to issue number:`    
`None`    
`## Summary of the issue:`    
`Missing spanish translation.`    
`Description of how this pull request fixes the issue:`    
`Added documentation and messages translated into Spanish.`    
`## Testing performed:`    
`None`    
`## Known issues with pull request:`    
`None`    
`## Change log entry:`    
`None`    

E inmediatamente que hayas terminado, le das al botón Create pull request, y se realizarán pruebas automáticas para superar sin problemas. Después de lo cual puedes leer el estado del  pull request enviado, siempre en inglés, luego puedes cerrar la página web con Alt+F4.    

Espera hasta que se tenga en cuenta ;-)    

Y ese, básicamente, es el proceso de creación de una PR. Si creamos una PR sobre la rama master, es importante tener en cuenta que hasta que no se acepte o cierre todos los commits que mandemos a nuestra rama master se incluirán en la pr automáticamente, incluso si los mandamos después de abrirla.

Más abajo encontrarás un enlace  con más información en inglés sobre la creación de una PR con GitHub CLI:

<https://cli.github.com/manual/gh_pr_create>

# Consejos al vuelo.

1. Primer reflejo que siempre debes tener cuando estás en el repositorio que acabas de bifurcar y clonar.    
Ingresas el siguiente comando:    
`git status`    
Para verificar la rama actual, si no es la rama es, `git checkout es` para moverte allí.    
Nota: es, significa el nombre de la nueva rama que habíamos creado anteriormente para realizar cambios en el repositorio remoto.    
Antes de crear esta nueva rama llamada es, estábamos en la rama master    
Al ingresar el comando:    
`git status`    
El mensaje en inglés fue el siguiente:    
`On branch master`    
`Your branch is up to date with 'origin/master'.`    
2. Puedes verificar el registro de cambios realizado en el repositorio remoto haciendo el comando:    
`git log`    
3. Por ejemplo, si deseas hacer un fork y una clonación de un repositorio remoto, generalmente ingresando el comando:    
`gh repo fork https://github.com/usuario/repositorio.git --clone`    
La URL completa no es necesaria, simplemente especifica el nombre de usuario y del repositorio GitHub. No hay nada que reemplace todo en el corazón del git en el flujo de trabajo y no es específico de GitHub, es muy normal. Ambas herramientas deben ser completadas, no oponibles.    
Pero esta astucia allí no la intenté, pero te lo doy por si las moscas.    

¡eso es todo! Este tutorial no puedo hacerlo mucho mejor, sabiendo que con GitHub CLI, también puedes hacer muchas cosas más, pero para mí, sigue siendo nuevo.

---

Muchas gracias a mi amiga Noelia Ruiz Martínez por hacerme a conocer esta aplicación GitHub CLI. 🤗    

¡Espero que este tutorial te ayude a trabajar mejor con GitHub desde la línea de comandos usando GitHub CLI!    
¡Les deseo un buen uso de la aplicación GitHub CLI!    
@+    
BlindHelp!    

---
