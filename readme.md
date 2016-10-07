[![Build Status](https://travis-ci.org/dajk/MEAN2.svg?branch=master)](https://travis-ci.org/dajk/MEAN2)

This is full stack implementation of popular MEAN stack technologies.

It includes:

- Reactive programming __redux-like__ structure with Angular 2 and ngrx/store
- MongoDB with MongooseJS
- Node.js and ExpressJS

Aplication is fully written with TypeScript and compiled to regular JS. 

### Installation  Guide

	1. git clone https://github.com/dajk/MEAN2.git`
	2. cd MEAN2
	3. npm install
	4. npm i -g typings
	5. typings install

-

For development purposes, you should have to install MongoDB on your local machine and run it as first two steps in guide below.

### Dev Guide

	1. sudo mongod -> 1st terminal to run the mongo server
	2. mongo -> 2nd terminal to connect your own instance to mongo server
	3. npm run tsc:w -> 3rd terminal to compile all .ts files to .js
	4. npm start -> 4th terminal to run the server (nodemon in our case)

Open [http://localhost:1337](http://localhost:1337) and you are ready to use. 

#### Note: After save you have to refresh the browser.
