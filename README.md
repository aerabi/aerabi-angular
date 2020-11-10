# Aerabi.com
![GitHub package.json version](https://img.shields.io/github/package-json/v/aerabi/aerabi-angular)

Personal homepage for Mohammad-Ali Aerabi/A'râbi.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.
Node v15.1.0, NPM v7.0.9, and TypeScript v4.0.5 were used to compile the code.

Icons used are from [www.flaticon.com](https://www.flaticon.com/).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build for GitHub pages

Run
```bash
ng build --prod --output-path docs --base-href /aerabi-angular/
cp docs/index.html docs/404.html
```
Commit the content of `docs` as regular files (not LFS).

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
