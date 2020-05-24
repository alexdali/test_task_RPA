/**
 * Реализовать механизм автоматического заполнения контактной формы.
 * Реализовать класс “Person”
 * Атрибуты: ФИО, Телефон, Комментарий
 * Метод “Send”
 * По нажатию на странице кнопки “Send”, контактная форма заполняется данными из атрибутов объекта класса Person и нажимается кнопка отправить (или вызывается функция отправки)
 */

class Person {
  constructor(fullname, phone, comment) {
    this.fullname = fullname;
    this.phone = phone;
    this.comment = comment;
  }

  Send(el) {
    let submitEvent = new Event('submit',{bubbles: true});
    el.dispatchEvent(submitEvent);
  };
}

const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const phone = document.getElementById('phone1');
const comment = document.getElementById('comment');
const btnAddField = document.getElementById('addField');
const btnSend = document.getElementById('sendBtn');


// submit data form
form.addEventListener('submit', function(e) {
  e.preventDefault();

  let InputData = {
    ФИО: fullname.value,
    телефон: phone.value,
    комментарий: comment.value
  };

  setTimeout(() => {
    fullname.value = '';
    phone.value = '';
    comment.value = '';
  }, 500);

  //alert(`${JSON.stringify(InputData)}`);
  console.log(`InputData: ${JSON.stringify(InputData)}`);
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


// create new object
let user = new Person("Иванов Иван Иванович", "+7 123 456 789", "комментарий");

// fill form fields and submit
btnSend.addEventListener('click', function(e) {
  e.preventDefault();

  fullname.value = user.fullname;
  phone.value = user.phone;
  comment.value = user.comment;

  user.Send(form);
});
