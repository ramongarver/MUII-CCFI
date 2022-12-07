# [Hito 3](https://jj.github.io/CC/documentos/proyecto/3.Docker): Creación de un contenedor para pruebas

Este hito engloba todas las tareas necesarias para diseñar, usando Docker, un contenedor o contenedores con los que se puedan ejecutar fácilmente los tests unitarios sobre la aplicación que se está diseñando.

## Elección del contenedor base

Existen multitud de contenedores basados en Docker, y la elección de uno u otro dependerá de las necesidades de la aplicación. En este caso, en relación a las tecnologías que se usan y a las necesidades de la aplicación, se ha elegido el contenedor [node:18.12-alpine](https://hub.docker.com/_/node), que es un contenedor basado en Alpine Linux y que contiene la versión 18.12 de Node.js.

Antes de decidir este contenedor, se ha probado a usar el contenedor [node:18.12](https://hub.docker.com/layers/library/node/18.12/images/sha256-5a73d75604f30ec5cc9ed44f2b9fad3beeedc3211a62a8b7ef86b0bfe10ee29b?context=explore) y el contenedor [node:18.12-slim](https://hub.docker.com/layers/library/node/18.12-slim/images/sha256-4f2bfa18008f5b8c201df4bfc847b50ed5306bd0ff52343b2c82c568a677575c?context=explore). Son diferentes versiones que contienen la versión 18.12 de Node.js, pero que se diferencian en el tamaño del contenedor y en el sistema operativo base. El contenedor `node:18.12` es el contenedor más grande, ya que contiene todo el sistema operativo, además de multitud de herramientas y utilidades. El contenedor `node:18.12-slim` es más pequeño, ya que contiene una versión redudida del sistema operativo y las herramientas necesarias para ejecutar Node.js. El contenedor `node:18.12-alpine` es el contenedor más pequeño, ya que contiene solo el sistema operativo Alpine Linux y las herramientas necesarias para ejecutar Node.js. Debido a lo anterior, con el objetivo de tener una infraestructura lo más ligera posible, se ha elegido el contenedor `node:18.12-alpine` como contenedor base.

## Creación del contenedor para pruebas

### Archivo Dockerfile

Un Dockerfile es un archivo o documento de texto simple que incluye un conjunto de órdenes que se necesitan ejecutar de manera consecutiva para cumplir con los procesos necesarios para la creación y configuración de una nueva imagen.

En este caso, el Dockerfile que se ha creado es el siguiente:

'''Dockerfile
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
'''
