const taskContainerJS = document.getElementById('task-container');
const inputTaskJS = document.getElementById('input-task');
let writtenTaskJS = '';

taskContainerJS.addEventListener('submit', (event) => {
  event.preventDefault();
  if (inputTaskJS.value.trim() !== '') {
    writtenTaskJS = inputTaskJS.value;
    console.log(writtenTaskJS);
    inputTaskJS.value = '';
  }
});
