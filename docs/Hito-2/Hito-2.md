# [Hito 2](http://jj.github.io/CC/documentos/proyecto/2.Tests.html): Tests

Este hito engloba todas las tareas necesarias para establecer y configurar un framework de tests que permita implementar y ejecutar tests unitarios, así como para añadir una descripción inicial de la infraestructura virtual a la aplicación y a los gestores de dependencias y/o tareas que se utilicen en la misma, la necesaria para que se ejecuten los tests.

## Gestores de paquetes y dependencias

Los gestores de paquetes que se ha valorado utilizar son:
- __yarn__: 
- __npm__: un gestor de paquetes y dependencias para la plataforma _Node.js_. Ubica los módulos en su lugar (en el directorio `node_modules`) para que _Node.js_ pueda encontrarlos, y gestiona los conflictos de dependencias siguiendo una estrategia denominada hoisting. Es ampliamente configurable para soportar una amplia variedad de casos de uso. Lo más habitual es que se utilice para publicar, descubrir, instalar y desarrollar programas de Node
- __pnpm__: Es una versión mejorada de _npm_, _pnpm_ proviene de **p**erformant-**npm**. Cambia la estrategia de resolución de dependencias de hoisting a content-addressable storage.

Se ha elegido el gestor de paquetes y dependencias _pnpm_. Se parece a _npm_ superficialmente porque su uso del CLI es similar, pero la gestión de las dependencias es muy diferente; el algoritmo de _pnpm_ da lugar a un mejor rendimiento, al ahorro de memoria y a la mejor gestión del espacio en disco. El gestor de y dependencias paquetes _yarn_ sigue siendo muy popular, pero se considera legacy y es posible que se deje de dar soporte en un futuro próximo. _Yarn Berry PnP_ es su evolución, pero aún no ha desarrollado lo suficiente como para explotar todo su potencial.

El principal problema que tenían los creadores de _pnpm_ con _npm_ y _yarn_ era el almacenamiento redundante de dependencias que se utilizaban en todos los proyectos. Aunque _yarn classic_ tenía ventajas de velocidad sobre _npm_, utilizaba el mismo enfoque de resolución de dependencias, es decir, utilizaban hoisting como estrategia de resolución de dependecias.

En lugar del hoisting, _pnpm_ introdujo una estrategia alternativa de resolución de dependencias: content-addressable storage (almacenamiento direccionable por contenido). Este método da lugar a una carpeta node_modules anidada que almacena los paquetes en un almacén global en su carpeta de inicio (`~/.pnpm-store/`). Cada versión de una dependencia se almacena físicamente en esa carpeta sólo una vez, siendo la única fuente y ahorrando bastante espacio en disco.

El gestor de paquetes y dependencias _pnpm_ utiliza un sistema de archivos de contenido direccionable para almacenar los paquetes y las dependencias en el disco. Esto significa que el mismo paquete no se duplicará. Incluso con diferentes versiones del mismo paquete, _pnpm_ es lo suficientemente inteligente como para reutilizar el máximo de código. Si una versión del paquete 1 tiene 500 archivos y la versión 2 tiene sólo un archivo más, entonces pnpm no escribirá 501 archivos para la versión 2; en su lugar, creará un enlace duro a los 500 archivos originales y escribirá sólo el nuevo archivo. Si se realizara con _npm_, la versión 2 también se cargaría duplicando los 500 archivos originales. Para grandes proyectos monorepo, puede hacer que exista una gran diferencia. Por ejemplo, si existe un caso donde un paquete es necesario por cientos de otros paquetes, este paquete existirá en disco tantas veces como sea utilizado por otros paquetes, lo que podría generar problemas asociados al espacio en el disco, lo cual se podría solucionar con la utilización de _pnpm_.

![Comparación de los gestores de paquestes](./img/comparison.png)

Como se muestra en los resultados de las pruebas de referencia anteriores, _pnpm_ se ha comportado en general mucho mejor que _npm_ y _yarn_. No es de extrañar que empresas tecnológicas gigantes como Vue3, Prism y Microsoft estén adoptando rápidamente _pnpm_.

Instalación de _pnpm_:

```bash
npm i -g pnpm
```

El estado inicial de un proyecto _pnpm_ es igual que el de un proyecto _npm_ o _yarn_: se necesita un archivo `package.json`. Después de instalar las dependencias con `pnpm i`, se genera una carpeta `node_modules`, pero su estructura es completamente diferente debido a su enfoque de almacenamiento de contenido direccionable.

El gestor de paquetes y dependencias _pnpm_ también genera su propia versión de lockfile, `pnp-lock.yml`. Además, se puede proporcionar una configuración adicional con un archivo opcional `.npmrc`.

## Tests

### Comparativa

### Elección y uso de la biblioteca de aserciones

### Elección y uso del framework de tests