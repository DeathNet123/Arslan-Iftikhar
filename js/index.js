var dar_checker = 0; //Variable checker for darkmode
var nav_checker = 0; // Variable checker for the navigation bar

function darkmode()
{
    if(dar_checker == 0)
    {
        document.getElementById("theme_img").src = "Icons/moon.svg";
        document.body.style.setProperty('--main-bg-color', "#000000");
        document.body.style.setProperty('color', "#ffffff");
        document.getElementById('skills').classList.remove('card_white');
        document.getElementById('skills').classList.add('card_black');
        document.getElementById('interest').classList.remove('card_white');
        document.getElementById('interest').classList.add('card_black');
        dar_checker++;
    }
    else if (dar_checker > 0)
    {
        document.getElementById("theme_img").src = "Icons/sun.svg";
        document.body.style.setProperty('--main-bg-color', "#ccc");
        document.body.style.setProperty('color', "#000000");
        document.getElementById('skills').classList.remove('card_black');
        document.getElementById('skills').classList.add('card_white');
        document.getElementById('interest').classList.remove('card_black');
        document.getElementById('interest').classList.add('card_white');
        dar_checker = 0;
    }
}
function slideapper()
{
    if(nav_checker == 0)
    {
        document.getElementById("sidebar").style.setProperty('left', "-40%");
        document.getElementById("sidebar").style.setProperty('animation-name', 'sidebar_appear');
        document.getElementById('nav_img').style.transform = "rotatez(720deg)";
        nav_checker++;
    }
    else if(nav_checker > 0)
    {
        document.getElementById('nav_img').style.transform = "rotatez(-720deg)";
        document.getElementById("sidebar").style.setProperty('left', "0");
        document.getElementById("sidebar").style.setProperty('animation-name', 'sidebar_dappear');
        nav_checker = 0;
    }
}
function increase()
{
    document.getElementById('heck').value="70";   
}