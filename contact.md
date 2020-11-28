---
title: Formulario de contacto
layout: page
---

<form action="https://formspree.io/nvdaes+int+235+1346123617342016783@groups.io" method="POST">
<p><label>Nombre:
    <input type="text" name="name" placeholder="Indica tu nombre">
</label></p>
<p><label>Correo electrónico:
    <input type="email" name="_replyto" placeholder="Tu dirección de correo electrónico">
</label></p>
<p><label>Mensaje:
  <textarea name="message" placeholder="Escribe tu mensaje"></textarea>
  </label></p>
    <input type="hidden" name="_subject" value="New submission!" />
	<input type="hidden" name="_next" value="{{ site.baseurl}}/sent" />
	<input type="hidden" name="_language" value="es" />
  <p><button type="submit">Enviar</button></p>
</form> 
