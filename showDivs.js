function hideAllDivs() {
    let allDivs = document.querySelectorAll(".unhide");
    allDivs.forEach(div => {
        div.classList.toggle("unhide", false);
        div.classList.toggle("hide", true);
    });
}

function showDiv(divId) {
    hideAllDivs();
    let div = document.querySelector(`#${divId}`);

    div.classList.toggle("unhide", true);
    div.classList.toggle("hide", false);
}