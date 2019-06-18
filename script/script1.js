const ufo = document.querySelector("#ufo");

/* shake */
function shake() {
    ufo.classList.add("shake");
    setTimeout(function () {
        ufo.classList.remove("shake");
    }, 1000);
}

const bt = document.querySelector("#animateme");
bt.addEventListener('click', shake);
