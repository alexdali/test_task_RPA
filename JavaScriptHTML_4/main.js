/**
 * Улучшить форму контактных данных:
 * По нажатию на кнопку будет добавляться еще одно поле “Телефон N”
 * Кнопка “+” после добавления нового поля должна переместиться на позицию справа от нового поля
 */
const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const phone = document.getElementById('phone');
const comment = document.getElementById('comment');
const btnAddField = document.getElementById('addField');

// submit data form
form.addEventListener('submit', function(e) {
  e.preventDefault();
  let InputData = {
    ФИО: fullname.value,
    телефон: phone.value,
    комментарий: comment.value
  };
  fullname.value = '';
  phone.value = '';
  comment.value = '';

  alert(`${JSON.stringify(InputData)}`);
});

// add new field phone
let count = 1;
btnAddField.addEventListener('click', function(e) {
  e.preventDefault();
  let lastInputPhone;
  let lastPhoneCtrl;

  lastInputPhone = document.getElementById(`phone${count}`);
  lastPhoneCtrl = lastInputPhone.parentNode;

  count +=1;
  let templateControl = `
    <div class="control">
      <label for="phone${count}">Введите телефон № ${count}</label>
      <input type="text" id="phone${count}" placeholder="телефон ${count}" />
    </div>`

  lastPhoneCtrl.insertAdjacentHTML('afterend', templateControl);

  lastInputPhone = document.getElementById(`phone${count}`)
  if(lastInputPhone){
    lastPhoneCtrl = lastInputPhone.parentNode;
    lastPhoneCtrl.appendChild(btnAddField);
  }
});


