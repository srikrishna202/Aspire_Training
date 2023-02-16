//if..else:
const first = document.getElementById('oneTheater');
//console.log(first.textContent)
if(first.textContent === '' || first.textContent === undefined)
{
    first.textContent = "Movie is Not Contain"
}
else{
    first.addEventListener('click',()=>{
        first.textContent = "Movie list";
        //document.write("haii");
    })
}

//Switch Condition:
const card = document.getElementById('card');
const cardDiv = document.getElementById('carddiv');
card.addEventListener('change',cardSelection);
function cardSelection()
{
    const choose = card.value;
    switch(choose){
        case 'Debit Card':
        {
            if(cardDiv.hasChildNodes())
            {
                cardDiv.removeChild(cardDiv.lastChild);
            }
            const input = document.createElement('input');
            input.type = "text";
            input.className = "cards"
            input.placeholder = "Depit Card Number";
            cardDiv.appendChild(input);
           
            break;
        }
        case 'Credit Card':
        {
            if(cardDiv.hasChildNodes())
            {
                cardDiv.removeChild(cardDiv.lastChild);
            }
            const input = document.createElement('input');
            input.type = "text";
            input.className = "cards"
            input.placeholder = "Credit Card Number";
            cardDiv.appendChild(input);
            break;
        }
        // case '....Choose Card....':
        // {
        //     if(cardDiv.hasChildNodes())
        //     {
        //         cardDiv.removeChild(cardDiv.lastChild);
        //     }
            
        // }

    }

}
