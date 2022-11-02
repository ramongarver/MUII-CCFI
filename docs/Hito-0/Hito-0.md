# [Hito 0]( http://jj.github.io/CC/documentos/proyecto/0.Repositorio): Descripción del problema a resolver usando correctamente git y GitHub

Esta hito engloba todas las tareas necesarias para tener un entorno de trabajo preparado, usando la tecnología *git* y la forja *GitHub*, en el que podamos desarrollar un proyecto bajo licencia.

## Creación de par de claves y subida de clave pública a GitHub
Para la generación del par de clave pública y clave privada y la posterior adición de la clave pública a GitHub se ha utilizado la siguiente [guía](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

Ejecutamos la siguiente orden para generar el par de claves pública/privada:  
`$ ssh-keygen -t ed25519 -C "ramongarver2000@gmail.com"`

![Orden para generar el par de claves pública/privada](img/ssh-keys-generation.png)


Comprobamos en el directorio *.ssh* que las claves se han generado:

![Par de clave privada y clave pública generadas en local](img/ssh-keys-local.png)

Como podemos observar, se han generado correctamente ambos ficheros:
- ***id_rsa***: donde se almacena la clave privada (que no se la tenemos que proveer a nadie).
- ***id_rsa.pub***: donde se almacena la clave pública (que se la tenemos que proveer a la organización en la que nos queramos identificar, en nuestro caso tenemos que subirla a GitHub).

Tras haber añadido la clave pública a GitHub la configuración quedaría de la siguiente forma:  
💡 *Cabe destacar que yo ya tenía configuradas las claves con anterioridad. Esa es la causa por la que la fecha de adición de las mismas es previa a la fecha de realización de la práctica.*

![Configuración de las claves SSH](img/ssh-keys-github.png)

Podemos comprobar que, efectivamnete, nos podemos autenticar correctamente desde la terminal utilizando la siguiente orden:  
`ssh -T git@github.com`

![Autenticación exitosa en GitHub usando SSH a través de la Terminal](img/ssh-github-authentication.png)

## Configuración correcta del nombre y correo electrónico para que aparezca en los *commits*

Establecemos el nombre del usuario que realiza los commits con ámbito global:  
`git config --global user.name "Ramón García Verjaga"`

Establecemos el correo electrónico del usuario que realiza los commits con ámbito global:  
`git config --global user.email "ramongarver2000@gmail.com"`

Establecemos la estrategia de mergeo de pull requests a rebase con ámbito global:  
`git config --global pull.rebase "true"`

Consultamos las variables de configuración con ámbito global establecidas:  
`git config --global --list`

![Variables globales de configuración establecidas - Vista de lista](img/git-config-global-list.png)

## Edición del perfil de GitHub para que aparezca una imagen en vez del avatar por omisión, nombre completo y ciudad, así como universidad

En la siguiente imagen se puede observar como ha quedado el perfil tras la edición del mismo:

![Perfil de Ramón García Verjaga en GitHub](img/profile.png)

## Incrementar la seguridad de nuestra cuenta en GitHub activando el segundo factor de autenticación

Debemos entrar en el apartado de «Contraseñas y autenticación» de la configuración de la cuenta (*Settings > Password and authentication*) y, una vez ahí, habilitar el segundo factor de autenticación realizando los siguientes pasos:

![Pasos para activar el segundo factor de autenticación](img/two-factor-authentication-steps.png)

Una vez realizados todos los pasos se habrá activado de forma exitosa el doble factor de autenticación.

![Segundo factor de autenticación activado con éxito](img/two-factor-authentication-activated.png)

Además de haber configurado el método principal de autenticación con la aplicación de generación de códigos OTPs *Google Authenticator*, se han configurado métodos alternativos de autenticación como *Github Mobile*, *Recovery Codes* y *SMS móvil*.

![Métodos de autenticación para el doble factor](img/two-factor-authentication-methods.png)

## Creación y configuración de los repositorios

### Creación de los repositorios

Para la realización de las prácticas debemos hacer fork del repositorio de esta asignatura y crear el repositorio asociado a nuestro proyecto:
- [Fork del repositorio de la asignatura de Cloud Computing](https://github.com/ramongarver/CC-22-23): Este repositorio contiene la información de las prácticas de la asignatura: hitos que se van a desarrollar, plazos de entrega, proyectos de los estudiantes y recursos de ayuda.
- [Repositorio del proyecto](https://github.com/ramongarver/MUII-CCFI/): Este repositorio contiene tanto la documentación como el software en sus diferentes fases del proyecto que se va a realizar a lo largo de las prácticas.

### Configuración del repositorio del proyecto

- El proyecto está bajo una licencia de tipo [General Public License (GPLv3)](https://www.gnu.org/licenses/gpl-3.0) que ha sido incluida en el repositorio. El archivo que hace referencia a la misma se denomina [LICENSE](../../LICENSE) y está en la raíz del repositorio. 
> [GPLv3](https://www.gnu.org/licenses/gpl-3.0) es una licencia de derecho de autor ampliamente usada en el mundo del software libre y código abierto. Garantiza a los usuarios finales (personas, organizaciones, compañías) la libertad de usar, estudiar, compartir (copiar) y modificar el software. Su propósito es doble: declarar que el software cubierto por esta licencia es libre, y protegerlo (mediante una práctica conocida como copyleft) de intentos de apropiación que restrinjan esas libertades a nuevos usuarios cada vez que la obra es distribuida, modificada o ampliada.

- El proyecto tiene un archivo de configuración de tipo [.gitignore](../../.gitignore) que permite ignorar archivos que, en base a las tecnologías que se utilicen, no se deben subir al repositorio. Ahora mismo está configurado para ignorar archivos relativos al desarrollo con tecnologías basadas en Javascript/Typescript.

- La idea es realizar el trabajo en base a la siguiente metodología:
  - **Ramas independientes por cada uno de los hitos**. Para mantener siempre una versión completa y funcional del proyecto se creará una rama por cada uno de los hitos. El objetivo es poder ir trabajando de forma que no se genere ninguna versión incompleta en la rama principal.  
  También, existirá una rama denominada *codefest* donde se añadirán mejoras al proyecto. Estas mejoras no implican la adición de ninguna funcionalidad requerida en el desarrollo de las prácticas, sino que están relacionadas con trabajo voluntario en relación a pequeñas mejoras.
  - **Creación de issues en relación a las tareas y los objetivos**. Para llevar un seguimiento adecuado de los *issues* del proyecto es importante crearlos en el repositorio y mantener el estado de los mismos actualizado.

## Descripción del proyecto
La descripción del proyecto se encuentra en el archivo de documentación principal del mismo. Dicho archivo, cuyo nombre es [README.md](https://github.com/ramongarver/MUII-CCFI/blob/Hito-0/README.md) está en la raíz del repositorio.
