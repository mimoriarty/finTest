# finTest

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

Para elaborar esta prueba he elegido un framework MVC, en este caso [Angular 2](http://www.angular2.com/), un framework muy adecuado para desarrollar rápidamente pequeñas aplicaciones de tipo SPA, esto me pareció que coincidía perfectamente con la descripción de las historias de usuario.
He usado [Angular-cli](https://github.com/angular/angular-cli) para generar rápidamente el esqueleto de la aplicación. Esta herramienta proporciona también la creación de los ficheros de dependencias, compilación de las diferentes versiones, servidor local para desarrollo, etc...
Para el gráfico temporal la librería utilizada es [highcharts](http://www.highcharts.com/) principalmente porque ha diferencia del framework ya tenía una experiencia previa con esta herramienta.

Otras tecnologías utilizadas en el desarrollo de la prueba son;

* [icomoon](https://icomoon.io/) - para obtener una fuente de iconos svg.
* [Visual Studio Code](https://code.visualstudio.com/) - IDE de Microsoft.
* [Google fonts](https://fonts.google.com/)
* [repl.it](https://repl.it/) - entorno de codificación
* [GitHub](https://github.com/) - repositorio
* [jQuery](https://jquery.com/) - requisito necesario para instanciar el objeto highcharts
* [angular-2-local-storage](https://github.com/phenomnomnominal/angular-2-local-storage) - servicion de LocalStorage desarrollado para Angular 2

### Instalación

Clonar o descargar el proyecto de GitHub e instalar dependencias:
```sh
$ git clone https://github.com/mimoriarty/finTest.git
$ npm install
```

Arrancar el servidor local:

```sh
$ ng serve
```

Abrir Google Chrome y escribir en la barra de direcciones: localhost:4200

### Explicación

Por si las moscas no tengo oportunidad de hacer esto cara a cara.

La aplicación consta de dos vistas, tal y como, indican las dos primeras historias de usuario. Cada una de ellas es un componente de Angular 2. Hay un tercer componente para el gráfico temporal que se carga en la segunda vista.
La primera vista carga la lista de símbolos e incorpora un campo de filtrado único para divisa y riesgo. De esa manera se simplifica usabilidad con un diseño más limpio, y, aunque esté mal decirlo, me parece más elegante que los habituales selectores _dropdown_.
La segunda vista tiene el detalle del símbolo, el gráfico temporal, el formulario para los comentarios y el listado de comentarios editables.
Hay sólo dos modelos, uno para los símbolos y otro para los comentarios. Cada uno de ellos tiene un servicio aparte que se encarga de realizar las llamadas API Rest y al _localStorage_.

Porque sin ellos no habría desarrolladores gracias a [stackoverflow.com]
