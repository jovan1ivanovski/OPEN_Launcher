# OPEN

Angular2 and Electron app to manage OpenTheWindow games project.

## Instalation
To get started, clone the repo to your target directory. This app uses Webpack, and a few commands have been provided as scripts in `package.json`.

```bash
npm install

# To build only
npm run build

# Start the app in browser (http://localhost:8000/)
npm start

# Start the Electron app
npm run startWin
```

## Important Snippets

Electron can be used with any framework, so once all of the code needed to make Electron work is in place, we simply create the Angular 2 app as we would for the web.

The Electron configuration is contained in `./main.js`.
```js
// main.js

var app = require('app');
console.log(__dirname);

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

    // Open the DevTools.
    //mainWindow.webContents.openDevTools();
  
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
        <div class="container-fluid">
            <app></app>
        </div>
        <script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>
        <script src="build/scripts.js"></script>
        <script src="build/common.js"></script>
        <script src="build/angular2.js"></script>
        <script src="build/app.js"></script>
        <script src="build/components.js"></script>
    </body>
```

The Angular 2 app uses TypeScript and the Webpack configuration is set up to place the transpiled JavaScipt in the `build` directory.