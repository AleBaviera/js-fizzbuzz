console.log('uè');

//
// Fizz Buzz test: Scrivi un programma che stampi i numeri da 1 a 100 ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Esattamente quelle devono essere le stringhe di output.
//
// *NOTE=* fate output in console -
// dichiaraz var


// ciclo da 1 a 100:

for (var i = 1; i <= 100; i++){

// console.log(i);
  // imposto condizione multiplo di 3 e stampo fizz

  if (i % 3 == 0 && i % 5 != 0){
    console.log('Fizz');


  }
  // imposto condizione multiplo di 5 e stampo buzz

  else if(i % 5 == 0 && i % 3 != 0){
    console.log('Buzz') ;


  }
  // se entrambe condizioni : fizz + buzz
  else if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
  }


  else if(i !== 'Fizz' || i !== 'Buzz' ||i !=='FizzBuzz'){
    console.log(i);

  }

}
