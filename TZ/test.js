function searchValue () {
    const inputText = document.getElementById('inputText').value;
    let foundedValue;
    for (let i = 0; i < inputText.length; i++) {
        if (i === inputText.indexOf(inputText[i]) && i === inputText.lastIndexOf(inputText[i])) {
            foundedValue = inputText[i];
            break;
        } else {
            foundedValue = "не найдено.";
        }
    }
    return foundedValue;
}

function inputResult () {
    const inputText = document.getElementById('inputText').value;
    let result = "";
    for (let j = 0; j < inputText.length; j++) {
        if (searchValue () === inputText[j]) {
            result += '<span class="clr1">' + inputText[j] + '</span>'
        }
        else {
            result += '<span class="clr2">' + inputText[j] + '</span>'
        }
    }
    return result;
}

function progressBar () {
    document.getElementById('barProgress').style.visibility = 'visible';
    let bar = document.getElementById('progressBar');
    let status = document.getElementById('status');
    bar.value = 0;
    status.innerHTML = bar.value+"%";
    let searchedValue =  searchValue();
    let resulted =  inputResult ();
    let id = setInterval(frame, 1);
    function frame() {
        if (bar.value === 100) {
            clearInterval(id);
            status.innerHTML = "100%";
            let valueToFind = document.getElementById('valueToFind').innerHTML = 'Искомое значение: ' + searchedValue;
            let allText = document.getElementById('allText').innerHTML = 'Введеные символы: ' + resulted;
        } else {
            bar.value++;
            status.innerHTML = bar.value+"%";
        }
    }
}

function enterCheck(event) {
    let key = event.which || event.keyCode;
    if (key === 13) {
        emptyFormCheck ();
    }
}

function emptyFormCheck () {
    let emptyValue = document.getElementById('inputText').value;
    if (emptyValue === '') {
        alert("Вы забыли ввести текст.");
    }
    else {
        progressBar();
    }
}

document.getElementById('findButton').addEventListener('click', emptyFormCheck);
document.getElementById('inputText').addEventListener('keypress', enterCheck);
