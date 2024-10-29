function myFunction() {
    a = document.getElementById("number").innerText;
    a = Number(a) + 1
    document.getElementById("number").innerHTML = a;
}