---
title: Primeras impresiones sobre Windows 11 (Joseph Lee)
permalink: "/win11/"
layout: post
commentsId: 17
author: Noelia
---

<footer>Sábado, 3 de julio de 2021</footer>

Joseph Lee, creador de la lista internacional de complementos de NVDA, es autor de complementos como Windows App Essentials, llamado originalmente Windows 10 App Essentials, pues su propósito era mejorar el funcionamiento de NVDA con Windows 10. En mi opinión, en este y otros aportes Joseph demuestra gran conocimiento sobre Windows.

El pasado 1 de julio, en el blog In-Process, de NV Access, comentaron que esta semana Microsoft anunció la próxima versión de Windows, Windows 11, aún en fase de pruebas, y que Joseph comentó algunas impresiones iniciales en un [hilo sobre Windows 11](https://win10.groups.io/g/win10/topic/windows_11_thread_first/83857955?p=,,,20,0,0,0::recentpostdate%2Fsticky,,,20,2,0,83857955), en un foro sobre Windows con lectores de pantalla.

Me pareció interesante y le pregunté si podía compartir sus impresiones en esta web. Aquí las tenemos.

### Impresiones de Joseph Lee sobre Windows 11

#### Nota

Joseph me pide que, en este post, incluya las siguientes observaciones:

- La información sobre Windows 11 está sujeta a cambios sin previo aviso.
- Es posible que él tenga que editar uno de los mensajes que envió al foro para dar información correcta respecto al Centro de notificaciones de Windows 11 (<kbd>Windows+N</kbd>).

#### Mensaje de Joseph Lee, 29 de junio de 2021

Hola a todo el mundo:

Como la gente que está probando versiones de desarrollo de Windows ("insiders") ha empezado a informar sobre lo que se ha encontrado, estoy dedicando este hilo a que todos vosotros podáis debatir las primeras impresiones respecto a la versión de prueba (compilación 22000). Hasta el momento:

- Versión interna: aún Windows NT 10.0.
- Versión: 21H2.

Compatibilidad con lectores de pantalla: todos los lectores de la etapa de Windows 10 están funcionando, incluidos Narrator, JAWS, NVDA y otros, según informan insiders (personas que prueban versiones de desarrollo de Windows) y proveedores. Observa que JAWS aún no admite el panel de emojis introducido en Windows 11, y Joseph está optimizando el funcionamiento de NVDA para afrontar problemas relacionados con la interfaz de usuario (UI).

##### Shell (escritorio, menú Inicio, etc.):

- En el menú Inicio, para abrir Todas las aplicaciones hay que pulsar la tecla <kbd>tab</kbd< hasta que el foco se sitúe en el botón "Todas las aplicaciones" y luego activarlo. A continuación puedes pulsar la primera letra del nombre de una aplicación para desplazarte a la primera aplicación que empiece con la letra correspondiente.
- Widgets (<kbd>Windows+W</kbd>): es similar a un documento web. Si has encontrado noticias e información de interés, será muy parecido.
- Centro de notificaciones (<kbd>Windows+N</kbd>) y Centro de control (<kbd>Windows+a</kbd>). Antes Centro de actividades, se divide en notificaciones y opciones de configuración rápidas.
- Centro de control (<kbd>Windows+A</kbd>): aquí tenemos las anteriores opciones de configuración del Centro de actividades, junto a un calendario en vista mensual.
- Configuración (<kbd>Windows+i</kbd>): aquí encontramos grandes cambios, como las categorías principales (Sistema, Actualización de Windows, etc.), siempre visible. Si abres una categoría, aparecerá una lista de navegación a modo de "migas de pan" y podrás desplazarte a la sección contenedora. Usa las flechas para moverte entre los elementos y pulsa Enter para seleccionar. Observa que Narrator y NVDA no leen correctamente las etiquetas de las migas de pan (JAWS sí lo hace). Este problema se ha solucionado mediante el complemento Windows App Essentials, disponible para NVDA.
- Configuración/Actualización de Windows/Historial de actualizaciones: en windows 10 pulsabas la tecla <kbd>tab</kbd> para revisar el historial de actualizaciones. En Windows 11 las actualizaciones están organizadas en listas separadas (actualizaciones de características, actualizaciones de calidad, controladores, etc.), y puedes moverte con las flechas para revisar el historial de actualizaciones en cada categoría.

##### Fallos que hay que tener en cuenta:

- Menú rápido (<kbd>Windows+X</kbd>): hay disponibles "aceleradores" de teclado para cada elemento, pero no puedes usar atajos de teclado para activar los elementos del menú. Alguien (no Joseph, según aclara en su mensaje) ha creado una [incidencia sobre el menú rápido](https://aka.ms/AAd1n8c) para informar sobre este error.
- Algunos botones, como los del menú Inicio y Widgets, son presentados como conmutadores por algunos lectores de pantalla. Esto se ha corregido mediante el complemento Windows App Essentials para NVDA.
- En algunos lugares del Registro de Windows aún se refleja "Windows 10".

Los comentarios e informes de "insiders" (participantes en pruebas sobre Windows 11) son bienvenidos (mantener el hilo activo y, por favor, debatir de forma civilizada y comprensible).

Saludos,

Joseph

### Enlaces de interés

- [Actualiza a la nueva versión del SO Windows 11 | Microsoft](https://www.microsoft.com/es-es/windows/windows-11)
- [Complemento Windows App Essentials en la web internacional](https://addons.nvda-project.org/addons/wintenApps)
- [Solicitud sobre Windows 10 App Essentials 21.06.1](https://github.com/nvaccess/addonFiles/pull/113)
- [Foro sobre Windows con lectores de pantalla](https://win10.groups.io/g/win10) (en inglés)
- [In-Process 1 de julio de 2021](https://www.nvaccess.org/post/in-process-1st-july-2021/) (en inglés)


