const znach = document.getElementById('znach');
const todo = document.getElementById('todo');
var znac;
var simvol = '';

function Poisk () 
{
	var inputText=document.getElementById('description').value;
	simvol = inputText;
	for(var i = 0; i < simvol.length; i++) {
		if(i==simvol.indexOf(simvol[i]) && i==simvol.lastIndexOf(simvol[i])){
			znac = simvol[i]
			console.log(simvol[i])
			break;
		} else {
			znac ='не найдено. '}	
	}		
	var result = '';
	for ( var j=0; j<simvol.length; j++) {
	if (znac===simvol[j]){
	result += '<span class="clr1">' +simvol[j]+'</span>'}
	else {
	result += '<span class="clr2">' +simvol[j]+'</span>'}
	}

znach.innerHTML = 'Искомое значение: ' + znac;
todo.innerHTML = 'Введеные символы: ' + result;
}

document.getElementById('addText').addEventListener("click", Poisk );



