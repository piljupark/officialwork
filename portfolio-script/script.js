$(document).ready(function () { // 라이트&다크 모드
    document.getElementById('toggle').addEventListener('change', function() {
        var bodyElements = document.querySelectorAll('body');
        var txtElements = document.querySelectorAll('p');
        var boxElements = document.querySelectorAll('.box');

        if (this.checked) {
            bodyElements.forEach(function(element) {
                element.style.backgroundColor = '#1b1b1b'; // body 다크모드
            });
            boxElements.forEach(function(element) {
                element.style.backgroundColor = '#1b1b1b'; // box 다크모드
            });
            txtElements.forEach(function(element) { // 모든 p태그 다크모드
                element.style.color = 'rgba(151, 213, 255, 1)';
            })
        } else {
            bodyElements.forEach(function(element) {
                element.style.backgroundColor = ''; // body 라이트모드
            });
            boxElements.forEach(function(element) {
                element.style.backgroundColor = ''; // box 라이트모드
            });
            txtElements.forEach(function(element) { // 모든 p태그 다크모드
                element.style.color = '';
            })
        }
    });
});


function copyToClipboard() { // 이메일 주소 복사 스크립트
    var textToCopy = document.querySelector('.copy__Email').innerText;
    var tempInput = document.createElement("input");
    tempInput.setAttribute("value", textToCopy);
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Coppied");
}