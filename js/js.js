//
var tabslide =Array.from(document.querySelectorAll('.slide'));
var nombredeslide=tabslide.length;
//console.log(nombredeslide);
//


var slideactuel = 1;
//
var slideprecedent =document.getElementById('nbrslideprecedent');
var slidesuivant =document.getElementById('nbrslidesuivant');
//
var nbrtotal1 = document.getElementById('nbrtotal1');
var nbrtotal2 = document.getElementById('nbrtotal2');
//
nbrtotal1.innerHTML = nombredeslide;
nbrtotal2.innerHTML = nombredeslide;

//next&&prev
var buttonnext = document.getElementById('next');
var buttonprev = document.getElementById('prev');
//event de button
checkout();
buttonnext.onclick = nextslide;
buttonprev.onclick = prevslide;
//console.log(slideactuel);
//function suivant

//
function nextslide(){
    
    if(slideactuel <= nombredeslide - 1){
        slideactuel++;
        //console.log(slideactuel);
    }
   else{
      buttonnext.className="disabled";
   }
   
    tabslide[slideactuel-2].style.opacity = 0;
     
   
   checkout();
}
//function precedent
function prevslide(){

    if(slideactuel > 1){
        slideactuel--;
        //console.log(slideactuel); 
    }
    else{
        buttonprev.className="disabled"
    }
        tabslide[slideactuel].style.opacity = 0;
    
    checkout();
}
// function qui check est que on doit retrne les button
function checkout(){
   // selectbaground();
    if(slideactuel > 2){
        buttonprev.className="prev";
    }
    if(slideactuel < nombredeslide-1){
        buttonnext.className="next";
    }
    //
    if(slideactuel == 1){
        document.getElementById('prev').style.opacity = 0;
    }
   else{
       document.getElementById('prev').style.removeProperty("opacity");
   }
   //
   if(slideactuel == nombredeslide){
    document.getElementById('next').style.opacity = 0;
   }
   else{
   document.getElementById('next').style.removeProperty("opacity");
   }
    //
    slidesuivant.innerHTML = slideactuel+1;
    slideprecedent.innerHTML = slideactuel-1;
    //
    afficheslidecorespont();
}
//
function afficheslidecorespont(){
   //tabslide[slideactuel].style.opacity = 0;
   tabslide[slideactuel-1].style.opacity = 1;
  // tabslide[slideactuel-2].style.opacity = 0;


}

var li =Array;
var tabli = Array();
//
var tabnav = Array.from(document.querySelectorAll('.nav-link'));
var nbrli = tabnav.length;
//console.log(nbrli);
for( var i=0 ; i<nbrli ; i++){
li[i] = "li"+i;
tabnav[i].onclick = selectpage;

//console.log(li[i]);
//console.log(tabli);
}
var opct =document.getElementById('down');
var  temp = window.getComputedStyle(opct).getPropertyValue("opacity");
    console.log(temp);

function selectpage( ){
    var i = tabnav.indexOf(this);

    if(i < 0 || i >= nombredeslide+1){
        opct.style.opacity = 0;
        alert("error this slides isn't exist ");
        temp =0;
    }
    else if(i == nombredeslide){
        console.log(temp);
        if(temp ){
        opct.style.opacity = 0;
        temp =0;
    }
        else{
            opct.style.opacity = 1;
            temp =1;
        }
    }
    else{
        opct.style.opacity = 0;
        tabslide[slideactuel-1].style.opacity = 0;
        slideactuel=i+1;
       // console.log(slideactuel);
        tabslide[i].style.opacity = 1;
   }
   checkout();
}
















var light =document.getElementById('light');
var dark = document.getElementById('Dark');
light.onclick =bglightcolor;
dark.onclick =bgdarkcolor;
var allspan =Array.from(document.querySelectorAll('.slides span'))
var nbrspan =allspan.length;
console.log(nbrspan);
function bglightcolor(){
    opct.style.opacity = 0;
    document.body.style.background = '#fff';
    for(i=0 ;i<nbrspan;i++){
    allspan[i].style.color = '#000'
}
}

function bgdarkcolor(){
    opct.style.opacity = 0;
    document.body.style.background = '#000';
    for(i=0 ;i<nbrspan;i++){
        allspan[i].style.color = '#fff'
    }
}















