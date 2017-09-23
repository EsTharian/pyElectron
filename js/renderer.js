const Remote = require("electron").remote;

let p = window.document.querySelector(".sizer");
let nav = window.document.querySelector("nav");

p.addEventListener('mousedown', initDrag, false);

let startX, startWidth;

function initDrag(e) {
    startX = e.clientX;
    startWidth = parseInt(window.document.defaultView.getComputedStyle(nav).width, 10);
    window.document.documentElement.addEventListener('mousemove', doDrag, false);
    window.document.documentElement.addEventListener('mouseup', stopDrag, false);
}

function doDrag(e) {
    nav.style.width = (startWidth + e.clientX - startX) + 'px';
    window.document.body.style.cursor = "ew-resize";
    window.document.body.style.userSelect = "none";
}

function stopDrag(e) {
    window.document.body.style.cursor = "";
    window.document.body.style.userSelect = "";
    window.document.documentElement.removeEventListener('mousemove', doDrag, false);
    window.document.documentElement.removeEventListener('mouseup', stopDrag, false);
}

window.document.querySelector(".closeButton").onclick = () => { if (process.platform !== 'darwin') {
    window.close();
}};

/*let maxButton = window.document.querySelector(".maxButton");
let fllButton = window.document.querySelector(".fllButton");

maxButton.onclick = () => { if (process.platform !== 'darwin') {
    maximizeToggle();
    maxResToggle(maxButton);
}};

fllButton.onclick = () => { if (process.platform !== 'darwin') {
    fullscreen();
    fllZipToggle(fllButton);
}};*/

window.document.querySelector(".minButton").onclick = () => { if (process.platform !== 'darwin') {
    minimize();
}};

/*function maximizeToggle() {
    let window = Remote.getCurrentWindow();
    if(!window.isMaximized()) {
        window.maximize();
    }

    else if (window.isMaximized()) {
        window.unmaximize();
    }
}

function fullscreen () {
    let window = Remote.getCurrentWindow();
    if(!window.isFullScreen()) {
        window.setFullScreen(true);
    }

    else if (window.isFullScreen()) {
        window.setFullScreen(false);
    }
}*/

function minimize() {
    let window = Remote.getCurrentWindow();
    window.minimize();
}

const zerorpc = require("zerorpc");
let client = new zerorpc.Client();
client.connect("tcp://127.0.0.1:4242");

/*let formula = document.querySelector('#formula');
let result = document.querySelector('#result');

formula.addEventListener('input', () => {
    client.invoke("calc", formula.value, (error, res) => {
        if (error) {
            console.error(error)
        } else {
            result.textContent = res
        }
    })
});*/

//formula.dispatchEvent(new Event('input'));

