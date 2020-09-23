var dar_checker = 0; //Variable checker for darkmode
var nav_checker = 0; // Variable checker for the navigation bar

function darkmode()
{
    if(dar_checker == 0)
    {
        document.getElementById("theme_img").src = "Icons/moon.svg";
        document.body.style.setProperty('--main-bg-color', "#000000");
        document.body.style.setProperty('color', "#ffffff");
        dar_checker++;
    }
    else if (dar_checker > 0)
    {
        document.getElementById("theme_img").src = "Icons/sun.svg";
        document.body.style.setProperty('--main-bg-color', "#ccc");
        document.body.style.setProperty('color', "#000000");
        dar_checker = 0;
        console.log(dar_checker);
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