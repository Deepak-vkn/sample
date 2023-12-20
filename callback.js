

function x(y){

 console.log("call from x")
    y()
}


x(function y(){
    console.log("call from y");
})