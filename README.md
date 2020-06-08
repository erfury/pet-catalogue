# PetCatalogue

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.
Create an Angular application with a REST API backend. The backend server should be created with Maven and Java Spring Boot. The data should be stored in a H2 database. Please, seed the database with some data which can help demonstrate the following tasks! The client application should be written in Angular. Only Angular and Spring Boot Maven projects are accepted (like on the practice lessons). The deadline is strict, no late submissions are accepted! The tasks are similar to the example application created on the practice lessons, no other knowledge is necessary to solve them!

Create the following folder structure:

assignment2_neptun_id
    client
        package.json
        ...Angular app here...
    server
        pom.xml
        ...REST API here...
Before submission please delete the generated node_modules folder in the client folder and the target folder in the server folder, compress it into zip format, and upload to the Canvas LMS. For the Java part, if you are uncertain whether it will work on my machine or not, include a Dockerfile similarly to the first assignment.

The expected features of the tasks are a subset of the application that we worked with in our class. So feel free investigating the client and the server side of the example application. You can find them on Canvas/Files:

webeng-2019-20-2-2-java.zip (server)
IssueTracker-rest-without-auth.zip (server with only REST controllers, without API, this structure is recommended)
webeng2019202-angular.zip (client)
In the tasks every page should contain a navigation bar on the top and a route specific content. There is no need for authentication and authorization neither on the client side, nor on the server side.

Points and grades: 0-19: 1, 20-27: 2, 28-36: 3, 37-43: 4, 44-50: 5.

# The task
Pet catalogue

# Navigation bar In the navigation bar the following elements should take place: (5 points)

Brand or logo: clicking on it the application navigates to the main page
My pets: navigates to the Pets page
About: navigates to the About page
Main page The main page introduces the application with some static text and image. The only dynamic content is the number of living and already died pets (e.g. You have 5 pets. And you said goodbye to 2 pets.). (10 points)

# About The about page shows the details of the author of the application: name, neptun id, email address. (5 points)

# Pets The pets page shows the list of the pets in a table: name of the pet, the species, date of birth, date of death and a note. Above the list a “New pet” link directs to the Add page. Beside every row an “Edit” link directs to the Edit page. (10 points)

# Add new pet On this page you can add a new pet to the catalogue through a form: name of the pet, the species, date of birth and a note. After a successful save the page redirects to the Pets page. (10 points)

# Edit a pet entry On this page you can edit the selected pet through a prefilled form: name of the pet, the species, date of birth, date of death and a note. After a successful save the page redirects to the Pets page. (10 points)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
