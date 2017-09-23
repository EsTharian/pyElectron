const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

let mainWindow = null;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 768,
        /*webPreferences: {
            devTools: false
        },*/
        icon: path.join(__dirname, "")
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '../view/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.on('closed', () => {
        mainWindow = null
    })
};

app.on('ready', () => {
    createWindow();
    mainWindow.setFullScreen(true);
    createPyProc();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
        exitPyProc()
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
});

let pyProc = null;

const createPyProc = () => {
    let script = path.join(__dirname, '../py/api.py');
    pyProc = require('child_process').execFile('python', [script]);
    if (pyProc !== null) {
        console.log('child process success');
    }
};

const exitPyProc = () => {
    pyProc.kill();
    pyProc = null;
    if(pyProc === null) console.log("child process stopped")
};