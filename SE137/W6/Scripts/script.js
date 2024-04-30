var buttons = document.querySelectorAll(`nav button`)

for(let i=0; i<buttons.length; i++)
{
    buttons[0].addEventListener(`click`, butts)
}
function butts(e)
{
    for(let i=0; i<buttons.length; i++)
    {
        buttons[i].classList.remove(`active`)
    }
    e.target.classList(`active`) 
    document.querySelector(`#breadcrumbs`).innerHTML = `<a href="#">${e.target.innerHTML}</a>`
}

var dropDownButton = document.querySelector(`aside button`)
dropDownButton.addEventListener(`click`, e=>{
    document.querySelector(`.tray`).toggle(`hide`);
})
