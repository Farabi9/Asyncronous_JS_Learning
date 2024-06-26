let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let is_shop_open = !true;


// Async Await 

let toppinChoise = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Which toppins would you like to have?');
            resolve()
        },3000) 
    })
}

async function kithchen(){
    console.log('A');
    console.log('B');
    console.log('c');
    await toppinChoise();
    console.log('D')
    console.log('E')

}

kithchen();
console.log('Doing dishes')
    console.log('Ended')




// Promises 

// let order = (time, work) =>{

//   return new Promise((resolve, reject)=> {
//     if(is_shop_open){

//         setTimeout(()=>{
//             resolve( work ())
//         }, time)
        

//     }
//     else{
//         reject(console.log('Shop is closed'))
//     }
//   })

// }

// order(2000, ()=> console.log(`${stocks.Fruits[0]} is selected`))
// .then(()=>{
//     return order(2000, ()=>console.log('production has started')
// )})
// .catch(()=>console.log('Customer Left'))
// .finally(()=>console.log('great working'))
 



//  setTimeout Hell 

// let order = (Selected_Fruit, Call_Production ) =>{

//     setTimeout(()=>{
       
//         console.log(`${stocks.Fruits[Selected_Fruit]} was selected`);
//         Call_Production();
//     },2000)

   

// }

// let production =() =>{
//     setTimeout(()=>{
//         console.log('We got the fruit. Production is called');
//         setTimeout(()=>{
//             console.log('Fruit is cutting');
//             setTimeout(()=>{
//                 console.log(`${stocks.liquid[0]} & ${stocks.liquid[1]} is added`);
//                 setTimeout(()=>{
//                         console.log('Machine has been started');
//                         setTimeout(()=>{
//                             console.log(`${stocks.holder[2]} is selected as container`);
//                             setTimeout(() =>{
//                                 console.log(`${stocks.toppings[1]} is using as toppins`);
//                                 setTimeout(() =>{
//                                     console.log('Serving u the ice-cream')
//                                 },2000)
//                             },3000)
//                         },2000)
//                 },1000)
//             }, 1000)
//         },2000)
//     },0)
// }

// order(1, production)