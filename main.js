let celcius = document.getElementById("celcius");
let fahrenheit = document.getElementById("fahrenheit");

celcius.addEventListener("input", function() {
    if (celcius.value === "") {
        fahrenheit.value = "";
    } else {
        let cTemp = parseFloat(celcius.value);
        let fTemp = (cTemp * 9/5) + 32;
        fahrenheit.value = fTemp.toFixed(2);
    }
});

fahrenheit.addEventListener("input", function() {
    if (fahrenheit.value === "") {
        celcius.value = "";
    } else {
        let fTemp = parseFloat(fahrenheit.value);
        let cTemp = (fTemp - 32) * 5/9;
        celcius.value = cTemp.toFixed(2);
    }
});