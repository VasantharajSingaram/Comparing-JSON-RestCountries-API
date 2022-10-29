var obj1 = {
    name: "Person1",
    age: 5
}
var obj2 = {
    age: 5,
    name: "Person2"
}
//converting objects to JSON

var jObj1 = JSON.stringify(obj1);
var jObj2 = JSON.stringify(obj2);
console.log(jObj1 === jObj2); //false

if(obj1.name==obj2.name){
 console.log("Objects have same " + "Names: " + obj1.name + " " + obj2.name);
}else{
    console.log("Objects have different " + "Names: " + obj1.name + " & " + obj2.name);
}

if(obj1.age==obj2.age){
    console.log("Objects have same " + "Age: " + obj1.age + " & " + obj2.age);
   }else{
       console.log("Objects have different " + "Age: " + obj1.age + " & " + obj2.age);
   }

