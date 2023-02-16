//const appendinput = document.querySelector('input');
// const upi = document.querySelector('#upi');
const upi = document.getElementById('upi');
upi.addEventListener('click',() => {
    const upiDiv = document.getElementById('upiDiv');
    if(upiDiv.hasChildNodes())
    {
        upiDiv.removeChild(upiDiv.lastChild);
    }
    const input = document.createElement('input');
    input.type = "text";
    input.placeholder = "UPI Id";
    upiDiv.appendChild(input);
});
const netbanking= document.getElementById('netbanking');
netbanking.addEventListener('click',() => {
    const netbankingDiv = document.getElementById('netbankingDiv');
    if(netbankingDiv.hasChildNodes())
    {
        netbankingDiv.removeChild(netbankingDiv.lastChild);
    }
    const input = document.createElement('input');
    input.type = "text";
    input.placeholder = "Net Banking";
    netbankingDiv.appendChild(input);
});
