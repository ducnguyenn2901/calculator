alert("Welcome to calculator")
function display(number){
    //+= : cộng với một giá trị nào đó và lấy kết quả tổng của 2 giá trị
    document.getElementById('result').value += number;
    return number;
}
function solve(){
    var a = document.getElementById('result').value;
    // eval: lấy kết quả của một string
    var b = eval(a);
    document.getElementById('result').value = b;
    return b;
}
function clearSCR(){
    document.getElementById('result').value = "";
}
