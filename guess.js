var guess = document.querySelector('button');
guess.addEventListener('click', show);
var price;

randomize();

function randomize()
{
price = Math.floor(Math.random()*100) + 1;
console.log(price);
}

var reset = document.querySelector('#reset');
reset.addEventListener('click', remove);

function remove()
{  
  var first = document.querySelector('#lowOrHi');
  first.textContent = '';
  var val = document.querySelector('#guessField');
  randomize();
  val.value = null;
}

function show()
{
    var val = document.querySelector('#guessField');
    var first = document.querySelector('#lowOrHi');
  
    if (val.value < price)
    {
       
       first.textContent= 'Its too low';

    }

    else if (val.value > price)
    {
      
        first.textContent = 'Its too High';
    }

    else{
      
        first.textContent = 'You won';
    }
    
}
