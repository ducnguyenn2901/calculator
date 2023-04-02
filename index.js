alert("Powered by: Duc Nguyen")

var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
anime.timeline({ loop: true })
    .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
    })
    .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 200
    }).add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i + 1)
    }).add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });


function display(number) {
    //+= : cộng với một giá trị nào đó và lấy kết quả tổng của 2 giá trị
    document.getElementById('result').value += number;
    return number;
}
function solve() {
    var a = document.getElementById('result').value;
    // eval: lấy kết quả của một string
    var b = eval(a);
    document.getElementById('result').value = b;
    return b;
}
function clearSCR() {
    document.getElementById('result').value = "";
}
