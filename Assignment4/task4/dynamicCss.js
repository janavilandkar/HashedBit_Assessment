// javascript code goes here
let element=document.getElementById('text-container');
function changeColor()
{
    let color=document.getElementById('colorbox').value;
    element.style.color=color;
}
function makeItalic()
{
    element.style.fontStyle=element.style.fontStyle==='italic'?'normal':'italic';
}
function makeUndeline()
{
    element.style.textDecoration=element.style.textDecoration==='underline'?'none':'underline';
}
function makeBold()
{
    element.style.fontWeight=element.style.fontWeight==='bold'?'normal':'bold';
}
function changeFontSize()
{
    let size=document.getElementById('fontsize').value;
    element.style.fontSize=size+'px';
}
function changeFontFamily()
{
    let font=document.getElementById('list').value;
    element.style.fontFamily=font;
}

function getStyle()
{
    let styles=[
        'color: '+element.style.color,
        'font-size: '+element.style.fontSize,
        'font-family: '+element.style.fontFamily,
        'text-decoration: '+element.style.textDecoration,
        'font-style: '+element.style.fontStyle,
        'font-weight: '+element.style.fontWeight
    ];
    document.getElementById('css-props').innerText=styles.join("; ");
}
