# MUII-CCFI
:books: Repositorio de la asignatura ***Cloud Computing: Fundamentos e Infraestructuras*** del Máster en Ingeniería Informática de la Univerdad de Granada.

:octocat: Proyecto realizado por **Ramón García Verjaga** :octocat:

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

# 🍿 Remembilm 📽️

## ✏️ Descripción del proyecto 📜

Domingo por la tarde, tumbados en el sofá, con *Netflix* en la pantalla y preguntándonos «¿cómo se llamaba aquella película de la que estuvieron hablando el otro día mis amigos?» Otro día más que hablan sobre una película que debe de estar genial y cuyo título no apunto... Aunque, pensándolo bien, la de la semana pasado sí que la apunté, pero cuando me decidí a recordar el título ¡no sabía dónde lo había apuntado!

Somos bombardeados por una gran cantidad de información de nuestro alrededor que, cada día más, nos dificulta tener la mente ordenada. ¿Cuántas veces no hemos escuchado hablar sobre una película que nos interesa y cuyo título se nos ha olvidado a los cinco minutos? Me atrevería a decir que un número considerable.

***Remembilm*** nace de la unión de ***Rememb***-er + F-***ilm***. Es una aplicación dirigida a un público general que pretende crear un ecosistema en el que poder llevar el control de las películas y series que queremos ver, estamos viendo o hemos visto.

Como usuario de la aplicación puedo:
- Ver la oferta de películas y series existente.
- Añadir películas y series a mi lista de contenido para ver.
- Añadir películas y series a mi lista de contenido en progreso.
- Añadir películas y series a mi lista de contenido ya visto.

Además, para el contenido ya visto puedo:
- Valorar si me ha gustado, dándole un like. 👍🏽
- Valorar si no me ha gustado, dándole un dislike. 👎🏽

¿Qué hago si un amigo me recomienda una película? La añado a mi lista de películas para ver, para que el domingo por la tarde, cuando esté sentado en mi sofá, con tan solo consultar ***Remembilm*** sepa el nombre de la película.

¿Qué hago si me ha gustado mucho una película que he visto? La añado a mi lista de contenido ya visto y le doy me gusta. Así, cuando estemos charlando en el bar y me pregunten «¿qué película me recomendarías ver?», pueda responder con tan solo consultar mi lista de películas vistas que me han gustado en ***Remembilm***.

### Lógica de negocio

La solución de esta aplicación expone una lógica de negocio sencilla a la par que valiosa. Se fundamenta en la posibilidad, por parte de los usuarios, de consultar películas y series y llevar un seguimiento de visualización de las mismas, pudiendo valorarlas tanto positiva como negativamente.

La aplicación obtiene la información de las películas y series de una API pública y se encarga de mostrarla al usuario de forma sencilla y amigable, permitiéndole interacturar con ella. 

Para poder llevar un seguimiento del contenido es necesario que el usuario inicie sesión. Una vez el usuario esté identificado podrá añadir películas a sus listas y dar sus valoraciones. Esta información se almacena en una base de datos.

A la aplicación se puede acceder desde cualquier dispositivo.

### ¿Por qué la aplicación es susceptible de ser desplegada en la nube?

Como se puede observar, existen partes bien diferenciadas de la aplicación como: 
- Cliente, *frontend*;
- Servicios y lógica de la aplicación, *backend* (autenticación, catálogo o seguimiento);
- Base de datos, *data persistence* (información sobre usuarios u observación);

las cuales ofrecen una gran oportunidad para utilizar el paradigma de *Cloud Computing*.

Por ejemplo:
- Para la autenticación de los usuarios se podría crear y desplegar un microservicio independiente que nos provea de este servicio. De esta forma, si en algún momento se cae el servicio, es decir, si en algún momento deja de funcionar la autenticación, los usuarios podrán seguir consultando el catálogo de películas y series, que funciona con un microservicio independiente, aunque no puedan realizar el seguimiento de las mismas.  
- Al tener desacoplados el cliente (frontend) y el servidor (backend) se pueden crear clientes independientes para dispositivos de diferente tipo. Por ejemplo, se podría crear una aplicación móvil nativa para los usuarios que utilicen móvil, aunque se siguiera manteniendo la aplicación web para los usuarios que accedan desde su ordenador.
- Queremos que la aplicación sea accesible desde cualquier lugar.
- Queremos que la aplicación aumente el número de recursos que utiliza mientras sea necesario si llegan muchos usuarios.


## :wrench: Creación y configuración del repositorio :gear:
A través del siguiente enlace puede acceder a la documentación relativa al [hito 0](docs/Hito-0/Hito-0.md), que versa sobre la puesta a punto de las herramientas que se van a usar para comunicar los objetivos, los ejercicios y las prácticas durante el resto del curso.
