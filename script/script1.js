const ufo = document.querySelector("#object");

/* move */
function move() {
    ufo.classList.toggle("move");
    setTimeout(function () {
        ufo.classList.remove("move");
    }, 5000);
}


const bt1 = document.querySelector("#bt1");
bt1.addEventListener('click', move);

/* jump once */
function jumponce() {
    ufo.classList.add("jump-once");
    setTimeout(function () {
        ufo.classList.remove("jump-once");
    }, 2000);
}

const bt2 = document.querySelector("#bt2");
bt2.addEventListener('click', jumponce);

/* jump */
function jump() {
    ufo.classList.toggle("jump");
    setTimeout(function () {
        ufo.classList.remove("jump");
    }, 5000);
}


const bt3 = document.querySelector("#bt3");
bt3.addEventListener('click', jump);

/* fade */
function fade() {
    ufo.classList.toggle("fade");
    setTimeout(function () {
        ufo.classList.remove("fade");
    }, 1000);
}


const bt4 = document.querySelector("#bt4");
bt4.addEventListener('click', fade);


/* falldown */
function falldown() {
    ufo.classList.toggle("falldown");
    setTimeout(function () {
        ufo.classList.remove("falldown");
    }, 1000);
}


const bt5 = document.querySelector("#bt5");
bt5.addEventListener('click', falldown);

/* shake */
function shake() {
    ufo.classList.add("shake");
    setTimeout(function () {
        ufo.classList.remove("shake");
    }, 1000);
}

const bt6 = document.querySelector("#bt6");
bt6.addEventListener('click', shake);

/* move to  */
function moveTo() {
    ufo.classList.add("moveTo");
    setTimeout(function () {
        ufo.classList.remove("moveTo");
    }, 500);
}

const bt7 = document.querySelector("#bt7");
bt7.addEventListener('click', moveTo);

/* fall-in */
function fallin() {
    ufo.classList.add("fallin");
    setTimeout(function () {
        ufo.classList.remove("fallin");
    }, 1000);
}

const bt8 = document.querySelector("#bt8");
bt8.addEventListener('click', fallin);

/* rotation */
function rotation() {
    ufo.classList.add("rotation");
    setTimeout(function () {
        ufo.classList.remove("rotation");
    }, 1000);
}

const bt9 = document.querySelector("#bt9");
bt9.addEventListener('click', rotation);

/* scale */
function scaling() {
    ufo.classList.add("scaling");
    setTimeout(function () {
        ufo.classList.remove("scaling");
    }, 1000);
}

const bt10 = document.querySelector("#bt10");
bt10.addEventListener('click', scaling);
