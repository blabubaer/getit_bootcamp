// controller
function chartClick(barNo) {
    if(chosenBar == barNo) {
        chosenBar = '';
    } else {
        chosenBar = barNo;
    } show();
}
// DELETE BAR ON GRAPH 
function deleteBar() {
    let p = chosenBar-1
    numbers.splice(p, 1)
    console.log(chosenBar)
    chosenBar = null
    show();
}
// CHANGE CHART BAR GRAPH VALUE
function change() {
    if (inputValue>0 && inputValue <=10) {
        numbers[chosenBar-1] = inputValue
    }
    else {
        alert("Please enter a number between 1 and 10") 
        return
    } show()
}

// ADD CHART BAR 
function addBar() {
    if(numbers.length == 10) {
        alert("To many bars. Only allowed is 10 bars");
    }
    if (inputValue > 0 && inputValue <= 10) {
        add = numbers.push(inputValue);
        add;
        console.log(add);
    } else {
        alert("Only numbers between 1 and 10");
    } 
    show();
}