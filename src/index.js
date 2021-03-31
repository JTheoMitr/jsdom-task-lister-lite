document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.querySelector('form');
  const inputTag = document.querySelector('input#new-task-description');
  

  form.addEventListener('submit', function(event){
    event.preventDefault();

    const inputValue = inputTag.value;

    const newLi = document.createElement('li');
    newLi.innerText = `${inputValue}            `;

    const newButton = document.createElement('button');
    newButton.innerText = " Delete "

    const ulTag = document.querySelector('ul#tasks');

      if (inputTag.value != '') {
        ulTag.append(newLi);
        newLi.append(newButton);
        inputTag.value = '';
      }
      else {
        inputTag.value = '';
      }

      newButton.addEventListener('click', function(event) {
        newLi.remove()
      } )


  })
});
