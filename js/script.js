
function newItem(){

    let li = $('<li></li>')
    let inputValue = $('#input').val();
    li.append(inputValue);
    
    if (inputValue === '') {
        alert("Please write something");
    } else {
         $('#list').append(li);
    }

function crossOut(){
    li.toggleClass("strike");
}
    li.on('dblclick', crossOut);

function deleteListItem(){
    li.addClass('delete');
}

let deleteButton = $('<button>X</button>');
li.append(deleteButton);
deleteButton.on('click', deleteListItem)

$('#list').sortable();

}
