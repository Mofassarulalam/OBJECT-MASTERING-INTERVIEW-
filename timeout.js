function doSomething(){
    console.log(3333);
}
console.log(2222);
// option 1
// setTimeout(doSomething, 4000);


// option 2
// setTimeout(function(){
//     console.log('lazy and waiting')
// } ,4000);

// option 3
setTimeout(() =>{
    console.log('see you later')
} ,4000)

//set timeInterval repit again again 
setInterval(function() {
    console.log('doing it')
},1000)

console.log(4444);