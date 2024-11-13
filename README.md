<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="https://f.hubspotusercontent20.net/hubfs/2829524/Copia%20de%20LOGOTIPO_original-2.png"></a>
  <br>
  Arquetipo de Cypress con POM para E2E front
  <br>
</h1>

<h4 align="center">Proyecto base de <a href="https://github.com/karatelabs/karate" target="_blank">Pragma</a>.</h4>

<p align="center">
  <a href="https://docs.cypress.io/app/get-started/why-cypress">
    <img src="https://img.shields.io/badge/Cypress-E2E_Testing-green" alt="Cypress">
  </a>
  <a href="https://nodejs.org/en/">
    <img src="https://img.shields.io/badge/Node_JS-Download-blue?link=https%3A%2F%2Fnodejs.org%2Fen%2F
    " alt="nodeJS">
  </a>
</p>

Este proyecto tiene el propósito de ser una plantilla y guía para la aplicación del patrón de diseño POM con cypress, utilizando el lenguaje TypeScript. Para este objetivo se realizó el flujo de prueba de un sitio web desde el frontend, utilizando diferentes tipos de selectores CSS.

<p align="center">
  <a href="#topicos">Topicos</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#instalación-y-ejecución">Instalación</a> •
  <a href="#instalación-y-ejecución"> Ejecución</a> •
  <a href="#autores">Autores</a> •
  <a href="#relacionados">Relacionados</a> •
</p>

El siguiente GIF es de ejemplo, si tienes uno propio reemplazalo, de lo contrario eliminalo.
![screenshot](https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.gif)

## Topicos

- TypesScript
- POM
- Cypress

## Tecnologias

### This project required:

- [NODE js] version 20+
- [Cypress] version ^13.15.0

## Instalación

1. Abrir la terminal

2. Navega a la carpeta donde quieres clonar el repositorio

3. Clona el repositorio

```bash
git clone https://github.com/somospragma/qa-web-cypress-POM-automatizacion-nodejs.git
```

4. Navega dentro de la carpeta del repositorio clonado

```bash
cd  qa-web-cypress-POM-automatizacion-nodejs
```

5. Instala las dependencias

```bash
npm install
npm install cypress
```

Puedes descargar el proyecto en el enlace [download](https://github.com/somospragma/qa-web-cypress-POM-automatizacion-nodejs)

## Ejecución

### **Run tests in different environments:**

```
npx cypress -Denvironment=default

```

### 🛠️ Cómo ejecutar los test:

```
- El comando `npm run cy:open`, para ejecutar los test en la interfaz gráfica de cypress.
- El comando `npm run cy:run`, para ejecutar los test desde la terminal.
- El comando `npm run cy:verify`, valida que la instalación de cypress es éxitosa.
```

### 🛠️ Ejecutar test en el navegador web Chrome:

```
- El comando `npm run cy:open`, para ejecutar cuando abres el launchpad de cypress, selecciona el navegador Chrome.
- El comando `npm run cy:run --browser chrome`, permite ejecutar desde la terminal modo headless para el navegador Chrome.
```

### 🛠️ Ejecutar test en el navegador web Edge:

```
- El comando `npm run cy:open`, cuando abres el launchpad de cypress, selecciona el navegador Edge.
- El comando `npm run cy:run --browser Edge`, permite ejecutar desde la terminal modo headless para el navegador Edge.
```

###Soporte

En caso de requerir soporte para esta automatización dirigirse al chapter de calidad de software de Pragma S.A y comuniquese con los autores.

## Autores:

| [<img src="https://lh3.googleusercontent.com/a-/AD_cMMSNeU-DRdaCVdZsA__CiiaMlIksLUGso-17AHT5=s240-p-k-rw-no" width=115><br><sub>María Fernanda Jiménez Heredia.</sub>](https://gitlab.com/fernanda.jimenezh) <br/> |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |

### Licencia

Proyecto open source.

## Relacionados

- [Proyecto base Cypress con Screenplay](https://github.com/somospragma/)
- [Proyecto base Cypress con Commands](https://github.com/somospragma/)
