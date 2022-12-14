# [Hito 3](https://jj.github.io/CC/documentos/proyecto/3.Docker): Creación de un contenedor para pruebas

Este hito engloba todas las tareas necesarias para diseñar, usando Docker, un contenedor o contenedores con los que se puedan ejecutar fácilmente los tests unitarios sobre la aplicación que se está diseñando.

## Elección del contenedor base

Existen multitud de contenedores basados en Docker, y la elección de uno u otro dependerá tanto de las necesidades de la aplicación como de la infraestructura que se quiera construir entorno a la misma.

En este caso, en relación a las tecnologías que se usan y a las necesidades de la aplicación, se ha elegido el contenedor [`node:18.12-alpine`](https://hub.docker.com/layers/library/node/18.12/images/sha256-5a73d75604f30ec5cc9ed44f2b9fad3beeedc3211a62a8b7ef86b0bfe10ee29b?context=explore), que es un contenedor basado en [Alpine Linux](https://www.alpinelinux.org/) y que contiene la versión **18.12** de [Node.js](https://nodejs.org/es/).

Antes de tomar la decisión de utilizar el contenedor [`node:18.12-alpine`](https://hub.docker.com/layers/library/node/18.12/images/sha256-5a73d75604f30ec5cc9ed44f2b9fad3beeedc3211a62a8b7ef86b0bfe10ee29b?context=explore), también se ha probado el contenedor [`node:18.12`](https://hub.docker.com/layers/library/node/18.12/images/sha256-5a73d75604f30ec5cc9ed44f2b9fad3beeedc3211a62a8b7ef86b0bfe10ee29b?context=explore) y el contenedor [`node:18.12-slim`](https://hub.docker.com/layers/library/node/18.12-slim/images/sha256-4f2bfa18008f5b8c201df4bfc847b50ed5306bd0ff52343b2c82c568a677575c?context=explore).

Son todas imágenes oficiales de [Node.js](https://nodejs.org/es/) y se diferencian en el tamaño del contenedor y en el sistema operativo base.

- El contenedor [`node:18.12`](https://hub.docker.com/layers/library/node/18.12/images/sha256-5a73d75604f30ec5cc9ed44f2b9fad3beeedc3211a62a8b7ef86b0bfe10ee29b?context=explore)  es el contenedor más grande, ya que contiene todo el sistema operativo, además de multitud de herramientas y utilidades adicionales.
- El contenedor [`node:18.12-slim`](https://hub.docker.com/layers/library/node/18.12-slim/images/sha256-4f2bfa18008f5b8c201df4bfc847b50ed5306bd0ff52343b2c82c568a677575c?context=explore) es más pequeño que el estándar, ya que contiene una versión reducida del sistema operativo y las herramientas necesarias para ejecutar Node.js.
- El contenedor [`node:18.12-alpine`](https://hub.docker.com/layers/library/node/18.12/images/sha256-5a73d75604f30ec5cc9ed44f2b9fad3beeedc3211a62a8b7ef86b0bfe10ee29b?context=explore) es el más pequeño, ya que contiene el minimalista y reducido sistema operativo Alpine Linux y las herramientas necesarias para ejecutar Node.js. Debido a lo anterior, con el objetivo de tener una infraestructura lo más ligera posible, se ha elegido el contenedor [`node:18.12-alpine`](https://hub.docker.com/layers/library/node/18.12/images/sha256-5a73d75604f30ec5cc9ed44f2b9fad3beeedc3211a62a8b7ef86b0bfe10ee29b?context=explore) como contenedor base.

Para tratar de determinar cuál es el mejor contenedor base para nuestra aplicación, se han consultado varias fuentes, entre ellas este [artículo](https://snyk.io/blog/choosing-the-best-node-js-docker-image/), del que se ha extraído la tabla que figura a continuación y que ofrece un análisis profundo de las distintas versiones que pueden utilizarse.

|     |     |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Image tag** | **Node.js runtime version** | **OS dependencies** | **OS security vulnerabilities** | **High and Critical vulnerabilities** | **Medium vulnerabilities** | **Low vulnerabilities** | **Node.js runtime vulnerabilities** | **Image size** | **Yarn available** |
| `node` | `18.2.0` | 409 | 289 | 54  | 18  | 217 | 7   | 952MB | Yes |
| `node:bullseye` | `18.2.0` | 409 | 289 | 54  | 18  | 217 | 7   | 952MB | Yes |
| `node:bullseye-slim` | `18.2.0` | 97  | 56  | 4   | 8   | 44  | 7   | 246MB | Yes |
| `node:lts-bullseye-slim` | `16.15.0` | 97  | 55  | 4   | 7   | 44  | 6   | 188MB | Yes |
| `node:alpine` | `18.2.0` | 16  | 2   | 2   | 0   | 0   | 0   | 178MB | Yes |
| `gcr.io/distroless/nodejs:16` | `16.17.0` | 9   | 11  | 0   | 0   | 11  | 0   | 112MB | No  |

## Creación del contenedor para pruebas

### Archivo Dockerfile

Un Dockerfile es un archivo o documento de texto simple que incluye un conjunto de órdenes que se necesitan ejecutar de manera consecutiva para cumplir con los procesos necesarios para la creación y configuración de una nueva imagen.

En este caso, el Dockerfile que se ha creado es el siguiente:

```Dockerfile
FROM node:18.12-alpine As development

RUN apk --no-cache add curl
RUN curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;

WORKDIR /usr/src/app

COPY --chown=node:node pnpm-lock.yaml ./

RUN pnpm fetch --prod

COPY --chown=node:node . .
RUN pnpm install
RUN pnpm prisma generate

USER node

CMD ["pnpm", "test"]
```

Las órdenes del archivo Dockerfile realizan las siguientes tareas:

- `FROM node:18.12-alpine As development`: Indica el contenedor en el que se basa la imagen que se va a construir.
- `RUN apk --no-cache add curl`: Descarga e instala `curl`.
- `RUN curl ...`: Descarga e instala `pnpm`.
- `WORKDIR`: Especifica el directorio de trabajo.
- `COPY`: Copia el archivo que contiene las referencias a las dependencias instaladas a través de pnpm.
- `RUN`: Descargar paquetes indicados en un lockfile a la tienda virtual, el manifiesto de paquetes es ignorado. Los paquetes de desarrollo no se descargan (opción `--prod`).
- `USER node`: Utiliza un usuario con pocos privilegios y los permisos adecuados para el sistema de archivos.
- `CMD ["pnpm", "test"]`: Ejecuta los tests de la aplicación.

Tras ejecutar el contenedor de pruebas de forma local se obtiene el siguiente resultado:

![Ejecución del contenedor de pruebas](./img/test-container-execution.png)

### Subida de la imagen a Docker Hub

[**Docker Hub**](https://hub.docker.com/) es un servicio proporcionado por Docker para encontrar y compartir imágenes de contenedores. Se trata del mayor repositorio de imágenes de contenedores del mundo, con una gran variedad de fuentes de contenido, incluidos desarrolladores de la comunidad de contenedores, proyectos de código abierto y proveedores de software independientes que crean y distribuyen su código en contenedores.

[**Docker Hub**](https://hub.docker.com/) permite crear tokens de acceso personales como alternativa al acceso por contraseña. El uso de tokens de acceso personales proporciona algunas ventajas sobre una contraseña:

- Se puede investigar el último uso del token de acceso y desactivarlo o eliminarlo si encuentras alguna actividad sospechosa.
- Cuando se utiliza un token de acceso, no se puede realizar ninguna actividad de administración en la cuenta, incluyendo el cambio de contraseña. Protege tu cuenta si tu ordenador se ve comprometido.

En primer lugar, se ha creado un tokens de acceso con permisos de lectura y escritura sobre repositorios (*Docker Hub → Account Settings → Security → New Access Token*).

![Creación de un token de acceso](./img/dockerhub-access-token.png)

Posteriormente se ha creado el repositorio en Docker Hub, [`ramongarver/muii-ccfi`](https://hub.docker.com/r/ramongarver/muii-ccfi).

![Creación de un repositorio](./img/dockerhub-repository.png)

Más tarde, se ha creado el [workflow](https://github.com/ramongarver/MUII-CCFI/blob/main/.github/workflows/publish-docker-api-dockerhub.yml) para subir la imagen a Docker Hub, que se ejecuta cada vez que se realiza un push en la rama `main` del repositorio de GitHub.

### Uso de otros registros de contenedores

El registro de [**GitHub Container Registry**](https://codefresh.io/csdp-docs/docs/integrations/container-registries/github-cr/) almacena imágenes de contenedores dentro de una organización o cuenta personal, y permite asociar una imagen con un repositorio. Se puede elegir entre heredar los permisos de un repositorio o establecer permisos granulares independientemente de un repositorio. También puede acceder a imágenes de contenedores públicos de forma anónima.

Se ha creado el [workflow](https://github.com/ramongarver/MUII-CCFI/blob/main/.github/workflows/publish-docker-api-ghcr.yml) para subir la imagen a Docker Hub, que se ejecuta cada vez que se realiza un push en la rama `main` del repositorio de GitHub.

### Ejemplo de ejecución correcta de workflows

![Ejecución correcta de workflows](./img/actions.png)

### Imagen publicada en Docker Hub

![Imagen publicada en Docker Hub](./img/dockerhub-image.png)

### Imagen publicada en GitHub Container Registry

![Imagen publicada en GitHub Container Registry](./img/ghcr-image.png)
