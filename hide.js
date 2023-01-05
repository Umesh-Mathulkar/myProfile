let names = document.getElementById("names")

function Hide(){
    document.getElementById("name").classList.add("hide");
    document.getElementById("unhide").classList.remove("opac");
    // let names = document.getElementById("names")
    document.getElementById("rname").innerHTML= `<h5>Hello ${names.value}</h5><h1>i'm <br>Umesh Mathulkar</h1>`    
};

names.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        event.preventDefault();
        document.getElementById("but").click();
    }
});