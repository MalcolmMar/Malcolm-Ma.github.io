

function switch_dark(){
    var cc = document.body.className;
    if(cc.indexOf('darktheme') > -1) {
        document.body.className = cc.replace('darktheme','');
        localStorage.setItem("theme", "daytheme");
        console.log('daytheme switch');
    } else{
      document.body.className += "darktheme";
      localStorage.setItem("theme", "darktheme");
      console.log('darktheme switch');
    }
}
function ej_code_theme(){
    var cc = document.body.className;
    var theme = localStorage.getItem("theme");
    if(theme === "daytheme"){
        document.body.className = cc.replace('darktheme','');
        console.log('day theme');
    }else{
        document.body.className += "darktheme";
        console.log('dark theme');
    }
}