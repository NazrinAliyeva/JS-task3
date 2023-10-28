//task4
let a=prompt("funksiyani daxil edin");
function Operation(operationsymbol){
    switch(a){
        case "+":
            console.log("+")
            break;
            case "-":
                console.log("-")
            break;
            case "*":
                console.log("*")
            break;
            case "/":
                console.log("/")
            break;
    }
   
}
Operation(a)
 //task6
let number =parseInt(prompt("Ededi daxil edin"));
function sadeEded(num){
        if(number==3|| number==2|| number==5||number==7){
            console.log('Sade ededdir')
      
        }
        else if(number%1==0 && number%number==0 &&number%2!==0 &&number%3!==0 &&number%4!==0  &&number%5!==0 &&number%6!==0 &&number%7!==0 &&number%8!==0 &&number%9!==0){
            console.log('Sade ededdir')}
    else{
        console.log("Sade eded deyil")
    }
}
sadeEded(number)

// task7-Ədədin faktorialını qaytaran funksiya yazın.

//task8
function powerAndnumber(number,power){
    let result=power;
    return result;
}
console.log(powerAndnumber(3,8))
// task9
let cem=0;
 function Toplama(numberOne,numberTwo){
 for(let i=numberOne+1; i<numberTwo;i++){
    cem +=i;
   }
let result=cem;
return result;
 }
console.log(Toplama(10,15))
// task10
let arr=[1,2,34,715,64]
function Maximum(number){
    let result=(Math.max(...arr))
    return result;
}
console.log(Maximum(arr))
