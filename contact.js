
function myFunction() {
    document.getElementById("demo").innerHTML="(Your input has been submitted)"
    const form= document.querySelector("form");
    form.remove();
    const heading =document.querySelector("h1");
    heading.remove();
    document.querySelector("#demo1").remove();
}
