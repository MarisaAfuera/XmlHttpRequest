# XmlHttpRequest
Ejemplo de uso de XmlHttpRequest para petición AJAX desde javascript

El ejemplo muestra como desde una página html se hace mediante javascript una petición XMLHttpRequest para comprobar si existe o no un usuario. El usuario se consulta en un API mediante punto de entrada. Por ejemplo: http://localhost:3000/users?name=Pedro para comprobar si en el servidor existe el usuario Pedro. En el caso de que exista se muestra un mensaje "Valid User Id" y en caso de que no exista se muestra "Invalid User Id".
La petición al API se envía mediante XmlHttpRequest de forma asincrona y cuando se recibe la respuesta se refresca solo el mensaje en la página, no la página completa.

![Alt text](relative/path/to/img.jpg?raw=true "Title")
