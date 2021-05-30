function Result() {
    var a = document.getElementById("shoe_size").value;
    var b = document.getElementById("year").value;
    var shoe2 = parseInt(a) * 2;
    var add5 = shoe2 + 5;
    var mult50 = add5 * 50;
    var subyear = mult50 - parseInt(b);
    var result = subyear + 1766;
    alert(result);
}