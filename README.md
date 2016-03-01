# OPEN

Angular2 and Electron app to manage OpenTheWindow games project.

## Instalation
To get started, clone the repo to your target directory. This app uses Webpack, and a few commands have been provided as scripts in `package.json`.

```bash
npm install

# To build only (this files are already uploaded in the repo so it is not needed unless you want to change some scripts)
npm run build

# Start the app in browser (http://localhost:3000/)
npm start

# Start the Electron app with ExpressJS server
npm run startWin
```

## Important Snippets

Electron can be used with any framework, so once all of the code needed to make Electron work is in place, we simply create the Angular 2 app as we would for the web.

The Electron configuration is contained in `./main.js`.
```js
// main.js
var app = require('app');
var expressServer = require('./Server');

// browser-window creates a native window
var BrowserWindow = require('browser-window');
var mainWindow = null;

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function () {
    // Initialize the window to our specified dimensions
    mainWindow = new BrowserWindow({ width: 1200, height: 900 });

    // Tell Electron where to load the entry point from
    mainWindow.loadURL('file://' + __dirname + '/index.html');
  
    // Clear out the main window when the app is closed
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});
```

The entry point for the app is the `./index.html` file.
```html
<!-- index.html -->
<body>
    <app></app>
    
    <script src="build/main-scripts.js"></script>
    <script src="build/common.js"></script>
    <script src="build/angular2.js"></script>
    <script src="build/app.js"></script>
    <script src="build/components.js"></script>
</body>
```
The Angular 2 app uses TypeScript and the Webpack configuration is set up to place the transpiled JavaScipt in the `build` directory.

Build exe file for this application
```bash
#install electron-packager globaly
npm install -g electron-packager

#buld application into win32 x64 exe file
electron-packager . OPEN --platform=win32 --arch=x64 --version=version=0.35.6
```