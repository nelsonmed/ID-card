function idCard(){
var firstName= document.getElementById("firstName").value;
var lastName= document.getElementById("lastName").value;
var address= document.getElementById("address").value;
var fullName= firstName+' '+lastName;

document.getElementById("postFullName").innerHTML= fullName;
document.getElementById("postAddress").innerHTML= address;

var age= parseInt(document.getElementById("age").value);
var phoneNumber= parseInt(document.getElementById("phoneNumber").value);
var emptyArray=[];
emptyArray.push(age);
emptyArray.push(phoneNumber);
for (var i=0; i<emptyArray.length; i++){
    if(emptyArray[i]<= 100){
       document.getElementById("postAge").innerHTML= "Age:" + age;
    } else if(emptyArray[i]>= 100){ document.getElementById("postPhoneNumber").innerHTML= "Phone Number:"+ phoneNumber;
    }
}
}
document.getElementById("button").addEventListener("click", function(idCard){
    event.preventDefault()
});
