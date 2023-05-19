
function buttonAlert(){
    document.getElementById("textid").style.fontSize = "24pt";
    }
    
function fancyRadio(){
    document.getElementById("textid").style.fontWeight= "bold";
    document.getElementById("textid").style.color= "blue";
    document.getElementById("textid").style.textDecoration= "underline";


}

function boringRadio(){
    document.getElementById("textid").style.fontWeight= "normal";
    document.getElementById("textid").style.color= "black";
    document.getElementById("textid").style.textDecoration= "none";

}

function buttonMoo(){
   document.getElementById("textid").style.textTransform = "uppercase";
   var string = document.getElementById("textid").value;
   var parts = string.split(".");
   string = parts.join("-Moo");
   document.getElementById("textid").value = string;
}