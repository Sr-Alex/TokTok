const showButton = document.querySelector("#showAll");
const list = document.querySelector("#accountList");
var showing;

function showingCheck()
{
    switch (showing) {
        case false:
            on();
            break;
    
        case true:
            off();
            break;
    };
};
function on()
{
    list.style.height = "fit-content";
    showButton.innerText = "Ver menos"
    showing = true;
};
function off()
{
    list.style.height = "200px";
    showButton.innerText = "Ver tudo"

    showing = false;
};

window.onload = ()=>
{
    showing = false;
};
showButton.onclick = ()=>
{
    showingCheck();
};