# [Hito 0]( http://jj.github.io/CC/documentos/proyecto/0.Repositorio): Descripción del problema a resolver usando correctamente git y GitHub

## Creación de par de claves y subida de clave pública a GitHub

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
