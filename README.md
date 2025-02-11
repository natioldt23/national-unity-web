# National Unity Web Page

Este documento proporciona una guía paso a paso para instalar las dependencias necesarias y desplegar el proyecto en producción.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados **Node.js** y **Yarn**, que son necesarios para manejar las dependencias del proyecto.

### 1. Instalación de Node.js

Para ejecutar este proyecto, necesitas instalar **Node.js** (se recomienda la última versión LTS).

#### Windows:

1. Descarga el instalador desde [Node.js Official Website](https://nodejs.org/)
2. Ejecuta el instalador y sigue las instrucciones.
3. Una vez instalado, verifica la instalación abriendo una terminal (CMD o PowerShell) y ejecutando:
   ```sh
   node -v
     ```

## Instalación de Yarn

Una vez que Node.js está instalado, puedes instalar **Yarn**, el gestor de paquetes utilizado en este proyecto.

### Instalación con npm

Ejecuta el siguiente comando en la terminal:

```sh
npm install --global yarn
 ```

## Instrucciones para iniciar el proyecto en local y generar la versión de producción

### 1. Clonar el repositorio
Clona el repositorio del proyecto en tu máquina local:

```bash
git clone <url-del-repositorio>
```

### 2. Instalar las dependencias
Navega a la carpeta del proyecto e instala las dependencias necesarias:

```bash
cd <nombre-del-repositorio>
yarn install
```

### 3. Iniciar el proyecto en local
Para iniciar el proyecto en modo desarrollo, ejecuta:

```bash
yarn dev
```
Esto abrirá el servidor de desarrollo en http://localhost:3000. El navegador se actualizará automáticamente con los cambios que realices en el código.

### 4. Generar la versión de producción

Para generar la versión optimizada para producción, ejecuta el siguiente comando:

```bash
yarn build
```

## Subir poryecto a nuicservices.com

Una vez que se haya ejecutado el comando yarn build, para subir el proyecto a desarrollo se tiene que primero abrir la carpeta dist que te genera el comando anterior.

Dentro de la carpeta se encuentran las carpetas:
- assets
- fonts
- images
- locales
- scss

y lo archivos:

- favicon.ico
- index.html
- main.scss

Ahora dirígete a la unidad de red de desarrollo:

```
Z:\wwwroot
```

Y aquí es donde se copian y pegan los documentos de la carpeta 'dist'. Los documentos a copiar y pegar varían dependiendo de los cambios hecho en el proyecto.
Todo lo relacionado al texto se encuentra dentro de la carpeta locales y si solo se cambiaron textos, esta es la única carpeta que se tiene que copiar y pegar. En cambio, si los cambios que se hicieron fueron sobre la estructura del proyecto, ya sea código o estilos, lo que se tiene qué hacer es copiar y pegar los archivos de la carpeta 'assets' de la carpeta 'dist' a la carpeta 'assets' pero de wwwroot y aparte también copiar y pegar el archivo index.html de la carpeta 'dist' a wwwroot.


