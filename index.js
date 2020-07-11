let progressBar = document.getElementById('progressBar');
var percent = document.getElementById('percent');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressBarHeight = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.height = progressBarHeight + "%";
    percent.innerHTML = "Page Scrolled: " + Math.round(progressBarHeight) + "%";
}