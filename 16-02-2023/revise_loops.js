const changeValue = document.querySelector('#h5Tag');
const values = ["movie","movie ticket Booking","book my Movie"];
for(const x of values)
{
    setInterval(changetext,3000)
    function changetext(){
        changeValue.textContent = x;
    }
}