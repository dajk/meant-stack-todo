[![Build Status](https://travis-ci.org/dajk/meant-stack-todo.svg?branch=master)](https://travis-ci.org/dajk/meant-stack-todo)
[![dependencies Status](https://david-dm.org/dajk/meant-stack-todo/status.svg)](https://david-dm.org/dajk/meant-stack-todo)
[![devDependencies Status](https://david-dm.org/dajk/meant-stack-todo/dev-status.svg)](https://david-dm.org/dajk/meant-stack-todo?type=dev)

This is full stack implementation of popular __mean__ stack technologies, the last __t__ is TypeScript.
Aplication is fully written with TypeScript and compiled to regular JS.

It includes:

- Reactive programming __redux-like__  structure with Angular 2 and ngrx/store
- MongoDB with MongooseJS
- Node.js and ExpressJS

### Installation  Guide

	1. git clone https://github.com/dajk/meant-stack-todo.git
	2. cd meant-stack-todo
	3. npm install
	4. npm i -g typings
	5. typings install

-

For development purposes, you should have to install MongoDB on your local machine and run it as first two steps in guide below.

### Dev Guide

	1. sudo mongod 	# 1st terminal to run the mongo server
	2. mongo 		# 2nd terminal to connect your own instance to mongo server
	3. npm start 	# 3th terminal to compile and watch all .ts files to .js and run the server (nodemon in our case)

Open [http://localhost:1337](http://localhost:1337) and you are ready to use. 

#### Note: After save you have to refresh the browser.
