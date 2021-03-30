document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.querySelector('form');
  let inputTag = document.querySelector('input#new-task-description');

  form.addEventListener('submit', function(event){
    event.preventDefault();

    let inputValue = inputTag.value;

    let newLi = document.createElement('li');
    newLi.innerText = `${inputValue}            `;

    let newButton = document.createElement('button');
    newButton.innerText = " Delete "

    let ulTag = document.querySelector('ul#tasks');

      if (inputTag.value != '') {
        ulTag.append(newLi);
        newLi.append(newButton);
        inputTag.value = '';
      }
      else {
        inputTag.value = '';
      }


  })
});
