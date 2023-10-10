//Display
let count=1;
function dis(val) {
    document.getElementById("result").value += val;
};
//Clear Input Field
function clr() {
    document.getElementById("result").value = "";
};
//Solve 
function solve() {
    let input = document.getElementById("result").value;
    let output = math.evaluate(input);
    document.getElementById("result").value = output;
};
function bracket(){
    if (count==1){
        dis('(');
        count++;
    }
    else if(count==2){
        dis(')');
        count--;
    }
}
//function for key press
function func(event) {
    if (event.key == '1' || event.key == '2' ||
        event.key == '3' || event.key == '4' ||
        event.key == '5' || event.key == '6' ||
        event.key == '7' || event.key == '8' ||
        event.key == '9' || event.key == '0' ||
        event.key == '.' || event.key == '/' ||
        event.key == '+' || event.key == '-' ||
        event.key == '*')
        document.getElementById("result").value += event.key;

};
//ENTER to Solve
let cal = document.getElementById("calc");
cal.onkeyup = function (event) {
    if (event.which == 13) {
        console.log("Enter");
        let x = document.getElementById("result").value;
        console.log(x);
        solve();
    }
};
//Backspace
function backsp() {
    let bck = document.getElementById('result');
    bck.value = bck.value.slice(0, -1);
};
