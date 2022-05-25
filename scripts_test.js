
function checkDigits(str) { /*Текстовий рядок, що підлягає перевірці, передається в якості параметра функції*/ /*У циклі перевіряємо всі символи текстового рядка*/

   for (var i = 0; i < str.length; i++) {/*Якщо код символу є меншим за 48 або більшим за 57, то символ не є цифрою, оскільки символ “0” має код 48, символ 9 – код “57”, а коди всіх інших цифр розміщені в інтервалі (49;56)*/

      if (str.charCodeAt(i) < 47 || str.charCodeAt(i) > 57)

         return "This is not a number";

      /*Якщо хоч один із символів у рядку не є цифрою, то весь текстовий рядок не є представленням натурального числа, а тому повертаємо висновок, що це не число */

      return "This is a number"; /*Інакше повертаємо висновок, що у текстовому рядку записане число*/

   }
}

function checkNumber(x) {
   x = x.replace(',', '.');
   var x = Number(x);
   if (typeof x == 'number' && !isNaN(x)) {
      return "This is a number";
   } else {
      return "This is not a number";
   }
}

document.getElementById("digit_check_submit").addEventListener("click", function (event) {
   event.preventDefault();
   document.getElementById("digit_check_output").innerHTML = checkNumber(document.getElementById("digit_check").value);
});



function removeWhitespaces(x) {
   x = x.replace(/\s+/g, ' ').trim();
   return x
}


document.getElementById("rm_whitespaces_submit").addEventListener("click", function (event) {
   event.preventDefault();
   document.getElementById("rm_whitespaces_output").innerHTML = removeWhitespaces(document.getElementById("rm_whitespaces").value);
});



str = "Here may be your own text"; /*Задаємо текст біжучої стрічки */

function floatingText() {
   str = str.substring(1, str.length); /* “відщеплюємо” від текстового рядка перший символ*/

   if (str.length) { /* якщо в рядку ще є символи */

      res = setTimeout("floatingText()", 200); /* викликаємо метод setTimeout*/

   } else {

      clearTimeout(res); /* відміняємо дію методу setTimeout*/

      window.status = str; /* записуємо текстовий рядок у статус-стрічку */

   }

}


function checkEmail(str) { /*текстовий рядок, що підлягає перевірці, передаємо як параметр функції*/

   if (str.indexOf("@") == -1) /* Якщо символ “@” відсутній, то текстовий рядок явно не є представленням електронної адреси */

      return "E-mail was incorrect";

   if (str.indexOf("@") != str.lastIndexOf("@")) /*Якщо символ “@” зустрічається у текстовому рядку більше, ніж один раз, то текстовий рядок не є електронною адресою*/

      return "E-mail was incorrect";

   if (str.charAt(0) == "@" || str.charAt(str.length) == "@") /*Якщо символ “@” зустрічається на початку або в кінці текстового рядка, то рядок не є електронною адресою*/

      return "E-mail was incorrect";

   return "Need additional check"; /* Оскільки наразі не виявлено, що електронна адреса задана неправильно, то повертаємо значення "Потрібна додаткова перевірка" */

}


function validateEmail(email) {
   var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
   if (re.test(email)) {
      return "E-mail correct";
   } else {
      return "E-mail was incorrect";
   }
}


document.getElementById("email_check_submit").addEventListener("click", function (event) {
   event.preventDefault();
   document.getElementById("email_check_output").innerHTML = validateEmail(document.getElementById("email_check").value);
});



function showCurrentDateTime() {
   var today = new Date();
   alert("Today " + today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes());
}

document.getElementById("show_datetime").addEventListener("click", function (event) {
   showCurrentDateTime();
});


function showDateOfBirth() {
   var date = new Date('October 18, 2001');
   const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   var day = weekday[date.getDay()];
   alert("Born on " + day);
}

function showDateOfBirthAgo(years_ago) {
   var year = 2001 - years_ago
   var date = new Date('October 18, ' + year);
   const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   var day = weekday[date.getDay()];
   alert("Week day if born " + years_ago + " years ago: " + day);
}

document.getElementById("show_day_of_birth").addEventListener("click", function (event) {
   showDateOfBirth();
});

document.getElementById("show_day_of_birth10").addEventListener("click", function (event) {
   showDateOfBirthAgo(10);
});

document.getElementById("show_day_of_birth12").addEventListener("click", function (event) {
   showDateOfBirthAgo(12);
});

document.getElementById("show_day_of_birth25").addEventListener("click", function (event) {
   showDateOfBirthAgo(25);
});

document.getElementById("show_day_of_birth38").addEventListener("click", function (event) {
   showDateOfBirthAgo(38);
});



function showDateOfBirthIN3() {
   var current_year = new Date().getFullYear();
   var date = new Date('October 18, ' + current_year + 3);
   const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   var day = weekday[date.getDay()];
   alert("Week day of birthday in 3 years: " + day);
}


document.getElementById("show_day_of_birth_in3").addEventListener("click", function (event) {
   showDateOfBirthIN3();
});



function diff(start_h, start_m, end_h, end_m) {
   var startDate = new Date(0, 0, 0, start_h, start_m, 0);
   var endDate = new Date(0, 0, 0, end_h, end_m, 0);
   var diff = endDate.getTime() - startDate.getTime();
   var hours = Math.floor(diff / 1000 / 60 / 60);
   diff -= hours * 1000 * 60 * 60;
   var minutes = Math.floor(diff / 1000 / 60);

   return (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes;
}

document.getElementById("diff_time").addEventListener("click", function (event) {
   event.preventDefault();
   var start_h = document.getElementById("start_h").value;
   var start_m = document.getElementById("start_m").value;
   var end_h = document.getElementById("end_h").value;
   var end_m = document.getElementById("end_m").value;


   document.getElementById("diff_time_output").innerHTML = "Diff time: " + diff(start_h, start_m, end_h, end_m);
});



function birthDateSum(str) {
   const number = 18 + 10 + 2001
   if (str == 'b') {
      alert(number.toString(2));
   } else if (str == 'd') {
      alert(number);
   } else if (str == 'h') {
      alert(number.toString(16));
   }
}


document.getElementById("show_day_of_birth_sum_b").addEventListener("click", function (event) {
   birthDateSum("b");
});

document.getElementById("show_day_of_birth_sum_d").addEventListener("click", function (event) {
   birthDateSum("d");
});

document.getElementById("show_day_of_birth_sum_h").addEventListener("click", function (event) {
   birthDateSum("h");
});


function calcHypotenuse(cat1, cat2) {
   var hypot = Math.hypot(Number(cat1), Number(cat2)).toFixed(2);
   return hypot
}


document.getElementById("calc_hypotenuse").addEventListener("click", function (event) {
   event.preventDefault();
   cat1 = document.getElementById("cat1").value;
   cat2 = document.getElementById("cat2").value;
   document.getElementById("calc_hypotenuse_output").innerHTML = calcHypotenuse(cat1, cat2);
});
