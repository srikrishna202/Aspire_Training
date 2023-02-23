const value = "https://gist.githubusercontent.com/santiagoolivar2017/8e8d7075971821ff7b7ebf6601b09fbb/raw/9b52bdf4c4c3969d541b99c2e414cd3c0f698843/marvel.json";
// const resolveVar = Promise.resolve(value);
// console.log(resolveVar);
// const RejectVar = Promise.reject(value);
// const RejectVar = 0;
// if(resolveVar === RejectVar){
//     console.error("Bad");
// }
// else{
//     resolveVar.then((content) => 
//     {
//         console.log(content)
//     })
// }
// fetch(value).then((next) => 
// {
    
//     MapingValue = JSON.parse(next);
//     console.log(MapingValue);
//     return next.json();
// });
fetch(value)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    const arrayValue = Array.prototype.map.call(data, ({key,value}) =>
    {
        console.log(key,value);
        return innerData;
    } );
    //console.log(ArrayValue);
    //console.log(data.children[0]);
// for (let i = 0; i < data.children.length; i++) {
//     //console.log(data.children[i])
//     for(let j=0;j<data.children.length;j++)
//     console.log(data.children[i].children[j].name)
// }
var i=0;
for(;i<data.children.length;i++)
{
    console.log(data.children[i].name);
    for(xVar of data.children[i].children)
    {
        console.log(xVar.hero + " - " + xVar.name);
    }
}
 //Array.prototype.flat.call(data);
});



