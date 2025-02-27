function btnClick(n){
    let getInput = document.getElementById('inp')
    if (n == '+' || n == '-' || n == '/' || n == '*') {
        if (getInput.value.slice(-1) == '+' || getInput.value.slice(-1) == '-' || getInput.value.slice(-1) == '*' || getInput.value.slice(-1) == '/') {
            getInput.value = getInput.value.slice(0, -1) + n
        }
        else{
            getInput.value += n
        }
    }
    else{
        getInput.value += n
    }
}

function equalsTo(){
    let getInput = document.getElementById('inp')
    try {
        getInput.value = eval(getInput.value)
    } catch (error) {
        getInput.value = "Syntax Error"
    }

}

function allClear() {
    let getInput = document.getElementById('inp')
    getInput.value = ''
}

function Clear(){
    let getInput = document.getElementById('inp')
    if (getInput.value == "Syntax Error") {
        allClear()
    }
    getInput.value = getInput.value.slice(0, -1)
}

