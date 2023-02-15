function getInputFieldValue(id) {
    const inputField = document.getElementById(id);
    const inputString = inputField.value;
    const cost = parseInt(inputString);
    return cost;
}

function getInnerTextValue(id) {
    const inputField = document.getElementById(id);
    const inputString = inputField.innerText;
    const cost = parseInt(inputString);
    return cost;
}

