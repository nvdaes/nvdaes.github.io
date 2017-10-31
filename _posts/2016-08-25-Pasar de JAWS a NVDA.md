---
title: Pasar de JAWS a NVDA
date: 2016-08-25 00:00:00 Z
layout: post
author: BlindHelp
---

<footer>Jueves, 25 de agosto de 2016</footer>

### Guía Pasar de JAWS a NVDA ###
Traducido Por Noelia Ruíz Martínez y Rémy Ruíz (BlindHelp). Si deseas, puedes consultar la versión original en inglés              
[Switching From JAWS To NVDA.](http://community.nvda-project.org/wiki/SwitchingFromJawsToNVDA#SwitchingFromJAWSToNVDA)        

# Pasar de JAWS a NVDA #

# Introducción. #
El propósito de esta guía es ayudar a la persona usuaria de JAWS (Job Access With Speech), una solución comercial de lectura de pantalla proporcionada por Freedom Scientific, para pasar con facilidad al lector de pantalla de código abierto NVDA (Non Visual Desktop Access). La guía presupone conocimiento previo de JAWS y que eres capaz de usarlo eficientemente.          

No se propone reemplazar a la guía del usuario incorporada, sino más bien que NVDA no intimide tanto.                

# Fortalezas y debilidades. #
La intención de esta guía no es ser una comparación entre JAWS y NVDA, pero es necesario mencionar algunas cosas que NVDA no admite actualmente o que necesitan mejoras, para que puedas efectuar una elección informada.               

El apoyo para funciones avanzadas de la suite ofimática Microsoft es una adición relativamente reciente, por lo que podrías no encontrar una experiencia tan satisfactoria como en JAWS. No obstante, decir esto no implica menospreciar el trabajo que los programadores están realizando en este ámbito, que se halla en constante mejora.             

Dicho esto, en la mayoría de situaciones cotidianas, encontrarás que NVDA funciona tan bien como JAWS, cuando no mejor en algunos casos.        

# Un rápido apunte sobre el teclado portátil de NVDA. #
Seleccionar el teclado portátil no establece automáticamente la tecla Bloqueo de mayúsculas como tecla modificadora NVDA. No obstante, se proporciona una casilla de verificación que sigue al cuadro combinado del tipo de teclado, para conmutar esta opción.              

# Nota acerca de la tecla Insert. #
Como sabrás, tanto JAWS como NVDA pueden utilizar la tecla insert como teclas modificadoras. Ambos lectores de pantalla lo tratan de manera ligeramente diferente, lo que podría llevar a cierta confusión si estás acostumbrado a uno u otro.                    

Con JAWS cargado, la tecla insert es únicamente para su uso. Esto significa que, para utilizar la función original que se le ha asignado (como cambiar entre los modos insertar y sobrescribir en un editor de texto o procesador de texto), primero debes activar la tecla de JAWS a través de órdenes.            
NVDA por otra parte te permite llevar a cabo la función original de la tecla insert presionándola dos veces rápidamente. Tenga esto en cuenta la próxima vez que estés editando texto mientras usas NVDA y te encuentras borrando lo que ya escribistés escribiendo sobre él.                      

# Alternativas  para eSpeak #
eSpeak NG es el sintetizador de voz que se incluye con NVDA. Al igual que NVDA en sí, también es libre y de código abierto, que es una de las razones de su inclusión. Otro es el número de idiomas que puede hablar.               

Sin embargo, tu  puedes encontrar que, por la razón que sea, no es para ti. Si este es el caso, estarás encantado de saber que hay alternativas, que se discutirán en las siguientes secciones.                  

# Eloquence. #
Una de las preguntas más frecuentes se refiere al uso del sintetizador Eloquence con NVDA. En pocas palabras, en la actualidad es ilegal hacerlo. A continuación se presenta un enlace a un artículo de blog, donde los desarrolladores de NVDAexplican la situación en su estado actual.                 
[http://community.nvda-project.org/blog/NVDAAndEloquenceSituation.](http://community.nvda-project.org/blog/NVDAAndEloquenceSituation)        

Sin embargo, Code Factory ha lanzado una versión de eloquence como un complemento NVDA que puede adquirirse en:                
[http://codefactoryglobal.com/app-store/voices-for-nvda/](http://codefactoryglobal.com/app-store/voices-for-nvda/)            

Una licencia para usar el sintetizador Vocalizer de Nuance también está incluida en el precio.           

Consulte la sección titulada "Scripts" para obtener información sobre los complementos de NVDA.            

# Voces de Windows OneCore #
Si estás en Windows 10 y estás ejecutando NVDA versión 2017.3 o posterior, tienes otra alternativa en forma de voces de Windows OneCore. Estas voces son desarrolladas por Microsoft y se incluyen de forma gratuita con Windows 10.               

Hay bastantes disponibles en varios idiomas y dialectos; algunos de los cuales ya estarán instalados. Sin embargo, éstos variarán dependiendo de los paquetes de idioma que tenga en tu sistema. La única forma de obtener nuevas voces en la actualidad es instalar otros paquetes de idioma en Configuración. Una vez hecho esto, puedes descargar las voces para ese idioma. En ese momento, puedes eliminar el paquete de idioma. Esto no afectará las voces que acabas de instalar.                 
esperemos que esto se haga más simple en el futuro.                

Si detectas que las voces de Windows OneCore no hablan lo suficientemente rápido, incluso cuando la velocidad de voz de NVDA es máxima, ajusta también la velocidad de voz en las configuraciones de Windows.             

Sus ligeras complicaciones a un lado, estas voces ofrecen una alternativa viable a eSpeak NG ya que son sensibles y tienen sonidos bastante naturales.               

# Aún más voces #
Si todavía no encuentras la voz perfecta para ti, esta página enumera varios otros sintetizadores de voz (tanto gratuitos como pagados, puedes usarlos en su lugar).                
[http://community.nvda-project.org/wiki/ExtraVoices](http://community.nvda-project.org/wiki/ExtraVoices)                   

# Terminología. #
La mayor parte del tiempo, JAWS y NVDA usan gran cantidad de términos comunes para describir controles, por ejemplo botones de opción, cuadros combinados, casillas de verificación, etc.               

Una diferencia notable es que NVDA distingue entre cuadros de edición simples y multilínea, y también te indicará si un campo está "protegido" (todo lo que escribas será reemplazado por asteriscos). También te advertirá si hay texto seleccionado en un campo cuando te sitúes sobre él con el tabulador. Si es así, al escribir se reemplazará el texto resaltado.          

NVDA llama "voces" a los distintos idiomas que un sintetizador puede hablar, y "variantes" a las diferentes voces admitidas por tu sintetizador.                

# Cursores. #
NVDA tiene varios cursores para ayudar en la navegación de Windows y aplicaciones, similares a JAWS. La terminología es ligeramente distinta, según se describe a continuación.                      

El cursor del PC, en la documentación de NVDA, es mencionado como "el foco del sistema" y "el cursor del sistema".                  

Lo equivalente al cursor de JAWS es una combinación de navegación de objetos, el cursor de revisión, revisión de documentos y revisión de pantalla. La función de "revisión de pantalla" es quizá la más similar al cursor de JAWS, pero es conveniente familiarizarse con los tres modos de revisión. Encontrarás instrucciones para esto, ampliadas y más fáciles de entender, en la guía del usuario.                      

A diferencia de JAWS, no hay que cambiar entre los equivalentes al cursor del PC y de JAWS, pues el teclado numérico está reservado exclusivamente para trabajar con las funciones correspondientes al cursor de JAWS.                  

Vale la pena señalar que cuando se utiliza la navegación de objetos o el cursor de revisión, el ratón no se mueve en sincronía. Tienes que pulsar una orden para mover el ratón a la ubicación del cursor de revisión, que es similar a cómo funciona el "cursor invisible" de JAWS. También hay órdenes para simular clic o bloquear ambos botones del ratón.                 

Sin embargo, si simplemente deseas activar el objeto actual en el que estás enfocado cuando utilizas la navegación de objetos, hay una orden para hacer esto sin tener que mover el cursor del ratón a él primero.                 

# Cursor táctil #
En JAWS 15 o posterior, puedes utilizar las teclas del teclado numérico para navegar por las aplicaciones utilizando una estructura parecida a un árbol, similar a la forma en que los usuarios de los lectores de pantallas de teléfonos inteligentes (smartphone) como VoiceOver navegarían por pantallas táctiles. En NVDA, las órdenes de navegación de objetos y de modo objeto táctil se pueden utilizar con este fin               

# Cursor virtual. #
El cursor virtual es conocido como "modo exploración". En gran parte funciona como en JAWS, ofreciéndote acceso a teclas rápidas de navegación, o en el lenguaje de NVDA, "navegación con una sola letra".               

A continuación se enumeran algunos problemas comunes que puedes encontrar al navegar por la web con NVDA por primera vez y cómo solucionarlos.                    

# ¿Por qué está todo en una línea? #
Por si no lo has advertido, JAWS tiene dos modos de mostrar páginas web u otros documentos usando el cursor virtual: Diseño simple y diseño de pantalla. El diseño simple se establece por defecto, y muestra el contenido de una forma lineal -colocando cada enlace o control en su propia línea. El diseño de pantalla distribuye el contenido de manera semejante a cómo aparece en pantalla.               

La opción por defecto en NVDA es "Diseño de pantalla", pero puedes cambiar fácilmente a su versión de diseño simple pulsando NVDA+v mientras estés en modo exploración. Esto desactivará el "diseño de pantalla". Asegúrate de guardar tu configuración con NVDA+control+c después de hacer este cambio.                    

# Sigue diciendo "Se puede hacer clic, se puede hacer clic..." #
Durante la lectura de páginas web, podrías notar que NVDA dice "se puede hacer clic", a veces con demasiada frecuencia, incluso varias veces en el mismo enlace o control.                 

No obstante, esto puede subsanarse fácilmente a partir de la versión 2014.1 o posterior. Ve al cuadro de diálogo Formateado de documentos, desmarca la casilla "Anunciar se puede hacer clic" y pulsa Aceptar. Recuerda guardar tu configuración.                  

# La búsqueda no funciona en la web. #
Mientras JAWS está cargado, la pulsación de ctrl+f en Internet Explorer o Firefox abre el cuadro de diálogo Buscar de JAWS, en vez de activar la instrucción de búsqueda nativa del navegador. Esto es para permitirte buscar texto empleando el cursor virtual. La instrucción de búsqueda convencional buscará la siguiente coincidencia del texto introducido, pero no desplazará el cursor virtual a esa ubicación. Esto se debe a cómo los lectores de pantalla interaccionan con las páginas web.                 

NVDA tiene su propia orden para buscar en el modo exploración, pero no ha sido asociada a ctrl+f, de modo que al pulsar ese atajo de teclado se invoca la instrucción de búsqueda del navegador, por lo que la búsqueda no funcionará como se espera.                  

Para abrir el cuadro de diálogo buscar de NVDA, pulsa ctrl+NVDA+F. Escribe el texto que deseas encontrar y a continuación pulsa Intro.              

# ¿No hay órdenes para ver formularios y encabezados? #
En JAWS, puedes pulsar JAWS+F5 para listar formularios, JAWS+F6 para listar encabezados y JAWS+F7 para listar enlaces. En NVDA, los dos últimos se han combinado en un diálogo de lista de elementos, y se puede acceder a él presionando NVDA+F7.                  

# Modo formularios. #
Lo equivalente al Modo formularios, en NVDA, es Modo foco y se comporta de una forma muy similar a JAWS, incluso cambiando automáticamente entre modos de navegación al desplazarte por una página web. Se reproducirá un sonido para informarte sobre el modo en el que te encuentras.                        

Los detalles acerca del "modo foco" se explican en la guía del usuario.                        

# NVDA habla demasiado. #
En ocasiones puede parecerte que NVDA es demasiado prolijo en sus verbalizaciones, particularmente en algunas listas de elementos. Esto sucede porque, en lo que a NVDA respecta, las listas de elementos son tablas. Por defecto NVDA está configurado para indicar los encabezados de cada fila o columna.                  

Para desactivar esta opción, desmarca la casilla "Anunciar encabezados de fila/columna de tabla" en el cuadro de diálogo "Formateado de documentos".                     

# Resolver comportamiento inesperado en diccionarios del habla. #
NVDA siempre ha incluido una función para editar diccionarios del habla, que son similares a los archivos del asistente de diccionarios de JAWS.                
Sin embargo, hasta hace poco, el resultado de añadir una palabra podía no ser lo que habías esperado. Si querías cambiar la pronunciación de una palabra, tal como "mono", y la añadías a un diccionario, cualquier palabra que comenzase o incluyese la palabra mono sería afectada. En lo que respecta a JAWS, solo se afectaría al texto introducido en el campo "Palabra real", a menos que añadieses un asterisco (*). Así, siguiendo con mi ejemplo, mono sería considerado como parte de una palabra.                   

Existía una forma de solventar esto, pero conllevaba el uso de expresiones regulares, que no resultan obvias en absoluto para el usuario medio. Sin embargo, a partir de 2014.4 o posterior, encontrarás un grupo de botones de opción en Añadir/editar entrada de diccionario (con la etiqueta Tipo), que determina cómo se tratará el texto del cuadro patrón (como NVDA se refiere a palabra real).                 

* En cualquier sitio, que es el comportamiento por defecto.         
* Palabra completa, que es cómo JAWS maneja las entradas de diccionario.       
* Expresión regular, lo cual es complicado.               

También encontrarás una casilla de verificación "sensible a las mayúsculas".                   

Si antes te parecían frustrantes los diccionarios del habla de NVDA, asegúrate de volver a echarles un vistazo.                     

# Scripts #
Como en JAWS, es posible añadir scripts para mejorar la experiencia en otras aplicaciones, o para proporcionar características disponibles desde cualquier lugar. Estos paquetes de scripts se llaman "complementos de NVDA". Puedes encontrar varios complementos aquí:                     
[http://addons.nvda-project.org/.]([http://addons.nvda-project.org/)                        

Estos incluyen unos pocos que emulan características no incorporadas actualmente en NVDA, como una lista de iconos correspondientes a la bandeja del sistema, la función de "virtualizar ventana" o la posibilidad de agregar texto al portapapeles. También están disponibles scripts para aplicaciones populares, tales como GoldWave. La guía del usuario contiene información sobre la instalación de complementos, y puedes leer documentación de ayuda que viene con cada complemento para aprender más sobre cómo utilizarlo.               

El siguiente enlace lleva a la guía de desarrolladores, con información sobre cómo crear complementos:                
[http://community.nvda-project.org/documentation/developerGuide.html](http://community.nvda-project.org/documentation/developerGuide.html)         

# Acceso Remoto #
En 2015, Christopher Toth y Tyler Spivey lanzaron un complemento gratuito para permitir a los usuarios de NVDA proporcionar un apoyo a distancia, similar al Tamdem de JAWS. Para aprender más sobre el complemento, por favor consulta:                       
[http://www.nvdaremote.com.](http://www.nvdaremote.com)                  

# Configuración de una aplicación en particular #
Desde hace poco, las configuraciones de NVDA eran globales (aplicados en todas partes). A partir   de NVDA 2013.3, es  posible de configurar ciertas opciones que se aplicarán al utilizar un programa. Esto se hace creando un perfil de configuración para una aplicación en particular. Para crear un perfil de configuración para una aplicación en particular, abre el cuadro de diálogo Perfiles de Configuración mientras utilizas la aplicación en cuestión. Para abrir el cuadro de diálogo, pulsa NVDA, N, para que aparezca el menú NVDA. Flecha abajo hasta que oigas Perfiles de Configuración.         

Cuando se abre el  cuadro de diálogo, selecciona Nuevo, y selecciona "Aplicación actual" cuando se te pregunta cuándo utilizar este perfil.                        

# Alterna Verbalizar todo #
En versiones recientes de JAWS, puedes configurar un sintetizador de voz diferente para que se utilice cuando Verbalizar todo  está activo. Puedes hacerlo en NVDA creando un perfil Verbalizar todo en el menú Perfiles de Configuración.                    

Estos son los pasos.                  

1. Abrir Perfiles de Configuración en el menú principal de NVDA. Pulsa NVDA, N, luego flecha abajo hacia Perfiles de Configuración.                
2. Crear un nuevo perfil haciendo tabulación hacia el botón *Nuevo* o pulsa alt, N.               
3. Después de introducir el nombre de tu perfil, Tab hacia los botones de opciones para usar este perfil. Flecha abajo hasta oír Verbalizar todo. Pulsando en *Aceptar* 

mientras que este perfil está activo, necesitas completar el proceso durante la configuración del sintetizador mientras que el perfil Verbalizar todo está activo.
