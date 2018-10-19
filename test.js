/* $('#add').click( function() {
   var Description = $('#description').val();
  if($("#description").val() == '') {
    $('#alert').html("<strong>Warning!</strong> You left the to-do empty");
    $('#alert').fadeIn().delay(1000).fadeOut();
    return false;
   }
   $('#todos').prepend("<li><input id='check' name='check' type='checkbox'/>" + Description + "</li>");
   $('#form')[0].reset();
   var todos = $('#todos').html();
   localStorage.setItem('todos', todos);
   return false;
});

if(localStorage.getItem('todos')) {
$('#todos').html(localStorage.getItem('todos'));
}

$('#clear').click( function() {
window.localStorage.clear();
location.reload();
return false;
}); */

const forma = document.querySelector('forma');;
const description = document.getElementById('description');
const add = document.getElementById('add');
const clear = document.getElementById('clear');
const todo = document.getElementById('todo');
const ul = document.querySelector('ul');
var itemsArray = localStorage.getItem('descriptions') ? JSON.parse(localStorage.getItem('descriptions')) : [];

localStorage.setItem('descriptions', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('descriptions'));

var liMaker = (text) => {
  var li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

add.onclick = function() {

    liMaker(description.value);
	itemsArray.push(description.value);
    localStorage.setItem('descriptions', JSON.stringify(itemsArray));
  }

clear.onclick = function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

data.forEach(description => {
  liMaker(description);
});
