// JavaScript Document
<!--
// examines browser mouse click events
function click(evt)
{ // rationalise event syntax
var e=(evt)?evt :window.event;
var message="You cannot do that";
// test for IE
if(typeof e.which=="undefined")
{ // right click event
if(e.button==2)
{ 
return false;
// ---------
}
else
{ // other types of events

}
}
else
{ // for other browsers
if(e.which==3)
{ 
e.preventDefault();
e.stopPropagation();
return false;
// -----------
}
else
{ // other types of events
}
}
}
// ----------
function init()
{ document.onmousedown=click;
document.oncontextmenu=new Function("return false")
}
// -----------
window.onload=function (){ document.onmousedown=click; document.oncontextmenu=new Function("return false"); }

//-->