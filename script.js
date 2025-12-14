function myFunction(){
    document.getElementById('icons').style.visibility= 'visible';


    
        document.getElementById("shareButton").src = "images/Path.png";
        document.getElementById("shareButton").style.backgroundColor="hsl(217, 19%, 35%)";
        document.getElementById("button").style.backgroundColor="hsl(217, 19%, 35%)";

        const mediaQuery = window.matchMedia('(max-width: 26.5625rem)');

        if (mediaQuery.matches) {
            document.getElementById("shareButton").src = "images/Path.png";
            document.getElementById("shareButton").style.backgroundColor="hsla(217, 19.10%, 34.90%, 0.35)";
            document.getElementById("shareIcon").style.visibility = 'visible';
        }
    
}