let myArr=[23, 72, 35, 62, 75, 25]

let a=Number(prompt())
while(a !==0){
    if(myArr.includes(a)){
        console.log("Есть")
    }else{
        console.log("Нет")
    }
    a=Number(prompt())
}