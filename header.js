function showPopup() {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup").style.opacity = "1";
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup").style.opacity = "0";
}
function showmega() {
    document.getElementById("megamenu").style.display = "block";
}

function closemega(){
    document.getElementById("megamenu").style.display = "none";
}
function addActive(){
    document.getElementById("megamenu").classList.add("active");
}
function removeActive(){
    document.getElementById("megamenu").classList.remove("active");
}
function showOne(){
    document.getElementById("one").style.display="flex";
    document.getElementById("two").style.display="none";
    document.getElementById("three").style.display="none";
    document.getElementById("four").style.display="none";
    document.getElementById("megaactive1").classList.add("active");
    document.getElementById("megaactive2").classList.remove("active");
    document.getElementById("megaactive3").classList.remove("active");
    document.getElementById("megaactive4").classList.remove("active");

}
function showtwo(){
    document.getElementById("two").style.display="flex";
    document.getElementById("one").style.display="none";
    document.getElementById("three").style.display="none";
    document.getElementById("four").style.display="none";
    document.getElementById("megaactive1").classList.remove("active");
    document.getElementById("megaactive2").classList.add("active");
    document.getElementById("megaactive3").classList.remove("active");
    document.getElementById("megaactive4").classList.remove("active");
}
function showthree(){
    document.getElementById("three").style.display="flex";
    document.getElementById("one").style.display="none";
    document.getElementById("two").style.display="none";
    document.getElementById("four").style.display="none";
    document.getElementById("megaactive1").classList.remove("active");
    document.getElementById("megaactive2").classList.remove("active");
    document.getElementById("megaactive3").classList.add("active");
    document.getElementById("megaactive4").classList.remove("active");
}
function showfour(){
    document.getElementById("four").style.display="flex";
    document.getElementById("three").style.display="none";
    document.getElementById("one").style.display="none";
    document.getElementById("two").style.display="none";
    document.getElementById("megaactive1").classList.remove("active");
    document.getElementById("megaactive2").classList.remove("active");
    document.getElementById("megaactive3").classList.remove("active");
    document.getElementById("megaactive4").classList.add("active");
}


function categoryone() {
    document.getElementById("cat1").style.display="flex";
    document.getElementById("cat2").style.display="none";
    document.getElementById("cat3").style.display="none";
    document.getElementById("cat4").style.display="none";
    document.getElementById("cat5").style.display="none";
    document.getElementById("cat6").style.display="none";
    document.getElementById("cat7").style.display="none";
    document.getElementById("cat8").style.display="none";
}
function categorytwo(){
    document.getElementById("cat1").style.display="none";
    document.getElementById("cat2").style.display="flex";
    document.getElementById("cat3").style.display="none";
    document.getElementById("cat4").style.display="none";
    document.getElementById("cat5").style.display="none";
    document.getElementById("cat6").style.display="none";
    document.getElementById("cat7").style.display="none";
    document.getElementById("cat8").style.display="none";
}
function categorythree(){
    document.getElementById("cat1").style.display="none";
    document.getElementById("cat2").style.display="none";
    document.getElementById("cat3").style.display="flex";
    document.getElementById("cat4").style.display="none";
    document.getElementById("cat5").style.display="none";
    document.getElementById("cat6").style.display="none";
    document.getElementById("cat7").style.display="none";
    document.getElementById("cat8").style.display="none";
}
function categoryfour(){
    document.getElementById("cat1").style.display="none";
    document.getElementById("cat2").style.display="none";
    document.getElementById("cat3").style.display="none";
    document.getElementById("cat4").style.display="flex";
    document.getElementById("cat5").style.display="none";
    document.getElementById("cat6").style.display="none";
    document.getElementById("cat7").style.display="none";
    document.getElementById("cat8").style.display="none";
}
function categoryfive(){
    document.getElementById("cat1").style.display="none";
    document.getElementById("cat2").style.display="none";
    document.getElementById("cat3").style.display="none";
    document.getElementById("cat4").style.display="none";
    document.getElementById("cat5").style.display="flex";
    document.getElementById("cat6").style.display="none";
    document.getElementById("cat7").style.display="none";
    document.getElementById("cat8").style.display="none";
}
function categorysix(){
    document.getElementById("cat1").style.display="none";
    document.getElementById("cat2").style.display="none";
    document.getElementById("cat3").style.display="none";
    document.getElementById("cat4").style.display="none";
    document.getElementById("cat5").style.display="none";
    document.getElementById("cat6").style.display="flex";
    document.getElementById("cat7").style.display="none";
    document.getElementById("cat8").style.display="none";
}
function categoryseven(){
    document.getElementById("cat1").style.display="none";
    document.getElementById("cat2").style.display="none";
    document.getElementById("cat3").style.display="none";
    document.getElementById("cat4").style.display="none";
    document.getElementById("cat5").style.display="none";
    document.getElementById("cat6").style.display="none";
    document.getElementById("cat7").style.display="flex";
    document.getElementById("cat8").style.display="none";
}
function categoryeight(){
    document.getElementById("cat1").style.display="none";
    document.getElementById("cat2").style.display="none";
    document.getElementById("cat3").style.display="none";
    document.getElementById("cat4").style.display="none";
    document.getElementById("cat5").style.display="none";
    document.getElementById("cat6").style.display="none";
    document.getElementById("cat7").style.display="none";
    document.getElementById("cat8").style.display="flex";
}