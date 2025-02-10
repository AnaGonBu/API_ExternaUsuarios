# APIExternaUsuarios

## Actividad Desarrollo en Entorno cliente
**Objetivos de la actividad ** 
Con esta actividad vas a conseguir desarrollar en Angular completo con un sistema  
de componentes y rutas funcional que se conecta a un servicio de BBDD a través de  
una api externa.  
Los objetivos para cumplir en esta práctica son los siguiente:
▸ Averiguar cuantos componentes necesitamos y crearlos.
▸ Crear el sistema de rutas para cada componente.
▸ Crear componentes hijos si lo consideras necesario.
▸ Comunicar los componentes a través de los medios necesarios para que los datos
lleguen a cada uno de los elementos.
▸ El trabajo con formularios y validaciones  
**Pautas de elaboración**  
Crear una aplicación con Angular que tenga sistema de rutas y cargue CSS.  
Una vez que la aplicación este creada debéis cargar Bootstrap como framework de css para  
que os ayude a maquetar todo el sistema de componentes.  
El api que vas a consultar es la siguiente: https://peticiones.online/users  
Este api tiene los métodos/endpoints necesarios para resolver la práctica.  
La aplicación cargará inicialmente una página inicial donde ser cargará el listado de usuarios completo.  
La aplicación tendrá las siguientes rutas:  
**/home:** donde ser cargará el listado de usuarios completo.  
**/user/1:** donde ser cargará la vista de usuario con todos sus datos. Nótese que el numero de la ruta corresponde al id del usuario.  
**/newuser:** donde ser cargará un formulario que dará de alta un usuario siguiendo el patron del api de creater user.(con validaciones)  
**/updateuser/1:** se cargará reutilizando el formulario de registro los datos del usuario a actualizar para que se pueda actualizar los datos y mandárselos al api.  
Se completará un CRUD (Create Read Update Delete) completo desde
angular contra una API, externa. Es el mismo proceso que se realiza en un ejemplo
fullstack lo que pasa es que esta vez los endpoint del Backend no están realizado por
vosotros.
