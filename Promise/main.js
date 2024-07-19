let promise=new Promise(function(resolve,reject){
    console.log("Hello")
    resolve(65)
})
console.log("Hello 1")
setTimeout(function(){
    console.log("Hello 2")
},2000)
console.log("Hello 3")