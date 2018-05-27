document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('resize', centerVertically);
    centerVertically();
}, false);

function centerVertically() {
    const elements = document.getElementsByClassName('centerVertically');
    
    for (let i=0; i<elements.length; i++) {
        const style = window.getComputedStyle(elements[i]);
        elements[i].style.marginTop = (-elements[i].clientHeight / 2) + "px";
        elements[i].style.marginLeft = (-elements[i].clientWidth / 2) + "px";
    }
}