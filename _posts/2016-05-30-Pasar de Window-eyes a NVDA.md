---
title: Pasar de Window-eyes a NVDA
date: 2016-05-30 00:00:00 Z
layout: post
author: BlindHelp
---

<footer>Lunes, 30 de mayo de 2016</footer>

### Guía Pasar de Window-eyes a NVDA
Traducido Por Rémy Ruíz (BlindHelp). Si deseas, puedes consultar la versión original en inglés              
[Switching from Window Eyes to NVDA.](https://github.com/nvaccess/nvda/wiki/Switching-from-Window-Eyes-to-NVDA)        

# Nota de traducción:

Acerca de    los dos enlaces que están en la sección "Información Adicional"                   

* El primer enlace abre una página en inglés para consultar un tutorial popular para obtener más información acerca de NVDA, desde el sitio de Joseph Lee.                
* El segundo enlace es para suscribirse en la lista de habla inglesa dedicada a NVDA.                

### Pasar de Window-eyes a NVDA

Un tutorial muy corto que te dice lo que necesitas saber para hacer mucho de lo que hiciste antes.          

 Autor: Gene Asner          

## Algunas palabras del autor

En primer lugar, una palabra sobre el uso del tutorial.  Te explico los conceptos en el tutorial, pero mucho de lo que hago es dar las órdenes que son diferentes en NVDA.  Como te explico, mucho de lo que haces no cambiará, pero ciertas cosas requerirán órdenes diferentes.     

 Para utilizar este tutorial de manera efectiva, la práctica de muchas órdenes que te doy podría ser muy útil.  Por ejemplo, cuando te doy las órdenes de revisión de pantalla, deja de leer y practica en este documento esto podría ayudarte a recordar y aprender.  Cuando te describo la Ayuda de Entrada, activala y prueba diferentes teclas y combinaciones de teclas esto puede ser útil.  Encontrarás, por ejemplo, que las órdenes de revisión de pantalla que te doy se anuncian cuando tienes activado el descriptor de tecla y invoca las órdenes.  Eso te ayudará a revisar rápida y eficientemente si te olvidas de alguno de ellos, algo que es mucho más probable que ocurra en la distribución portátil que en la distribución de sobremesa.  Ahora que te he sugerido la maneras de usarlo con eficacia, el tutorial comienza.            
 
## Introducción

Muchas personas están temerosas de pasar a NVDA o cualquier otro lector de pantalla a partir de Window-eyes.  Este tutorial te explicará y te demostrará que tales aprensiones se basan en gran medida en malentendidos.        

Antes de discutir el malentendido que causa la mayor parte de esta aprensión, te hablaré brevemente de la instalación de NVDA y el cambio del sintetizador utilizado y de los parámetros de voz.         
 
## Instalación

NVDA tiene un instalador parlante.  Ejecuta el archivo como lo harías con cualquier archivo de instalación.  Puedes obtener un cuadro de diálogo preguntando si deseas ejecutar el archivo.  Utiliza la orden alt r para iniciar.  Si recibes un mensaje del UAC, responde con alt y.         

Ejecuta Narrator.  A continuación, ejecuta el instalador de NVDA.  Cuando se ejecuta el instalador, habrá una pausa y luego un poco de música se reproducirá.  No mucho después, el instalador parlante se ejecutará.  Descarga Narrator en ese punto.  Vuelve al cuadro de diálogo de instalación.           

Tab a través de las opciones.  Acepta el acuerdo de licencia y, a continuación tab hasta Instalar.  Obtendrás otras opciones, pero Instalar  es el que tu deseas.           

### Acerca de las voces

No dejes de usar NVDA debido a la voz.  Mucha gente no prueba NVDA debido a la voz. Tan pronto como lo configures, te diré cómo cambiar el sintetizador utilizado.                    
 
## Cuadro de diálogo de Bienvenida

Cuando NVDA está instalado y funcionando, un cuadro de diálogo viene con algún texto explicativo y la posibilidad de establecer una o dos opciones.  Aunque sé que mucha gente no le gusta mucho la voz por defecto, vale la pena escuchar el cuadro de diálogo y mirando en las opciones haciendo  Tab a través de ellos.                

Yo te recomendaría marcar la casilla de verificación para usar BloqMayus como una tecla modificadora de NVDA.  Verás por qué lo recomiendo en discusiones posteriores.                  
 
## Cambio de sintetizadores y Opciones de Voz

Después de pasar por el cuadro de diálogo de Bienvenida inicial, es hora de aprender cómo cambiar el sintetizador.  Invoca la orden control insert s.  Utiliza cualquier insert.  A partir de ahora, supongamos que puedes utilizar cualquier  insert a menos que lo indiques de manera diferente.  Se abrirá un cuadro de diálogo para la selección de un sintetizador.            

Verás una lista de diferentes sintetizadores posiblemente disponibles.  Elije SAPI 5.  Sé que todo el mundo tiene al menos una voz SAPI 5 en su máquina.  Flecha Arriba o Flecha Abajo a través de la lista y detente en SAPI cinco.  Pulsas  Intro.  Ahora escucharás otra voz.  Puede ser la misma voz que escuchas en Narrator.           

Ahora invoca la orden control insert v.  Ahora te encuentras en el cuadro de diálogo de selección y ajuste de voz.  Flecha Arriba o Flecha Abajo para ver qué voces están disponibles.  Detente en  la que quieras.  Ahora tab a través del cuadro de diálogo y cambia las opciones para la voz.  Una vez que encuentres la voz que deseas y haciendo Tab a través y configuras lo que quieras como la velocidad y la puntuación, pulsa en el botón Aceptar.     
 
## Acerca de las órdenes

Ahora, continuemos con lo que hablé al comienzo de este tutorial.  El malentendido que hace que el cambio a NVDA a partir de Window-eyes o a partir de cualquier otro lector de pantalla parezca desalentador es que el usuario no se da cuenta de que la mayoría de las órdenes él/ella utiliza son órdenes de Windows y órdenes de programa y no van a cambiar.                       

Considera los siguientes ejemplos:           

* Abriendo los menús fue y sigue siendo alt.  Es una orden de Windows para abrir los menús en los programas.  Es lo mismo no importa qué lector de pantalla tu usas.     
* Control o para abrir no cambia.       
* Utilizando las teclas de flechas para moverse en un documento no cambia.       
* Tabulación a través de cuadros de diálogo no cambia.  Tampoco cómo te muevas en una lista o en una vista en árbol o al trabajar con un cuadro combinado, y la lista continúa.      

Órdenes de teclado  del lector de pantalla, muchos de los cuales pueden cambiar, como leer la barra de título, proporcionar acceso a información que no puedes obtener o que no puedes obtener cómodamente mediante el uso de Windows o órdenes de teclado del programa.                    

Por ejemplo, leer la barra de título.  En Window-eyes, la orden de teclado  es control shift t.  En NVDA, es insert t.  La barra de título es algo que una persona vidente mira.  No se puede mover hacia él con el cursor del pc o el cursor  de la aplicación, como quieras llamarlo, porque no hay necesidad.  Una persona vidente puede simplemente verlo.  Entonces, el lector de pantalla tiene unan orden de teclado, leer la barra de título.  Esa orden de teclado no es una orden de teclado de Windows ni una orden de teclado del programa.                   

Aquí están las órdenes de teclado del lector de pantalla que necesitará saber para permitirte hacer mucho de lo que hiciste antes con Window-Eyes:            

* Para salir de NVDA, insert q luego  intro.         
* Leer barra de título, insert t.     
* Hora, insert f12.      
* Anunciar información de formato, insert f.               
* Leer la ventana actual, insert b.  En Window-eyes la orden de teclado es control shift w.       
* Leer hasta el final, insert Flecha Abajo.  Utiliza la Flecha Abajo en el teclado principal (Sobremesa).  En la distribución de teclado portátil, leer hasta el final es tecla NVDA a.        
* Detener voz con control, como con los lectores de pantalla en general.       
 
## Revisión de Pantalla

Estoy por discutir las órdenes de revisión de pantalla.  Los que te permiten revisar la pantalla sin cambiar la posición del cursor al editar un documento, o cambiando donde estás en un cuadro de diálogo o en cualquier otro lugar.  Pero primero, te señalaré que   las Órdenes tales como flecha izquierda, flecha derecha, control inicio, control fin, control flecha izquierda, y control flecha derecha son Órdenes de movimiento de Windows para moverse en cualquier campo de edición estándar, incluidos los campos de edición del procesador de textos.  Ninguno de ellos cambiará.                             
 
### Órdenes de Revisión de Pantalla           

Ten en cuenta el patrón mientras te doy estas órdenes:          

* Leer línea anterior, 7 teclado numérico.       
* Leer línea actual , 8 teclado numérico.         
* Leer línea siguiente, 9 teclado numérico.         

Te mueves en la revisión de pantalla a la línea anterior o siguiente cuando invocas esas  órdenes.  Puedes seguir moviendo y leyendo hasta llegar a la parte superior o inferior de la pantalla.           

* Leer palabra anterior, 4 teclado numérico.            
* Leer palabra actual, 5 teclado numérico.             
* Leer siguiente palabra, 6 teclado numérico.               
* Leer carácter anterior, 1 teclado numérico.               
* Leer carácter actual, 2 teclado numérico.               
* Leer siguiente carácter, 3 teclado numérico.                     

Ten en cuenta el patrón:            

* Leer actual es la tecla en el medio de cada una de estas filas.                
* Mover y leer anterior es la tecla a la izquierda.                 
* Mover y leer siguiente es la tecla a la derecha.        

Cuanto menor sea el número, menor será la unidad de movimiento.  1 2 y 3 mover por carácter.      
4 5 y 6 mover por palabra, etc.                

Ahora, aquí están las órdenes de revisión en la distribución portátil:                   

* Leer línea actual, NVDA shift punto.          
* Mover y leer línea siguiente, NVDA flecha abajo.               
* Mover y leer línea anterior, NVDA flecha arriba.               
* Leer palabra actual, NVDA control punto.         
* Leer palabra anterior, NVDA control flecha izquierda.           
* Leer siguiente palabra, NVDA control  flecha derecha.              
* Anunciar carácter actual, NVDA punto.                  
* Mover y leer carácter anterior, NVDA flecha izquierda.                         
* Mover y leer siguiente carácter, NVDA flecha derecha.                  

Después de un poco más de discusión, te diré cómo cambiar la distribución de teclado para portátil.                    

Volviendo a las teclas de revisión en la distribución portátil, hay una especie de patrones en la distribución portátil, pero no el tipo de patrón uniforme como en la distribución de sobremesa. Si tuviera una computadora portátil sin un teclado numérico, compraría un teclado numérico USB y no juguetearía con la distribución portátil.  Pero puedes decidir eso por ti mismo.  Pero aparte de las teclas predecibles, como ese punto que actualmente está siendo utilizado, y que las flechas izquierda y derecha están siendo utilizados con las modificadoras, no  puedes generalizar más.  Tales patrones no se siguen en cada elemento anterior y siguiente.  En uno de los elementos anteriores y siguientes, la flecha arriba y abajo están siendo utilizados.  

## Más órdenes de revisión y Modos de Revisión

Aquí hay dos órdenes más importantes:                 

* Saltar a la parte superior de la ventana, shift 7 teclado numérico. Orden distribución portátil: control tecla NVDA inicio.         
* Saltar al final de la ventana, shift 9 teclado numérico. Orden distribución portátil: Control Tecla NVDA fin.                     
 
He dicho la parte superior e inferior  de la ventana pero eso es simplista.  Esto depende del tipo de modo de revisión que estás utilizando.  No voy a entrar en eso hasta cierto punto en este breve tutorial.                     
 
### Una breve introducción a los modos de revisión.

Si estás revisando material en un procesador de textos, utiliza las órdenes de revisión que te he proporcionado. Si estás en un cuadro de diálogo u otras estructuras, para ver qué hay en la pantalla, cambia al modo de revisión de pantalla. Para hacerlo, utiliza  la orden insert teclado numérico 7 teclado numérico en la distribución sobremesa.  En la distribución portátil, la orden es tecla NVDA retroceso página.  Invoca la orden  y repítelo si es necesario hasta que escuches Revisión de pantalla. Entonces puedes utilizar las órdenes  de revisión como 7 teclado numérico, 8, 9, etc. para revisar lo que está en la pantalla.                   

Después de que hayas terminado de trabajar en la revisión de pantalla, es muy importante volver a la revisión de objeto.  Invoca la orden insert teclado numérico 1 teclado numérico en la distribución sobremesa.  La orden en la distribución portátil es Tecla NVDA avance página.  Repite la orden  si es necesario hasta que escuches Revisión de objetos.  Si no haces esto, a menudo escucharás información incorrecta sobre dónde estás cuando haces varias cosas en NVDA.                          

## Cambiando la distribución de teclado

Ahora explicaré cómo cambiar la distribución a partir de la sobremesa hacia la distribución portátil 
y discuto que hace que el BloqMayus para ser utilizado como una tecla NVDA.  Si agregas BloqMayus, todavía puedes utilizar insert; hay ocasiones en que el BloqMayus es muy conveniente.                 
 
Para abrir las Opciones de Teclado, invoca  la orden control insert k. Ahora estás en una lista  de distribuciones. La distribución de sobremesa es la  que  esta de forma predeterminada y es la primera en la lista. Si deseas cambiar a la distribución portátil, flecha abajo una vez y luego Tab y activa el botón Aceptar.          

A medida que hagas Tab, notarás las casillas de verificación sobre qué   teclas sirven como tecla NVDA. BloqMayus no está marcada.  Marcala con la barra espaciadora. Puedes permanecer en la  distribución de sobremesa y hacer todavía Tab y mira estas casillas de verificación.            

Yo utilizo BloqMayus como una tecla  de NVDA a menudo y utilizo la distribución de sobremesa.  Me resulta mucho más cómodo de usarlo para la orden Leer hasta el final.  Yo mantengo  el bloqueo mayúsculas y pulsos   flecha abajo.  Es decir, para mí, es mucho más conveniente que  usar insert flecha abajo, independientemente  de   cual insert yo uso.                   

Si deseas alternar entre activar y desactivar bloqueo mayúsculas al teclear, puedes pulsar la tecla dos veces en sucesión rápida.  Si lo pulsas una vez y lo mantienes pulsado, sirve como una tecla NVDA.  Si lo pulsas dos veces en sucesión rápida, alternará bloqueo mayúsculas entre activado y desactivado.                    
 
## Órdenes del ratón y modos de revisión

Para hacer clic con el botón izquierdo del ratón, enruta el ratón a la posición de revisión con la orden insert teclado numérico dividir teclado numérico.  Esa es la misma orden que tu haces clic con el botón izquierdo en Window-eyes.  Si deseas hacer clic con el botón derecho, enruta el ratón con la misma orden (insert teclado numérico dividir teclado numérico), luego  usa multiplicar  teclado numérico, la tecla inmediatamente  a la derecha de dividir teclado numérico.  En otras palabras, tu haces clic derecho con la misma tecla que usas en Window-eyes.                     

La revisión de pantalla, aunque las órdenes son diferentes, es similar en concepto al utilizar el puntero del ratón en Window-eyes.  La Navegación de objetos es diferente de cualquier modo de revisión en Window-eyes.  No voy a enseñarte su uso aquí, pero encontrarás una discusión sobre esto en un tutorial.  Yo daré una dirección  más adelante en este tutorial.  Dependiendo de cómo usas  tu computadora, puede que te resulte muy útil.      
 
Eso es todo lo que enseñaré en este breve tutorial sobre la revisión de pantalla y el ratón.  Como dije, su propósito es permitirte hacer mucho de lo que haces con Window-eyes rápida y fácilmente.  Pero te contaré algunas cosas más.                 
 
## Navegación por Internet:

Cuando te encuentras en una página Web, las órdenes de navegación rápida son casi idénticas, ya sea que estés utilizando NVDA o Window-eyes:                   

* Mover por encabezados es h.            
* Saltarse bloques de enlaces es n.              
* Mover al siguiente botón es b.            
* El siguiente cuadro combinado es c.               
* La siguiente casilla de verificación es x.               

## Modo de Ayuda de Entrada

NVDA tiene un Modo de Ayuda de Entrada que es similar a lo que está en Window-eyes.  Insert y 1 en el teclado principal lo activa. Cuando pulsas una tecla o combinación de teclas que podrían ser una orden, escucharás cuáles son las teclas y qué, si hay alguna orden  que se ejecutan.  Esto varía dependiendo de dónde te encuentres.                  

Cuando estás en un navegador que soporta  el Modo Exploración, tecleando muchas letras individuales te dará información sobre lo que hacen las teclas en el Modo Exploración.  Ya di gran parte de esa información arriba, pero es posible que deseas pulsar muchas teclas usando el Modo de Ayuda de Entrada en un navegador. Para desactivar el Modo de Ayuda de Entrada utiliza la misma orden que usastes para activarla, insert 1.                
 
## Información Adicional

Para obtener más información acerca de NVDA, un tutorial popular está disponible en:

[http://www.josephsl.net/tutorials](http://www.josephsl.net/tutorials)                              

En esa página, verás enlaces para descargar diferentes secciones del tutorial que tratan sobre diferentes temas.  También puedes descargar todo el tutorial como un archivo zip.
 
También hay una lista de correo electrónico para usuarios de NVDA.  Para Suscríbirté, envía un mensaje en blanco a esta 
dirección:

[nvda+subscribe@nvda.groups.io](mailto:nvda+subscribe@nvda.groups.io)            
 
Espero que este tutorial haya eliminado gran parte de tu aprensión sobre el cambio a NVDA.  Ahora, como desees o necesites, puedes consultar el tutorial al que di un enlace. NVDA es un potente lector de pantalla y satisfará una gran cantidad de necesidades de los usuarios así como  los de JAWS o los de Window-eyes.  Espero que este breve tutorial te brinde una buena base para construir la confianza de que la transición debería ser mucho más fácil de lo que pensaste y que te ayudará a que sea mucho más agradable.

Fin
