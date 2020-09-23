var dar_checker = 0;

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