// set up some function definitions to test

function func1 (v1, v2) {
    let sum= v1 +v2
    for (let i =0; i<3; i++)
    {
        sum++;
    }
    return sum;
}
function func2 (v1, v2) {
    let statemnet =""
    if (v1 === v2) {
        statemnet="damn"
    }
    else {
        statemnet ="darn"
    }
    return statemnet;
}
function func3 (v1, v2) {
    let statemnet =""
    if (v1 === v2) {
        statemnet="damn"
    }
    else {
        statemnet ="darn"
    }
    return statemnet;
}
function func4 (v1, v2) {
    console.log(v1, v2);
}

// call functions to test the debugger

func1 (1,2);
func2 (3,4);
func3 (5,6);
func4 (7,8);