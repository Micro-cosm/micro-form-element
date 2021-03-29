# MicroFormElement
_A quickstart project that quickly/easily bootstraps a testable/deployable/runnable authenticated 
Angular micro-frontend(a.k.a. "**mife**", like "wife" :) that encourages rapid iteration and supports micro-cms content in the form of GraphQL datasources.
Because our of the shared common purpose, **we are quick to respond to your hackathon team needs... your win IS our win!**_

We value your perspective and invite you to participate regardless of skill-level.

----

**Caution:**  This project is heavily-opinionated with bias towards Nodejs(Typescript)/GoLang/Angular(CLI)/Google(GCP)/Kubernetes. 

A few goals of the overarching project:

- Run the latest lts node implementation
- Run the latest of angular cli
- Use `ng new <PROJECT NAME>` to create a new mife
- Use @angular/schematics wherever available to install libraries
- Use @angular/cli best practice and default libraries where conflicts with mife best practices are not present
- Use the latest library version of the most active project that serves the need
- All changes must pass 100% of available tests **with 90% coverage** before they can be accepted 
- Deployable and testable exclusively on GCP infrastructure using tools that optimize as such, and opting for support of other cloud-based infrastructures where practical. 
- Opt first for include and embrace anyone who wishes to participate, without judgement.

This project was initially generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3 and can be fully reproduced from scratch
by cloning micro-form-element and applying the following updates: 

###### Add Authentication:      [ngx-auth-firebaseui]() 

1. `npm i -s @angular/material @angular/cdk`
1. `npm i -s @angular/material @angular/cdk`
1. `npm i -s @angular/animations`
1. `npm i -s firebase @angular/fire`
1. `npm i -s material-design-icons`

Due to [this bug](https://github.com/AnthonyNahas/ngx-auth-firebaseui/pull/615) the schematic that is available for the [ngx-auth-firebaseui](https://ngx-auth-firebaseui.firebaseapp.com/getting-started)
repo dies in dependency hell. Until the bug is fixed you can recursively copy all subdirectories under **node_modules.tmp** directly into your node_modules directory and all should be right with the world.

#### Prefer eslint over tslint?
###### Install the Angular CLI and @angular-eslint/schematics globally however you want (e.g. npm, yarn, volta etc)
$ `npm i -g @angular/cli @angular-devkit/{core,schematics} @angular-eslint/schematics`

###### Create a new Angular CLI workspace using the @angular-eslint/schematics collection (instead of the default)
$ `ng new --collection=@angular-eslint/schematics`

----
# Quickstart

`vi .fd.<ROOT_DOMAIN>`  -- Update the first few variables to meet your needs

    Typically customized variables:
        FD_TARGET_LOCAL_PORT    -- the localhost port used for Docker mapping (s/b unique to mife realm and match npm start port))
        FD_NICKNAME             -- the base route for all requests(peferably relevant to service function)
        FD_TARGET_REALM         -- the subdomain that will serve the realm(must end with a dot)(appended to the root domain to form the auth realm)


Search/Replace all instances 'micro-form-element' with your repo name/project root directory name

`npm install`

`pu.sh --local`  -- You should be up and running locally at the link provided upon completion of deployment with a working Docker demo!

-- _OR_ --

`npm run start`  -- You should be up and running locally in development mode with watchers and hot reload awaiting your development!

Lastly, update this README with your relevant deets.

----
Todo

- Re-enable the CMS micro-service to serve arbitrary content from **micro-form-element**
----
# Angular Boilerplate Docs
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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
