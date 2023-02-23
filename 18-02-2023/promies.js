function fetchValue(){
    const value = "https://gist.githubusercontent.com/santiagoolivar2017/8e8d7075971821ff7b7ebf6601b09fbb/raw/9b52bdf4c4c3969d541b99c2e414cd3c0f698843/marvel.json";
    fetch(value)
    .then((result)=>{
        if(result.ok === false)
        {
            console.error("request is reject");
            
        }
        // console.log(result);
        return result.json();
    })
    .then((resultValue) => {
    console.log('res---',resultValue.children[0]);
    resultValue.children.map((res)=>console.log(res));
        // const newVar = JSON.parse(resultValue);
    // //const mapingValue = new Map(Object.entries(newVar));
    // console.log(newVar);
    // return resultValue.json();
    });
}



function main(){
    fetchValue();
}
main();

const promiseExample = new Promise((resolve, reject) => {
    // API call
    setTimeout(() => {
      resolve('success');
    }, 2000);
});
