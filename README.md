# Iron Source Home Assignment

Dan Beladev - danbeladev@gmail.com - *Home Assignment - Iron Source*

This application simulates two techniques of presenting information:
- Pagination table
- Infinite-Scroll table 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

In order to run the application you first need to build the docker image from within the project directory:
```
docker build -t iron-source-app .
```

Then, run the container (I used port 8080 but you can change it if needed):
```
docker run -p 8080:80 iron-source-app
```

You can access it from the browser via:
`http://localhost:8080` 

 
 ### Without Docker

 In order to run the application without Docker, directly on your host, you just need to run the following:
```
npm install
npm start
```
The client should now run locally on port 4200.
You can access it from the browser via: `http://localhost:4200`



### API
I used 'https://dummyapi.io/' api to display the required data.
This API contains an endpoint for user search by id, so in the search box the user should enter a specific Id of the user in order to make an ajax call and present the relevant user's information.

## Extras
- I added a toggle to the left menu which replaces themes using css variables.
- I Dockerized the application.
- I reduce the bundle size by building using `prod` mode in the Dockerfile.
- I used ViewEncapsulation to work with ShadowDom.
