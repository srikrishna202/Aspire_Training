
const person = [{fullname : "sri",age:10},{fullname : "krishna",age:11}];

const newarray = person.map(({fullname,age}) => ({[fullname] : age}))
console.log(newarray);

// const nonarray = {
//     lenght:2,
//     1:"1",
//     2:"2",
// };
// console.log(Array.prototype.map.call(nonarray,(values) => values));
//to change non-array to array
const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
  };
console.log(Array.prototype.map.call(arrayLike, (x) => x));
const savedData = ["haii"];
const link = new Request('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
//console.log(link);
fetch(link)
.then((response) => {
    //console.log(Response);
    const result = response;
    console.log(result);
    return response.json();
})
.then((data) => {
    for(i=0;i<data.length;i++)
    {
       
        savedData[i] = data[i].name;
        //console.log(saveddata[i]);
        const filteredValue = savedData.filter((x) => {
            if (x.length >= 10) {
                return true;
            } else {
                return false;
            }
        });
        function getdata()
        {
            console.log('s--',savedData);
            console.log('f--',filteredValue);
        }
    }
    getdata();
    
});
//console.log(saveddata[0].length);
//static v/s normal 
//Static:
/*
Static properties cannot be directly accessed on instances of the class. Instead, 
they're accessed on the class itself.
 */
class NewMethod{
    static numvalue = 10;
    static getmethod()
    {
        console.log("haii");
    }
}
NewMethod.getmethod();

//  const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// console.log(fetchPromise);