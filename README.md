# AngularHerokuTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

## Install node modules

Run `npm install or yarn install` for installing the project dependencies.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Login 

use `google@123456` password to view the message list screen.

## Load more messages on list page
 `swipe up!` to load more messages. Once scroll reach to the 80% hight of the div the app will automatically call the API and load more data on the UI.

 ## Infinite scroll
 I have used `ngx-infinite-scroll` to achieve the infinity scroll functionality. it will load only limited messages on the DOM at a time. So it's doesn't matter how many messages are there in the list. The DOM will have only few messages at a time shich is visible to user and it will load more once user scroll up or down. so no performance issue.


