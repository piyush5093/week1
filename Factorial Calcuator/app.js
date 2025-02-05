function fact(n){
    let fact=1;
    for(let i=n;i>0;i--){
        fact=fact*i;

    }
    return fact;

}
let ip=document.querySelector("input");
let p=document.querySelector("p");

let btn=document.querySelector("button");
btn.addEventListener("click",function(){

    console.log(fact(ip.value));
    p.innerText=`OUTPUT\n${fact(ip.value)}`
    ip.value="";


})