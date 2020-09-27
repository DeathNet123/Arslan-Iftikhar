var dar_checker = 0; //Variable checker for darkmode
var nav_checker = 0; // Variable checker for the navigation bar
var right_bar_checker = 0; //Variable checker for right bar
var skills_checker = 0;

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
        document.getElementById('short_bio').classList.remove('card_white');
        document.getElementById('short_bio').classList.add('card_black');
        document.getElementById('git').style.color = "#ffffff";
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
        document.getElementById('short_bio').classList.remove('card_black');
        document.getElementById('short_bio').classList.add('card_white');
        document.getElementById('git').style.color = "#000000";
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
function rightbar_appear()
{
    if(right_bar_checker == 0)
    {
        document.getElementById("rightbar").style.setProperty('right', "-19%");
        document.getElementById("rightbar").style.setProperty('animation-name', 'rightbar_appear');
        right_bar_checker = 1;
    }
    else if(right_bar_checker == 1)
    {
        console.log('ring');
        document.getElementById("rightbar").style.setProperty('right', "0.1%");
        document.getElementById("rightbar").style.setProperty('animation-name', 'rightbar_dappear');
        right_bar_checker = 0;
    }
}
function increase()
{
    document.getElementById('heck').value="70";   
}