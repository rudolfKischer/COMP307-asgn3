let colorToggle = false;
let  prevColor = "";

//#49b19f



function changeColor(){
    
    let bannerStyle = document.getElementById('midBanner').style;
    let footerImage1 = document.getElementById("footerIconImage1");
    let footerImage2 = document.getElementById("footerIconImage2");
    let footerImage3 = document.getElementById("footerIconImage3");
    let logo = document.getElementById("logoImg");

    if(!colorToggle){
        prevColor = bannerStyle.background;
        bannerStyle.background = "#49b19f";
        colorToggle = true;
        footerImage1.src = "images/footerItem1Alt.jpg";
        footerImage2.src = "images/footerItem2Alt.jpg";
        footerImage3.src = "images/footerItem3Alt.jpg";

        logo.src = "images/LOGOAlt.png";

    }else{
        bannerStyle.background = prevColor;
        colorToggle = false;
        footerImage1.src = "images/footerItem1.jpg";
        footerImage2.src = "images/footerItem2.jpg";
        footerImage3.src = "images/footerItem3.jpg";
        logo.src = "images/LOGO.png";
    }
    
}

function demo() {
    window.location.assign("https://eyes.nasa.gov/apps/solar-system/#/home");
}


function main() {

}



document.getElementById('signUp').addEventListener('click', changeColor);

document.getElementById('demoButton').addEventListener('click', demo);
main();