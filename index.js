var progressFill = document.getElementById("progressFill");
var period = document.getElementById("period");

const duration = 25200; //in seconds

setInterval(function () {
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    var second = new Date().getSeconds();

    let total = (hour * 60 * 60 + minute * 60 + second) - (7 * 60 * 60 + 15 * 60);
    progressFill.style = "width: " + 100 * total / duration + "%;";
    progressFill.innerHTML = 100 * total / duration + "%";
}, 1000)