let myArray=[63, 25, 52, 26, 62, 92]
let a= Number(prompt())
while(a !==0){
    if(myArray.includes(a)){
        console.log("Yes")
    }else{
        console.log("No")
    }
    a=Number(prompt())
}



// while(a !==0{
//     let found=false
//     for(let i=0; i<myArray.length; i++){
//         if (a===myArray[i]){
//             found=false
//         }
//     }
//     if (found)console.log("Yes")
//     else console.log("No")
//     a= Number(prompt())
// }