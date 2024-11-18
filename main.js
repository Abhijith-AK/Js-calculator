function displayContent(content) {
    screenc.value += content;
    console.log(content)
}

function clearScreen() {
    screenc.value = ''
}

function calc() {
    screenc.value = eval(screenc.value)
}

function removeLastDigit() {
    screenc.value = screenc.value.slice(0, -1)
}