console.log('ciaooo');

// dichiarazione var
var elemento, elementotemp;

elemento = document.getElementById('mio-id');


// ciclo for per implementare lista


for (var i = 1; i <= 100; i++){

elementotemp = elemento.innerHTML;

  if (i % 3 == 0 && i % 5 == 0){



    console.log('FizzBuzz');
    elemento.innerHTML = elementotemp + "<li>" + 'FizzBuzz' + "</li>";

  }


  else if(i % 5 == 0 ){
    console.log('Buzz') ;
    elemento.innerHTML = elementotemp + "<li>" + 'Buzz' + "</li>";


  }

  else if (i % 3 == 0 ) {
    console.log('Fizz');
    elemento.innerHTML = elementotemp + "<li>" + 'Fizz' + "</li>";

  }


   else {
    console.log(i);
    elemento.innerHTML = elementotemp + "<li>" + i + "</li>";

   }

}
