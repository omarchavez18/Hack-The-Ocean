Documentacion FrontEnd

# Hack The Ocean - Ocean Risk Front-end

<em>Creado: </em>15/05/2022
<em>Versión: </em>1.0.2<br />

Proyecto de Hackaton ,Hack the ocean por microsoft LaunchX con Innovaccion Virtual, sobre crear conciencia sobre el cuidado del medio ambiente y sus problematicas.
dar conocimiento de los animales en peligro de extincion asi como sus generalidades.

## Tecnologias

- jQuery <br />

- Bootstrap 5 <br />
  La elección de “módulos” de Bootstrap nos permitió eficientizar el trabajo, optando por herramientas como lo fue el carrusel de fotos que permite lograr un resultado limpio y estilizado
- Sass<br />
  Con la finalidad de optimizar el trabajo se optó por trabajar con el compilador de CSS SASS, segmentando cada apartado de la pagina en un archivo correspondiente de diseño, como lo fue members, header, pokedex entre otros.

## Bocetos

Se partió de un trabajo colaborativo para un diseño de UX/UI, priorizando en el diseño y presentación de la información.
![image](https://user-images.githubusercontent.com/89043543/168501458-dd47beca-34c4-4110-bb3f-cb65e25dd4de.png)
<br />
Tanto de la pagina general como de la interfaz del catalogo de animales en peligro.
![image](https://user-images.githubusercontent.com/89043543/168501557-baabee65-d26f-45e3-8942-27bc3c8f30c6.png)

## Estrucutura de la pagina

Se presenta una estructura básica como interfaz, contando con una sola pagina, con los siguientes sub categorías:

- Acerca de
- Galeria
- Especies amenazadas
- Ayuda (solución)
- Equipo

- Microsoft Launch X Innovaccion Virtual

Documentacion BackEnd By Omar Chavez

# Hack-The-Ocean

Proyecto de Hackaton ,Hack the ocean por microsoft LaunchX con Innovaccion Virtual, sobre crear conciencia sobre el cuidado del medio ambiente y sus problematicas.
dar conocimiento de los animales en peligro de extincion asi como sus generalidades.

# Hack the ocean API Documentation

## Endpoints

_Base URL_: `https://api-omar-oceanrisk.herokuapp.com/`

| Description                            | Method | Endpoint                  |
| :------------------------------------- | :----- | :------------------------ |
| Fetch                                  | GET    | `/`                       |
| Fetch full animals object              | GET    | `/`                       |
| Fetch specific animal info             | GET    | `/animals/name/:name`     |
| Fetch group of specific type of animal | GET    | `/animals/type/:type`     |
| Fetch group of specific animal status  | GET    | `/animals/status/:status` |

## Expected Response Status Codes

| Class        | Symbol                | HTTP status code |
| :----------- | :-------------------- | :--------------- |
| Success      | :ok                   | 200              |
| Success      | :created              | 201              |
| Client Error | :bad_request          | 400              |
| Client Error | :unauthorized         | 401              |
| Server Error | :unprocessable_entity | 500              |

## Built With

- express
- jest
- github Actions
- Nodejs
- ESLINT

## Getting Started

- To get a copy of the API, run ` git clone https://github.com/omarchavez18/Hack-The-Ocean.git`
- Run `npm i ` to install dependencies
- Start development server by executing `node server.js`
- Visit the link `http://localhost:3000` on your browser to access resources
- Run `npm test` to get test report

👤 &nbsp; **Omar Chávez**

- LinkedIn: [omarchavezgdv](https://www.linkedin.com/in/omarchavezgdv/)
- GitHub: [@omarchavez18](https://github.com/omarchavez18)

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Microsoft Launch X Innovaccion Virtual
