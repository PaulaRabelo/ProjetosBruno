function clickMenu() {
    if (nav.style.display == "block") {
        nav.style.display = "none"
    } else {
        nav.style.display = "block"
    }
}

function resize() {
    if (window.innerWidth >= 620) {
        nav.style.display = "block"
    } else {
        nav.style.display = "none"
    }
}