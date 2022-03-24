let textbox = document.getElementById("textbox");

textbox.addEventListener("input", function() {

    let text = textbox.value;
    let char = text.length;


document.getElementById("char").innerHTML = char;


text = text.trim();
let word = text.split(" ");
let cleanlist = word.filter(function(ele) {
    return ele != "";
});
document.getElementById("word").innerHTML = cleanlist.length;
   
    




});







