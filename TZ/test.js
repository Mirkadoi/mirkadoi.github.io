var findValue = function SearchValue () {
    var inputText = document.getElementById('description').value;
    var element = '';
    element = inputText;
    for (var i = 0; i < element.length; i++) {
        if (i === element.indexOf(element[i]) && i === element.lastIndexOf(element[i])) {
            var searchValue = element[i];
            console.log(element[i]);
            break;
        } else {
            searchValue = 'не найдено. '
        }
    }
    var result = '';
    for (var j = 0; j < element.length; j++) {
        if (searchValue === element[j]) {
            result += '<span class="clr1">' + element[j] + '</span>'
        }
        else {
            result += '<span class="clr2">' + element[j] + '</span>'
        }
    }
    return [searchValue, result];
};

function ProgressBar () {
    document.getElementById('barProgress').style.visibility = 'visible';
    var bar = document.getElementById('progressBar');
    var status = document.getElementById('status');
    bar.value = 0;
    status.innerHTML = bar.value+"%";
    var findValueArr=findValue();
    var searchValue =  findValueArr[0];
    var result =  findValueArr[1];
    console.log(findValue[1]);
    var id = setInterval(frame, 1);
    function frame() {
        if (bar.value === 100) {
            clearInterval(id);
            status.innerHTML = "100%";
            var valueToFind = document.getElementById('valueToFind').innerHTML = 'Искомое значение: ' + searchValue;
            var todo = document.getElementById('todo').innerHTML = 'Введеные символы: ' + result;
        } else {
            bar.value++;
            status.innerHTML = bar.value+"%";
        }
    }
}


document.getElementById('addText').addEventListener("click", empty_form);


function empty_form ()
{
    var empty_value  = document.getElementById('description').value;
    if(empty_value === '')
    {
        alert('Вы забыли ввести текст.');
        return false;
    }
    else {
        ProgressBar();
        return true;}

}




