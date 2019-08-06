---
title: Pasar de JAWS a NVDA
layout: post
author: BlindHelp
---

<footer>Jueves, 25 de agosto de 2016 (actualizado el 6 de agosto de 2019)</footer>

### Guía Pasar de JAWS a NVDA ###
Traducido Por Noelia Ruíz Martínez y Rémy Ruíz (BlindHelp). Si lo deseas, puedes consultar la versión original en inglés
[Switching From JAWS To NVDA.](http://community.nvda-project.org/wiki/SwitchingFromJawsToNVDA#SwitchingFromJAWSToNVDA)

# Pasar de JAWS a NVDA #

## Introducción ##

El propósito de esta guía es ayudar a  los usuarios de JAWS (Job Access With Speech), un lector de pantalla comercial proporcionado por Freedom Scientific, a pasar con facilidad al lector de pantalla de código abierto NVDA (Non Visual Desktop Access). La guía presupone que conoces JAWS y que eres capaz de usarlo eficientemente.

No se propone reemplazar a la guía del usuario incorporada, sino más bien que NVDA no intimide tanto.

## Fortalezas y debilidades ##

La intención de esta guía no es hacer una comparativa entre JAWS y NVDA, pero es necesario mencionar algunas cosas que funcionan de forma diferente. En la mayoría de situaciones cotidianas, encontrarás que NVDA funciona tan bien como JAWS, e incluso mejor en algunos casos.

## Una breve nota sobre el teclado portátil de NVDA ##

Seleccionar la distribución de teclado portátil no establece automáticamente la tecla Bloqueo de mayúsculas como tecla modificadora de NVDA. No obstante, se proporciona una casilla de verificación, a continuación del cuadro combinado del tipo de teclado, para conmutar esta opción. Pulsa NVDA+control+k para abrir esta opción.

## Nota acerca de la tecla Insert ##

Como sabrás, tanto JAWS como NVDA pueden utilizar la tecla insert como tecla modificadora. En ambos lectores de pantalla su comportamiento es ligeramente diferente, lo que podría llevar a cierta confusión si estás acostumbrado a uno u otro.

Con JAWS cargado, la tecla insert es únicamente para su uso. Esto significa que, para utilizar la función original que se le ha asignado (como cambiar entre los modos insertar y sobrescribir en un editor de texto o procesador de texto), primero debes pulsar el atajo para enviar la siguiente pulsación de teclado al sistema.
Por otra parte, NVDA te permite llevar a cabo la función original de la tecla insert presionándola dos veces rápidamente. Ten esto en cuenta la próxima vez que estés editando texto mientras usas NVDA y te encuentres sobreescribiendo texto.  Esto también funciona para la BloqMayus cuando se asigna como la tecla modificadora de NVDA (pulsar la tecla dos veces seguidas para alternar a BloqMayus).

## Sintetizadores alternativos ##

NVDA utiliza las voces de Windows OneCore, incorporadas en Windows 10, como el sintetizador predeterminado en Windows 10. Las voces de Windows OneCore son ágiles, suenan de forma natural y están disponibles en muchos idiomas. Para añadir voces adicionales, instala un nuevo idioma en Windows 10, incluyendo el paquete de idioma. Las variantes de un idioma, como "inglés (Reino Unido)" e "inglés (Estados Unidos)" incluyen voces diferentes.

eSpeak NG es el sintetizador de voz que se incluye con NVDA. Se usa de forma predeterminada en Windows 8.1 y versiones anteriores. Al igual que NVDA en sí, eSpeak también es libre y de código abierto, una de las razones por las que viene incluido. Otra es el número de idiomas que puede hablar.

Tanto las Voces Windows OneCore como eSpeak NG tienen acceso a funciones como "alzado brusco", lo que permite que la velocidad de voz se duplique efectivamente. También puedes  pulsar MAYÚS para pausar, y pulsándola nuevamente continuará hablando, en lugar de CONTROL, que simplemente detiene la voz.

Para cambiar el sintetizador, pulsa NVDA+control+s.  Para configurar otras opciones de voz, pulsa NVDA+control+v.

Sin embargo, es posible que, por cualquier motivo, ni Windows OneCore ni eSpeak NG sean adecuados para ti. Si este es el caso, te encantará saber que hay alternativas, que se discutirán en las siguientes secciones.

### Eloquence ###

Code Factory ha lanzado una versión de [eloquence como un complemento NVDA que puede adquirirse desde este enlace](http://codefactoryglobal.com/app-store/voices-for-nvda/).  El precio también incluye una licencia para usar el sintetizador Vocalizer de Nuance.

Consulta la sección titulada “Scripts” para obtener información sobre los complementos de NVDA.

### Aún más voces ###

Si todavía no encuentras la voz perfecta para ti, consulta la [página de voces extra](http://community.nvda-project.org/wiki/ExtraVoices). En esta página en inglés se enumeran otros sintetizadores de voz (tanto gratuitos como de pago).

## Terminología ##

En la mayoría de las ocasiones, JAWS y NVDA usan gran cantidad de términos comunes para describir controles, por ejemplo botones de opción, cuadros combinados, casillas de verificación, etc.

Una diferencia notable es que NVDA distingue entre cuadros de edición simples y multilínea, y también te indicará si un campo es de contraseña (todo lo que escribas será reemplazado por asteriscos). También te advertirá si hay texto seleccionado en un campo cuando te sitúes sobre él con el tabulador. Si es así, al escribir se reemplazará el texto seleccionado.

NVDA llama “voces” a los distintos idiomas que un sintetizador puede hablar, y “variantes” a las diferentes voces admitidas por tu sintetizador.

## Cursores ##

NVDA tiene varios cursores para ayudar en la navegación de Windows y aplicaciones, similares a JAWS. La terminología es ligeramente distinta, según se describe a continuación.

El cursor del PC, en la documentación de NVDA, es mencionado como "el foco del sistema" y "el cursor del sistema".

Lo equivalente al cursor de JAWS es una combinación de navegación de objetos, el cursor de revisión, revisión de documentos y revisión de pantalla. La función de "revisión de pantalla" es quizá la más similar al cursor de JAWS, pero es conveniente familiarizarse con los tres modos de revisión. Encontrarás instrucciones para esto, ampliadas y más fáciles de entender, en la guía de usuario o el libro en inglés [Basic Training for NVDA](https://www.nvaccess.org/product/basic-training-for-nvda-ebook/) ($30 AUD).

A diferencia de JAWS, no hay que cambiar entre los equivalentes al cursor del PC y de JAWS, pues el teclado numérico está reservado exclusivamente para trabajar con las funciones correspondientes al "cursor de JAWS".

Vale la pena señalar que, cuando se utiliza la navegación de objetos o el cursor de revisión, el ratón no se mueve en sincronía. Tienes que pulsar una orden para mover el ratón a la ubicación del cursor de revisión, que es similar a cómo funciona el "cursor invisible" de JAWS. También hay órdenes para simular clic o bloquear ambos botones del ratón.

Si simplemente deseas activar el objeto actual en el que estás enfocado cuando utilizas la navegación de objetos, hay una orden para hacerlo sin tener que mover el cursor del ratón hasta él objeto.

### Accediendo al área de notificación (bandeja del sistema) ###

NVDA no proporciona un cuadro de diálogo para acceder al área de notificación, ya que se puede acceder de forma nativa.  Pulsa WINDOWS+B para acceder al área de notificación, luego usa las teclas de flechas para moverte entre los elementos.  Pulsar la barra espaciadora sobre un icono es lo mismo que hacer clic con el botón izquierdo del ratón.  Pulsar Intro es lo mismo que hacer doble clic con el botón izquierdo del ratón (no hay distinción entre estos en Windows 10). Pulsar la tecla aplicaciones o shift+f10 para abrir el menú contextual de un elemento.

Si el primer elemento en el área de notificación es "Botón de notificación de chevron", Windows no está configurado para mostrar todos los iconos.  Pulsa INTRO o barra espaciadora para abrir esto y luego las teclas de flechas para navegar a través de los elementos.  Para configurar Windows para que siempre muestre todos los iconos del área de notificación, abre Configuración de Windows, "Área de notificación", o "Seleccionar los iconos que aparecen en la barra de tareas", y asegúrate de que la opción "Mostrar siempre todos los iconos en el área de notificación" esté marcada.

Si prefieres tener un cuadro de diálogo al que puedas acceder con NVDA+F11, hay un complemento "SysTrayList" disponible en el [sitio Web de complementos de la comunidad de NVDA](https://addons.nvda-project.org/index.es.html).

### Accediendo a la cinta ###

Microsoft Office 2007 reemplazó el menú y las barras de herramientas con una "cinta". Al igual que el área de notificación, estos son accesibles para que NVDA no proporcione un reemplazo de "cinta virtual". Microsoft tiene una página en inglés sobre el [Uso del teclado para trabajar con la cinta](https://support.office.com/en-us/article/use-the-keyboard-to-work-with-the-ribbon-954cd3f7-2f77-4983-978d-c09b20e31f0e).  Esencialmente pulsa ALT o ALT+letra para acceder a las cintas individuales.  Pulsa CONTROL+Flecha Izquierda y Flecha Derecha para moverse entre los grupos dentro de la cinta actual (por ejemplo Portapapeles, fuente, párrafo, etc en la cinta de Inicio de Word).  Pulsa la tecla TAB para moverte entre los elementos individuales en cada cinta y barra espaciadora o Intro para activar el elemento de la cinta actual.  La cinta también incluye "DIME" (Tell Me).  Pulsa alt+q, y, después, escribe el término de búsqueda o la función a la que deseas acceder, usa las teclas de flechas para seleccionarlo a partir de la lista e Intro para activarlo.

### Comprobación del estado de las barras de progreso ###

Jaws proporciona un comando INSERT+control+b para comprobar el estado de las barras de progreso en la ventana actual.  NVDA tiene opciones para que las barras de progreso sean anunciadas automáticamente a medida que  se actualizan.  Esto se puede hacer tanto verbalmente ("5%", "6%", "23%", etc.) como por pitidos, aumentando el tono, o ambos. Para ajustar esto, pulsa NVDA+U.  Alternativamente, está disponible en la categoría Presentación de Objetos del cuadro de diálogo Opciones de NVDA.  Pulsa NVDA+control+o para abrir estas opciones.

### Accediendo a los caracteres y emojis ###

Jaws tiene un comando INSERT+4 para seleccionar símbolos.  En NVDA INSERT+4 (suponiendo que INSERT sea tu tecla modificadora de NVDA) conmutará el modo  verbalizar teclas de órdenes, que anuncia cuándo se pulsan teclas no alfanuméricas, como la barra espaciadora o las flechas.  Para seleccionar caracteres especiales se pueden usar diferentes medios en muchos programas.  Por ejemplo, pulsa CONTROL+ALT+E para escribir el símbolo del Euro en Word.  La funcionalidad de insertar símbolo en Word (ALT+N, luego U) es accesible, aunque algunos de los símbolos enumerados en el cuadro de diálogo "Más símbolos" no se leen correctamente en todas las versiones de Word.  Del mismo modo, el programa "charmap" en el propio Windows permite insertar cualquier símbolo de cualquier fuente.  Nuevamente, no todos los caracteres están completamente descritos.

La ventana Emoji de Windows 10 es accesible.  Pulsa WINDOWS+. (WINDOWS+punto). Pulsa TAB para moverte a las categorías, selecciona una categoría y luego pulsa Intro.  Pulsa SHIFT+TAB para moverte a través de la lista de emojis para esa categoría, usa las flechas para moverte entre los emojis disponibles e Intro para insertar el emoji actual en el texto.  Pulsa escape cuando hayas terminado.

### Cursor táctil ###

En JAWS 15 o posterior, puedes utilizar las teclas del teclado numérico para navegar por las aplicaciones utilizando una estructura parecida a un árbol, similar a la forma en que los usuarios de los lectores de pantalla de teléfonos inteligentes (smartphones) como VoiceOver navegarían por pantallas táctiles. En NVDA, las órdenes de navegación de objetos y de modo objeto táctil se pueden utilizar con este fin.

## Cursor virtual ##

El cursor virtual es conocido como "modo exploración". En gran parte funciona como en JAWS, ofreciéndote acceso a teclas rápidas de navegación o, en el lenguaje de NVDA, "navegación con una sola letra".

A continuación se enumeran algunos problemas comunes que puedes encontrar al navegar por la web con NVDA por primera vez y cómo solucionarlos.

### ¿Por qué está todo en una línea? ###

Por si no lo sabías, JAWS tiene dos modos de mostrar páginas web u otros documentos usando el cursor virtual: Diseño simple y diseño de pantalla. El diseño simple se establece por defecto, y muestra el contenido de una forma lineal -colocando cada enlace o control en su propia línea. El diseño de pantalla distribuye el contenido de manera semejante a cómo aparece en pantalla.

La opción por defecto en NVDA es "Diseño de pantalla", pero puedes cambiar fácilmente a su versión de diseño simple pulsando NVDA+v mientras estés en modo exploración. Esto desactivará el "diseño de pantalla". Asegúrate de guardar tu configuración con NVDA+control+c después de hacer este cambio.

### Sigue diciendo Cliqueable Cliqueable Cliqueable. ###

Durante la lectura de páginas web, podrías notar que NVDA dice "cliqueable", a veces con demasiada frecuencia, incluso varias veces en el mismo enlace o control.

A partir de la versión 2018.4 y posteriores, NVDA ahora solo dirá cliqueable una vez, por lo que, si experimentas este problema, actualiza tu copia. Debido a que no hay ningún costo asociado con la actualización, NV Access recomienda usar siempre la última versión estable de NVDA.

También puedes desactivar el anunciado del elemento cliqueable completamente yendo a las opciones de  Formateado de documentos (NVDA+control+d), y desmarcando la casilla "cliqueable" en el grupo de elementos.

### La búsqueda no funciona en la web ###

Mientras JAWS está cargado, la pulsación de ctrl+f en Internet Explorer o Firefox abre el cuadro de diálogo Buscar de JAWS, en vez de activar la instrucción de búsqueda nativa del navegador. Esto es para permitirte buscar texto empleando el cursor virtual. La instrucción de búsqueda convencional buscará la siguiente coincidencia del texto introducido, pero no desplazará el cursor virtual a esa ubicación. Esto se debe al modo en que los lectores de pantalla interactúan con las páginas web.

NVDA tiene su propia orden para buscar en el modo exploración, pero no ha sido asociada a ctrl+f, de modo que al pulsar ese atajo de teclado se invoca la instrucción de búsqueda del navegador, por lo que la búsqueda no funcionará como se espera.

Para abrir el cuadro de diálogo buscar de NVDA, pulsa ctrl+NVDA+F. Escribe el texto que deseas encontrar y a continuación pulsa Intro.

### ¿No hay órdenes para ver formularios y encabezados? ###

En JAWS, puedes pulsar JAWS+F5 para listar campos de formulario, JAWS+F6 para listar encabezados y JAWS+F7 para listar enlaces. En NVDA, todo esto se ha combinado en un diálogo de lista de elementos, y se puede acceder a él presionando NVDA+F7.

## Modo formularios ##

Lo equivalente al Modo formularios, en NVDA es Modo foco y se comporta de una forma muy similar a JAWS, incluso cambiando automáticamente entre modos de navegación al desplazarte por una página web. Se reproducirá un sonido para informarte sobre el modo en el que te encuentras.  Si lo deseas, NVDA puede verbalizar el cambio de modo en lugar de usar un sonido.

Los detalles acerca del "modo foco" se explican en la guía del usuario.

## NVDA habla demasiado ##

En ocasiones puede parecerte que NVDA es demasiado prolijo en sus verbalizaciones, particularmente en algunas listas de elementos. Esto sucede porque, en lo que a NVDA respecta, las listas de elementos son tablas. Por defecto NVDA está configurado para indicar los encabezados de cada fila o columna.

Para desactivar esta opción, desmarca la casilla "Anunciar encabezados de fila/columna de tabla" en el cuadro de diálogo "Formateado de documentos" en las opciones de NVDA. Pulsa NVDA+control+d para abrir este cuadro de diálogo de Opciones.

## Diccionarios del Habla ##

NVDA siempre ha incluido una función para editar "Diccionarios del habla", que son similares a los archivos del asistente de diccionarios de JAWS. Hay un grupo de botones de opción en Añadir/editar entrada de diccionario (con la etiqueta Tipo), que determina cómo se tratará el texto del cuadro patrón ((como NVDA se refiere a palabra real):

* En cualquier sitio, que es el comportamiento por defecto.
* Palabra completa, que es cómo JAWS maneja las entradas de diccionario.
* Expresión regular, lo cual es complicado.

También encontrarás una casilla de verificación "sensible a las mayúsculas".

Accede a los Diccionarios del habla con NVDA+n (para abrir el menú NVDA), luego P para Preferencias, luego D para Diccionarios. Hay tres opciones. El diccionario Predeterminado funciona en todas las voces, el diccionario Voz solo funciona para la voz actual y el diccionario Temporal  funciona en todas las voces, pero sólo para la sesión actual.  Al menos que sepas que deseas uno de los otros dos, la mayoría de las veces el "diccionario predeterminado" es el diccionario deseado para editar.

## Scripts ##

Como en JAWS, es posible añadir scripts para mejorar la experiencia en otras aplicaciones, o para proporcionar características disponibles desde cualquier lugar. Estos paquetes de scripts se llaman "complementos de NVDA". Puedes encontrar complementos en el [sitio Web de complementos de la comunidad de NVDA](http://addons.nvda-project.org/).

Estos incluyen unos pocos que emulan características no incorporadas actualmente en NVDA, como una lista de iconos correspondientes a la bandeja del sistema, la función de "virtualizar ventana" o la posibilidad de añadir texto al portapapeles. También están disponibles scripts para aplicaciones populares tales como GoldWave. La guía del usuario contiene información sobre la instalación de complementos, y puedes leer documentación de ayuda que viene con cada complemento para aprender más sobre cómo utilizarlo.

El siguiente enlace lleva a la [Guía de desarrolladores de NVDA (en inglés)](https://www.nvaccess.org/files/nvda/documentation/developerGuide.html) con información sobre cómo crear complementos.

## Acceso Remoto ##

En 2015, Christopher Toth y Tyler Spivey lanzaron un complemento gratuito para permitir a los usuarios de NVDA proporcionar un apoyo a distancia similar al Tamdem de JAWS. Para aprender más sobre el complemento, por favor consulta [la página de inicio de NVDA Remote](http://www.nvdaremote.com).

## Configuración de una aplicación en particular ##

NVDA puede usar perfiles de configuración y es  posible configurar ciertas opciones que se aplicarán al utilizar un programa. Esto se hace creando un perfil de configuración para una aplicación en particular. Para crear un perfil de configuración para una aplicación en particular, abre el cuadro de diálogo Perfiles de Configuración mientras utilizas la aplicación en cuestión. Para abrir el cuadro de diálogo, pulsa NVDA+N para que aparezca el menú NVDA, flecha abajo hasta que oigas Perfiles de Configuración y pulsa Intro, o pulsa NVDA+control+P.

Cuando se abre el  cuadro de diálogo, selecciona Nuevo, y selecciona "Aplicación actual" cuando se te pregunte cuándo utilizar este perfil. Cualquier cambio realizado en la configuración de NVDA (por ejemplo, sintetizador, velocidad de voz o nivel de puntuación) se aplica a este perfil.

### Alterna Verbalizar todo ###

En versiones recientes de JAWS, puedes configurar un sintetizador de voz diferente para que se utilice cuando Verbalizar todo está activo. Puedes hacerlo en NVDA creando un perfil Verbalizar todo en el menú Perfiles de Configuración.

Estos son los pasos.

1. Abre Perfiles de Configuración en el menú principal de NVDA. Pulsa NVDA+n; luego, flecha abajo hacia Perfiles de Configuración.
2. Crea un nuevo perfil tabulando hasta el botón *Nuevo* o pulsa alt+n.
3. Después de introducir el nombre de tu perfil, Tabula hacia los botones de opciones para usar este perfil. Flecha abajo hasta oír "Verbalizar todo". Pulsa *Aceptar*

Necesitas completar el proceso de configuración del sintetizador mientras el perfil Verbalizar todo está activo.
