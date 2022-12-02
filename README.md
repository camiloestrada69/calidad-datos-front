# CALIDAD - MATCH DE DATOS

Angular 13 Admin & Dashboard Template
This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# SonarQube

## Generate directories coverage and reports
Verificar que la dependencia de karma-sonarqube-reporter de angular se encuentre instalada para poder generar la carpeta de reports donde se generaria un archivo con extensiòn xml con todos los test del proyecto y adicionar la configuraciòn corespondiente de la dependencia
ng test --no-watch --code-coverage

### Running sonar
npm run sonar

# Deploy Docker

## variable
export ANGULAR_ENV=qas

## install image
docker build -t calidad-datos -f devops/Dockerfile .

## Running container app
docker run -d -p 80:80 calidad-datos

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

