function hasClass(e, c) {
    if (e.classList) return e.classList.contains(c);
    else return !!e.className.match(new RegExp('(\\s|^)' + c + '(\\s|$)'))
}

function addClass(e, c) {
    if (e.classList) e.classList.add(c);
    else if (!hasClass(e, c)) e.className += " " + c
}

function removeClass(e, c) {
    if (e.classList) e.classList.remove(c);
    else if (hasClass(e, c)) {
        let r = new RegExp('(\\s|^)' + c + '(\\s|$)');
        e.className=e.className.replace(r, ' ')
    }
}

/*function maxResToggle(thi) {
    if(hasClass(thi, "maxButton")) {
        removeClass(thi, "maxButton");
        addClass(thi, "resButton");
    }
    else if(hasClass(thi, "resButton")) {
        removeClass(thi, "resButton");
        addClass(thi, "maxButton");
    }
}

function fllZipToggle(thi) {
    if(hasClass(thi, "fllButton")) {
        removeClass(thi, "fllButton");
        addClass(thi, "zipButton");
    }
    else if(hasClass(thi, "zipButton")) {
        removeClass(thi, "zipButton");
        addClass(thi, "fllButton");
    }
}*/