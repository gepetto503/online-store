# OnlineStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Firebase Credentials

File with api keys is gitignored, you'll have to creat your own with your own credentials.  Here's how:

Make a free account at Firebase's website.

Once you've created an account, you should be taken to a user dashboard area, with an option to Create a New Project. Select this option, provide a name for your new project, and select your Country/region from the drop-down menu.

You'll then be taken to an "Overview" area. Where you'll be offered three options:

Add Firebase to your iOS app
Add Firebase to your Android app
Add Firebase to your web app
Select Add Firebase to your web app. Firebase should respond with a pop-up modal window. Keep the information in this modal handy, we'll use it in just a moment.

create file api-keys.ts in src/app/

place the information Firebase provided in that modal window in api-keys.ts, like this:

export var masterFirebaseConfig = {
  apiKey: "xxxxxxxxxx",
  authDomain: "xxxxxxxxxx",
  databaseURL: "https://xxxxxxxxxx.firebaseio.com",
  projectId: "xxxxxxxxxx",
  storageBucket: "xxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxx"
};

(If you've already signed up for firebase, find the modal info in overview --> add Firebase to your web app)
