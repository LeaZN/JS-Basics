function Remainder() {
    var a = document.getElementById("first_number").value;
    var b = document.getElementById("second_number").value;
    var remainder = parseInt(a) % parseInt(b);
    alert(remainder);
}