// alert("this is working"); // just to make sure the import is working
if(localStorage.getItem('userName')){
    // if the user is loading for the first time
    let userName=localStorage.getItem("userName");
    let WelcomeTitle=document.getElementsByClassName("welcomeTitle")[0];
    WelcomeTitle.innerHTML="<h1> welcome to your page </h1>" + userName;
}
else{
    // if the user is a customer 
    let userName=prompt("pleas provide your name as a new user");
    localStorage.setItem("userName",userName);
    let welcomeTitle=document.getElementsByClassName("welcomeTitle")[0];
    welcomeTitle.innerHTML="<h1> welcome to your page </h1>" + userName;
}
let changeNameButton=document.getElementsByTagName("input")[0];
changeNameButton.onclick=function(){
    // if the user is changing his/her name
    userName=prompt("the new name pleas");
    localStorage.setItem("userName",userName);
    let WelcomeTitle=document.getElementsByClassName("welcomeTitle")[0];
    WelcomeTitle.innerHTML="<h1> welcome to your page </h1>" + userName;
}
let imageChanged=document.getElementsByClassName("imageSwitchContainer")[0];
// inttial image value is 
imageChanged.innerHTML="<img src='imageFiles/homeImage1.jpeg' width='100%'/>";
// onclick the ne wimage will be loaded 
imageChanged.onclick=function(){
    changeName();
}
function changeName(){
    image=imageChanged.getElementsByTagName("img")[0];
    imageSrcValue=image.getAttribute("src");
if(imageSrcValue == "imageFiles/homeImage1.jpeg")
{
    image.setAttribute("src","imageFiles/homeImage2.webp");
}
else if(imageSrcValue == "imageFiles/homeImage2.webp")
{
    image.setAttribute("src","imageFiles/homeImage3.jpg");
}
else if(imageSrcValue == "imageFiles/homeImage3.jpg")
{
    image.setAttribute("src","imageFiles/homeImage4.jpeg");
}
else {
    image.setAttribute("src","imageFiles/homeImage1.jpeg"); 
}
}

let backB=document.getElementsByClassName("back")[0].getElementsByTagName("img")[0];
let nextB=document.getElementsByClassName("next")[0].getElementsByTagName("img")[0];
nextB.onclick=changeFooterContent("this is next");
backB.onclick=changeFooterContent("this is back");
function changeFooterContent(vara){
alert(vara);
}