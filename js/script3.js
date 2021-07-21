s = prompt("Введите слово или число");
function reverse(s){
    return s.split("").reverse().join("");
}
console.log(reverse(s));