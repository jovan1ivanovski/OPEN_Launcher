# OPEN

OpenTheWindow games project.

1.  Angular2 
2.  Electron 
3.  Express (node backend server)
4.  Jasmine (unit tests) + Karma (test runner)
5.  Protractor (end to end testing)
6.  Webpack (script bundler)
7.  Gulp (task runner)

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

Electron can be used with any framework, so once Electron is set in place, we simply create the Angular 2 app as we would for the web.

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
</body>
```
The Angular 2 app uses TypeScript and the Webpack configuration is set up to place the transpiled JavaScipt in the `build` directory.

### Building the exe file using electron
To install electron-packager globally:
```bash
npm install electron-packager -g
```
To build application exe file for win32 x64 run the following command:
```bash
electron-packager . OPEN --platform=win32 --arch=x64 --version=version=0.36.9
```

## Testing

### Unit Tests
Jasmine with typescript are used for writing unit tests. 

Karma is used as a test runner. 

#### Unit test example
```js
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
describe('test', () => {
  it('test description', () => expect(true).toEqual(true));
});
```

#### Running unit tests
To start Karma running all unit tests use this command:
```bash
npm test
```

#### Configuration
Configuration file is `karma.conf.js`

Unit test files must be placed in `app/**/**/*spec.ts` (/app/*anyFolder*/*anyFolder*/*spec.ts).

#### Reports
Assuming the command "npm test" has been run, the folder `test_reports` is being created. 

That folder contains two additional folders `test_reports/coverage` where coverage results are, and `test_reports/html` where plain html report is stored. 

To view coverage results open `test_reports/coverage/index.html` in browser. To view test results open `test_reports/html/units.html` in browser.


### Protractor
#### Setup
Use npm to install Protractor globally with:
```bash
npm install -g protractor
```
This will install two command line tools, protractor and webdriver-manager. The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:
```bash
webdriver-manager update
```
Now start up a server with:
```bash
webdriver-manager start
```

#### Protractor example test
Example test file can be found at `./app/tests/e2e/example.js`
```js
describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('https://angularjs.org');

    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
});
```

#### Configuration
Configuration file is `protractor.conf.js`
Any protractor test file to be executed must be listed there in the specs array.

#### Running protractor
Assuming webdriver-manager is started in another terminal. Than run:
```bash
# "webdriver-manager start" has been executed and active in another terminal
npm run e2e
```