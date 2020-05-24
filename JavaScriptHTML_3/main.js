const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const phone = document.getElementById('phone');
const comment = document.getElementById('comment');

// event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();
   alert(
     `ФИО: ${fullname.value},
      телефон: ${phone.value},
      комментарий: ${comment.value}`
   );
});


