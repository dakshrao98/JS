//Primitive data type => 
    // 7 type : Strings , Number , Boolean , null , undefined , symbol , BigInt
// const score = 100 //number
// const name = "Daksh" //string
// const isLoggedIn = true //boolean
// const outsideTemp = null //null
// let insideTemp // undefined
// const id = Symbol("123")
// const id2 = Symbol("123")
// console.log(id , id2)
// console.log(id == id2) //symbol
// const bigNumber = 1243430123430213n; //bigInt


// reference type (Non primitive)
    // types : Objects , Array , functions

// const hero = ["test1", "test2" ,"test3" ] //array

// let myObject = {
//  name :"Daksh",
//  age:26
// }

// const func = function(){
//     console.log("Hey");
// }
// console.log(typeof func)



// ########## Memories ##########
//stack (Primitive) isme variable mill jata h , heap (Non primitive)isme reference milta h original value ka 

let myId = 1
let dakshId = myId
dakshId = 8
console.log(myId)
console.log(dakshId)

let userOne = {
    name: "Daksh",
    age : 26
}

let userTwo = userOne
userTwo.name = "test"
console.log(userOne.name)
console.log(userTwo.name)
