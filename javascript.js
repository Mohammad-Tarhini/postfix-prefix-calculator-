//****elements********** */
let plus=document.getElementById("+")
let minus=document.getElementById("-")
let times=document.getElementById("*")
let divide=document.getElementById("/")
let zero=document.getElementById("0")
let one=document.getElementById("1")
let two=document.getElementById("2")
let three=document.getElementById("3")
let four=document.getElementById("4")
let five=document.getElementById("5")
let six=document.getElementById("6")
let seven=document.getElementById("7")
let eight=document.getElementById("8")
let nine=document.getElementById("9")
let equal=document.getElementById("=")
let screen=document.getElementById("screen")
let del=document.getElementById("del")
let rest=document.getElementById("rest")
let pre=document.getElementById("prefix")
let post=document.getElementById("postfix")
//************************************** */
let is_postfix=false
let is_prefix=false
//************************* */
let L1=[]
let s=[]
let q=[]

 
//*****functions******* */
function appear_screan(a){
    
L1.push(a)
screen.textContent +=a+"  "
    


}
function rest_click(){
    screen.textContent=""
    post.style.backgroundColor="black"
    pre.style.backgroundColor="black"
    is_postfix=false
    is_prefix=false
    L1=[]
    
}
function dele(){
    L1.pop()
   screen.textContent= L1.join(" ")
    


}
function prefix_click(){
    is_prefix=true
    is_postfix=false
    pre.style.backgroundColor="green"
    post.style.backgroundColor="black"
}
function postfix_click(){
    is_postfix=true
    is_prefix=false
    post.style.backgroundColor="green"
    pre.style.backgroundColor="black"
    
}
function prefix(l){
    for(let i=L1.length-1;i>=0;i--){
        if(s[i]=="+")
    }         

}
function postfix(l){

}





//************** */
plus.addEventListener("click",function(){
appear_screan("+")
})
minus.addEventListener("click",function(){
    appear_screan("-")
    })
times.addEventListener("click",function(){
    appear_screan("*")
    })
divide.addEventListener("click",function(){
        appear_screan("/")
        })
zero.addEventListener("click",function(){
            appear_screan("0")})   
one.addEventListener("click",function(){
            appear_screan("1")
            })
two.addEventListener("click",function(){
                appear_screan("2")})
three.addEventListener("click",function(){
                    appear_screan("3")               
})                           
four.addEventListener("click",function(){
    appear_screan("4")})
five.addEventListener("click",function(){
        appear_screan("5")})  
six.addEventListener("click",function(){
            appear_screan("6")
}) 
seven.addEventListener("click",function(){
    appear_screan("7")
})
eight.addEventListener("click",function(){
    appear_screan("8")
}) 
nine.addEventListener("click",function(){
    appear_screan("9")
}) 
del.addEventListener("click",dele)
post.addEventListener("click",postfix_click)
pre.addEventListener("click",prefix_click)
rest.addEventListener("click",rest_click)