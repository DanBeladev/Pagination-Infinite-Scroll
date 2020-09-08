# Iron Source Home Assignment

Dan Beladev - danbeladev@gmail.com - *Home Assignment - Iron Source*

This app is written in Angular 9 and it simulates a two concepts for presenting a page that contains a lot of information:
pagination table and infinite scroll table

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Run the web-app repository from the `Pagination-Infinite-Scroll`: 'https://github.com/DanBeladev/Pagination-Infinite-Scroll'

```
npm install
npm start
```

The client should now run locally on port 4200.
You can access it from the browser via: `http://localhost:4200`



### API
I used 'https://dummyapi.io/' api to display the required data.
This API contains an endpoint for user search by id, so in the search box should to enter a specific Id of the user in order to make an ajax call and present the relevant user.

## Extras
- I added a toggle to the left menu which replaces themes using css variables.
- I used Docker to wrap the application.
- I used ViewEncapsulation to work with ShadowDom.

It was a challenging but very instructive task
