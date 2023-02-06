const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);
//CONDITION STATEMENT
//if-else statement
function setWeather() {
  const choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}

//Switch Statement
const choice = select.value;
switch(choice)
{
    case 'sunny':
        console.log("to play");
        break;
    case 'rainy':
        console.log("don't play");
        break;
}

//ternary operator
const result = (choice === "sunny" || choice === 'overcast')
? console.log("to play outside") : console.log("do not play outside");

//looping  
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) {
  console.log(cat);
}

//MAP and FILTER are return a array
function toUpper(string) {
    return string.toUpperCase();
  }
  
  const upperCats = cats.map(toUpper);
  
  console.log(upperCats);

  function lCat(cat) {
    return cat.startsWith('L');
  }  
  const filtered = cats.filter(lCat);
  console.log(filtered);

//while 
while (i < cats.length) {
    if (i === cats.length - 1) {
      myFavoriteCats += `and ${cats[i]}.`;
    } else {
      myFavoriteCats += `${cats[i]}, `;
    }
}
//do-while
do {
    if (i === cats.length - 1) {
      myFavoriteCats += `and ${cats[i]}.`;
    } else {
      myFavoriteCats += `${cats[i]}, `;
    }
  
    i++;
  } while (i < cats.length);

  