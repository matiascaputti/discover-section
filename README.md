# Reedsy - Discover Section

## 1) RUN APPLICATION

### Installing dependencies

    sudo npm install && bower install

### Preview client while developing

    grunt serve

### (optional) Build and minify client for production (it will create dist folder)

    grunt build


## 2) APPLICATION MODULARIZATION

Code Folder (root)
|
|--- app (this folder contains all Front End data)
|----|--- scripts
|----|----|--- app.js (this file contains definition of app master module, configurations and dependencies to other modules)
|----|----|--- modules (this folder contains other app modularization)
|----|----|----|--- books (module to show books list and detail)
|----|----|----|----|--- module.js
|----|----|----|----|--- services.js (functions to consume backend REST services -in this case consume book.json-)
|----|----|----|----|--- booksList.controller.js
|----|----|----|----|--- booksDetail.controller.js
|----|----|----|----|--- views
|----|----|----|----|----|--- list.html
|----|----|----|----|----|--- detail.html
|----|----|----|--- main (module to show main view and abstract view)
|----|----|----|----|--- module.js
|----|----|----|----|--- main.controller.js
|----|----|----|----|--- views
|----|----|----|----|----|--- abstract.html
|----|----|----|----|----|--- main.html
|----|--- templates (extra templates .html goes here. Footer, header and sidebar)
|----|----|--- mainHeader.html
|----|----|--- mainFooter.html
|----|--- styles (styles folder, contains main.scss that is compiled in main.css)
|----|----|--- main.scss
|----|--- images (images folder)
|----|--- book.json (books information file)
|----|--- 404.html (error file to being show when some resource is not found)
|----|--- favicon.ico (shortcut icon)
|----|--- robots.txt (robots file to avoid scrapping)
|----|--- index.html (index file with all the resources links)
|--- bower_components (this folder contains all bower packages)
|--- node_modules (this folder contains all javascript packages)
|--- bower.json (this file contains the name and version of all bower packages)
|--- package.json (this file contains the name and version of all javascript packages)
|--- Gruntfile.js (this file contains all the Grunt automatization configurations)
|--- README.txt (this files contains a report about all the work done and how to run the application)

![alt tag](http://i.imgur.com/vCYXQ84.png)
