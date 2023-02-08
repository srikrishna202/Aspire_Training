//JSON TO JAVASCRIPT
//cerate a json file
var str = '{"name":"sri"}'
//to convert json to string
var jsstring = JSON.parse(str);
//to acessing json file
document.write(jsstring.name);
//JAVASCRIPT TO JSON
//cerate a js object
const user = {
    fullname:"srikrishan"
};''
var jsonstring = JSON.stringify(user);
document.write(jsonstring);

//in json string how to get data using js object
//get the value by dot notation
var str1='{"name":"srikrishna D","age":20,"address":{"street name":"main st"}}';
var jsonstring1 = JSON.parse(str1);
document.write("<br>name: "+ jsonstring1.name);

//in valaues have space it could not be display and get error on console
//and when key is given an  number it's though  an error
//so we go to square []

document.write("<br> street: " + jsonstring1["address"]["street name"]);



