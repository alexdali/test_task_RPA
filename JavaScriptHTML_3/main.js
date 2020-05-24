/**
 * Построить web-форму для отправки контактных данных, состоящую из полей:
 * ФИО
 * Телефон
 * Комментарий
 */
const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const phone = document.getElementById('phone');
const comment = document.getElementById('comment');

// submit data form
form.addEventListener('submit', function(e) {
  e.preventDefault();
   alert(
     `ФИО: ${fullname.value},
      телефон: ${phone.value},
      комментарий: ${comment.value}`
   );
});


