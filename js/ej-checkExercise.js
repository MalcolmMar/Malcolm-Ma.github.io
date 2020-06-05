function checkAns(answ){
    document.getElementById("ansBtn").innerText="Show Answer »";
    for(var i=0;i<answ.length;i++){
        var exId="ex"+(i+1);
        var textBuffer=document.getElementsByName(exId)[0].value;
        if(textBuffer==answ[i]){ //The answer is right
            document.getElementsByName(exId)[0].className="right-input";
            document.getElementsByName(exId)[0].setAttribute("placeholder","");
        }
        else{//The answer is wrong
            document.getElementsByName(exId)[0].className="wrong-input";
            document.getElementsByName(exId)[0].setAttribute("placeholder","");
        }
    }
}
function showAns(answ){
    console.log(answ);
    var ansButton=document.getElementById("ansBtn");
    if(ansButton.innerText=="Show Answer »"){
        ansButton.innerText = "Hide Answer »";
        for(var i=0;i<answ.length;i++) {
            var exId="ex"+(i+1);
            var textBuffer=document.getElementsByName(exId)[0].value;
            if (textBuffer != answ[i]) {//The answer is wrong
                document.getElementsByName(exId)[0].className = "ans";
                document.getElementsByName(exId)[0].value = "";
                document.getElementsByName(exId)[0].setAttribute("placeholder", answ[i]);
            }
            else {//The answer is right
                document.getElementsByName(exId)[0].className = "right-ans";
            }
        }
    }
    else{
        ansButton.innerText = "Show Answer »";
        for(var i=0;i<answ.length;i++) {
            var exId="ex"+(i+1);
            document.getElementsByName(exId)[0].className = "ans";
            document.getElementsByName(exId)[0].setAttribute("placeholder", "");
        }
    }
}