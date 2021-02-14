---
title: Consejos para publicar en esta web
permalink: "/publicar/"
layout: post
commentsId: 11
author: Noelia
---

<footer>Domingo, 14 de febrero de 2021</footer>

Celebramos el [día del amor por el software libre](https://fsfe.org/activities/ilovefs/) 2021 ((#ilovefs), ) con un post para agradecer el trabajo de quienes quieren publicar información útil en esta web, como comentamos en este [hilo sobre el tutorial de WhatsApp](https://nvdaes.groups.io/g/lista/topic/80458647).

### Git y GitHub

Aparte de enviar información a la lista o en privado y pedir su publicación, se puede publicar directamente desde una cuenta de [GitHub](https://github.com/).

Para ello:

#### Instalar Git ####

Con NVDA, recomiendo utilizar git desde la línea de comandos de windows (cmd).

Aquí hay [Ayuda para descargar, instalar y configurar Git](https://docs.github.com/es/github/getting-started-with-github/set-up-git).

#### Clonar el repositorio de la web ####

Clonar un repositorio significa descargar un conjunto de archivos con Git para trabajar cómodamente desde el PC o un dispositivo local.

Antes de clonar repositorios, puede ser útil crear una carpeta para almacenarlos en un lugar conocido. Mi carpeta de repositorios, por ejemplo, se llama "repos".

Para clonar el repositorio de esta web:

1. Vamos al símbolo del sistema: `Windos+r`, `cmd`
1. Nos situamos en la carpeta de repositorios: `cd c:\repos`
1. Desde el símbolo del sistema escribimos: `git clone https://github.com/nvdaes/nvdaes.github.io`

NVDA irá informando sobre el progreso de la descarga.

Para actualizar el repositorio local descargando solo los últimos cambios publicados por otras personas, podemos escribir: `git pull`

#### Crear un archivo de perfil ####

Al final de los posts aparece un enlace con el nombre de la persona que los publica para acceder a su perfil en esta web. Como ejemplo, puedes abrir mi perfil activando el enlace de mi nombre al final de este post.

Los perfiles son archivos con extensión .md situados en la raíz del repositorio.

Una vez clonado, ve a la carpeta nvdaes.github.io, dentro del directorio de repositorios, y busca ejemplos de archivos de perfil como el llamado `noelia.md`.

Los archivos .md pueden editarse con programas sencillos como el bloc de notas o [Notepad++](https://notepad-plus-plus.org/).

Son ficheros de texto en los que se usa el formato Markdown, que permite escribir párrafos, encabezados, listas, enlaces, etc., de forma rápida y sencilla. GitHub y otras plataformas pueden transformar el formato markdown en HTML, y por eso, por ejemplo en esta web, podemos usar el modo exploración de NVDA para ir al siguiente encabezado pulsando la h, la i para desplazarnos al siguiente ítem de una lista o la k para enlaces, entre otras posibilidades.

Abre uno de los perfiles disponibles mediante un editor de texto y, a partir de él, crea tu propio perfil con tus datos de contacto y la información que quieras mostrar.

#### Añadir cambios ####

Para añadir los archivos nuevos o los que hayas modificado, desde el símbolo del sistema:

1. Abre la carpeta de la web: `cd c:\repos\nvdaes.github.io`
1. (Opcional) Consulta el estado de los archivos: `git status`
1. Añade el archivo modificado para que Git pueda observarlo: `git add perfil.md`
1. Registra el archivo en el historial de Git para poder subirlo a GitHub: `git commit -m "Add my profile`"

#### Publicar cambios ####

Una vez que tu cuenta de GitHub haya sido autorizada a colaborar con el repositorio de la web, desde la subcarpeta `nvdaes.github.io`, puedes escribir: `git push`

Al cabo de unos minutos, tus cambios quedarán publicados en la web.

### Seguir aprendiendo

La información anterior puede ser útil para empezar. Se puede seguir explorando la subcarpeta _posts y algunos de sus archivos para publicar un post. En otras carpetas hay archivos responsables de otros componentes de la web.

Además, recomiendo este [libro sobre Git](https://git-scm.com/book/es/v2), especialmente, la introducción y los capítulos sobre fundamentos de Git y ramificación.

También puede ser interesante esta [guía sobre Markdown](https://guides.github.com/features/mastering-markdown/) (en inglés).

Para cualquier duda o aclaración, nos vemos en nuestra lista de correo.

