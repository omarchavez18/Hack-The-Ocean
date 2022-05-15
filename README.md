# Hack-The-Ocean
Proyecto de Hackaton ,Hack the ocean por microsoft LaunchX con Innovaccion Virtual, sobre crear conciencia sobre el cuidado del medio ambiente y sus problematicas.
dar conocimiento de los animales en peligro de extincion asi como sus generalidades.


# Hack the ocean API Documentation


## Endpoints

_Base URL_: `https://api-omar-oceanrisk.herokuapp.com/`

|Description|Method|Endpoint|
|:---|:---|:---|
|Fetch|GET|`/`|
|Fetch full animals object |GET|`/`|
|Fetch specific animal info |GET|`/animals/name/:name`|
|Fetch group of specific type of animal |GET|`/animals/type/:type`|
|Fetch group of specific animal status | GET| `/animals/status/:status`|


## Expected Response Status Codes

|Class|Symbol|HTTP status code|
|:---|:---|:---|
|Success|:ok|200|
|Success|:created|201|
|Client Error|:bad_request|400|
|Client Error|:unauthorized|401|
|Server Error|:unprocessable_entity|500|


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

## Author
<div align="center">
<img src="https://user-images.githubusercontent.com/70416006/121233844-aff9e800-c858-11eb-99e4-d36b833d3fa9.png">
</div>
<div align="center">
<img src="https://user-images.githubusercontent.com/70416006/121235243-42e75200-c85a-11eb-967d-ea05dd5efe1f.png">
</div>

👤 &nbsp; **Omar Chávez**

- LinkedIn: [omarchavezgdv](https://www.linkedin.com/in/omarchavezgdv/)
- GitHub: [@omarchavez18](https://github.com/omarchavez18)


## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Microsoft Launch X Innovaccion Virtual
