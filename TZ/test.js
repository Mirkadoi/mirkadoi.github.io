function progressBar () {
    document.getElementById('barProgress').style.visibility = 'visible';
    const bar = document.getElementById('progressBar');
    const status = document.getElementById('status');
    bar.value = 0;
    let searchedValue =  searchValue();
    let resulted =  selectsValueInString ();
    status.innerHTML = `${bar.value}%`;
    let id = setInterval(frame, 1);
    function frame() {
        if (bar.value === 100) {
            clearInterval(id);
            status.innerHTML = '100%';
            writeSolution(searchedValue,resulted);
        } else {
            bar.value+=1;
            status.innerHTML = `${bar.value}%`;
        }
    }
}

function searchValue () {
    const inputText = document.getElementById('inputText').value;
    let searchArr = Array.from(inputText);
    let foundedValue = searchArr.find((el) => searchArr.indexOf(el) === searchArr.lastIndexOf(el));
    if ( !foundedValue ) {
        foundedValue = `не найдено.`;
    }
    return foundedValue;
}

function selectsValueInString () {
    const inputText = document.getElementById('inputText').value;
    let result = "";
    let fondedValue = searchValue();
    for(let value of inputText){
        if (fondedValue === value) {
            result += '<span class="clr1">' + value + '</span>'
        }
        else {
            result += '<span class="clr2">' + value + '</span>'
        }
    }
    return result;
}

function writeSolution(searchedValue,resulted) {
    let valueToFind = document.getElementById('valueToFind').innerHTML = `Искомое значение:  ${searchedValue}`;
    let allText = document.getElementById('allText').innerHTML = `Введеные символы:  ${resulted}`;
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
        alert(`Вы забыли ввести текст.`);
    }
    else {
        progressBar();
    }
}

document.getElementById('findButton').addEventListener('click', emptyFormCheck);
document.getElementById('inputText').addEventListener('keypress', enterCheck);
