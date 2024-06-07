//Como o Do While não é frequentemente usado seja criativo e crie um exemplo de uso para ele

let num = 100;
do{
    num -= Math.random() * (100-0)
    if(num>0){
        console.log(num)  
    }
 }while (num > 0)
console.log(num)
console.log('Num ficou menor que zero.')