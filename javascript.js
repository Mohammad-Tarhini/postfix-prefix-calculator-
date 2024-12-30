
//*******boolans****** */
let is_postfix=false
let is_prefix=false
//***arrays */
let L1=[]
const operators=["+","-","*","/"]
//************************* */
const pcelements=document.querySelectorAll(".press")
//*********************************** */
const dark=document.getElementById("dark")
const light=document.getElementById("light")
const normal=document.getElementById("normal")
const big_container=document.getElementById("big_container")
const equal=document.getElementById("=")
const screen_input_prefix=document.getElementById("screen_prefix_input")
const screen_input_postfix=document.getElementById("screen_postfix_input")
const screen_output=document.getElementById("screen1")
const del=document.getElementById("del")
const rest=document.getElementById("rest")
const pre=document.getElementById("prefix")
const post=document.getElementById("postfix")
const step=document.getElementById("step")
const space=document.getElementById("space")
//*****functions******* */
function add_digit(d){
    if(is_postfix || is_prefix){
        if(L1.length==0){
            L1[0]=d
        }
        else{
        if(operators.includes(d) &( L1[L1.length-1].length !=0  )){
            L1.push(d)
        }
        else if(operators.includes(d) & L1[L1.length-1].length ==0){
            L1[L1.length-1]+=d
        }
        else if(!operators.includes(d)){     
              L1[L1.length-1]+=d
            
        }
        }
        if(is_postfix){
            screen_input_postfix.textContent =L1.join(" ")
        }
        else if(is_prefix){
            screen_input_prefix.textContent=L1.join(" ")
        }
            
             screen_output.textContent=""
             step.textContent=" entering success ....." 
        
    }   
   
    else{
        alert("please click on post  or pre")
    }

}
function funspace(){
    
     if(is_prefix || is_postfix){
        if(L1.length !=0 & L1[L1.length-1] !=""){
            L1.push("")
        }
        
    }
    else{
        alert("please click pre or post")
    }
}
function appear_answer(value)
{
    screen_output.textContent=value
}
function rest_click()
{
    screen_input_prefix.textContent="prefix_input:"
    screen_input_prefix.style.backgroundColor="white"
    screen_input_postfix.textContent="postfix_input:"
    screen_input_postfix.style.backgroundColor="white"
    screen_output.textContent="output:"
    post.style.backgroundColor="black"
    pre.style.backgroundColor="black"
    step.textContent="press on post or pre or input screens"

    is_postfix=false
    is_prefix=false
    L1=[]
   
}

function dele(){
    
    
    if(L1.length==0){

    }
    else{
    
     if(L1[L1.length-1].length<=1){
        L1.pop()
    }
    else{
        L1[L1.length-1]=L1[L1.length-1].slice(0,-1)
    }
    if(is_prefix){
        screen_input_prefix.textContent=L1.join("   ")
    }
    else if(is_postfix){
        screen_input_postfix.textContent=L1.join("   ")
    }
    screen_output.textContent=""
    step.textContent="delete last character"
}
}
function display_steps(){
    
}
function prefix_click()
{
    if(is_prefix)
    {

    }
    else
    {
    is_prefix=true
    is_postfix=false
    pre.style.backgroundColor="green"
    post.style.backgroundColor="black"
    screen_input_prefix.style.backgroundColor="green"
    screen_input_postfix.style.backgroundColor="white"
    screen_input_prefix.textContent="enter:"
    screen_input_postfix.textContent="postfix_input:"
    screen_output.textContent="output:"
    step.textContent="please enter  number or operator"
    L1=[]
    }
}
function postfix_click()
{
    if(is_postfix)
    {

    }
    else
    {
    is_postfix=true
    is_prefix=false
    post.style.backgroundColor="green"
    pre.style.backgroundColor="black"
    screen_input_prefix.style.backgroundColor="white"
    screen_input_postfix.style.backgroundColor="green"
    screen_input_postfix.textContent="enter:"
    screen_input_prefix.textContent="prefix_input:"
    screen_output.textContent="output:"
     step.textContent="please enter  number or operator"
    L1=[]
    }
}
function prefix(l)
{
    if(!isNaN(l[0]))
    {
        step.textContent="fix the error" 
        alert("definitly wrong , operator should be before numbers")    
         return ""
    }

    s=[]
    for(let i=l.length-1;i>=0;i--)
    {
        if(l[i]=="+" ||l[i]=="-" || l[i]=="*"||l[i]=="/")
        {
            if (s.length<2)
            {
                step.textContent="fix the error" 
                
                return"insufficient numbers after operator of index"+i
            }
           let v1=parseInt(s.pop());
           let v2=parseInt(s.pop());
           let result
           if (l[i]=="+")
              result=v2+v1
           else if(l[i]=="-")
              result=v1-v2
           else if(l[i]=="*")
              result=v1*v2
           else if(l[i]=="/")
           {
            if (v2==0)
            {
               step.textContent="fix the error"
               return "divisor is zero on operator at index"+i
            }
            result=v1/v2
           }
           s.push(result)
        }
        else{
            if(l[i] !=""){
                s.push(l[i])

            }
            

        }
        
            
    }
    
    if (s.length !== 1) 
    {
       step.textContent="fix the error"
       return "not balance"
    }
    return s.pop()
}
function postfix(l)
{
    if(l.length==1)
    {
        step.textContent="fix the error"   
        return "incomplete"
    }
  s=[]
  for(let i=0;i<l.length;i++)
   {
    if(l[i]=="+"|| l[i]=="-"|| l[i]=="*"||l[i]=="/")
    {   if (s.length<2)
        {
            step.textContent="fix the error"
            return  "error:insufficient numbers before operator at index"+i
        }
        let v2=parseInt(s.pop())
        let v1=parseInt(s.pop())
        let result
        if (l[i]=="+")
            result=v1+v2
        else if (l[i]=="-")
            result=v1-v2
        else if (l[i]=="*")
            result=v1*v2
        else if (l[i]=="/")
        {
            if(v2==0)
            {
                step.textContent="fix the error"
                return "error:divisor is zero on operator of index "+i
            }
            result=v1/v2
        }
           
        s.push(result)
    }
    else{
        if(l[i] !=""){
            s.push(l[i])

        }
        

    }
        
   }
    if (s.length !== 1) 
    {
        step.textContent="fix the error"
        return "error: not balance "
    }
    return s.pop() 
}   
    

function equal_click()
{
    if( is_prefix || is_postfix)
    {
        if(L1.length==0)
            alert("please enter numbers or operator")
        else
        {
            step.textContent="calculated....."
            let t=(is_postfix)?postfix(L1):prefix(L1)
            appear_answer(t)
           
            
        }
        
    }
   
    else
        alert(" press on pre and post or on input screens")
}
//******events ******** */

pcelements.forEach((element)=>element.addEventListener("click", function () {
    add_digit(element.id); 
}))
space.addEventListener("click",funspace)
del.addEventListener("click",dele)
post.addEventListener("click",postfix_click)
pre.addEventListener("click",prefix_click)
screen_input_postfix.addEventListener("click",postfix_click)
screen_input_prefix.addEventListener("click",prefix_click)
rest.addEventListener("click",rest_click)
equal.addEventListener("click",equal_click)
dark.addEventListener("click",
    function(){
    big_container.style.backgroundColor="rgb(35, 29, 29)"
    }
)
light.addEventListener("click",
    function(){
        big_container.style.backgroundColor="rgb(205, 195, 195)"
    }
)
normal.addEventListener("click",
    function(){
        big_container.style.backgroundColor="rgb(118, 98, 98)"
    }
)
